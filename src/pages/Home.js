import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import CreateChannelModal from "../modals/CreateChannelModal";
import styled from "styled-components";


const Home = () => {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Chat />
      </AppBody>
      <CreateChannelModal />
    </>
  );
};

export default Home;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

