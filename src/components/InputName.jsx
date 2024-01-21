import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";


const EnterName = () => {

	const [userName, setUserName] = useState("");
	const { entry, setEntry, show, setShow } = useContext(UserContext);

	var [prevEntry, setPrevEntry] = useState("");


	//saving to local storage-------------------

	window.onbeforeunload = function () {
		if (entry !== null) localStorage.setItem("prevEntry", entry);
		setPrevEntry(localStorage.getItem("prevEntry"));
	}

	window.onload = function () {
		var last = localStorage.getItem("prevEntry");
		if (last !== null) setPrevEntry(last);
	}

	//Functions--------------------------------- 
	const handleClick = (e) => {
		setEntry(userName);
		if (e.target.value === null) {
			console.log("null");
			returnHome();
		}
		if (e.target.value !== null) {
			console.log(e.target.value + "1");
			setEntry(userName);
			showPrevUser(0);
		}


	};

	const pressedKey = (e) => {

		const key = e.key;
		if (key === "Enter") {
			if (entry === null) {
				showPrevUser(1);

			}
			else {
				setEntry(userName);
				showPrevUser(0);
			}

		}
	};

	function showPrevUser(n) {
		if (n === 0) {
			document.getElementById("prevName").style.display = "none";

		}
		if (n === 1) {
			document.getElementById("prevName").style.display = "block";

		}

	}
	const addPrevUser = (e) => {
		if (e.target.value !== null) setPrevEntry(entry);
		showPrevUser(1);
	}
	const returnHome = () => {
		setEntry(null);
		showPrevUser(1);
	}
	//------------------------------------------


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
					placeholder="Enter Username"
					value={userName}
					className="bg-gray-800 text-white w-full h-10 cursor-text border-2 border-white rounded-full outline-white  text-center placeholder:text-center"
					onChange={(e) => { setUserName(e.target.value); }}

					onKeyDown={pressedKey}
				/>
				<button
					type="button"
					className="border-2 border-white w-2/5 rounded-full "
					onClick={handleClick}>
					Submit
				</button>
			</div>
			<div className=" prevName p-3 w-auto h-auto text-center text-xl flex justify-between items-center gap-7 " id="prevName" onClick={(e) => addPrevUser}><u>{prevEntry}</u>
				<button className="border-white border-2 w-10">
					X
				</button>
			</div>
		</>
	);
};

export default EnterName;



