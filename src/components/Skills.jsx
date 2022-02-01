import { Circles } from './Circles'
import Image from 'next/image'

export function Skills(props) {

    return (
        <div className='skills'>
            <div className='title'>{props.title}</div>
            <div className='img-container'>
                <Image layout='fill' objectFit='contain' src={`/images/skills-logos/${props.title}.png`} alt={`${props.title}-logo`} />
            </div>
            <Circles circles={props.circles} />
            <div>
                {props.tag.map((tag, key) => <span key={key} className={`tag ${tag}`}>{tag}</span>)}
            </div>
            <div className='skills-description'>
                <hr />
                <span>Conhecimento:</span>
                <ul>
                    {props.description.map((v, key) => {
                        return (
                            <li key={key}>{v}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )

}