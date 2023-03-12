import React, { FC } from 'react'
import styles from './style.module.scss'
import { Section } from '../section'

export const Greeting: FC = () => {
	return (
		<Section>
			<div className={styles.greeting}>
				<p>
					Всем привет!👋
					<br />
					меня зовут:
				</p>
				<h1 className={styles.greeting__title}>
					<a href="/" className="link">
						Прядун Миша
					</a>
				</h1>
				<p className={styles.greeting__goal}>Делаю интернет ярче!🪄</p>
			</div>
		</Section>
	)
}
