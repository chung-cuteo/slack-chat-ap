import SideBar from '../SideBar';
import ChannelContent from '../Channel/ChannelContent';
import Header from '../Header';
import styled from 'styled-components';

const WrapContentStyled = styled.div`
  display:flex; 
  margin-top: 55px;
`;


export default function Home() {
  return (
    <>
      <Header />
      <WrapContentStyled>
        <SideBar />
        <ChannelContent />
      </WrapContentStyled>

    </>
  );
}
