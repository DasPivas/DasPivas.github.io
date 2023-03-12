import React, { FC } from 'react'
import './style.scss'
import { Header } from '../header'
import { Main } from '../main'

export const App: FC = () => {
	return (
		<>
			<Header />
			<Main />
		</>
	)
}

export default App
