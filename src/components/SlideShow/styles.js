import styled from 'styled-components'

export const Container = styled.div`
	height: 400px;
	width: 800px;
	position: relative;
	user-select: none;
	overflow: hidden;
	border-radius: 20px;
	box-shadow: 0 0 25px ${props => props.theme.colors.shadow};

	img {
		object-fit: cover;
		object-position: top;
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}

	svg {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		opacity: 70%;
		cursor: pointer;
		z-index: 3;
		color: #555;

		&:nth-child(1) {
			left: 20px;
		}
		&:nth-child(2) {
			right: 20px;
		}
		&:hover {
			opacity: 100%;
		}
	}
`

export const Navigation = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;
	bottom: 5%;
	left: 50%;
	transform: translateX(-50%);

	div {
		height: 20px;
		width: 20px;
		border-radius: 50%;
		box-shadow: 1px 1px 5px #555;
		background-color: transparent;
		border: 3px solid transparent;
		margin: 10px;
		cursor: pointer;

		&:hover {
			background-color: #555;
		}
	}
`
