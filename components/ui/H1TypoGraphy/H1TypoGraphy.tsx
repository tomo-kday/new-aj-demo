import React from "react";

interface TypographyH1Props {
	children: React.ReactNode;
}

export function PrimaryTypographyH1({ children }: TypographyH1Props) {
	return <h1>{children}</h1>;
}
