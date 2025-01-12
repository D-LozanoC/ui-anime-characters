'use client'

import SearchCards from "@/components/search/searchCards";
import { Anime } from "@/types/anime";
import { Character } from "@/types/character";
import { } from "@/utils/skeletons";
import { useEffect, useState } from "react"
import '@/styles/main.css'
import SearchFilters, { filtersType } from "@/components/search/searchFilters";
import SearchPagination from "@/components/search/searchPagination";
import { isAnime } from "@/utils/isData";

export default function AnimeCharacters({ params }: { params: Promise<{ animeId: string }> }) {
    const [characters, setCharacters] = useState<Character[]>([])
    const [filters, setFilters] = useState<filtersType>({
        search: '',
        ability: 'all',
        order: 'asc',
        type: true,
        isAnime: isAnime(characters[0])
    })
    const [animeId, setAnimeId] = useState<string | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [toDelete, setToDelete] = useState<string | undefined>('')
    const [characterToUpdate, setCharacterToUpdate] = useState<Anime | Character | undefined>()
    const [created, setCreated] = useState<boolean>(false)
    const [pageSize, setPageSize] = useState(20)
    const [page, setPage] = useState(1)
    const [totalCharacters, setTotalCharacters] = useState<number>(0)


    useEffect(() => {
        params.then(p => {
            setAnimeId(p.animeId);
            setFilters(prev => ({ ...prev, animeId: p.animeId }));
        });
    }, [params])

    useEffect(() => {
        const { search, ability, order } = filters;
        const abilityParam = ability === 'all' ? '' : `&abilities=${ability}`;
        const searchParam = search ? `&name=${search}` : '';
        const orderParam = order ? `&order=${order}` : '';

        if (animeId) {
            fetch(`https://anime-crud-api.vercel.app/api/animes/${animeId}/characters?page=${page}&pageSize=${pageSize}${abilityParam}${searchParam}${orderParam}`)
                .then(result => result.ok ? result.json() : setError(new Error('FetchError')))
                .then(data => setCharacters(data))
                .catch(err => setError(err))

            fetch(`https://anime-crud-api.vercel.app/api/animes/${animeId}/characters`)
                .then(result => result.ok ? result.json() : setError(new Error('FetchError')))
                .then(data => setTotalCharacters(data.length))
                .catch(err => setError(err))
        }

        if (characterToUpdate && animeId) {
            fetch(`https://anime-crud-api.vercel.app/api/animes/${animeId}/characters/${characterToUpdate.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(characterToUpdate)
            }).catch(err => {
                console.log(err.name, err.message)
            }).finally(() => setCharacterToUpdate(undefined))
        }

        if (created) {
            setCreated(false)
        }

    }, [animeId, filters, page, pageSize, toDelete, characterToUpdate, created])

    const handlePageSizeChange = (size: number) => {
        setPageSize(size);
    }

    if (error) return <h1>{error.message}</h1>

    return (
        <main>
            <SearchFilters
                filters={filters}
                setCreated={setCreated}
                setFilters={setFilters}
            />
            <SearchCards
                data={characters}
                setToDelete={setToDelete}
                setToUpdate={setCharacterToUpdate}
                toDelete={toDelete}
                toUpdate={characterToUpdate}
            />
            <SearchPagination
                onPageSizeChange={handlePageSizeChange}
                page={page}
                pageSize={pageSize}
                setPage={setPage}
                setPageSize={setPageSize}
                totalData={totalCharacters}
            />
        </main>
    )
}
