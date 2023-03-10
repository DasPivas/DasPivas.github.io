import { ReactComponent as resume } from './icons/resume.svg'
import { ReactComponent as menu } from './icons/menu.svg'

const iconsSvg = {
	resume,
	menu,
}

export type IconName = keyof typeof iconsSvg

export const getIconSvg = (name: IconName) => iconsSvg[name]
