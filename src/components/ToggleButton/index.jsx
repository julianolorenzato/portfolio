import { Container } from './styles'

import { FaSun, FaMoon } from 'react-icons/fa'

import { useToggleTheme } from '../../contexts/ThemeContext'

export const ToggleButton = () => {
	const [theme, toggleTheme] = useToggleTheme()

	return (
		<Container htmlFor="toggle" mode={theme.title}>
			<input type="checkbox" id="toggle" onChange={toggleTheme} checked={theme.title === 'light'} />
			<FaSun size="1.2rem" />
			<FaMoon size="1.2rem" />
		</Container>
	)
}
