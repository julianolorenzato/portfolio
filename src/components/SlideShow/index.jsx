import { Container, Navigation } from './styles'
import { useState } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

export const SlideShow = ({ children }) => {
	const [current, setCurrent] = useState(0)
	const length = children.length
	const images = children.map((img, index) => img)

	if (!Array.isArray(children) || children.length <= 0) {
		return null
	}

	const toRight = () => {
		if (current === length - 1) {
			setCurrent(0)
			return
		}
		setCurrent((c) => c + 1)
	}

	const toLeft = () => {
		if (current === 0) {
			setCurrent(length - 1)
			return
		}
		setCurrent((c) => c - 1)
	}

	return (
		<Container>
			<FaChevronCircleLeft size="3rem" onClick={toLeft} />
			<FaChevronCircleRight size="3rem" onClick={toRight} />
			{images[current]}
			<Navigation>
				{children.map((_, i) => {
					const style = i === current ? { backgroundColor: '#555' } : {}

					return (
						<div
							onClick={() => {
								setCurrent((c) => i)
							}}
							style={style}
							key={i}
						/>
					)
				})}
			</Navigation>
		</Container>
	)
}
