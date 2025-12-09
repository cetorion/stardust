import css from '../style/footer.module.css'

export const Footer = () => {
	const d = new Date().getFullYear()
	return (
		<footer className={css.footer}>
			<span>S</span>
			<span>Stardust, {d}</span>
		</footer>
	)
}
