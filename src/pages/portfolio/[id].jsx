import Head from 'next/head'

import Layout from '../../components/Layout'

export async function getStaticPaths() {

    const resp = await fetch('http://localhost:3000/api/projects').then(r => r.json())

    return {

        paths: resp.map((project) => {
            return {
                params: {
                    id: project.id,
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps(context) {

    const resp = await fetch(`http://localhost:3000/api/projects?id=${context.params.id}`).then(r => r.json())

    return {
        props: {
            resp,
        }
    }
}

export default function (props) {
    return (
        <>
            <Head>
                <title>{props.resp.title}</title>
            </Head>
            <Layout>
                <li>Id: {props.resp.id}</li>
                <li>slug: {props.resp.slug}</li>
                <li>title: {props.resp.title}</li>
                <li>description: {props.resp.description}</li>
                <li>src: {props.resp.src}</li>
                <li>alt: {props.resp.alt}</li>
                <li>difficulty: {props.resp.difficulty}</li>
                
                
                
                
                
                
                
            </Layout>
        </>
    )
}