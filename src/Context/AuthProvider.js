import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import Loading from "../components/Loading";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscibed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL} = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
          isOnline:true
        });
        setIsLoading(false);
        navigate("/");
        return;
      }
      setUser({});
      setIsLoading(false);
      navigate("/login");
    });
    return () => {
      unsubscibed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
}
