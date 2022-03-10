import { Btn } from './styles'

export function Button(props) {
	return (
		<Btn onClick={props.onClick}>
			{props.children}
		</Btn>
	)
}
