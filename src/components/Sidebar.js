import { useContext, useMemo, useState } from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { AuthContext } from "../Context/AuthProvider";
import useFirestore from "../hooks/useFirestore";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [show, setshow] = useState(true);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: user.uid,
    };
  }, [user.uid]);

  const roomList = useFirestore("rooms", roomsCondition);
  const handleShowRoomList = (e) => {
    e.preventDefault();
    setshow((pre)=>!pre);
  };

  return (
    <SidebarContainer>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />

      <ChannelTitle onClick={handleShowRoomList}>
        {show ? (
          <ExpandMoreIcon fontSize="small" style={{ padding: 10 }} />
        ) : (
          <ExpandLessIcon fontSize="small" style={{ padding: 10 }} />
        )}
        <h3>Channels</h3>
      </ChannelTitle>

      {show && (
        <>
          {roomList?.map((room) => (
            <SidebarOption
              key={room.id}
              id={room.id}
              title={room.name}
              selectOption
            />
          ))}
        </>
      )}
      <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  flex: 0.3;
  margin-top: 60px;
  max-width: 260px;
  max-height: 100%;
  padding: 5px 0;
  overflow: auto;
  border-top: 1px solid #49274b;
  border-right: 1px solid #49274b;
`;

const ChannelTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 5px 0;
  cursor: pointer;
  border-top: 1px solid #49274b;
  border-bottom: 1px solid #49274b;
  transition: all 0.5s ease-in-out;

  :hover {
    opacity: 0.8;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }
`;
