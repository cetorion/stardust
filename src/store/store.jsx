import React, { useContext, createContext } from 'react'

const Store = createContext(null)

export const StoreProvider = ({ children }) => {
	const [burst, setBurst] = React.useState(false)
	const [tip, setTip] = React.useState('')

	const store = {
		burst: [burst, setBurst],
		tip: [tip, setTip],
	}

	return <Store.Provider value={store}>{children}</Store.Provider>
}

export const useStore = (l) => {
	const {
		[l]: [data, setData],
	} = useContext(Store)

	return [data, setData]
}
