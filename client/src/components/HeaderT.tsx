import Link from 'next/link'
import GitHubIco from './icons/GitHubIco'
import LinkedinIco from './icons/LinkedinIco'
import '@/styles/headerTransparent.css'

export default function () {
    return (
        <header className='headerT'>
            <h1>AnimeCRUD</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/animes">Animes</Link>
                    </li>
                    <li>
                        <Link href="/contacto">Contacto</Link>
                    </li>
                    <li>
                        <a href="https://github.com/D-LozanoC" target="_blank" rel="noopener noreferrer">
                            <GitHubIco color='#eee' h='30' w='30' />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/david-lozano-clavijo/" target="_blank" rel="noopener noreferrer">
                            <LinkedinIco color='#eee' w='30' h='30' />
                        </a>
                    </li>
                    <li>
                    </li>
                </ul>
            </nav>
        </header>
    )
}