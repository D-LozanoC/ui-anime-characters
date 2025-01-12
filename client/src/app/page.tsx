'use client'

import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Anime } from '@/types/anime';
import Footer from '@/components/Footer';
import HeaderT from '@/components/HeaderT';
import './styles.css'
import '@/styles/home.css'

async function getNewAnimesPerTime(setPage: Dispatch<SetStateAction<number>>, page: number) {
  console.log('entrada función')
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

    console.log('llamada');

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
              {/* <div className="imgContainer">
                <img src={animesImg[6]} alt="img" />
              </div> */}
            </div>
            <h1 className='heroTitle'>Bienvenido a AnimeCRUD</h1>
            <div id="center">
              <p>
                Un cliente web donde puedes
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
              {/* <div className="imgContainer">
              <img src={animesImg[7]} alt="img" />
            </div> */}
            </div>
          </div>
        </section>

        {/* <div className="perspective">
        <div className="imageRow">
          <div className="left">
            
          </div>
        </div>
        <div className="titlePerspective">
          <h1>Bienvenido a AnimeCRUD</h1>
        </div>
        <div className="imageRow right">
          <div className="right">
            <div className="imgContainer">
              <img src={animesImg[3]} alt="img" />
            </div>
            <div className="imgContainer">
              <img src={animesImg[4]} alt="img" />
            </div>
            <div className="imgContainer">
              <img src={animesImg[5]} alt="img" />
            </div>
            <div className="imgContainer">
              <img src={animesImg[7]} alt="img" />
            </div>
          </div>
        </div>
      </div> */}
        {/* </section> */}
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
      </div >
      <Footer />
    </>
  );
}
