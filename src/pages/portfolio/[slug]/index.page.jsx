import Head from 'next/head'

import { Container, Top, Bottom } from './styles'

import { SlideShow } from '../../../components/SlideShow'
import { Layout } from '../../../components/Layout'

import fetchData from '../../../fetchs/fetchData'
import fetchFindOne from '../../../fetchs/fetchFindOne'

export async function getStaticPaths() {
	const projects = await fetchData('projects')

	return {
		paths: projects.map((project) => {
			return {
				params: {
					slug: project.slug
				}
			}
		}),
		fallback: false
	}
}

export async function getStaticProps(context) {
	const data = await fetchFindOne(context.params.slug)

	return {
		props: {
			data
		}
	}
}

export default function Project(props) {
	return (
		<>
			<Head>
				<title>{props.data.title}</title>
			</Head>
			<Layout>
				<Container>
					<Top>
						<h2>{props.data.title}</h2>
						<p>{props.data.description}</p>
						Tecnologias:
						<ul>
							{props.data.skills.map((v, i) => <li key={i}>{v}</li>)}
						</ul>
					</Top>
					<Bottom>
						<SlideShow>
							{props.data.urls.map((v, k) => (
								<img key={k} src={v} alt={k}></img>
							))}
						</SlideShow>
					</Bottom>
				</Container>
			</Layout>
		</>
	)
}
