import React, { FC } from 'react'
import styles from './style.module.scss'
import { SectionTitle } from '../sectionTitle'
import { Section } from '../section'
import { PerformanceItem } from './performanceItem'
import { PERFORMANCES } from '../../const/performances'

export const Performances: FC = () => {
	return (
		<Section additionalMb>
			<div className={styles.performances}>
				<SectionTitle title={'Выступления'} anchor={'performances'} />
				<div className={styles.performances__list}>
					{PERFORMANCES.map((performance, idx) => (
						<PerformanceItem
							title={performance.title}
							name={performance.name}
							date={performance.date}
							link={performance.link}
							photo={performance.photo}
							youtube={performance.youtube}
							vk={performance.vk}
							key={idx}
						/>
					))}
				</div>
			</div>
		</Section>
	)
}
