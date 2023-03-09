import React, {CSSProperties, FC} from "react";
import cn from 'classnames'

import {IconName, getIconSvg} from "./utils";

import styles from './style.module.scss'

export type IconSize = 'small' | 'medium' | 'large'

export interface IconProps {
	/** Icon name. */
	name: IconName;
	/** Additional styles for the wrapper component. */
	style?: CSSProperties;
	/** Icon title (for accessibility purposes). */
	size?: IconSize
	/** Icon title (for accessibility purposes). */
	title?: string;
}

export const Icon: FC<IconProps> = ({name, style, size, title}) => {
	const iconClass = cn(styles.icon);
	const SvgIcon = getIconSvg(name);

	return (
		<div className={cn(size && styles[size])}>
			<SvgIcon className={iconClass} style={style} title={title}/>
		</div>
	);
}
