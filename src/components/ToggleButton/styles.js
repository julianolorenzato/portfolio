import styled, { keyframes } from 'styled-components'

const showSun = keyframes`
    0% {
        transform: translate(-50px, 20px);
    } 100% {
        transform: translate(0, 0);
    }
`

const showMoon = keyframes`
    0% {
        transform: translate(50px, 20px);
    } 100% {
        transform: translate(0, 0);
    }
`

const hideSun = keyframes`
    0% {
        transform: translate(0, 0);
    } 100% {
        transform: translate(-50px, 20px);
    }
`

const hideMoon = keyframes`
    0% {
        transform: translate(0, 0);
    } 100% {
        transform: translate(50px, 20px);
    }
`

export const Container = styled.div`
	height: 60px;
	width: 60px;
	border: 3px solid ${(props) => props.theme.colors.contrast};
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

		&:nth-child(1) {
			animation: ${(props) => (props.mode === 'light' ? showSun : hideSun)} 1s forwards;
		}
		&:nth-child(2) {
			animation: ${(props) => (props.mode === 'light' ? hideMoon : showMoon)} 1s forwards;
		}
	}

	&:hover svg {
		color: ${(props) => props.theme.colors.secondary};
	}
`
