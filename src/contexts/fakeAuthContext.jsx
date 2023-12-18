import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const FAKE_USER = {
  name: "Altaf",
  email: "altaf192816@gmail.com",
  password: "192816",
  avatar: "https://scontent.fdel60-1.fna.fbcdn.net/v/t1.18169-9/19396663_555929908129486_6346421754506415295_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3sQkMPZMnWAAX8Ed2wQ&_nc_ht=scontent.fdel60-1.fna&oh=00_AfAdsCqOTnEeKJbWlIcMQeEkFs0BfRosYrwdvxc_-i9LDA&oe=65193F88",
};

const initialState = { user: null, isAuth: false };

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isAuth: true, user: action.payload };
    case "logout":
      return { ...state, isAuth: false, user: null };
    default:
      throw new Error("No action.type is matched");
  }
}

AuthProvider.propTypes = {
  children: PropTypes.any,
};

function AuthProvider({ children }) {
  const [{ user, isAuth }, dispatch] = useReducer(reducer, initialState);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context is use other than provider");
  return context;
}

export { useAuth, AuthProvider };
