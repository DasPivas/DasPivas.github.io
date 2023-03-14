import React, { FC } from 'react'
import styles from './style.module.scss'
import { SectionTitle } from 'copmonents/sectionTitle'
import { Section } from 'copmonents/section'

import { ProjectItem } from './projectItem'
import { PROJECTS } from 'const/projects'

export const Projects: FC = () => {
	return (
		<Section additionalMb>
			<div className={styles.projects}>
				<SectionTitle title={'Проекты'} anchor={'projects'} />
				<div className={styles.projects__list}>
					{PROJECTS.map((project) => (
						<ProjectItem
							title={project.title}
							source={project.source}
							preview={project.preview}
							description={project.description}
							image={project.image}
							key={project.title}
						/>
					))}
				</div>
			</div>
		</Section>
	)
}
