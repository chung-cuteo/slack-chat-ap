import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import CreateChannelModal from "./components/CreateChannelModal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import Login from "./components/Login";

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Chat />
          </AppBody>
          <CreateChannelModal />
        </>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
