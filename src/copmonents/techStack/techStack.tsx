import React, { FC } from 'react'
import styles from './style.module.scss'
import { Section } from '../section'
import { SectionTitle } from '../sectionTitle'
import { TECH_STACK, TechItem as TechItemType } from '../../const/techStack'

const TechItem: FC<TechItemType> = ({ name, icon }) => (
	<div className={styles.techStack__item}>
		<div className={styles.techStack__icon}>{icon}</div>
		<span className={styles.techStack__name}>{name}</span>
	</div>
)

export const TechStack: FC = () => {
	return (
		<Section additionalMb>
			<div className={styles.techStack}>
				<SectionTitle title={'Технологический стек'} anchor={'tech-stack'} />
				<div className={styles.techStack__grid}>
					{TECH_STACK.map((tech, idx) => (
						<TechItem name={tech.name} icon={tech.icon} key={idx} />
					))}
				</div>
			</div>
		</Section>
	)
}

