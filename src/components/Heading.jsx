import { useContext } from "react";

import UserContext from "../Context/UserContext";

function Heading() {
  const { entry } = useContext(UserContext);

  if (!entry || entry === "") {
    return (<>
      <h1 className=" max-[500px]:hidden text-5xl w-full text-center max-[700px]:text-4xl  ">
        &lt; <u>Welcome to Leetcode_stats</u> &gt;
      </h1>

      {/* for mobile */}
      <h1 className="text-4xl w-full text-center bold  ">
        &lt; <u>Leetcode_stats</u> &gt;
      </h1>
      </>
    );
  }

  return (
    <>
      <div className="">
        <div className="text-5xl text-center font-bold p-3 border-gray-100/30 border-1 rounded-xl  max-[700px]:text-4xl">
          <div className="opacity-100">
            {entry !== null ? `${entry}'s Leetcode Stats` : `Enter Name`}
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
