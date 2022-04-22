import ChannelList from '../Channel/ChannelList';
import styled from 'styled-components';

const SidebarStyled = styled.div`
  position: fixed;
  top: 56px;
  background: #3f0e40;
  color: white;
  width: 230px;
  height: 100vh;

  .sidebar__content {
    max-height: 100%;
    overflow: auto;
  }
`;

const SideBar = () => {
  return (
    <SidebarStyled>
      <div className='sidebar__content'>
        <ChannelList />
      </div>
    </SidebarStyled>
  );
}

export default SideBar;