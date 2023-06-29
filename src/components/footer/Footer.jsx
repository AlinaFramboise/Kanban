import css from './Footer.module.css'
import { LIST_TYPES, LIST_COPY } from '../../config.js'

const Footer = props => {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				{Object.values(LIST_TYPES).map(type => {
					if (type === 'inProgress' || type === 'Finished'){
						const listCount = tasks.filter(task => task.status === type)
						return (
							<div className={css.count} key={type}>
								{type === LIST_TYPES.IN_PROGRESS && (<span>Active tasks: </span>) || type === LIST_TYPES.FINISHED && (<span>Finished tasks: </span>) }{listCount.length}
							</div>
						)
					}
				})}
			</div>
			<div className={css.copy}>
				Kanban board 
			</div>
		</footer>
	)
}

export default Footer