import styled from 'styled-components'

export const BtnContainer = styled.div`
	width: fit-content;
	max-width: 70%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	border: 2px solid ${props => props.theme.colors.contrast};
	border-radius: 10px;

	button {
		margin: 5px;
		flex-grow: 1;
	}
`

export const SkillsContainer = styled.div`
	width: 80vw;
	margin-bottom: 30px;
	padding: 20px;
	background-color: transparent;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 15px;
	justify-content: center;
`
