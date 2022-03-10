import Image from 'next/image'
import { Container, Title, ImageSection, TagSection, Knowledge } from './styles'
import { Circles } from '../Circles'

export function Skill(props) {
	return (
		<Container>
			<Title>{props.title}</Title>
			<ImageSection>
				<Image
					layout="fill"
					objectFit="contain"
					src={`/images/skills-logos/${props.title}.png`}
					alt={`${props.title}-logo`}
				/>
			</ImageSection>
			<Circles circles={props.circles} />
			<TagSection>
				{props.tag.map((value, key) => (
					<span key={key}>{value}</span>
				))}
			</TagSection>
			<Knowledge>
				<hr />
				<span>Conhecimento:</span>
				<ul>
					{props.knowledge.map((v, key) => {
						return <li key={key}>{v}</li>
					})}
				</ul>
			</Knowledge>
		</Container>
	)
}
