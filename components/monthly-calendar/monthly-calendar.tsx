"use client";
import { useState } from "react";
import useSWR from "swr";

const customFetcher = (url: string) =>
	fetch(url, {
		mode: "cors", // Set the CORS mode
	}).then((response) => response.json());

export default function MonthlyCalendar() {
	const [currentMonth, setCurrentMonth] = useState(0);
	const monthlyList = ["08", "09", "10", "11", "12", "01"];

	const { data, error, isValidating } = useSWR(
		`https://gd.activityjapan.com/plan/get_calendar?plan_id=4008&year=2023&month=${monthlyList[currentMonth]}`,
		customFetcher
	);

	console.log(
		"🚀 ~ file: monthly-calendar.tsx:11 ~ MonthlyCalendar ~ data:",
		data
	);

	if (error) return <div>Error loading data</div>;
	if (!data && isValidating) return <div>Loading...</div>;

	const handleNextMonth = () => {
		setCurrentMonth((prevMonth) => (prevMonth + 1) % monthlyList.length);
	};

	const handlePrevMonth = () => {
		setCurrentMonth(
			(prevMonth) => (prevMonth - 1 + monthlyList.length) % monthlyList.length
		);
	};

	return (
		<div>
			<h1>Monthly Calendar</h1>
			<button onClick={handlePrevMonth}>Previous Month</button>
			<button onClick={handleNextMonth}>Next Month</button>
			{data && (
				<div>
					<h2>{`${data.year}-${data.month}`}</h2>
					{/* Render your calendar data here */}
					{/* For example: */}
					<ul>
						{data.dates.map((date: string) => (
							<li key={date}>{date}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
