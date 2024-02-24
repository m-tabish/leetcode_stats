import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
const EnterName = () => {
	const [userName, setUserName] = useState("");
	const { entry, setEntry } = useContext(UserContext);


	const setData = () => {
		if (userName !== null && userName !== '') { localStorage.setItem('prev', userName);; }
	}

	const handleClick = (e) => {
		if (entry !== null || "") {
			e.preventDefault();
			setEntry(userName);
			setData();
		}

	};
	const pressedKey = (e) => {
		const key = e.key;
		if (key === "Enter") {
			if (userName !== null && userName !== "") {
				setEntry(userName);
				setData();
			}
			else console.log("Empty")
		}
	};
	const returnHome = () => {
		setUserName("");
		setEntry("");
	}
	return (
		<>
			<div className="w-1/5 flex justify-center items-center gap-2">
				<button
					type="button"
					className="border-2 border-white w-2/5 rounded-full "
					onClick={returnHome}>
					Home
				</button>
				<input
					type="text"
					placeholder="Enter username"
					value={userName}
					className="bg-gray-800 text-white w-full h-10 cursor-text border-2 border-white rounded-full outline-white  text-center placeholder:text-center"

					onChange={(e) => setUserName(e.target.value)}
					onKeyDown={pressedKey}
				/>
				<button
					type="button"
					className="border-2 border-white w-2/5 rounded-full "
					onClick={handleClick}>
					Submit
				</button>
			</div>
			<div className={`flex flex-col`}>
				<p>Last Entered Name</p>
				<button onClick={() => setEntry(localStorage.getItem("prev"))} className="  border-white border-2 p-1.5 rounded-full text-xs" >
					<p className="border-white">{localStorage.getItem("prev")}
					</p>
				</button>
			</div>
		</>
	);
};

export default EnterName;
