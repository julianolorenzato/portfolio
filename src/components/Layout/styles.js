import styled from 'styled-components'

export const Header = styled.header`
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;

	nav {
		display: flex;
		justify-content: space-around;
		width: 35vw;
		flex: 0 0 400px;

		a {
			color: ${props => props.theme.colors.contrast};
			padding: 30px;
			background-color: transparent;
			height: 100%;

			&:hover {
				background-color: ${props => props.theme.colors.secondary};
				transition: all 0.2s;
			}
		}
	}

	div {
		flex: 1;
	}
`

export const PageTitle = styled.h1`
	padding-top: 30px;
	background-color: transparent;
	font-size: 3rem;
	text-align: center;
`

export const Content = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: transparent;
	padding-top: 30px;
`
