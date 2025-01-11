'use client'

import Link from 'next/link'
import '../styles/home.css'
import { useEffect, useState } from 'react';
import { Anime } from '@/types/anime';

export default function Home() {
  const [animesImg, setAnimeImg] = useState<string[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    fetch(`http://localhost:3001/api/animes?pageSize=6&page=${page}`)
      .then(result => result.json())
      .then(data => {
        const url: string[] = []
        data.map((anime: Anime) => {
          url.push(anime.thumbnail)
        });        
        setAnimeImg(url)
      })
  }, [page])

  

  return (
    <div className="home-container">
      <section className="hero">

        <h1>Bienvenido a AnimeCRUD</h1>
        <p>
          Un cliente web donde puedes
        </p>
        <Link href="/animes">
          <button className="cta-button">Explora Animes</button>
        </Link>
        <div className="perspective-container">
          <div className="row left">
            <img src={animesImg[0]} alt="Imagen 1" />
            <img src={animesImg[1]} alt="Imagen 2" />
            <img src={animesImg[2]} alt="Imagen 3" />
          </div>
          <h1 className="title">Título Central</h1>
          <div className="row right">
            <img src={animesImg[3]} alt="Imagen 4" />
            <img src={animesImg[4]} alt="Imagen 5" />
            <img src={animesImg[5]} alt="Imagen 6" />
          </div>
        </div>
      </section>

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
