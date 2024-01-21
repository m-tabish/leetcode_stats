import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [entry, setEntry] = useState(null);
  const [show, setShow] = useState(null);

  return (
    <UserContext.Provider value={{ entry, setEntry ,show, setShow}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
