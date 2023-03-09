import React, {FC, ReactNode} from "react";
import './style.scss'

interface Header {
	children?: ReactNode | undefined
}

export const Section: FC<Header> = ({children}) => {
	return (
		<section className='section'>
			{children}
		</section>
	)
}
