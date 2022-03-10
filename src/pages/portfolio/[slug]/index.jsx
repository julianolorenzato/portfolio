import Head from 'next/head'
import Image from 'next/image'

import { Container } from './styles'

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
					<span>Id: {props.data.id}</span>
					<span>slug: {props.data.slug}</span>
					<span>title: {props.data.title}</span>
					<span>description: {props.data.description}</span>
					<span>difficulty: {props.data.level}</span>

					<SlideShow>
						{props.data.urls.map((v, k) => (
							<img key={k} src={v} alt={k}></img>
						))}
					</SlideShow>
				</Container>
			</Layout>
		</>
	)
}
