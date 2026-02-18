import React, { FC } from 'react'
import styles from './style.module.scss'
import { Section } from '../section'

export const Greeting: FC = () => {
	return (
		<Section>
			<div className={styles.greeting}>
				<p>
					Приветствую! 👋
					<br />
					Меня зовут:
				</p>
				<h1 className={styles.greeting__title}>
					<a
						href={`https://t.me/@pryadun69`}
						className="link"
						target="_blank"
						rel="noreferrer"
					>
						Михаил Прядун
					</a>
				</h1>
				<p className={styles.greeting__goal}>Senior Frontend Developer</p>
			</div>
		</Section>
	)
}
