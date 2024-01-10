import { useContext } from "react";

import UserContext from "../Context/UserContext";
function Heading() {
	const { entry } = useContext(UserContext);
	const apiUrl = `https://leetcode-stats-api.herokuapp.com/${entry}`;

	const ar = apiUrl.split("/");
	const heading = ar[3];

	if (!entry) {
		return <h1 className="text-5xl ">Enter Username</h1>;
	}
	return (
		<>
			<div>
				<div className=" text-5xl text-center font-bold  p-3 border-gray-100/30 border-1 rounded-xl ">
					<div className="opacity-100">
						{entry !== null ? `${entry}'s Leetcode Stats` : `Enter Name`}
					</div>
				</div>
			</div>
		</>
	);
}

export default Heading;
