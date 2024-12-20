import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
//icons
import variousIcon from "../assets/icons/various_icon.svg";
import errandIcon from "../assets/icons/errand_icon.svg";
import technologyIcon from "../assets/icons/technology_icon.svg";
import cleaningIcon from "../assets/icons/cleaning_icon.svg";
import petCareIcon from "../assets/icons/pet_care_icon.svg";
import gardeningIcon from "../assets/icons/gardening_icon.svg";
import tutoringIcon from "../assets/icons/tutoring_icon.svg";
import mealPrep from "../assets/icons/mealprep_icon.svg";
import eventIcon from "../assets/icons/event_icon.svg";
import sportCoachingIcon from "../assets/icons/sport_coaching_icon.svg";
import craftIcon from "../assets/icons/craft_icon.svg";
import officeIcon from "../assets/icons/office_icon.svg";
import coins from "../assets/icons/coin.svg";
import hoursIcon from "../assets/icons/hours_icon_light.svg";
//end icons

//components
import SwitchToggleButton from "../componets/UI/switchTogglerButton";
import ServerError from "../componets/UI/ServerError";
//end componets

//others
import BottomBlopShape from "../assets/graphics/bottom_blob_shape.svg";
import { useTasksByVolunteer } from "../hooks/useTasksByVolunteer";
import { useAuth } from "../context/authContext";
import { formatShortDate } from "../utils/formatters";

const categoryIcons = {
	1: variousIcon,
	2: errandIcon,
	3: technologyIcon,
	4: cleaningIcon,
	5: petCareIcon,
	6: gardeningIcon,
	7: tutoringIcon,
	8: mealPrep,
	9: eventIcon,
	10: sportCoachingIcon,
	11: craftIcon,
	12: officeIcon,
};
export default function Commitments() {
	const navigate = useNavigate();
	const { currentUser } = useAuth();
	const [filteredTasks, setFilteredTasks] = useState([]);
	const { tasks, isLoading, error } = useTasksByVolunteer(
		currentUser.accessToken
	);
	const [isPending, setIsPending] = useState(true);
	const [isQuestActive, setIsQuestActive] = useState(false);

	function swithBtn(option) {
		if (option === "Pending") {
			setIsPending(true);
		} else {
			setIsPending(false);
		}
	}
	function filterTasks() {
		const CompletedStatus = 4;
		setFilteredTasks(
			tasks
				.filter((task) => {
					if (isPending) {
						return task.task_status_id !== CompletedStatus;
					} else {
						return task.task_status_id === CompletedStatus;
					}
				})
				.sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
		);
	}
	function handleNavigation(task) {
		const quest = `/account/quest/tasks/${task.task_id}`;
		const requestDetail = `/account/requests/${
			task.request_id
		}?committed=${true}`;
		const inProgress = 3;
		if (task.task_status_id === inProgress) {
			navigate(quest);
		} else {
			navigate(requestDetail);
		}
	}

	useEffect(() => {
		if (tasks) {
			filterTasks();
			const inProgress = 3;
			setIsQuestActive(
				tasks.some((task) => task.task_status_id === inProgress)
			);
		}
	}, [isPending, tasks]);

	return (
		<div className="p-4  h-[100%] min-h-[80vh] relative mt-8">
			<div className="mb-10 flex justify-between items-center">
				<h1 className="subtitle-heading text-lightest">Commitments</h1>
				{!isQuestActive && (
					<Link
						to="/account"
						className="label-text mb-2  bg-secondarylight  px-4 card-shadow rounded-lg py-2 text-lightest"
					>
						Find tasks
					</Link>
				)}
			</div>

			{isLoading && (
				<div className="flex justify-center pt-40 h-screen">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-light"></div>
				</div>
			)}
			{error && <ServerError />}
			{!isLoading && !error && (
				<>
					<div className="mb-4">
						{isQuestActive ? (
							<p className="text-center px-2 py-1 text-sm text-secondary bg-light rounded-md">
								You have an active quest
							</p>
						) : (
							<SwitchToggleButton
								option1={"Pending"}
								option2={"Completed"}
								onSwitchBtn={swithBtn}
							/>
						)}
					</div>

					<div className="mb-[10em] overflow-auto max-h-[40vh]">
						<table className="text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
							<thead className="label-text text-lightest bg-tertiary z-10 sticky top-0">
								<tr>
									<th scope="col" className="px-6 py-3 w-1/3">
										Type
									</th>
									<th scope="col" className="px-6 py-3 w-1/3">
										Points
									</th>
									<th scope="col" className="px-6 py-3 w-1/3">
										Hours
									</th>
									<th scope="col" className="px-6 py-3 w-1/3">
										Date
									</th>
								</tr>
							</thead>

							<tbody className="text-lightest  body-text">
								{filteredTasks.map((task) => (
									<tr
										onClick={() => handleNavigation(task)}
										key={task.task_id}
										className={`even:bg-lightest even:bg-opacity-20  relative ${
											task.task_status_id === 3 ? "active-quest" : ""
										} ${
											isQuestActive && task.task_status_id !== 3
												? "pointer-events-none"
												: ""
										}`}
									>
										<td className="p-2">
											<img
												className="w-8"
												src={categoryIcons[task.category_id]}
												alt=""
											/>
											<span>{task.category_name}</span>
										</td>
										<td className="p-2">
											<div className="flex gap-1">
												<img className="w-5" src={coins} alt="" />
												<span>{task.points}</span>
											</div>
										</td>
										<td className="p-2">
											<div className="flex gap-1">
												<img className="w-5" src={hoursIcon} alt="" />
												<span>{task.hours_needed}</span>
											</div>
										</td>
										<td className="p-2">{formatShortDate(task.due_date)}</td>
									</tr>
								))}
							</tbody>
						</table>
						{filteredTasks.length === 0 && (
							<div className="w-full text-light title-heading opacity-30 text-center py-10">
								No tasks
							</div>
						)}
					</div>
				</>
			)}

			<img
				src={BottomBlopShape}
				alt="blop shape"
				className="absolute bottom-[-10px] left-0 right-0"
			/>
		</div>
	);
}
