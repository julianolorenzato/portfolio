import { Container } from './styles'

import { FaSun, FaMoon } from 'react-icons/fa'

import { useToggleTheme } from '../../contexts/ThemeContext'

export const ToggleButton = () => {
    const [theme, toggleTheme] = useToggleTheme()

	return (
		<Container onClick={toggleTheme} mode={theme.title}>
			<FaSun size="2rem" />
			<FaMoon size="2rem" />
		</Container>
	)
}
