import Link from 'next/link'
import '../styles/home.css'

export default function Home() {
  return (
    <div className="home-container">
    {/* Hero Section */}
    <section className="hero">
      <h1>Bienvenido a AnimeCRUD</h1>
      <p>
        Un cliente que muestra las capacidades CRUD y funcionalidades avanzadas para gestionar animes y personajes. Diseñado para demostrar habilidades técnicas y creatividad.
      </p>
      <Link href="/animes">
        <button className="cta-button">Explora Animes</button>
      </Link>
    </section>

    {/* Features Section */}
    <section className="features">
      <h2>¿Qué puedes hacer en AnimeCRUD?</h2>
      <div className="features-grid">
        <div className="feature">
          <h3>Gestión Completa</h3>
          <p>
            Realiza todas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en tu biblioteca de animes y personajes favoritos.
          </p>
        </div>
        <div className="feature">
          <h3>Filtros Avanzados</h3>
          <p>
            Busca y organiza animes y personajes utilizando filtros personalizados, paginación y ordenamiento.
          </p>
        </div>
        <div className="feature">
          <h3>Experiencia Única</h3>
          <p>
            Un diseño colorido e interactivo pensado para facilitar la navegación y ofrecer una experiencia única.
          </p>
        </div>
      </div>
    </section>

    {/* Call-to-Action Section */}
    <section className="cta-section">
      <h2>¿Listo para comenzar?</h2>
      <p>Explora las funcionalidades del sistema y lleva tu gestión de animes al siguiente nivel.</p>
      <Link href="/animes">
        <button className="cta-button">Empezar Ahora</button>
      </Link>
    </section>
  </div>
  );
}
