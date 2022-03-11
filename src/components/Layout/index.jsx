import Link from 'next/link'
import { ToggleButton } from '../ToggleButton'
import { Header, PageTitle, Content } from './styles'

export function Layout(props) {
	return (
		<>
			<Header>
				<div></div>
				<nav>
					<Link href="/">Inicio</Link>
					<Link href="/sobre">Sobre</Link>
					<Link href="/portfolio">Portfólio</Link>
				</nav>
				<div>
					<ToggleButton />
				</div>
			</Header>
			<PageTitle>{props.title}</PageTitle>
			<Content>{props.children}</Content>
		</>
	)
}
