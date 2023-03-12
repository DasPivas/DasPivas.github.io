import React, { FC } from 'react'
import './style.scss'
import { Header } from '../header'
import { Main } from '../main'
import { Footer } from '../footer'

export const App: FC = () => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

export default App
