import React, { FC } from 'react'
import styles from './style.module.scss'
import { Section } from '../section'
import { SectionTitle } from '../sectionTitle'
import { Hobbies } from '../hobbies'

import self from '../../assets/images/self.jpg'
import selfWebp from '../../assets/images/self.webp'
import { TEXTS } from '../../const/about'

export const About: FC = () => {
	return (
		<Section>
			<div className={styles.about}>
				<SectionTitle title={'О себе'} anchor={'about'} />
				<picture className={styles.about__picture}>
					<source type="image/webp" srcSet={selfWebp} />
					<img src={self} alt="Misha Pryadun" className={styles.about__image} />
				</picture>
				{TEXTS.map((text) => (
					<p className={styles.about__text}>{text}</p>
				))}
				<Hobbies />
			</div>
		</Section>
	)
}
