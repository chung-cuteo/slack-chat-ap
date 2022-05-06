import styled from "styled-components";
import { useState,  useContext } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { Button } from "@mui/material";
import { AuthContext } from '../Context/AuthProvider';

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const {
    user: { uid, photoURL, displayName },
  } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    try {
      await addDoc(collection(db, "messages"), {
        message: message,
        uid,
        roomId: channelId,
        user: displayName,
        userImage:photoURL,
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.log(e);
    }
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    setMessage("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={`Message #${channelName}`}
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
    width: 73%;
    margin: 0 auto;
    border-radius: 3px;
    padding: 20px;
    outline: none;

    @media screen and (max-width: 1200px) {
      width: 60%;
    }
  }

  > form > button {
    display: none !important;
  }
`;
