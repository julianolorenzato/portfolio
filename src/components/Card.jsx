import Link from 'next/link'

export function Card(props) {

    const cardHeight = props.small ? "card card_small" : "card card_medium"

    return (
        <Link href={props.dest}>
            <div className={cardHeight}>
                <div className="card_img-container">
                    <img className="card_img" src={props.src} alt={props.alt} />
                </div>
                <div className="card_h1-container">
                    <h1 className="card_t1">{props.title}</h1>
                </div>
                <div className="card_description-container">
                    <p>{props.description}</p>
                    {props.children}
                </div>
            </div>
        </Link>
    )
}