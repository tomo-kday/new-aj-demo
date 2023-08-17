export interface SearchProduct {
	plan_id: number;
	partner_id: number;
	plan_name: string;
	can_reservation_day: number;
	can_reservation_time: number;
	can_reservation_cancel_day: number;
	necessary_time_comment: string;
	period_start: string;
	period_end: string;
	period: string;
	period_end_comment: string;
	basic_min_passenger_count: number;
	people_min: number;
	people_max: number;
	prefecture_id: number;
	area_id: string;
	city_id?: string | null;
	address: string;
	introduction: string;
	base_price: string;
	include_charge: string;
	not_include_charge: string;
	credit_prepayment: number;
	credit_prepayment_close_day: number;
	use_postpayment: number;
	use_local_payment: number;
	age_start: number;
	age_end: number;
	default_message_note: string;
	campaign_message: string;
	discount_start_date: string;
	discount_end_date: string;
	display_start_date: string;
	display_end_date: string;
	prepayment: number;
	point_use_flag: number;
	coupon_use_flag: number;
	show_flag: number;
	delete_flag: number;
	basic_meeting_time: string;
	basic_meeting_place: string;
	clothes_belongings: string;
	clothes_rental: string;
	payment_method: string;
	payment_cancel: string;
	payment_stop: string;
	other_attention: string;
	other_comment: string;
	lat: string;
	lng: string;
	map_access_car: string;
	map_access_train: string;
	map_access_other: string;
	necessary_time?: NecessaryTimeEntity[] | null;
	plan_activity?: (number | null)[] | null;
	search_target_level_id?: number[] | null;
	search_discount_id?: (number | null)[] | null;
	plan_course?: PlanCourseEntity[] | null;
	search_other_id?: number[] | null;
	equipment_list?: number[] | null;
	free_info_list?: (number | null)[] | null;
	no_wovn_flag: boolean;
	plan_movie?: (string | null)[] | null;
	image: string;
	can_reservation_cancel_contents: string;
	price_area_link: string;
	price_category_text: string;
	price_course_text: string;
	price_experienced_num_text: string;
	price_unit: string;
	special_period_flag: boolean;
	discount_price: string;
	day_price: string;
	base_price_style: string;
	discount_price_appeal_contents: string;
	discount_price_appeal_style: string;
	area_recognition_label: string;
	review_point: string;
	review_star: string;
	review_count: string;
	active_flag: number;
	reservation_status: string;
	partner_href: number;
	partner_name: string;
	calendars: Calendars;
	period_auto_update_flag?: number | null;
}
interface NecessaryTimeEntity {
	plan_search_necessary_time_id: number;
	search_necessary_time_id: number;
}
interface PlanCourseEntity {
	plan_course_id: number;
	plan_id: number;
	course_name: string;
}
export interface Calendars {
	[key: string]: CaleandarDay;
}
interface CaleandarDay {
	status: string | number;
	week_num: string;
	holiday?: boolean;
}
