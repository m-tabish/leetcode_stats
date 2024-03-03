import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
const EnterName = () => {
	const [userName, setUserName] = useState("");
	const { entry, setEntry } = useContext(UserContext);
	const [display, setDisplay] = useState("show");


	const saveData = () => {

		if (userName !== null && userName !== '') { localStorage.setItem('prev', userName);; }
	}

	const handleClick = (e) => {
		if (entry !== null || entry !== "") {
			e.preventDefault();
			console.log(display, "e")
			if (e.target.value !== "" || undefined || null) { setDisplay("hidden"); }
			setEntry(userName);
			saveData();
			setDisplay("show");
		}

	};

	const pressedKey = (e) => {
		const key = e.key;
		if (key === "Enter") {
			if (userName !== null && userName !== "") {
				setDisplay("hidden");
				setEntry(userName);
				saveData();
			}
			console.log(display);
		}
	};

	const returnHome = () => {
		setDisplay("show")
		setUserName("");
		setEntry("");
	}
	return (
		<>
			<div className="   w-1/5 grid gap-3 justify-center items-center max-[700px]:w-3/4">
				<input
					type="text"
					placeholder="Enter username"
					value={userName}
					className="bg-gray-800 text-white w-full h-10 cursor-text border-2 border-white rounded-full outline-white  text-center placeholder:text-center max-[700px]:text-xm p-1"
					onChange={(e) => setUserName(e.target.value)}
					onKeyDown={pressedKey}
				/>

				{/* buttons */}
				<div className=" flex gap-3">
					<button
						type="button"
						className="border-2 border-white w-3/5 rounded-full max-[700px]:text-xm p-1"
						onClick={returnHome}>
						Home
					</button>

					<button
						type="button"
						className="border-2 border-white w-3/5 rounded-full max-[700px]:text-xm p-1"
						onClick={handleClick}
						onTouchStart={() => setEntry(localStorage.getItem("prev"))}
					>
						Submit
					</button></div>
			</div>

			{/* Recent */}
			{display === "show" && <div className={`flex flex-col ${display}`}>
				<p className={`max-[700px]:text-xl text-2xl text-center font-bold ${display}`}>Recent</p>
				<button onClick={() => { setDisplay("hidden"); setEntry(localStorage.getItem("prev")); }} className="p-1.5 rounded-full text-xs underline underline-offset-4 max-[700px]:text-xl" >
					<p className="border-white  max-[700px]:text-xl  text-2xl">{localStorage.getItem("prev")}</p>
				</button>
			</div>}
		</>
	);
};

export default EnterName;
