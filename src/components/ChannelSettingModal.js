import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import { blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modalSlice";
import { modalState } from "../features/modalSlice";

const ChannelSettingModal = ({ roomDetails }) => {
  const dispatch = useDispatch();

  const modalStates = useSelector(modalState);

  const handleClose = () => {
    dispatch(openModal(false));
  };

  const handleListItemClick = (value) => {
    console.log(value)
  };

  return (
    <Dialog onClose={handleClose} open={modalStates.openModal}>
      <DialogTitle>Members of this channel</DialogTitle>
      <List sx={{ pt: 0 }}>
        {roomDetails?.data().members.map((doc, id) => (
          <ListItem button key={id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }} size="small" src={doc.photoURL}>
              {doc.photoURL ? "" : doc.displayName?.charAt(0)?.toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              {doc.displayName}
            </ListItemText>
          </ListItem>
        ))}
        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default ChannelSettingModal;
