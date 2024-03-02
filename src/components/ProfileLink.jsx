import React, { useCallback, useRef, useState } from "react";
import Github from "../Assests/github.png";
import LinkedIn from "../Assests/linkedIn_icon.png";
import x_icon from "../Assests/x_icon.png";

const ProfileLink = () => {
	const [copied, setCopied] = useState(false);

	const copyEmailRef = useRef(null);

	const copyEmailToClipboard = useCallback(() => {
		const emailText = "mohdtabishkhan001@gmail.com";
		navigator.clipboard.writeText(emailText);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 500);
	}, []);

	const iconSize = "w-12"
	const sm_iconSize = " max-[700px]:w-10 "

	return (
		<div className=" flex items-center justify-evenly  w-screen">
			<div className=" flex justify-center items-center my-4 gap-5">
				<a
					href="https://github.com/m-tabish/stats_leetcode"
					target="_blank"
					rel="noreferrer"
					className={` ${iconSize} ${sm_iconSize}`}>
					<img
						src={Github}
						alt="github icon"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/m-tabishk/"
					target="_blank"
					rel="noreferrer"
					className={`${iconSize} ${sm_iconSize}`}>
					<img
						src={LinkedIn}
						alt="LinkedIn icon"
					/>
				</a>
				<a
					href="https://twitter.com/papayafruit123"
					target="_blank"
					rel="noreferrer"
					className={`${iconSize} ${sm_iconSize}`}>
					<img
						src={x_icon}
						alt="X.com icon"
					/>
				</a>


				{/* Email */}
				<div className="p-2 h-10 bg-black flex justify-between items-center rounded-full ">
					<div className="  block text-lg max-[700px]:text-lg:" ref={copyEmailRef}></div>
					<button
						className="p-1 rounded-full border-white border-2"
						onClick={copyEmailToClipboard}>
						{copied ? "Copied" : "Copy Email"}
					</button>
					</div>
			</div>
		</div>
	);
};

export default ProfileLink;
