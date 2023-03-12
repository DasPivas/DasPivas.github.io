import React, { FC } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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

					<div className={styles.header__nav}>
						{LINKS.map((item) => (
							<AnchorLink href={item.link} className="link">
								{item.label}
							</AnchorLink>
						))}
					</div>
				</div>
			</Section>
		</header>
	)
}
