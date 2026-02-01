import { getServerSession } from "next-auth";

export default async function Home() {
	const session = getServerSession();

	return (
		<div>
			{JSON.stringify(session)}
		</div>
	);
} 