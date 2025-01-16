'use client'

import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Anime } from '@/types/anime';
import Footer from '@/components/Footer';
import HeaderT from '@/components/HeaderT';
import '@/styles/home.css'

async function getNewAnimesPerTime(setPage: Dispatch<SetStateAction<number>>, page: number) {
  setTimeout(() => {
    console.log(page);

    if (page >= 5) {
      console.log(page);
      setPage(0)
      return
    }
    console.log(page++);
    setPage(page++)
    return
  }, 10000)
}

export default function Home() {
  const [animesImg, setAnimeImg] = useState<string[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    fetch(`https://anime-crud-api.vercel.app/api/animes?pageSize=6&page=${page}`)
      .then(result => result.json())
      .then(data => {
        const url: string[] = []
        data.map((anime: Anime) => {
          url.push(anime.thumbnail)
        });
        setAnimeImg(url)
      })

    getNewAnimesPerTime(setPage, page)
  }, [page])



  return (
    <>
      <HeaderT />
      <div className="home-container">
        {/* <section className="hero"> */}

        {/*  */}
        <section className="hero">
          <div id="contenedor">
            <div id='left'>
              <div className="imgContainer">
                <img src={animesImg[0]} alt="img" />
              </div>
              <div className="imgContainer">
                <img src={animesImg[1]} alt="img" />
              </div>
              <div className="imgContainer">
                <img src={animesImg[2]} alt="img" />
              </div>
            </div>
            <h1 className='heroTitle'>Bienvenido a AnimeCRUD</h1>
            <div id="center">
              <p>
                Un cliente web donde puedes usar las operaciones CRUD en una base de datos de animes y personajes.
              </p>
            </div>
            <Link href="/animes">
              <button className="hero-button">Explora Animes</button>
            </Link>
            <div id='right'>
              <div className="imgContainer">
                <img src={animesImg[3]} alt="img" />
              </div>
              <div className="imgContainer">
                <img src={animesImg[4]} alt="img" />
              </div>
              <div className="imgContainer">
                <img src={animesImg[5]} alt="img" />
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <h2>¿Qué puedes hacer en AnimeCRUD?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Gestión Completa</h3>
              <p>
                Realiza todas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos de animes y personajes.
              </p>
            </div>
            <div className="feature">
              <h3>Filtros Avanzados</h3>
              <p>
                Busca, pagina, ordena y filtra por título, nombre y diferentes características de animes y personajes.
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
          <p>Explora las funcionalidades del sistema y experimenta los métodos CRUD de la app web</p>
          <Link href="/animes">
            <button className="cta-button">Empezar Ahora</button>
          </Link>
        </section>
      </div >
      <Footer />
    </>
  );
}
