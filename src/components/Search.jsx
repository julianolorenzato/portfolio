import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export function Search(props) {
    return (
        <div className='search'>
            <input onChange={props.onChange} placeholder='Pesquisar...' className='search-input' type="search" name="search" id="search" />
            <button className='search-button'><FontAwesomeIcon className='search-icon' icon={faSearch} /></button>
        </div>
    )
}