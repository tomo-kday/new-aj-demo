export default async function Plan({ params }: { params: { slug: string } }) {
	// Plan page can receive slug
	// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
	// https://www.builder.io/blog/next-13-app-router
	return <div>Plan ID: {params.slug}</div>;
}
