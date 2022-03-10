import { Container, EmptyCircle, FilledCircle } from './styles'

export function Circles({circles}) {
	const filledCirclesNumber = Array.from({length: circles}).map((_, key) => {
		return <FilledCircle key={key}></FilledCircle>
	})

	const emptyCirclesNumber = Array.from({length: 10 - circles}).map((_, key) => {
		return <EmptyCircle key={key}></EmptyCircle>
	})

	return (
		<Container>
			{filledCirclesNumber}
			{emptyCirclesNumber}
		</Container>
	)
}
