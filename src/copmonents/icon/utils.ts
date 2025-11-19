import { ReactComponent as github } from './icons/github.svg'
import { ReactComponent as vk } from './icons/vk.svg'

const iconsSvg = {
	github,
	vk
}

export type IconName = keyof typeof iconsSvg

export const getIconSvg = (name: IconName) => iconsSvg[name]
