import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";


const EnterName = () => {

	const [userName, setUserName] = useState("");
	const { entry, setEntry, show, setShow } = useContext(UserContext);

	var [currEntry, setCurrEntry] = useState("");
	var [prevUser_array, setPrevUser_array] = useState([]);


	//saving to local storage-------------------
	// before reload
	useEffect(() => {
		window.onbeforeunload = () => {
			var prevUsers_before = localStorage.setItem("prevUsers", JSON.stringify(prevUser_array));
		}

	}, []);



	window.onbeforeunload = function () {
		if (entry !== null) localStorage.setItem("currEntry", entry);
		setCurrEntry(localStorage.getItem("currEntry"));
	}

	window.onload = function () { 
		var last = localStorage.getItem("currEntry");
		if (last !== null) setCurrEntry(last);
	}

	//Functions--------------------------------- 
	const handleClick = () => {
		if (userName === "") {
			console.log("null");
			returnHome();
		}
		if (userName !== "") {
			setPrevUser_array([...prevUser_array, userName]);
			setEntry(userName);
			setCurrEntry(userName);
			console.log(prevUser_array);
			console.log(userName);
			showPrevUser(0);
		}
	};

	const pressedKey = (key) => {
		if (key === "Enter") {
			if (userName === null) {
				showPrevUser(1);

			}
			else {
				setEntry(userName);
				showPrevUser(0);
			}
		}
	};

	function showPrevUser(n = 1) {
		if (n === 0) {
			document.getElementById("prevName").style.display = "none";

		}
		if (n === 1) {
			document.getElementById("prevName").style.display = "block";

		}

	}
	const addPrevUser = (e) => {
		if (e.target.value !== null) setCurrEntry(entry);
		showPrevUser(1);
	}
	const returnHome = () => {
		showPrevUser(1);
		setEntry("");
	}
	const clearStorage = () => {
		localStorage.clear();
	}
	//------------------------------------------


	return (
		<>
			<div className="w-2/5 flex justify-center items-center gap-2 border-2 border-white p-10 ">
				<button
					type="button"
					className="border-2 border-white w-2/5 rounded-full active:bg-gray-600 "
					onClick={clearStorage}>
					Clear
				</button>
				<button
					type="button"
					className="border-2 border-white w-2/5 rounded-full active:bg-gray-600 "
					onClick={returnHome}>
					Home
				</button>

				<input
					type="text"
					placeholder="Enter Username"
					value={userName}
					className="bg-gray-800 text-white w-full h-10 cursor-text border-2 border-white rounded-full outline-white  text-center placeholder:text-center"
					onChange={(e) => { if (e.target.value !== "") setUserName(e.target.value); }}

					onKeyDown={(e) => pressedKey(e.key)}
				/>
				<button
					type="button"
					className="border-2 border-white w-2/5 rounded-full active:bg-gray-600 "
					onClick={handleClick}>
					Submit
				</button>
			</div>
			<div className=" prevName p-3 w-auto h-auto text-center text-xl flex justify-between items-center gap-7 " id="prevName" onClick={(e) => addPrevUser}><u>{currEntry}</u>
				<button className="border-white border-2 w-10">
					X
				</button>
			</div>
		</>
	);
};

export default EnterName;


