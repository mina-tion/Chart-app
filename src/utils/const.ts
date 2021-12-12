import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

export const getEndDate = () => {
	dayjs.extend(utc);
	return dayjs().utc().format();
};
export const getStartDate = (value: string, unit: string) => {
	dayjs.extend(utc);
	return dayjs().subtract(Number(value), unit).utc().format();
};

export const MAX_POSTS_ON_PAGE = 8;
export const MAX_POSTS_LOAD = 16;
