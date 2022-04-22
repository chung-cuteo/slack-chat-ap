import UserInfor from "../User/UserInfo";
import ChannelHeaderInfo from '../Channel/ChannelHeaderInfo'
import styled from 'styled-components';

const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  z-index:100;
  display: flex;
  width: 100%;
  height: 56px;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <UserInfor />
      <ChannelHeaderInfo />
    </HeaderStyled>
  );
}
export default Header;