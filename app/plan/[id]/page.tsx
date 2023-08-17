export default async function Plan({ params }: { params: { slug: string } }) {
	// Plan page can receive slug
	// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
	return <div>Plan ID: {params.slug}</div>;
}
