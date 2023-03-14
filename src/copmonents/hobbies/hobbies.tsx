import React, { FC } from 'react'
import styles from './style.module.scss'
import { HOBBIES } from '../../const/about'
import { HobbiesType } from '../../types/about'

const HobbiesItem: FC<HobbiesType> = ({ title, emoji }) => (
	<li className={styles.hobbies__item}>
		<span className={styles.hobbies__emoji}>{emoji}</span>
		{title}
	</li>
)

export const Hobbies: FC = () => {
	return (
		<div>
			<h3 className={styles.hobbies__title}>Хобби</h3>
			<ul>
				{HOBBIES.map((item, idx) => (
					<HobbiesItem title={item.title} emoji={item.emoji} key={idx} />
				))}
			</ul>
		</div>
	)
}
