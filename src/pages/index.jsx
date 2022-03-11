import Head from 'next/head'
import Link from 'next/link'

import { SpeechBubble1, SpeechBubble2, Featured } from './styles'

import { Layout } from '../components/Layout'
import { Card } from '../components/Card'

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

import fetchData from '../fetchs/fetchData'

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Início</title>
			</Head>
			<Layout>
				<SpeechBubble1>
					<h1>
						Juliano
						<br />
						Lorenzato
					</h1>
					<h2>FullStack Developer</h2>
				</SpeechBubble1>
				<SpeechBubble2>
					<div></div>
					<ul>
						<li>
							<FaLinkedin size='1.5rem' />
							<Link href="https://www.linkedin.com/in/julianolorenzato/">
								<a target="_blank">LinkedIn</a>
							</Link>
						</li>
						<li>
							<FaGithub size='1.5rem' />
							<Link href="https://github.com/julianolorenzato">
								<a target="_blank">GitHub</a>
							</Link>
						</li>
						<li>
							<FaEnvelope size='1.5rem' />
							<a href="mailto:julianolorenzato@gmail.com">julianolorenzato@gmail.com</a>
						</li>
					</ul>
				</SpeechBubble2>
				<img src="images/juliano.png" alt="juliano-image" />
				<Featured>
					<h3>Destaques</h3>
					<div>
						{props.featured.map((v, key) => {
							return (
								<Card
									src={v.urls[0]}
									title={v.title}
									description={v.description}
									dest={`/portfolio/${v.slug}`}
									key={key}
								/>
							)
						})}
					</div>
				</Featured>
			</Layout>
		</>
	)
}

export async function getStaticProps() {
	let projects = await fetchData('projects')
	return {
		props: {
			featured: projects.filter((project) => project.featured === true)
		}
	}
}
