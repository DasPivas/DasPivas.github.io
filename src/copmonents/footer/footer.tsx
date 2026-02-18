import React, { FC } from 'react'
import styles from './style.module.scss'
import { Section } from '../section'
import { Icon } from '../icon'

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Section>
				<div className={styles.footer__inner}>
					<div className={styles.footer__info}>
						<div className={styles.footer__copyright}>Misha Pryadun 2026</div>
						<div className={styles.footer__infoItem}>
							<a
								href="https://t.me/@pryadun69"
								className={styles.footer__icon}
								target="_blank"
								rel="noreferrer"
							>
								Telegram @pryadun69
							</a>
						</div>
					</div>
					<div className={styles.footer__links}>
						<a
							href="https://github.com/DasPivas"
							className={styles.footer__icon}
							target="_blank"
							rel="noreferrer"
						>
							<Icon name="github" size="medium" />
						</a>
					</div>
				</div>
			</Section>
		</footer>
	)
}
