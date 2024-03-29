import { useContext } from "react";

import UserContext from "../Context/UserContext";

function Heading() {
  const { entry } = useContext(UserContext);

  if (!entry || entry === "") {
    return (
      <h1 className="text-5xl">
        &lt; <u>Welcome to Leetcode_stats</u> &gt;
      </h1>
    );
  }

  return (
    <>
      <div>
        <div className="text-5xl text-center font-bold p-3 border-gray-100/30 border-1 rounded-xl">
          <div className="opacity-100">
            {entry !== null ? `${entry}'s Leetcode Stats` : `Enter Name`}
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
