import React, { useCallback, useEffect, useRef, useState } from "react";
import Github from "../Assests/github.png";
import LinkedIn from "../Assests/linkedIn_icon.png";

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

	return (
		<>
			<div className="flex gap-5 justify-center items-center">
				<a
					href="https://github.com/m-tabish/stats_leetcode"
					target="_blank"
					rel="noreferrer"
					className="w-20 h-20">
					<img
						src={Github}
						alt="github icon"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/m-tabishk/"
					target="_blank"
					rel="noreferrer"
					className="w-20 h-20">
					<img
						src={LinkedIn}
						alt="LinkedIn icon"
					/>
				</a>
				<div className="w-fit p-2 h-10 bg-black flex justify-center items-center rounded-full gap-2">
					<div ref={copyEmailRef}>mohdtabishkhan001@gmail.com</div>
					<button
						className="border-1 border-white p-1 rounded-full"
						onClick={copyEmailToClipboard}>
						{copied ? "Copied" : "Copy"}
					</button>
				</div>
			</div>
		</>
	);
};

export default ProfileLink;
