import Image from "next/image";
import styles from "./page.module.css";
import { SearchProduct } from "@/types/api/searchProduct";
import { Routes } from "@/constants";
import FavoriteButton from "@/components/common/favoriteButton/favoriteButton";
import Stars from "@/components/common/stars/stars";
import Calendar from "@/components/calendar/calendar";
import Link from "next/link";
import { PrimaryTypographyH1 } from "@/components/ui/H1TypoGraphy/PrimaryTypographyH1";

// official documentation of these 3 data fetching methods below

// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating

// since this data is not cached, this function will fire on user’s request every time.
// const fetchDataSSR = async (): Promise<SearchProduct[]> => {
// 	try {
// 		const data = await fetch(
// 			"https://gd.activityjapan.com/get_search/plans?uri=/search/okina",
// 			{
// 				cache: "no-store", // same as SSR
// 			}
// 		);
// 		const res = data.json();
// 		return res;
// 	} catch (err) {
// 		throw new Error("error happened on server");
// 	}
// };

const fetchDataISR = async (): Promise<SearchProduct[]> => {
	try {
		const data = await fetch(
			"https://gd.activityjapan.com/get_search/plans?uri=/search/okina",
			{ next: { revalidate: 3600 } }
		);
		const res: SearchProduct[] = await data.json();
		return res;
	} catch (err) {
		throw new Error("error happened on server");
	}
};

// const fetchDataSSG = async (): Promise<SearchProduct[]> => {
// 	try {
// 		const data = await fetch(
// 			"https://gd.activityjapan.com/get_search/plans?uri=/search/okina"
// 		);
// 		const res = data.json();
// 		return res;
// 	} catch (err) {
// 		throw new Error("error happened on server");
// 	}
// };

export default async function Home() {
	// const [first, setfirst] = useState()
	const products = await fetchDataISR();
	return (
		<main className={styles.main}>
			<section>
				{products.map((item) => (
					<div className={styles.container} key={item.plan_id}>
						{/* header */}
						<Link
							key={item.plan_id}
							href={`${Routes.SITE.PLAN}/${item.plan_id}`}
							data-test-id="plan-link"
							passHref
						>
							<PrimaryTypographyH1>{item.plan_name}</PrimaryTypographyH1>
						</Link>
						<div className={styles.innerContainer}>
							<div className={styles.leftContainer}>
								<Image
									src={item.image}
									alt={item.plan_name}
									className={styles.image}
									width={265}
									height={198}
									priority
								/>
								<FavoriteButton />
							</div>
							<div className={styles.rightComponent}>
								<div className={styles.rightComponentHeader}>
									{/* should come from data */}
									青の洞窟・恩納村
								</div>
								<h2>{item.plan_name}</h2>
								{item.review_point && (
									<div className={styles.reviewContainer}>
										<span>{item.review_point}</span>
										<i>
											<Stars numOfStars={Math.trunc(+item.review_point)} />
										</i>
										<span>{item.review_count}</span>
									</div>
								)}
								<div>
									{/* this needs to be fixed */}
									{
										<div
											dangerouslySetInnerHTML={{ __html: item.price_unit }}
										/>
									}
									{item.price_unit}
								</div>

								{/* price */}
								{parseInt(item.discount_price.replace(",", ""), 10) > 0 ? (
									<>
										<p>{item.base_price}</p>
										<p>{item.discount_price_appeal_contents}</p>
									</>
								) : (
									<p>{item.base_price}円〜</p>
								)}
							</div>
						</div>
						{/* Calendar */}
						<Calendar calendars={item.calendars} />
					</div>
				))}
			</section>
		</main>
	);
}
