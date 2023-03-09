import React, {FC} from "react";
import styles from './style.module.scss'
import {Section} from "../section";
import {Icon} from "../icon";

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Section>
				<div className={styles.header__inner}>
					<a href="/" className={styles.header__logo}>
						<Icon name='menu' size='large'/>
						Мое Резюме
					</a>

				</div>
			</Section>
		</header>
	)
}
