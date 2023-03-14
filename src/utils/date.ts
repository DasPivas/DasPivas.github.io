import { DateTime } from 'luxon'

function getNoun(number: number, one: string, two: string, five: string) {
	let n = Math.abs(number)
	n %= 100
	if (n >= 5 && n <= 20) {
		return five
	}
	n %= 10
	if (n === 1) {
		return one
	}
	if (n >= 2 && n <= 4) {
		return two
	}
	return five
}

const dateFromSeconds = (
	date: number,
	format: string = 'DD MM yyyy'
): string => {
	return DateTime.fromSeconds(date).toFormat(format, {
		locale: 'ru-RU',
	})
}

export { getNoun, dateFromSeconds }
