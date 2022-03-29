import GlobalStyles from '../styles/globalStyles'
import { ThemeProvider } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
