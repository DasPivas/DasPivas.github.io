import React, { FC } from 'react'
import styles from './style.module.scss'
import { Section } from '../section'
import { SectionTitle } from '../sectionTitle'
import { Hobbies } from '../hobbies'

import self from '../../assets/images/self.jpg'
import selfWebp from '../../assets/images/self.webp'
import { TEXTS } from '../../const/about'

// const test1 = 'CodEWaRs'
// const test2 = 'JustTest'
//
// const capitals = (str: string) => {
// 	const result: number[] = []
// 	str.split('').forEach((char, idx) => {
// 		if (char !== char.toLowerCase()) result.push(idx)
// 	})
// 	return result
// }
// console.log(capitals(test1))
// console.log(capitals(test2))

export const About: FC = () => {
	return (
		<Section additionalMb>
			<div className={styles.about}>
				<SectionTitle title={'О себе'} anchor={'about'} />
				<picture className={styles.about__picture}>
					<source type="image/webp" srcSet={selfWebp} />
					<img src={self} alt="Misha Pryadun" className={styles.about__image} />
				</picture>
				{TEXTS.map((text, idx) => (
					<p className={styles.about__text} key={idx}>
						{text}
					</p>
				))}
				<Hobbies />
			</div>
		</Section>
	)
}
