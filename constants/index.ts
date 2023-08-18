export const Routes = {
	SITE: {
		BASEURL: "http://localhost:3000",
		HOME: "/",
		PLAN: "/publish/plan",
	},
	API: {
		SEARCH: "/api/search/",
	},
} as const;

export const weekList: string[] = ["日", "月", "火", "水", "木", "金", "土"];
