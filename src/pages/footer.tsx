import css from '~/footer.module.css'

export const Footer = () => {
	const d = new Date().getFullYear()
	return (
		<footer className={css.footer}>
			<span>Memento mori</span>
			<span>Stardust, {d}</span>
		</footer>
	)
}
