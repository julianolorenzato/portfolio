export default function handler(req, res) {

    const projects = [{
        id: '1',
        slug: 'projeto-1',
        title: 'Projeto 1',
        description: 'Esse é o um',
        src: '/images/skills-logos/bootstrap.png',
        alt: 'alt1',
        difficulty: '3'
    }, {
        id: '2',
        slug: 'projeto-2',
        title: 'Projeto 2',
        description: 'Esse é o dois',
        src: '/images/skills-logos/bootstrap.png',
        alt: 'alt2',
        difficulty: '1'
    }, {
        id: '3',
        slug: 'projeto-3',
        title: 'Projeto 3',
        description: 'Esse é o tres',
        src: '/images/skills-logos/bootstrap.png',
        alt: 'alt3',
        difficulty: '2'
    }, {
        id: '4',
        slug: 'projeto-4',
        title: 'Projeto 4',
        description: 'Esse é o quatro',
        src: '/images/skills-logos/bootstrap.png',
        alt: 'alt4',
        difficulty: '3'
    }, {
        id: '5',
        slug: 'projeto-5',
        title: 'Projeto 5',
        description: 'Esse é o cinco',
        src: '/images/skills-logos/bootstrap.png',
        alt: 'alt5',
        difficulty: '1'
    }, {
        id: '6',
        slug: 'projeto-6',
        title: 'Projeto 6',
        description: 'Esse é o seis',
        src: '/images/skills-logos/bootstrap.png',
        alt: 'alt6',
        difficulty: '2'
    }]

    const id = req.query.id

    if (id) {
        res.status(200).json(projects[id - 1])
    } else {
        res.status(200).json(projects)
    }
}