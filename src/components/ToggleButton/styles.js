import styled from 'styled-components'

export const Container = styled.label`
	height: 30px;
	width: 30px;
	border: 2px solid ${(props) => props.theme.colors.contrast};
	border-radius: 50%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	overflow: hidden;
	cursor: pointer;

	svg {
		color: ${(props) => props.theme.colors.contrast};
		position: absolute;
		transition: transform 1s;

		&:nth-of-type(1) {
			transform: translate(0, 0);
		}
		&:nth-of-type(2) {
			transform: translate(50px, 20px);
		}
	}

	input:checked ~ svg {
		&:nth-of-type(1) {
			transform: translate(-50px, 20px);
		}

		&:nth-of-type(2) {
			transform: translate(0, 0);
		}
	}

	input {
		display: none;
	}

	&:hover svg {
		color: ${(props) => props.theme.colors.secondary};
	}
`
