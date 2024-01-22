import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
const EnterName = () => {
	const [userName, setUserName] = useState("");
	const { setEntry } = useContext(UserContext);

	const handleClick = (e) => {
		e.preventDefault();
		setEntry(userName);
	};
	const pressedKey = (e) => { 
		const key = e.key;
		if (key === "Enter") {
			setEntry(userName);
		}
	};

	return (
		<div className="w-1/5 flex justify-center items-center gap-2">
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
	);
};

export default EnterName;
