import React, { FC } from 'react'
import styles from './style.module.scss'
import { Greeting } from '../greeting'
import { About } from '../about'
import { TechStack } from '../techStack'
import { Career } from '../career'
import { Performances } from '../performances'

export const Main: FC = () => {
	return (
		<div className={styles.main}>
			<Greeting />
			<About />
			<TechStack />
			<Career />
			<Performances />
		</div>
	)
}

export default Main
