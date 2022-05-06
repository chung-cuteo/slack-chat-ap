import { useContext } from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import IconButton from "@mui/material/IconButton";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  
  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth);
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatarContainer>
          <HeaderAvatar alt={user?.displayName} src={user?.photoURL}>
            {user?.photoURL ? "" : user?.displayName?.charAt(0)?.toUpperCase()}
          </HeaderAvatar>
          <FiberManualRecordIcon className={user?.isOnline ? "online" : null} />
        </HeaderAvatarContainer>
        <h2>{user?.displayName}</h2>
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="search..." />
      </HeaderSearch>
      <HeaderRight>
        <IconButton aria-label="logout" onClick={handleLogOut}>
          <LogoutIcon />
        </IconButton>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: #3f0f40;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  h2 {
    font-size: 15px;
    font-weight: 700;
    margin-left: 20px;
  }
`;

const HeaderAvatarContainer = styled.div`
  position: relative;

  > .MuiAvatar-root {
    display: flex;
  }

  > .MuiSvgIcon-root {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 14px;
    color: gray;
    &.online {
      color: green;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;
  > .MuiButtonBase-root {
    margin-left: auto;
    margin-right: 20px;
    > .MuiSvgIcon-root {
      color: white;
    }
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  padding: 0 50px;
  color: gray;
  opacity: 1;
  border: 1px solid gray;
  border-radius: 6px;
  background-color: #421f44;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  :hover {
    opacity: 0.8;
  }
`;
