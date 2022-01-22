import Link from 'next/link'

export default function (props) {
    return (
        <Link href={props.dest}>
            {props.label}
        </Link>
    )
}