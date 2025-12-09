import React, { useState, useContext, createContext } from 'react'

type Tuple<T> = [T, React.Dispatch<React.SetStateAction<T>>]

type StoreShape = {
	tip: Tuple<string>
	burst: Tuple<boolean>
}

const defaultStore: StoreShape = {
	tip: ['', () => {}],
	burst: [false, () => {}],
}

const Store = createContext<StoreShape>(defaultStore)

export const StoreProvider: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	const [burst, setBurst] = useState(false)
	const [tip, setTip] = useState('')

	const store: StoreShape = {
		burst: [burst, setBurst],
		tip: [tip, setTip],
	}

	return <Store.Provider value={store}>{children}</Store.Provider>
}

export const useStore = <K extends keyof StoreShape>(key: K): StoreShape[K] => {
	const store = useContext(Store)
	return store[key]
}
