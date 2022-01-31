import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'

export function Label(props) {

    const labelType = props.striped ? 'striped label' : 'label'

    const skullsNumber = new Array(parseInt(props.skulls)).fill('').map(key => {
        return <FontAwesomeIcon className='skull' key={key} icon={faSkull} />
    })

    return (
        <div className='label-container'>
            <div className='label-span'>Dificuldade:</div>
            <div className={labelType}>
                <div className='inner'>
                    {skullsNumber}
                </div>
            </div>
        </div>
    )
}