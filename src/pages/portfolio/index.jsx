import Head from 'next/head'
import { Layout } from '../../components/Layout'
import { Label } from '../../components/Label'
import { Card } from '../../components/Card'

export default function (props) {
    return (
        <>
            <Head>
                <title>Portfólio</title>
            </Head>
            <Layout>
                <h1>Lista de Projetos</h1>
                <div className="projects-list">
                    {props.json.map((v, key) => {
                        return (
                            <Card title={v.title} description={v.description}
                                small dest={`/portfolio/${v.id}`} key={key}>
                                <Label skulls={v.difficulty} striped></Label>
                            </Card>
                        )
                    })}
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {

    const resp = await fetch('http://localhost:3000/api/projects')
    const json = await resp.json()

    return {
        props: {
            json
        }
    }
}