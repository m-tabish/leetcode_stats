import React, { useCallback, useRef, useState } from "react";
import Github from "../Assests/github.png";
import LinkedIn from "../Assests/linkedIn_icon.png";
import x_icon from "../Assests/x_icon.png";

const ProfileLink = () => {
	const [copied, setCopied] = useState(false);

	const copyEmailRef = useRef(null);
	const copyEmailToClipboard = useCallback(() => {
		const emailText = copyEmailRef.current.innerText;
		navigator.clipboard.writeText(emailText);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 500);
	}, []);

	const iconSize = "w-12"
	const sm_iconSize = " max-[700px]:w-10 "

	return (
		<div className="relative max-[700px]:left-7 max-[700px]:grid items-center justify-between max-[700px]:grid-rows-2 max-[700px]:w-4/5 ">
			<div className=" flex gap-5 justify-center items-center my-4 ">
				<a
					href="https://github.com/m-tabish/stats_leetcode"
					target="_blank"
					rel="noreferrer"
					className={` ${iconSize} max-[700px]:${sm_iconSize}`}>
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
					className={`${iconSize} max-[700px]:${sm_iconSize}`}>
					<img
						src={x_icon}
						alt="X.com icon"
					/>
				</a>
			</div>
			<div className="max-[700px]:min-w-full p-2 h-10 bg-black flex justify-center items-center rounded-full gap-5">
				<div className="block" ref={copyEmailRef}>mohdtabishkhan001@gmail.com</div>
				<button
					className="border-2 border-white p-1 rounded-full"
					onClick={copyEmailToClipboard}>
					{copied ? "Copied" : "Copy"}
				</button>
			</div>
		</div>
	);
};

export default ProfileLink;
