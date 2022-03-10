import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
`

export const EmptyCircle = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 2px;
    box-shadow: 1px 1px 4px #777;
`

export const FilledCircle = styled.div`
	height: 10px;
	width: 10px;
	border-radius: 50%;
	margin: 2px;
	box-shadow: 1px 1px 4px #777;

    &:nth-child(1), &:nth-child(2){
        border: 1px solid #ff0019;
        background-color: #ff0019;
    }
    &:nth-child(3), &:nth-child(4){
        border: 1px solid #ff5e00;
        background-color: #ff5e00;
    }
    &:nth-child(5), &:nth-child(6){
        border: 1px solid #ffc400;
        background-color: #ffc400;
    }
    &:nth-child(7), &:nth-child(8){
        border: 1px solid #93fc00;
        background-color: #93fc00;
    }
    &:nth-child(9), &:nth-child(10){
        border: 1px solid #03ff0f;
        background-color: #03ff0f;
    }
`
