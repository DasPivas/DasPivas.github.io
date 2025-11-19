import React, { FC } from 'react'
import styles from './style.module.scss'
import cn from 'classnames'
import { Performance } from '../../types/performances'
import { Icon } from '../icon'

const YouTubeIcon: FC<{ className?: string }> = ({ className }) => (
	<svg
		className={className}
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
	</svg>
)

export const PerformanceItem: FC<Performance> = ({
	title,
	name,
	date,
	link,
	photo,
	youtube,
	vk,
}) => {
	return (
		<div className={styles.performanceItem}>
			<div className={styles.performanceItem__image}>
				<img
					src={photo}
					alt={title}
					className={styles.performanceItem__imageSource}
				/>
			</div>
			<div className={styles.performanceItem__content}>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className={cn('link', styles.performanceItem__title)}
				>
					{title}
				</a>
				<h5 className={styles.performanceItem__name}>{name}</h5>
				<p className={styles.performanceItem__date}>{date}</p>
				{(youtube || vk) && (
					<div className={styles.performanceItem__videos}>
						{youtube && (
							<a
								href={youtube}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.performanceItem__videoLink}
								title="Смотреть на YouTube"
							>
								<YouTubeIcon className={styles.performanceItem__icon} />
								<span>YouTube</span>
							</a>
						)}
						{vk && (
							<a
								href={vk}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.performanceItem__videoLink}
								title="Смотреть на VK"
							>
								<Icon name="vk" size="small" />
								<span>VK</span>
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

