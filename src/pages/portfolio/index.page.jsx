import Head from 'next/head'
import { List } from './styles'

import { Layout } from '../../components/Layout'
import { Card } from '../../components/Card'

import fetchData from '../../fetchs/fetchData'

export default function Portfolio(props) {
	return (
		<>
			<Head>
				<title>Portfólio</title>
			</Head>
			<Layout title="Lista de Projetos">
				<List>
					{props.projects.map((v, key) => {
						return (
							<Card
								src={v.urls[0]}
								title={v.title}
								description={v.description}
								small
								dest={`/portfolio/${v.slug}`}
								key={key}
							/>
						)
					})}
				</List>
			</Layout>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			projects: await fetchData('projects')
		}
	}
}
