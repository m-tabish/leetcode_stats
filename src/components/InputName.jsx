import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";

// entry -> goes to call api
// userName -> value which is taken from input box and set to userName


const EnterName = () => {

	const [userName, setUserName] = useState("");
	const { entry, setEntry, show, setShow } = useContext(UserContext);

	var [prevEntry, setPrevEntry] = useState([]);


	//saving to local storage-------------------

	window.onbeforeunload = function () {
		const prevUser_before = JSON.stringify(prevEntry);
		prevEntry.push(localStorage.setItem("prevEntry", prevUser_before));
		console.log(prevUser_before, "before reload");
	}

	window.onload = function () {
		var prevUser_after = JSON.parse(localStorage.getItem("prevEntry"));
		prevEntry.push(prevUser_after);
		console.log(prevUser_after, "after reload");
	}


	//Functions--------------------------------- 
	const handleClick = () => {
		if (!userName === null) {
			console.log("null");
			returnHome();
			displayPrevUser(1);
		}
		if (userName !== null) {

			setEntry(userName);
			prevEntry.push(userName);
			displayPrevUser(0);
		}
	};

	const pressedKey = (key) => {
		//so far if input box is empty then value is being printed home else entry is being set to value;// 
		if (key === "Enter") {
			if (userName !== "") {
				displayPrevUser(0);
				setEntry(userName);
				prevEntry.push(userName);

			}
			else {
				console.log("Home");
				returnHome();
			}

		}
	};

	function displayPrevUser(n) {
		if (n === 0) {
			document.getElementById("prevName").style.display = "none";

		}
		if (n === 1) {
			document.getElementById("prevName").style.display = "block";

		}

	}
	const use_PrevUser = () => {
		setEntry(prevEntry[0]);///prevEntry is an array!!!!!!!!!!!!!
		displayPrevUser(0);

	}
	const returnHome = () => {
		setEntry("");
		prevEntry.push(entry);
		displayPrevUser(1);
	}


	const clearStorage = () => {
		localStorage.clear();
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
				<button
					type="button"
					className="border-2 border-white w-2/5 rounded-full "
					onClick={clearStorage}>
					Clear
				</button>
				<input
					type="text"
					placeholder="Enter Username"
					value={userName}
					className="bg-gray-800 text-white w-full h-10 cursor-text border-2 border-white rounded-full outline-white  text-center placeholder:text-center"
					onChange={(e) => { setUserName(e.target.value); }}
					onKeyDown={(e) => pressedKey(e.key)}
				/>
				<button
					type="button"
					className="border-2 border-white w-2/5 rounded-full "
					onClick={handleClick}>
					Submit
				</button>
			</div>
			<div className=" prevName p-3 w-auto h-auto text-center text-xl flex justify-between items-center gap-7 " id="prevName" onClick={use_PrevUser}><button><u>{prevEntry}  " " </u></button>
				<button className="border-white border-2 w-10">
					X
				</button></div>
		</>
	);
};

export default EnterName;



