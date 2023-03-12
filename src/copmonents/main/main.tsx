import React, { FC } from 'react'
import styles from './style.module.scss'
import { Greeting } from '../greeting'
import { About } from '../about'

export const Main: FC = () => {
	return (
		<div className={styles.main}>
			<Greeting />
			<About />
		</div>
	)
}

export default Main
