import Head from 'next/head'
import { Layout } from '../../components/Layout'
import { Skills } from '../../components/Skills'
import { Button } from '../../components/Button'
import { useState } from 'react'

export default function () {

    const hardSkills = [{
        title: 'HTML5',
        description: ['Meta tags', 'Links', 'Listas', 'Formulários', 'Tabelas', 'Imagens', 'Atributos', '...'],
        circles: '10',
        tag: ['frontend']
    }, {
        title: 'CSS3',
        description: ['Seletores', 'Variáveis', 'Especificidade', 'Herança', 'Media Query', 'Flexbox', 'Grid CSS', '...'],
        circles: '8',
        tag: ['frontend']
    }, {
        title: 'JavaScript',
        description: ['Fundamentos da Linguagem', 'Estruturas de dados', 'Loops', 'Condicionais', 'Escopo', 'ESNext', 'Ajax', '...'],
        circles: '8',
        tag: ['frontend', 'backend']
    }, {
        title: 'Node',
        description: ['Módulos', 'npm', 'require()', 'module.exports', '...'],
        circles: '7',
        tag: ['backend']
    }, {
        title: 'React',
        description: ['Componente funcional', 'Componente de classe', 'Parâmetros de componente', 'React Hooks', 'JSX', '...'],
        circles: '8',
        tag: ['frontend']
    }, {
        title: 'Next',
        description: ['Estrutura de pastas', 'Rotas', 'Rotas Dinâmicas', 'Links', 'Next API', '...'],
        circles: '6',
        tag: ['frontend', 'backend']
    }, {
        title: 'Git',
        description: ['Comandos Git CLI'],
        circles: '6',
        tag: ['outro']
    }, {
        title: 'jQuery',
        description: ['Selecionar elementos', 'Modificar elementos', 'Eventos', 'Animações'],
        circles: '4',
        tag: ['frontend']
    }, {
        title: 'Bootstrap',
        description: ['Componentes', 'Classes utilitárias', 'Bootstrap Grid'],
        circles: '6',
        tag: ['frontend']
    }, {
        title: 'SASS',
        description: ['Mixins', 'Variáveis', 'Identação', 'Funções'],
        circles: '5',
        tag: ['frontend']
    }, {
        title: 'Gulp',
        description: ['Processamento de arquivos (minificação)'],
        circles: '4',
        tag: ['outro']
    }, {
        title: 'Webpack',
        description: ['Processamento de arquivos (minificação)'],
        circles: '4',
        tag: ['outro']
    }]

    const [skills, setSkills] = useState(hardSkills)

    const handleClick = (e) => {
        setSkills(
            e.target.textContent !== 'Todos' 
            ? hardSkills.filter(skill => skill.tag.includes(e.target.textContent.toLowerCase())) 
            : hardSkills
        )
        console.log(e.target.textContent)
    }

    return (
        <>
            <Head>
                <title>Sobre</title>
            </Head>
            <Layout title='Habilidades'>
                <div className="btn-container">
                    <Button onClick={handleClick}>Todos</Button>
                    <Button onClick={handleClick}>Frontend</Button>
                    <Button onClick={handleClick}>Backend</Button>
                    <Button onClick={handleClick}>Outro</Button>
                </div>
                <div className='skills-container'>
                    {skills.map((value, key) => {
                        return (
                            <Skills key={key} description={value.description} title={value.title}
                                circles={value.circles} tag={value.tag}></Skills>
                        )
                    })}
                </div>
            </Layout>
        </>
    )
}