import Head from 'next/head'
import { Layout } from '../../components/Layout'
import { Skills } from '../../components/Skills'

export default function () {

    const hardSkills = [{
        title: 'HTML5',
        description: ['Meta tags', 'Links', 'Listas', 'Formulários', 'Tabelas', 'Imagens', 'Atributos', '...'],
        circles: '10'
    }, {
        title: 'CSS3',
        description: ['Seletores', 'Variáveis', 'Especificidade', 'Herança', 'Media Query', 'Flexbox', 'Grid CSS', '...'],
        circles: '8'
    }, {
        title: 'JavaScript',
        description: ['Fundamentos da Linguagem', 'Estruturas de dados', 'Loops', 'Condicionais', 'Escopo', 'ESNext', 'Ajax', '...'],
        circles: '8'
    }, {
        title: 'Node',
        description: ['Módulos', 'npm', 'require()', 'module.exports', '...'],
        circles: '7'
    }, {
        title: 'React',
        description: ['Componente funcional', 'Componente de classe', 'Parâmetros de componente', 'React Hooks', 'JSX', '...'],
        circles: '8'
    }, {
        title: 'Next',
        description: ['Estrutura de pastas', 'Rotas', 'Rotas Dinâmicas', 'Links', 'Next API', '...'],
        circles: '6'
    }, {
        title: 'Git',
        description: ['Comandos Git CLI'],
        circles: '6'
    }, {
        title: 'jQuery',
        description: ['Selecionar elementos', 'Modificar elementos', 'Eventos', 'Animações'],
        circles: '4'
    }, {
        title: 'Bootstrap',
        description: ['Componentes', 'Classes utilitárias', 'Bootstrap Grid'],
        circles: '6'
    }, {
        title: 'SASS',
        description: ['Mixins', 'Variáveis', 'Identação', 'Funções'],
        circles: '5'
    }, {
        title: 'Gulp',
        description: ['Processamento de arquivos (minificação)'],
        circles: '4'
    }, {
        title: 'Webpack',
        description: ['Processamento de arquivos (minificação)'],
        circles: '4'
    }]

    const softSkills = [{
        title: 'Liderança',
        description: ['Liderar'],
        circles: '5'
    }]

    return (
        <>
            <Head>
                <title>Sobre</title>
            </Head>
            <Layout>
                <div className='skills-container'>
                    {softSkills.map((value, key) => {
                        return (
                            <Skills noImg key={key} description={value.description}
                                title={value.title} circles={value.circles}></Skills>
                        )
                    })}
                </div>
                <div className='skills-container'>
                    {hardSkills.map((value, key) => {
                        return (
                            <Skills needImage key={key} description={value.description}
                                title={value.title} circles={value.circles}></Skills>
                        )
                    })}
                </div>
            </Layout>
        </>
    )
}