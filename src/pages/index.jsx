import Head from 'next/head'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { Label } from '../components/Label'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function (props) {
    return (
        <>
            <Head>
                <title>Início</title>
            </Head>
            <Layout>
                <div className="speech-bubble">
                    <h1 className="t1">Juliano<br />Lorenzato</h1>
                    <h2 className="t2">FullStack Developer</h2>
                </div>
                <div className="speech-bubble2">
                    <ul>
                        <li>
                            <FontAwesomeIcon className='social-icon' size='2x' icon={faLinkedin}/>
                            <Link href='https://www.linkedin.com/in/julianolorenzato/'>
                                <a target="_blank">LinkedIn</a>
                            </Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className='social-icon' size='2x' icon={faGithub}/>
                            <Link href='https://github.com/julianolorenzato'>
                                <a target="_blank">GitHub</a>
                            </Link>
                        </li>
                        <li>
                            <FontAwesomeIcon className='social-icon' size='2x' icon={faEnvelope}/>
                            <a href="mailto:julianolorenzato@gmail.com">
                                julianolorenzato@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <img className="image" src="images/juliano.png" alt="juliano-image" />
                <section className="featured">
                    <div className="t3-container">
                        <h3 className="t3">Destaques</h3>
                    </div>
                    <div className="featured-list">
                        {props.final.map((v, key) => {
                            return (
                                <Card title={v.title} description={v.description}
                                    medium dest={`/portfolio/${v.id}`} key={key}>
                                    <Label skulls={v.difficulty} striped></Label>
                                </Card>
                            )
                        })}

                    </div>
                </section>
            </Layout>
        </>
    )
}

export async function getStaticProps() {

    const final = []

    for (let i = 1; i <= 3; i++) {
        let resp = await fetch(`http://localhost:3000/api/projects?id=${i}`)
        let json = await resp.json()
        final.push(json)
    }

    return {
        props: {
            final
        }
    }
}