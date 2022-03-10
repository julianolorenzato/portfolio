import Head from 'next/head'
import { BtnContainer, SkillsContainer } from './styles'

import { Layout } from '../../components/Layout'
import { Skill } from '../../components/Skill'
import { Button } from '../../components/Button'

import { useState } from 'react'
import fetchData from '../../fetchs/fetchData'

export default function About(props) {
    const [skills, setSkills] = useState(props.skills)

    const handleClick = (e) => {
        console.log(e.target.textContent)
        setSkills(
            e.target.textContent !== 'Todos' 
            ? hardSkills.filter(skill => skill.categories.includes(e.target.textContent.toLowerCase())) 
            : hardSkills
        )
    }

    return (
        <>
            <Head>
                <title>Sobre</title>
            </Head>
            <Layout title='Habilidades'>
                <BtnContainer>
                    <Button onClick={handleClick}>Todos</Button>
                    <Button onClick={handleClick}>Frontend</Button>
                    <Button onClick={handleClick}>Backend</Button>
                    <Button onClick={handleClick}>Outro</Button>
                </BtnContainer>
                <SkillsContainer>
                    {skills.map((v, k) => {
                        return (
                            <Skill key={k} knowledge={v.knowledge} title={v.title}
                                circles={v.level} tag={v.categories}></Skill>
                        )
                    })}
                </SkillsContainer>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            skills: await fetchData('skills')
        }
    }
}