import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [entry, setEntry] = useState(null);
  const [fetch, setFetch] = useState(null);

  return (
    <UserContext.Provider value={{ entry, setEntry ,fetch, setFetch}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
