import { NextApiRequest, NextApiResponse } from "next";

// works as route
export default async function GET(_req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json("okay");
}
