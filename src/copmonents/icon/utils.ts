import { ReactComponent as github } from './icons/github.svg'

const iconsSvg = {
	github,
}

export type IconName = keyof typeof iconsSvg

export const getIconSvg = (name: IconName) => iconsSvg[name]
