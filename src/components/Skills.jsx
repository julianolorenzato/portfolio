import { Circles } from './Circles'

export function Skills(props) {

    const noImg = props.noImg ? 'no-img' : ''

    return (
        <div className='skills'>
            <div className='title'>{props.title}</div>
            <img className={noImg} src={`images/skills-logos/${props.title}.png`} alt={`${props.title}-logo`} />
            <Circles circles={props.circles} />
            <div className='skills-description'>
                <hr />
                <span>Conhecimento:</span>
                <ul>
                    {props.description.map((v, key) => {
                        return(
                            <li key={key}>{v}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}