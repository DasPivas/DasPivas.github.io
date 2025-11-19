import React, { FC } from 'react'
import styles from './style.module.scss'
import { Section } from '../section'

import avatar from '../../assets/images/avatar.jpg'
import { LINKS } from '../../const/header'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Section>
				<div className={styles.header__inner}>
					<a href="/" className={styles.header__logo}>
						<img src={avatar} alt="Avatar" className={styles.header__image} />
					</a>

					<nav className={styles.header__nav}>
						{LINKS.map((item) => (
							<a href={item.link} className="link" key={item.label}>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</Section>
		</header>
	)
}
