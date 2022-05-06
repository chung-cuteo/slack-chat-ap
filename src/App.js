import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config";
import Login from "./pages/Login";
import Home from "./pages/Home";

function ProtectedRoute({ component: Component, ...rest }) {
  const [user] = useAuthState(auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Navigate to="/Login" />
      }
    />
  );
}

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
