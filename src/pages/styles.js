import styled from 'styled-components'
import breakpoints from '../styles/breakpoints'

export const SpeechBubble1 = styled.div`
	position: absolute;
	left: 5vw;
	top: 90px;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 5px;
	box-shadow: 0 0 20px ${(props) => props.theme.colors.shadow};
	height: 240px;
	margin: 20px;
	width: 400px;
	padding-left: 30px;
	padding-top: 20px;

	h1 {
		text-align: left;
		display: block;
		font-size: 4rem;
		z-index: 3;
		color: #fff;
	}

	h2 {
		text-align: left;
		display: block;
		font-size: 2rem;
		background: -webkit-${(props) => props.theme.colors.gradient};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		z-index: 3;
	}

	&::after {
		background-color: ${(props) => props.theme.colors.primary};
		box-shadow: 2px -2px 2px 0 ${(props) => props.theme.colors.shadow};
		content: '';
		display: block;
		height: 20px;
		position: relative;
		left: 360px;
		top: -140px;
		transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		width: 20px;
	}

	@media (max-width: ${breakpoints.xl}) {
		position: relative;
		top: 0;
		left: 100px;

		align-self: flex-start;
		&::after {
			display: none;
		}
	}
`

export const SpeechBubble2 = styled.div`
	position: absolute;
	right: 10vw;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 0px 15px ${(props) => props.theme.colors.shadow}90;
	height: 160px;
	margin: 20px;
	width: 310px;
	padding: 10px;
	z-index: 3;
	color: ${(props) => props.theme.colors.primary};

	ul {
		height: 100%;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		li {
			display: flex;
			align-items: center;

			a:hover {
				color: ${(props) => props.theme.colors.secondary};
			}

			svg {
				margin: 0px 10px;
			}
		}
	}

	&::after {
		background-color: #fff;
		box-shadow: -3px 2px 5px 0 ${(props) => props.theme.colors.shadow}50;
		content: '';
		display: block;
		height: 20px;
		left: -20px;
		position: relative;
		top: -30px;
		transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		width: 20px;
	}

	@media (max-width: ${breakpoints.xl}) {
		position: relative;
		top: -280px;
		right: 100px;

		align-self: flex-end;
		&::after {
			display: none;
		}
	}
`

export const HomeImage = styled.img`
	@media (max-width: ${breakpoints.xl}) {
		display: none;
	}
`

export const Featured = styled.div`
	background-color: ${(props) => props.theme.colors.primary};
	height: fit-content;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		position: relative;
		top: -60px;
		height: 15%;
		font-size: 2.5rem;
		color: #fff;
		background: ${(props) => props.theme.colors.gradient};
		padding: 20px;
		border-radius: 150px;
		border: 20px solid ${(props) => props.theme.colors.primary};
	}

	> div {
		width: 80%;
		height: 90%;
		position: relative;
		top: -60px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (max-width: ${breakpoints.xl}) {
		position: relative;
		top: -100px;
	}
`
