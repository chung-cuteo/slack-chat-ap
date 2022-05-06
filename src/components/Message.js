import React from "react";
import styled from "styled-components";
import { formatDate } from "../utilities/formatDate";
import { Avatar } from "@mui/material";

const Message = ({ message, createdAt, user, userImage }) => {
  return (
    <MessageContainer>
      <Avatar size="small" src={userImage}>
        {userImage ? "" : user?.charAt(0)?.toUpperCase()}
      </Avatar>
      <MessageInfo>
        <h4>
          {user}
          <span>{formatDate(createdAt?.seconds)}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  > .MuiAvatar-root {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 {
    display: flex;
    align-items: center;
  }

  > h4 > span {
    margin-left: 10px;
    font-weight: 400;
    font-size: 10px;
  }
  > p {
    margin-top: 3px;
    font-size: 14px;
    font-weight: 300;
  }
`;
