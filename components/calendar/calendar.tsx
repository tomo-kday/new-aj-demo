import { weekList } from "../../constants";
import { Calendars } from "../../types/api/searchProduct";
import { formatDate } from "../../utils/formatData";
import styles from "./calendar.module.css";

type CalendarProps = {
	calendars: Calendars;
};

const getWeekNumber = (week_num: string): string => {
	if (week_num === "0") return "sunday";
	if (week_num === "6") return "saturday";
	return "";
};

const getCalendarIcon = (status: number) => {
	switch (status) {
		case 1:
			return (
				<i data-status={status} className={styles.calendarIcon}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						fill="#000"
						version="1.1"
						viewBox="0 0 29.107 29.107"
						xmlSpace="preserve"
						stroke="#e24848"
						strokeWidth={2}
					>
						<g>
							<path d="M14.558 2.079c6.877 0 12.471 5.597 12.471 12.473 0 6.877-5.594 12.476-12.471 12.476-6.879 0-12.478-5.599-12.478-12.476 0-6.876 5.599-12.473 12.478-12.473m0-2.079C6.563 0 0 6.562 0 14.552c0 7.995 6.563 14.555 14.558 14.555s14.549-6.56 14.549-14.555C29.106 6.562 22.552 0 14.558 0z"></path>
						</g>
					</svg>
				</i>
			);
		case 3:
			return (
				<i data-status={status} className={styles.calendarIcon}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="15"
						version="1.1"
						viewBox="0 0 201.611 201.611"
						xmlSpace="preserve"
					>
						<path
							// fill="#ffb966"
							stroke="#ffb966"
							strokeWidth={20}
							d="M201.611 201.611H0V0h201.611v201.611zM8.328 193.283h184.955V8.328H8.328v184.955z"
						></path>
					</svg>
				</i>
			);
		default:
			return (
				<i
					data-status={status}
					className={`${styles.calendarIcon} ${styles.statusBar}`}
				></i>
			);
	}
};

export default function Calendar({ calendars }: CalendarProps) {
	let noStatusCnt = 0;
	const calendarLength = Object.keys(calendars).length;
	return (
		<div className={styles.container}>
			{Object.entries(calendars).map(([date, set]) => {
				const { status, week_num } = set;
				if (!status) noStatusCnt++;
				return (
					<div
						key={date}
						className={`${styles.calendarWrapper} ${
							styles[getWeekNumber(week_num)]
						} ${noStatusCnt >= calendarLength ? styles.hide : ""}`}
					>
						{weekList[+week_num]}
						<div>
							{formatDate(date)}
							{getCalendarIcon(+status)}
						</div>
					</div>
				);
			})}
		</div>
	);
}
