// Notice from where NextResponse is imported:
import { NextResponse } from "next/server";

// Notice the function definition:
export async function GET(_request: Request) {
	return NextResponse.json({ message: "Message from server" });
}
