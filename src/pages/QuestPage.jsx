import { useState } from "react";

import startIcon from "../assets/icons/start_icon.svg";
import workingIcon from "../assets/icons/working_icon.svg";
import completeIcon from "../assets/icons/completed_icon.svg";
import locationIcon from "../assets/icons/location_icon.svg";
import onMyWayIcon from "../assets/icons/onmyway_icon.svg";
import coin from "../assets/icons/coin.svg";
import blopShape from "../assets/graphics/bottom_blob_shape.svg";

const taskProgress = [
	{
		id: 1,
		icon: startIcon,
		title: "Start",
	},
	{
		id: 2,
		icon: onMyWayIcon,
		title: "On My Way",
	},
	{
		id: 3,
		icon: locationIcon,
		title: "At Location",
	},
	{
		id: 4,
		icon: workingIcon,
		title: "Task in Progress",
	},
	{
		id: 5,
		icon: completeIcon,
		title: "Task Completed",
	},
];

const currentUser = {
	id: 10,
	username: "user123",
	avatar_url:
		"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
};

const buttonText = {
	1: "Start",
	2: "Arrived",
	3: "Begin Task",
	4: "Complete Task",
};
export default function QuestPage() {
	const [currentStep, setCurrentStep] = useState(1);
	const [task, setTask] = useState({
		id: 1,
		description: "Pick up groceries from the supermarket.",
		status: "assigned",
		status_id: 2,
		volunteer_id: 1,
		volunteer_username: "Incognito23",
		volunteer_avatar_url:
			"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/White-3-Robot-Avatar-icon.png",
		points: 55,
	});

	function handleNextStep() {
		setCurrentStep((prevStep) => prevStep + 1);
	}

	return (
		<div className="flex flex-col relative">
			<div className="flex justify-between mx-4 my-4">
				<h1 className="subtitle-heading text-lightest">Quest</h1>
				<p className="body-text flex items-center gap-">
					<img className="w-6" src={coin} alt="coin" />
					<span className="label-text text-lightest">{task.points} Pts</span>
				</p>
			</div>

			<div className="flex justify-center item-center h-[75vh] z-10">
				<div className="w-[45%] flex flex-col items-center justify-center gap-4">
					{/* <img
						src={currentUser.avatar_url}
						alt=""
						className="w-36 h-36 rounded-full"
					/> */}
				</div>
				<ul className="flex flex-col-reverse gap-2 w-[55%] justify-center">
					{taskProgress.map((task) => (
						<li
							key={task.id}
							className={`bg-secondary ${
								task.id > currentStep && "opacity-30 "
							} rounded-full p-4 mb-4 w-24 h-24 flex cilinder-shadow flex-col items-center justify-center relative
            ${task.id === 2 && "translate-x-20"}
            ${task.id === 4 && "translate-x-20"}
            ${task.id === 3 && "translate-x-28"}
            
            `}
						>
							<img
								src={task.icon}
								alt=""
								className={`absolute -top-2 left-3 w-16 object-cover ${
									task.id > currentStep ? "opacity-50 " : ""
								}`}
							/>
						</li>
					))}
				</ul>
				{currentStep < 5 && (
					<div className="fixed bottom-8 left-2 right-2">
						<button
							onClick={() => handleNextStep()}
							className="label-text bg-tertiary w-full rounded py-3 text-lightest "
						>
							{buttonText[currentStep]}
						</button>
					</div>
				)}
			</div>
			<div className="w-52 h-52  p-4 rounded-full card-shadow  bg-primarylight absolute top-[36%] left-5  ">
				<img src={currentUser.avatar_url} alt="" className="" />
			</div>
		</div>
	);
}
