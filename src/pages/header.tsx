import { useNavigate } from 'react-router-dom'

import { useStore } from '@/entry/store.tsx'

import css from '~/header.module.css'
import galaxySvg from '@/assets/images/galaxy.svg'

export const Header = () => {
	const [tip, setTip] = useStore('tip')
	const [, setBurst] = useStore('burst')
	const navigate = useNavigate()
	const logoClick = () => {
		setTip('')
		navigate('/')
	}

	return (
		<header className={css.header}>
			<div className={css.prompt}>
				visitor@stardust: ~<span className={css.blink}>$</span>
			</div>
			<div className={css.tip}>{tip}</div>
			<figure
				onClick={logoClick}
				className={css.logo}
				onMouseEnter={() => setBurst(true)}
				onMouseLeave={() => setBurst(false)}
			>
				<img src={galaxySvg} className={css.spin} />
			</figure>
		</header>
	)
}
