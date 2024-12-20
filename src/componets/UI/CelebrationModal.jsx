import React from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import partyPopper from "../../assets/graphics/party_popper.svg";
import conffetti1 from "../../assets/graphics/conffetti_single.svg";
import coin from "../../assets/icons/coin.svg";
import hourGlass from "../../assets/icons/time_icon.svg";

export default function CelebrationModal({ quest }) {
	const celebration = useRef(null);

	useEffect(() => {
		if (celebration.current) {
			party.confetti(celebration.current, {
				count: 50,
				spread: 30,
			});
		}
	}, []);
	return (
		<div
			ref={celebration}
			className="z-20  fixed bottom-0 left-0  top-0 right-0 bg-black  bg-opacity-75 p-4 flex items-center justify-center"
		>
			<div className="relative card-shadow bg-lightest rounded-lg p-4 w-full max-w-md mx-auto flex flex-col items-center justify-center">
				<p className="text-5xl mb-1 font-bold leading-tight text-dark mt-5 ">
					Thank you for the help,
					<span> {quest.volunteer_username.split(" ")[0]}</span>!
				</p>
				<p className="my-4 body-text text-dark">
					Keep up the great work. You've earned the following!
				</p>
				<div className="flex w-full   items-center justify-between gap-3 mb-16">
					<div>
						<img src={coin} alt="" className="w-8 inline-block mr-2" />
						<span>{quest.point_earnings} Points</span>
					</div>

					<div>
						<img src={hourGlass} alt="" className="w-6 inline-block mr-2" />
						<span>{quest.hours_needed} Hours</span>
					</div>
				</div>

				<Link
					to="/account"
					className="body-text-regular bg-secondary w-full rounded py-3 text-lightest mb-2 text-center "
				>
					Find another task
				</Link>
				<Link
					to="/account/leaderboard"
					className="mt-2 text-dark flex items-center justify-center gap-3 w-full "
				>
					<span className="body-text-regular">Checkout Leaderboard</span>
					<span className="material-symbols-outlined ">chevron_right</span>
				</Link>
				<img
					src={partyPopper}
					alt="confetti"
					className={`absolute -top-36 left-0 w-48 `}
				/>

				<img
					src={conffetti1}
					alt="confetti"
					className="absolute -top-12  right-10 w-20 "
				/>
			</div>
		</div>
	);
}
