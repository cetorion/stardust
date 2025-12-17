import { useEffect, useState } from 'react'
import MD from 'react-markdown'

import { useStore } from '@/entry/store.tsx'
import { cap } from '@/entry/utils.ts'

import css from '~/mark.module.css'

export const Mark = (props) => {
	const [mark, setMark] = useState('')
	const [, setTip] = useStore('tip')
	useEffect(() => {
		setTip(cap(props.name))
		getMark(props.name).then(setMark).catch(console.log)
	}, [])

	return (
		<section className={css.mark}>
			<pre>
				<MD>{mark}</MD>
			</pre>
		</section>
	)
}

const getMark = async (name) => {
	const path = `/markdown/${name}.md`
	const r = await fetch(path)
	if (!r.ok) {
		throw new Error(await r.text())
	}
	return await r.text()
}
