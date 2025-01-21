'use client'
import { filtersType } from "@/components/search/searchFilters"
import { Anime } from "@/types/anime"
import { Dispatch, SetStateAction } from "react"

const BASE_URL = 'https://anime-crud-api.vercel.app/api/animes'

export async function getAllAnimes(setTotalAnimes: Dispatch<SetStateAction<number>>, setErr: Dispatch<SetStateAction<Error | null>>) {
    fetch(`https://anime-crud-api.vercel.app/api/animes`)
    .then(response => response.json())
    .then(data => {
        setTotalAnimes(data.length)
    })
    .catch(err => setErr(err));
}

export async function getAnimesByFilters(filters: filtersType, setAnimes: Dispatch<SetStateAction<Anime[]>>, page: number, pageSize: number, setErr: Dispatch<SetStateAction<Error | null>>) {
    const { search, genre, order, status } = filters;
    const genreParam = genre === 'all' ? '' : `&genres=${genre}`;
    const searchParam = search ? `&title=${search}` : '';
    const orderParam = order ? `&order=${order}` : '';
    const statusParam = status === 'all' ? '' : `&status=${status}`

    fetch(`https://anime-crud-api.vercel.app/api/animes?page=${page}&pageSize=${pageSize}${genreParam}${searchParam}${orderParam}${statusParam}`)
        .then(response => response.json())
        .then(data => {
            const animesArray: Anime[] = data.map((anime: Anime) => {
                anime.genres = anime.genres.map((genre: any) => genre.name)
                return anime
            })
            setAnimes(animesArray);
        })
        .catch(err => setErr(err));
}

export async function getAnimesByPage(page: number, pageSize: number, setAnimeImg: Dispatch<SetStateAction<string[]>>) {
    fetch(`${BASE_URL}?pageSize=${pageSize}&page=${page}`)
        .then(result => result.json())
        .then(data => {
            const url: string[] = []
            data.map((anime: Anime) => {
                url.push(anime.thumbnail)
            })
            setAnimeImg(url)
            console.log('Data resolved');
        })
}