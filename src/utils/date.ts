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

const formatExperience = (start: number, end?: number): string => {
	const dateStart = DateTime.fromSeconds(start)
	const dateEnd = end ? DateTime.fromSeconds(end) : DateTime.now()
	const diffDate = dateEnd.diff(dateStart, ['year', 'months'])

	const result: string[] = []

	let years: number = Math.ceil(diffDate.years)
	let months: number = Math.ceil(diffDate.months)

	if (months === 12) {
		years++
		months = 0
	}

	const formDateString = (
		dateProps: number,
		one: string,
		two: string,
		five: string
	) => {
		if (dateProps < 1) return
		result.push(`${dateProps} ${getNoun(dateProps, one, two, five)}`)
	}

	formDateString(years, 'год', 'года', 'лет')
	formDateString(months, 'месяц', 'месяца', 'месяцев')

	return result.join(' ')
}

export { getNoun, dateFromSeconds, formatExperience }
