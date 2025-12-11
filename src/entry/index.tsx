import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { StoreProvider } from '@/entry/store.tsx'
import { Main } from '@/pages/main.tsx'

import '~/reset.css'
import '~/global.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<StoreProvider>
				<Main />
			</StoreProvider>
		</Router>
	</StrictMode>,
)
