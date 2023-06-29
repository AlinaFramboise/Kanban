import css from './header.module.css'
import PersonalAccount from './src/components/personalAccount/PersonalAccount'

const Header = () => {
	return (
		<header className={css.header}>
			<h1 className={css.title}>Kanban-Board</h1>
		</header>
	)
}

export default Header