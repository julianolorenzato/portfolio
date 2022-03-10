import styled from 'styled-components'

export const Btn = styled.button`
	background-color: ${props => props.theme.colors.primary};
	color: aliceblue;
	border-radius: 20px;
	padding: 5px;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: ${props => props.theme.colors.secondary};
	}
`
