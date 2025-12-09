import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { StoreProvider } from '../store/store.jsx'
import { Main } from '../pages/main.jsx'

import '../style/reset.css'
import '../style/global.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<StoreProvider>
				<Main />
			</StoreProvider>
		</Router>
	</StrictMode>,
)
