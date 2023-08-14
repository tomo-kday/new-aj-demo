import Image from "next/image";
import styles from "./page.module.css";
import { SearchProduct } from "../../types/api/searchProduct";
import { Routes } from "../../constants";
import FavoriteButton from "./components/favoriteButton/favoriteButton";

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
		throw new Error("error happened on server");
	}
};

export default async function Home() {
	const products = await fetchData();
	return (
		<main className={styles.main}>
			<section>
				{products.map((item) => (
					<div key={item.plan_id}>
						{/* header */}
						<a href={`${Routes.SITE.BASEURL}/publish/plan/${item.plan_id}`}>
							{item.plan_name}
						</a>
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
							{/* should come from data */}
							<div className={styles.rightComponentHeader}>
								青の洞窟・恩納村
							</div>
							<h2>{item.plan_name}</h2>
							{item.review_point && (
								<div className={styles.reviewContainer}>
									<span>{item.review_point}</span>
									<span>{item.review_count}</span>
								</div>
							)}

							{/*  if ("review_point" in plan && plan["review_point"]) {
          rating.innerHTML = `<span class="rating-sp__score"">${plan["review_point"]}</span><i class="icm icon-aj_star star-sp-rating" data-rate=${getReviewCount(plan["review_point"])}></i><span>(${plan['review_count']})</span>`;
        } */}
						</div>
					</div>
					// <Card key={item.plan_id} item={item} handleClick={handleClick} />
				))}
			</section>
			{/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /> */}
		</main>
	);
}
