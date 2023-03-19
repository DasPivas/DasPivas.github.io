import React, { FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { Company } from '../../types/career'
import { dateFromSeconds, formatExperience } from '../../utils/date'

const MONTHS = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
]

const formatMonths = (date: number) => {
	const splitDate = dateFromSeconds(date, 'M yyyy').split(' ')
	// @ts-ignore
	return `${MONTHS[splitDate[0] - 1]} ${splitDate[1]}`
}

const formTimeLabel = (start: number, end?: number) => {
	return `${formatMonths(start)} —\n${formatMonths(
		end || Math.floor(Date.now() / 1000)
	)}`
}

export const CareerItem: FC<Company> = ({
	title,
	link,
	dateUp,
	dateDown,
	isNowJob,
	jobTitle,
	description,
}) => {
	return (
		<div className={styles.careerItem}>
			<div className={styles.careerItem__date}>
				<span className={styles.careerItem__time}>
					{formTimeLabel(dateUp, dateDown)}
				</span>
				<p className={styles.careerItem__experience}>
					{formatExperience(dateUp, dateDown)}
				</p>
			</div>

			<div className={styles.careerItem__body}>
				<a href={link} className={cn('link', styles.careerItem__title)}>
					{title}
				</a>
				<h5 className={styles.careerItem__job}>{jobTitle}</h5>
				{description.map((str, idx) => (
					<p className={styles.careerItem__description} key={idx}>
						{str}
					</p>
				))}
			</div>
		</div>
	)
}
