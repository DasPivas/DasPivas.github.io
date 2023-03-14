import { Project } from 'types/projects'
import { images } from 'assets/images/projects'

const PROJECTS: Project[] = [
	{
		title: 'Кто хочет стать миллионером',
		source: {
			label: 'GitHub',
			link: 'https://github.com/DasPivas/millionaire-project',
		},
		preview: {
			label: 'Netlify',
			link: 'https://millionaire-project-shpora.netlify.app/',
		},
		description: `Игра выполнена в рамках проектной разработки на обучающем курсе ШПОРА
			от компании СКБ Контур. Командными усилиями мы создали проект, в котором
			полностью сохранены иначальные правила, вопросы и подсказки зависят
			от сложности уровней, а вся игра в рамках экперимента использует не
			типичный store - React Context.`,
		image: images.millionaire,
	},
]

export { PROJECTS }
