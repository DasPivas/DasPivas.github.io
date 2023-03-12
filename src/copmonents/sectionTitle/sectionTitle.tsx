import React, { FC } from 'react'
import styles from './style.module.scss'

interface SectionTitleProps {
	title: string
	anchor: string
}

export const SectionTitle: FC<SectionTitleProps> = ({ title, anchor }) => {
	return (
		<h2 id={anchor} className={styles.sectionTitle}>
			{title}
		</h2>
	)
}
