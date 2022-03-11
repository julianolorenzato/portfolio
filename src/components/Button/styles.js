import styled from 'styled-components'

export const Btn = styled.button`
	background-color: ${props => props.theme.colors.secondary};
	color: aliceblue;
	border-radius: 10px;
	padding: 10px;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.colors.contrast};
		color: ${props => props.theme.colors.text}
	}
`
