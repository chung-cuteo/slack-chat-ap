import { useEffect, useRef, useMemo } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ChatInput from "./ChatInput";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase/config";
import { doc } from "firebase/firestore";
import Message from "./Message";
import useFirestore from "../hooks/useFirestore";

const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));
  const roomUsers = roomDetails?.data().members

  const roomMessageCondition = useMemo(() => {
    return {
      fieldName: "roomId",
      operator: "==",
      compareValue: roomId,
    };
  }, [roomId]);

  const usersCondition = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: roomUsers,
    };
  }, []);

  const roomMembers = useFirestore("user", usersCondition);
  const roomMessage = useFirestore("messages", roomMessageCondition);
  
  console.log(usersCondition);

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId]);

  return (
    <ChatContainer>
      {roomDetails && roomMessage ? (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>
              <ExpandMoreIcon />
            </HeaderLeft>
            <HeaderRight>
              <AvatarGroup max={4}>
                {roomMembers?.map((member) => (
                  <Avatar
                    key={member.id}
                    sx={{ width: "25px", height: "25px" }}
                    alt={member.displayName}
                    src={member.photoURL}
                  >
                    {member?.photoURL
                      ? null
                      : member?.displayName?.charAt(0)?.toUpperCase()}
                  </Avatar>
                ))}
              </AvatarGroup>
            </HeaderRight>
          </Header>
          <ChatMessage>
            {roomMessage?.map((doc) => {
              return (
                <Message
                  key={doc.id}
                  message={doc.message}
                  createdAt={doc.createdAt}
                  user={doc.user}
                  userImage={doc.userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessage>
          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      ) : (
        <ChatNote>Please select or create channel chat </ChatNote>
      )}
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  position: relative;
  flex: 0.7;
  flex-grow: 1;
  margin-top: 60px;
  overflow-y: scroll;
  border-top: 1px solid #49274b;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #49274b;
  background-color: #3f0f40;
  z-index: 1;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > h4 {
    display: flex;
    text-transform: lowercase;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatMessage = styled.div`
  padding: 5px 20px;
`;

const ChatBottom = styled.div`
  padding-bottom: 100px;
`;

const ChatNote = styled.div`
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
