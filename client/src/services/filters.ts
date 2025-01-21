'use client'
import { Dispatch, SetStateAction } from "react";

const BASE_URL = 'https://anime-crud-api.vercel.app/api/'

export async function getAllFilters(
    setGenres: Dispatch<SetStateAction<string[]>>,
    setStatus: Dispatch<SetStateAction<string[]>>,
    setAbilities: Dispatch<SetStateAction<string[]>>,
    setErr: Dispatch<SetStateAction<Error | null>>
) {
    fetch(`${BASE_URL}genres`)
        .then(response => response.json())
        .then(data => setGenres(data))
        .catch(err => setErr(err));

    fetch(`${BASE_URL}status`)
        .then(response => response.json())
        .then(data => setStatus(data))
        .catch(err => setErr(err));

    fetch(`${BASE_URL}abilities`)
        .then(response => response.json())
        .then(data => setAbilities(data))
        .catch(err => setErr(err));
}