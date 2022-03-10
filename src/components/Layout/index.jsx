import Link from 'next/link'
import { ToggleButton } from '../ToggleButton'
import { Header, PageTitle, Content } from './styles'

export function Layout(props) {
	return (
		<>
			<Header>
				<nav>
					<Link href="/">Inicio</Link>
					<Link href="/sobre">Sobre</Link>
					<Link href="/portfolio">Portfólio</Link>
				</nav>
				<ToggleButton />
			</Header>
			<PageTitle>{props.title}</PageTitle>
			<Content>{props.children}</Content>
		</>
	)
}
