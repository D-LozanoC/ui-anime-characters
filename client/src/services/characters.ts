'use client'

import { filtersType } from "@/components/search/searchFilters";
import { Character } from "@/types/character";
import { Dispatch, SetStateAction } from "react";

export async function getFilteredCharacters(
    filters: filtersType,
    animeId: string,
    page: number,
    pageSize: number,
    setCharacters: Dispatch<SetStateAction<Character[]>>,
    setError: Dispatch<SetStateAction<Error | null>>
) {
    const { search, ability, order } = filters;
    const abilityParam = ability === 'all' ? '' : `&abilities=${ability}`;
    const searchParam = search ? `&name=${search}` : '';
    const orderParam = order ? `&order=${order}` : '';

    fetch(`https://anime-crud-api.vercel.app/api/animes/${animeId}/characters?page=${page}&pageSize=${pageSize}${abilityParam}${searchParam}${orderParam}`)
        .then(result => result.ok ? result.json() : setError(new Error('FetchError')))
        .then(data => setCharacters(data))
        .catch(err => setError(err))
}

export async function getTotalCharacters(
    setError: Dispatch<SetStateAction<Error | null>>,
    setTotalCharacters: Dispatch<SetStateAction<number>>,
    animeId: string
) {
    fetch(`https://anime-crud-api.vercel.app/api/animes/${animeId}/characters`)
        .then(result => result.ok ? result.json() : setError(new Error('FetchError')))
        .then(data => setTotalCharacters(data.length))
        .catch(err => setError(err))
}