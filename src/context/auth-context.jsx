import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getUser, updateUser } from "../services/user-service";
import * as auth from "../services/auth-services";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  function login(credentials) {
    return auth.login(credentials).then(setUser);
  }

  function logout() {
    auth.logout().then(() => {
      setUser(null);
      navigate("/");
    });
  }

  function signup(userData) {
    return createUser(userData).then(setUser);
  }

  function update(userData) {
    updateUser(userData).then(setUser).catch(console.log);
  }

  const value = {
    user,
    login,
    logout,
    signup,
    update,
    state,
    setState,
    navigate,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
