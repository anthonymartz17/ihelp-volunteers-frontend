import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import errandIcon from "../assets/icons/errand_icon_dark.svg";
import cleaningIcon from "../assets/icons/cleaning_icon_dark.svg";
import technologyIcon from "../assets/icons/technology_icon_dark.svg";
import petCareIcon from "../assets/icons/pet_care_icon_dark.svg";
import variousIcon from "../assets/icons/various_icon_dark.svg";
import mealPrep from "../assets/icons/mealprep_icon_dark.svg";
import coin from "../assets/icons/coin.svg";
import timeIcon from "../assets/icons/time_icon.svg";
import calendar from "../assets/icons/calendar_primary.svg";
import clock from "../assets/icons/clock.svg";
import location from "../assets/icons/location.svg";
import ConfirmationAlert from "../componets/UI/ConfirmationAlert";
import AlertMessage from "../componets/UI/AlertMessage";
import blobShape from "../assets/graphics/blop_no_backdrop.svg";
import { useRequestDetail } from "../hooks/useRequestDetails";

const currentUser = {
	id: 10,
	username: "user123",
	avatar_url:
		"https://icons.iconarchive.com/icons/iconarchive/robot-avatar/512/Green-1-Robot-Avatar-icon.png",
};

const categoryIcons = {
	1: errandIcon,
	2: cleaningIcon,
	3: technologyIcon,
	4: petCareIcon,
	5: variousIcon,
	6: mealPrep,
};

export default function RequestDetailPage() {
	const navigate = useNavigate();
	const { id } = useParams();

	const { requestDetail, isLoading, error } = useRequestDetail(id);

	const [selectedTask, setSelectedTask] = useState(null);
	const [isAlertOpen, setIsAlertOpen] = useState(false);
	const [isError, setIsError] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");
	const [selectedAvatarId, setSelectedAvatarId] = useState(null);


	function toggleUsername(id) {
		setSelectedAvatarId((prevId) => (prevId ? null : id));
	}

	function selectTask(task_idx) {
		if (requestDetail.tasks[task_idx].volunteer_id) {
			requestDetail.tasks[task_idx].volunteer_id = null;
			requestDetail.tasks[task_idx].volunteer_avatar_url = null;
			setSelectedTask(null);
		} else {
			requestDetail.tasks[task_idx].volunteer_id = currentUser.id;
			requestDetail.tasks[task_idx].volunteer_avatar_url =
				currentUser.avatar_url;
			setSelectedTask(requestDetail.tasks[task_idx]);
		}
	}

	function tryCommitToTask() {
		if (selectedTask) {
			setIsAlertOpen(true);
		} else {
			setIsError(true);
			setAlertMessage("Oops! A task must be selected first.");
		}
	}
	function handleCommitToTask() {
		// Update the task status to "assigned"

		navigate(`/account/quest/request/${requestDetail.id}/task/:id`);
	}

	return (
		<div className=" text-dark  bg-secondary overflow-y-hidden">
			{/* <Blob  /> */}
			<div className="flex items-center text-light gap-3 mb-8 px-4">
				<Link to="/account" className="mt-2">
					<span className="material-symbols-outlined ">arrow_back_ios</span>
				</Link>
				<h2 className="title-heading text-lightest ">Request Details</h2>
			</div>
			{isLoading && (
				<div className="flex justify-center pt-40 h-screen">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-light"></div>
				</div>
			)}
			{error && (
				<div className="flex justify-center items-center h-screen">
					<div className="text-center">
						<p className="text-2xl font-bold mb-4">
							Oops! Something went wrong.
						</p>
						<p className="text-lg">
							Please try again later or contact support.
						</p>
					</div>
				</div>
			)}
			{!isLoading && !error && (
				<div>
					<div className="bg-light  rounded-lg p-3 py-6 mx-4 flex flex-col gap-5 mb-6">
						<div className="flex justify-between items-center rounded-lg ">
							<div className="flex justify-center items-center gap-2 ">
								<img
									className="w-12"
									src={categoryIcons[requestDetail.category_id]}
									alt={requestDetail.category}
								/>
								<p className="title-heading">
									{requestDetail.category[0].toUpperCase() +
										requestDetail.category.slice(1)}
								</p>
							</div>
							<p className="body-text flex items-center gap-1">
								<img className="w-5" src={timeIcon} alt="coin" />
								<span className="subtitle-heading">
									{requestDetail.hours}{" "}
									{requestDetail.hours > 1 ? "Hours" : "Hour"}
								</span>
							</p>
						</div>
						<div className="flex gap-1  justify-between body-text ">
							<p className="flex items-center gap-1">
								<img src={calendar} alt="" className="w-6" />
								<span className="pt-1">{requestDetail.date}</span>
							</p>
							<p className="flex items-center ">
								<img src={clock} alt="" className="w-6" />
								<span className="pt-1">{requestDetail.time}</span>
							</p>
							<p className="flex items-center ">
								<img src={location} alt="" className="w-6" />
								<span className="pt-1">
									{requestDetail.address.city}, {requestDetail.address.state}
								</span>
							</p>
						</div>
						<div>
							<h2 className="label-text">Description:</h2>
							<p className="body-text">{requestDetail.description}</p>
						</div>
					</div>
					<h2 className="subtitle-heading text-lightest m-4">Tasks</h2>
					<ul className="px-4 ">
						{requestDetail.tasks.map((task, idx) => {
							return (
								<li key={task.id} className="mb-4 relative ">
									{selectedAvatarId && selectedAvatarId === task.id && (
										<div
											onClick={() => toggleUsername()}
											className="absolute -top-8 flex  gap-2 pl-2 right-6 bg-dark  rounded-lg border-2 border-lightest "
										>
											<p className="text-lightest">{task.volunteer_username}</p>
											<span className="material-symbols-outlined bg-light   text-dark">
												cancel
											</span>
										</div>
									)}
									{task.volunteer_avatar_url && (
										<img
											id={task.id}
											onClick={() => toggleUsername(task.id)}
											src={task.volunteer_avatar_url}
											alt=""
											className="w-8 rounded-full bg-dark p-1 border-2 border-lightest absolute -top-3 -right-2 z-10"
										/>
									)}
									{task.volunteer_id === currentUser.id ? (
										<div
											onClick={() => {
												selectTask(idx);
											}}
											className="flex cursor-pointer items-center gap-2 "
										>
											<p className="text-3xl label-text  numbers-shadow">
												{idx + 1}
											</p>
											<div
												className={`card-shadow rounded-lg p-2 flex   gap-1 body-text w-[100%] ${
													task.volunteer_id === currentUser.id
														? "bg-dark text-lightest"
														: "bg-light text-dark"
												}`}
											>
												<p className="">{task.description}</p>
												<p className="body-text flex items-center gap-1  w-[20%]">
													<img className="w-4" src={coin} alt="coin" />

													<span className="body-text text-sm label-text">
														{task.points} Pts
													</span>
												</p>
											</div>
										</div>
									) : (
										<div
											onClick={() => {
												selectTask(idx);
											}}
											className={`flex cursor-pointer items-center gap-2 ${
												task.status_id !== 1 || selectedTask
													? "opacity-40 pointer-events-none"
													: ""
											}`}
										>
											<p className="text-3xl label-text  numbers-shadow">
												{idx + 1}
											</p>
											<div className="bg-light card-shadow rounded-lg p-2 flex justify-between  gap-1 body-text w-[100%]">
												<p className="">{task.description}</p>
												<p className="body-text flex items-center gap-1  w-[20%]">
													<img className="w-4" src={coin} alt="coin" />

													<span className="body-text text-sm label-text">
														{task.points} Pts
													</span>
												</p>
											</div>
										</div>
									)}
								</li>
							);
						})}
					</ul>
					<div className="mx-4">
						<button
							onClick={() => tryCommitToTask()}
							className={`subtitle-heading  w-full card-shadow rounded-lg py-3 text-lightest ${
								!selectedTask
									? "opacity-40 pointer-events-none bg-dark"
									: "bg-primary"
							} `}
						>
							Commit
						</button>
					</div>
				</div>
			)}
			{isAlertOpen && (
				<ConfirmationAlert
					onHandleCommitToTask={handleCommitToTask}
					onSetIsAlertOpen={setIsAlertOpen}
				/>
			)}
			{isError && (
				<AlertMessage alertMessage={alertMessage} setIsError={setIsError} />
			)}
			<img
				src={blobShape}
				alt="graphic blob"
				className=" w-full translate-y-20 absolute bottom-0 left-0"
			/>
		</div>
	);
}
