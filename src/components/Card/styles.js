import styled from 'styled-components'

export const TitleSection = styled.div`
	transition: all 0.3s ease;
	height: 20%;
	background: ${props => props.theme.colors.gradient};
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		text-align: center;
		font-size: 1.7rem;
	}
`

export const ImageSection = styled.div`
	transition: all 0.3s ease;
	height: 80%;
	position: relative;
`

export const DescriptionSection = styled.div`
	height: 80%;
	transition: all 0.3s ease;
	background-color: ${props => props.theme.colors.contrast};
	padding: 10%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`

export const Container = styled.div`
    ${props => props.format}
    flex: 1 0 0;
	transform: scale(0.9);
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;

	&:hover ${TitleSection} {
		transform: translateY(-400%);
	}

	&:hover ${ImageSection} {
		transform: translateY(-100%);
	}

	&:hover ${DescriptionSection} {
		transform: translateY(-100%);
	}
`
