import '@/styles/footer.css'
import LinkedinIco from './icons/LinkedinIco';
import GitHubIco from './icons/GitHubIco';

export default function Footer() {
    return (
        <footer>
            <p>© 2025 AnimeCRUD. Proyecto realizado para la materia de Programación por Componentes.</p>
            <div className="footer-social">
                <a href="https://github.com/D-LozanoC" target="_blank" rel="noopener noreferrer">
                    <GitHubIco color='#eee' h='30' w='30' />
                </a>
                <a href="https://www.linkedin.com/in/david-lozano-clavijo/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIco color='#eee' w='30' h='30' />
                </a>
            </div>
        </footer>
    );
}
