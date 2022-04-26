import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import CreateChannelModal from "./components/CreateChannelModal";

function App() {
  return (
    <div className="App">
      <Header />
      <AppBody>
        <Sidebar />
        <Chat />
      </AppBody>
      <CreateChannelModal/>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
