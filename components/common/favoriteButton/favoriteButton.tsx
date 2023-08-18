"use client";

import { useCallback } from "react";
import styles from "./favoriteButton.module.css";
import { Routes } from "@/constants";

export default function FavoriteButton() {
	const handleClick = useCallback(async () => {
		try {
			const data = await fetch(`${Routes.SITE.BASEURL}${Routes.API.SEARCH}`);
			console.log(
				"🚀 ~ file: favoriteButton.tsx:13 ~ handleClick ~ data:",
				data
			);
		} catch (err) {
			console.log("🚀 ~ file: favoriteButton.tsx:20 ~ handleClick ~ err:", err);
			throw new Error("error happened on server");
		}
	}, []);
	return (
		<button className={styles.btn} onClick={handleClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="28"
				height="24"
				fill="none"
				viewBox="0 0 28 24"
			>
				<path
					fill="#000"
					fillOpacity="0.56"
					stroke="#fff"
					strokeLinejoin="round"
					strokeWidth="2.307"
					d="M26.842 8.754c0 1.783-.741 3.496-2.066 4.763-3.048 2.918-6.004 5.96-9.166 8.772-.725.636-1.875.612-2.569-.052l-9.11-8.72c-2.753-2.635-2.753-6.89 0-9.527 2.781-2.661 7.311-2.661 10.092 0l.331.317.33-.316c1.334-1.277 3.15-1.997 5.047-1.997 1.896 0 3.712.72 5.045 1.996 1.325 1.268 2.066 2.98 2.066 4.764z"
				></path>
			</svg>
		</button>
	);
}
