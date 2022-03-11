import Link from 'next/link'
import Image from 'next/image'

import { Container, DescriptionSection, ImageSection, TitleSection } from './styles'

export function Card(props) {
	const format = props.small
		? {
				height: '200px',
				minWidth: '350px',
				border: '1px solid black'
		  }
		: {
				height: '320px',
				minWidth: '250px'
		  }
	return (
		<Link href={props.dest}>
			<Container format={format}>
				<ImageSection>
					<Image layout="fill" objectFit="cover" src={props.src} alt={props.alt} />
				</ImageSection>
				<TitleSection>
					<h1>{props.title}</h1>
				</TitleSection>
				<DescriptionSection>
					<p>{props.description}</p>
				</DescriptionSection>
			</Container>
		</Link>
	)
}
