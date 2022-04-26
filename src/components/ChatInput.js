import styled from "styled-components";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { Button } from "@mui/material";

const ChatInput = ({ channelName, channelId }) => {
  const [message, setMessage] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    try {
      await addDoc(collection(db, "rooms", channelId, "messages"), {
        message: message,
        timestamp: serverTimestamp(),
        user: "chung",
        userImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tiZfmRmstIZzpPNS-1KlSkyfDD2rMbbMiw&usqp=CAU",
      });
    } catch (e) {
      console.log(e);
    }
    setMessage("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message #ROOM`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    margin: 0 auto;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
