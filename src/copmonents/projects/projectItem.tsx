import React, { FC } from 'react'
import styles from './style.module.scss'
import { Project } from 'types/projects'

export const ProjectItem: FC<Project> = ({
	title,
	source,
	preview,
	description,
	image,
}) => {
	return (
		<div className={styles.projectItem}>
			<div className={styles.projectItem__image}>
				<img
					src={image}
					alt={title}
					className={styles.projectItem__imageSource}
				/>
			</div>
			<div className={styles.projectItem__content}>
				<h4 className={styles.projectItem__contentTitle}>{title}</h4>
				{/*{[*/}
				{/*	[source, 'Исходники проекта'],*/}
				{/*	[preview, 'Deploy'],*/}
				{/*].map(([item, label]) => (*/}
				{/*	<p key={la}>*/}
				{/*		{`${label} `}*/}
				{/*		<a href={item.link} className="link">*/}
				{/*			{item.label}*/}
				{/*		</a>*/}
				{/*	</p>*/}
				{/*))}*/}

				<p>
					Исходники проекта{' '}
					<a href={source.link} className="link">
						{source.label}
					</a>
				</p>
				<p>
					Deploy{' '}
					<a href={preview.link} className="link">
						{preview.label}
					</a>
				</p>
				<div>
					<p>Описание:</p>
					<p className={styles.projectItem__contentDescription}>
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}
