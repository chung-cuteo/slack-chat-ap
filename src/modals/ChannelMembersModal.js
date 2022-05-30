import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { openMemberModal } from "../features/modalSlice";
import { modalState } from "../features/modalSlice";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ChannelMembersModal = ({ roomMembers, roomId, roomDetails }) => {
  const [memberList, setMemberList] = useState([]);
  const modalStates = useSelector(modalState);
  const [members] = useCollection(collection(db, "user"));
  const dispatch = useDispatch();

  const memberNotInChannel = members?.docs
    ?.map((doc) => doc?.data())
    ?.filter(
      (member) => !roomMembers?.map((val) => val.uid).includes(member?.uid)
    );

  const handleClose = () => {
    dispatch(openMemberModal(false));
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMemberList(typeof value === "string" ? value.split(",") : value);
  };

  const inviteMember = async () => {
    const refUser = doc(db, "rooms", roomId);
    const memberUpdated = [...roomDetails?.data().members, ...memberList];
    await updateDoc(refUser, {
      members: memberUpdated,
    });
  };

  const deleteMember = async () => {
    console.log("delete");
  };

  return (
    <Dialog onClose={handleClose} open={modalStates.isShowMemberModal}>
      <DialogTitle sx={{textAlign: 'center'}}>Members</DialogTitle>
      {memberNotInChannel.length > 0 && (
        <InviteMember>
          <FormControl sx={{ m: 1, width: 300, mt: 2 }}>
            <InputLabel id="input-member">Add Members</InputLabel>
            <Select
              labelId="input-member-label"
              id="input-member"
              multiple
              displayEmpty
              value={memberList}
              onChange={handleChange}
              input={<OutlinedInput label="Add Members" />}
              MenuProps={MenuProps}
            >
              {memberNotInChannel?.map((member) => (
                <MenuItem key={member.uid} value={member.uid}>
                  {member.displayName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <IconButton aria-label="add" onClick={inviteMember}>
            <AddIcon />
          </IconButton>
        </InviteMember>
      )}
      <DialogTitle>Members of this channel</DialogTitle>
      <List sx={{ pt: 0 }}>
        {roomMembers?.map((member) => (
          <ListItem button key={member.uid}>
            <ListItemAvatar>
              <Avatar
                sx={{ bgcolor: blue[100], color: blue[600] }}
                size="small"
                src={member.photoURL}
              >
                {member.photoURL
                  ? ""
                  : member.displayName?.charAt(0)?.toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText>{member.displayName}</ListItemText>
            <IconButton aria-label="delete" onClick={deleteMember}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <DialogActions>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default ChannelMembersModal;

const InviteMember = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 24px;
`;
