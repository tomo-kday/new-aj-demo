import Image from "next/image";
import styles from "./page.module.css";
import { SearchProduct } from "@/types/api/searchProduct";
import { Routes } from "@/constants";
import FavoriteButton from "@/components/common/favoriteButton/favoriteButton";
import Stars from "@/components/common/stars/stars";
import Calendar from "@/components/calendar/calendar";

// since this data is not cached, this function will fire on user’s request every time.
const fetchData = async (): Promise<SearchProduct[]> => {
	try {
		const data = await fetch(
			"https://gd.activityjapan.com/get_search/plans?uri=/search/okina",
			{
				cache: "no-store", // same as SSR
			}
		);
		const res = data.json();
		return res;
	} catch (err) {
		console.log("🚀 ~ file: page.tsx:22 ~ fetchData ~ err:", err);
		throw new Error("error happened on server");
	}
};

export default async function Home() {
	// const [first, setfirst] = useState()
	const products = await fetchData();
	return (
		<main className={styles.main}>
			<section>
				{products.map((item) => (
					<div
						className={styles.container}
						key={item.plan_id}
						data-testid="plan-card"
					>
						{/* header */}
						<a href={`${Routes.SITE.BASEURL}/publish/plan/${item.plan_id}`}>
							{item.plan_name}
						</a>
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
