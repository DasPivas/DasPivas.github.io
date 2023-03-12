import React, { FC, ReactNode } from 'react'
import cn from 'classnames'
import './style.scss'

interface Header {
	children?: ReactNode | undefined
	additionalMb?: boolean
}

export const Section: FC<Header> = ({ children, additionalMb }) => {
	return (
		<section className={cn('section', additionalMb ? '_mb' : '')}>
			{' '}
			{children}
		</section>
	)
}
