import { Navegation } from './Navegation'
export function Layout(props) {
    return (
        <>
            <header className='header'>
                <nav className='navegator'>
                    <Navegation label="Início" dest="/"></Navegation>
                    <Navegation label="Sobre" dest="/sobre"></Navegation>
                    <Navegation label="Portfólio" dest="/portfolio"></Navegation>
                </nav>
            </header>
            <main className='content'>
                {props.children}
            </main>
        </>
    )
}