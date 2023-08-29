"use client";
import MonthlyCalendar from "@/components/monthly-calendar/monthly-calendar";

export default async function Plan({ params }: { params: { id: string } }) {
	console.log("🚀 ~ file: page.tsx:2 ~ Plan ~ params:", params);
	// Plan page can receive slug
	// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
	// https://www.builder.io/blog/next-13-app-router
	return (
		<>
			<h1>Plan ID: {params.id}</h1>
			<MonthlyCalendar />
		</>
	);
}
