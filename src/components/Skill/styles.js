import styled from 'styled-components'

export const Container = styled.div`
	flex: 1 0 0;
	min-width: 200px;
	margin: 1%;
	box-shadow: 0px 0px 15px ${props => props.theme.colors.shadow};
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	overflow: hidden;
	background-color: #fff;
`

export const Title = styled.h1`
	background: #ccc;
	width: 100%;
	height: 25px;
	padding-top: 3px;
	padding-left: 10px;
	border-bottom: 1px solid ${props => props.theme.colors.primary};
	color: #222;
`

export const ImageSection = styled.div`
	margin: 10px 0;
	position: relative;
	height: 80px;
	width: 100%;
`

export const TagSection = styled.div`
    margin-top: 20px;
	display: flex;
	flex-direction: row;
	color: #222;

	span {
		font-size: 0.8rem;
		padding: 2px 5px;
		margin: 0px 3px;
		border-radius: 20px;
		background-color: orange;
	}
`

export const Knowledge = styled.div`
	margin-top: 15px;
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 10px;
	color: #222;

	hr {
		margin-top: -5px;
	}

	span {
		text-align: center;
		padding: 10px 5px;
		font-size: 0.8rem;
	}

	li {
		list-style: circle;
		margin-left: 15px;
		text-align: left;
		font-size: 0.7rem;
	}
`
