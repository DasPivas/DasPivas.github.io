import React, { FC } from 'react'
import styles from './style.module.scss'
import { Section } from '../section'
import { SectionTitle } from '../sectionTitle'
import { CareerItem } from './careerItem'
import { COMPANIES } from '../../const/career'

export const Career: FC = () => {
	return (
		<Section additionalMb>
			<div className={styles.career}>
				<SectionTitle title={'Карьера'} anchor={'career'} />
				<div className={styles.career__list}>
					{COMPANIES.map((job) => (
						<CareerItem
							title={job.title}
							dateUp={job.dateUp}
							dateDown={job.dateDown}
							jobTitle={job.jobTitle}
							description={job.description}
							link={job.link}
							isNowJob={job.isNowJob}
							key={job.dateUp}
						/>
					))}
				</div>
			</div>
		</Section>
	)
}
