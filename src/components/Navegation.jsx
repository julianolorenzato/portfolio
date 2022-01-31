import Link from 'next/link'

export function Navegation(props) {
    return (
        <Link href={props.dest}>
            {props.label}
        </Link>
    )
}