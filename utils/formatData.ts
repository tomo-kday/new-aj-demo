export const formatDate = (dataNumber: string): string => {
	const year = Number(dataNumber.slice(0, 4));
	const month = Number(dataNumber.slice(4, 6));
	const day = Number(dataNumber.slice(6));

	const dateObject = new Date(year, month - 1, day);
	const formattedMonth = dateObject.getMonth() + 1;
	const formattedDay = dateObject.getDate();
	return `${formattedMonth}/${formattedDay}`;
};
