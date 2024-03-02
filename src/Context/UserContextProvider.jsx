import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [entry, setEntry] = useState(null); 
  return (
    <UserContext.Provider value={{ entry, setEntry }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
