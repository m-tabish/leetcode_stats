import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";


const Data = () => {
	const { entry, show, setShow } = useContext(UserContext);
	const [total, setTotal] = useState(null);
	const [easy, setEasy] = useState(0);
	const [medium, setMedium] = useState(0);
	const [hard, setHard] = useState(0);
	const apiUrl = `https://leetcode-stats-api.herokuapp.com/${entry}`;

	useEffect(() => {
		if (!entry) return;

		axios
			.get(apiUrl)
			.then((res) => {
				setTotal(res.data.totalSolved);
				setEasy(res.data.easySolved);
				setMedium(res.data.mediumSolved);
				setHard(res.data.hardSolved);
			 
			})
			.catch((error) => {
				console.error("Error showing data:", error);

			});
	}, [apiUrl, entry]);

	if (!entry) {
		return <div></div>;
	}

	if (total === 0) { 
		return <h1 className="text-5xl">Incorrect Username</h1>;
	}

	return (
		<div className=" w-3/4 text-center border-white border-2 rounded-3xl p-5">
			<div className="text-4xl  font-bold ">Problems Solved: {total} </div>

			<div className=" flex flex-col items-center justify-evenly  h-72 ">
				<div className="text-2xl font-bold flex gap-3 items-center">
					<div className=" w-4 h-4  bg-green-500 rounded-full"></div> Easy
					Solved : {easy}
				</div>
				<div className="text-2xl font-bold flex gap-3  items-center ">
					<div className=" w-4 h-4 bg-yellow-500 rounded-full"></div> Medium
					Solved: {medium}
				</div>
				<div className="text-2xl font-bold flex gap-3  items-center">
					<div className=" w-4 h-4 bg-red-500 rounded-full "></div>
					 Hard Solved:
					{hard}
				</div>
			</div>
		</div>
	);
};

export default Data;
