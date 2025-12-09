import React, { createContext, useState } from 'react'
import type { ReactNode } from 'react'

type StateType = {
	tip: string
	setTip: React.Dispatch<React.SetStateAction<string>>
	burst: boolean
	setBurst: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultState: StateType = {
	tip: '',
	setTip: () => {},
	burst: false,
	setBurst: () => {},
}

export const State = createContext<StateType>(defaultState)

type Props = { children: ReactNode }

export function StateProvider({ children }: Props) {
	const [tip, setTip] = useState<string>('')
	const [burst, setBurst] = useState<boolean>(false)

	const value: StateType = {
		tip,
		setTip,
		burst,
		setBurst,
	}

	return <State.Provider value={value}> {children} </State.Provider>
}
