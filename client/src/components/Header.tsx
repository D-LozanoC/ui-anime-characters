import Link from 'next/link'
import '../styles/header.css'

export default function () {
    return (
        <header>
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
                </ul>
            </nav>
        </header>
    )
}