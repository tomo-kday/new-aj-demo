import React, { Fragment } from "react";
import { Star } from "../svgs/star";

interface StarsProps {
	numOfStars: number;
}

export default function Stars({ numOfStars }: StarsProps) {
	return (
		<>
			{[...Array(numOfStars)].map((_, i) => {
				return (
					<Fragment key={i}>
						<Star />
					</Fragment>
				);
			})}
		</>
	);
}
