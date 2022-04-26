import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { addChannel, openModal } from "../features/modalSlice";
import { modalState } from "../features/modalSlice";
import { useState } from "react";

const CreateChannelModal = () => {
  const modalStates = useSelector(modalState);
  const dispatch = useDispatch();
  const [channel, setChannel] = useState({
    name: "",
    desc: "",
  });

  const handleClose = () => {
    dispatch(openModal(false));
  };

  const handleChange = (e) => {
    setChannel({ ...channel, [e.target.id]: e.target.value });
  };

  const handleAddIput = () => {
    dispatch(addChannel({ channel }));
    setChannel({
      name: "",
      desc: "",
    });
    dispatch(openModal(false));
  };

  return (
    <div>
      <Dialog open={modalStates.openModal} onClose={handleClose}>
        <DialogTitle>Create a channel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Channels are where your team communicates. They’re best when
            organized around a topic — #marketing, for example.
          </DialogContentText>
          <TextField
            value={channel.name}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            placeholder="e.g plan-buget"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            value={channel.desc}
            autoFocus
            margin="dense"
            id="desc"
            label="Description (optional)"
            type="text"
            fullWidth
            variant="standard"
            helperText="What’s this channel about?"
            sx={{ mt: 2 }}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddIput}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateChannelModal;
