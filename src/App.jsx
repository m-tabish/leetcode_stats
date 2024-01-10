import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import LeftCol from "./components/Data";
import Heading from "./components/Heading";
import EnterName from "./components/InputName";
import ProfileLink from "./components/ProfileLink";
function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col w-full h-screen text-white  items-center justify-evenly font-mono overflow-hidden ">
        <Heading></Heading>
        <EnterName></EnterName>
        <LeftCol />
        <ProfileLink></ProfileLink>
      </div>
    </UserContextProvider>
  );
}

export default App;
