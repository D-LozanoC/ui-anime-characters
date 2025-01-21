'use client'

import { useEffect, useState } from "react";
import { Anime } from "@/types/anime";
import SearchFilters, { filtersType } from "@/components/search/searchFilters";
import SearchCards from "@/components/search/searchCards";
import SearchPagination from "@/components/search/searchPagination";
import { Character } from "@/types/character";
import { isAnime } from "@/utils/isData";
import '@/styles/main.css'
import { getAllAnimes, getAnimesByFilters } from "@/services/animes";

export default function Animes() {
    const [animes, setAnimes] = useState<Anime[]>([]);
    const [filters, setFilters] = useState<filtersType>({ search: '', genre: 'all', order: 'asc', status: 'all', isAnime: isAnime(animes[0]) });
    const [page, setPage] = useState(1);
    const [totalAnimes, setTotalAnimes] = useState<number>(0)
    const [pageSize, setPageSize] = useState(20)
    const [err, setErr] = useState<Error | null>(null)
    const [toDelete, setToDelete] = useState<string | undefined>('')
    const [animeToUpdate, setAnimeToUpdate] = useState<Anime | Character | undefined>()
    const [created, setCreated] = useState<boolean>(false)


    useEffect(() => {
        getAnimesByFilters(filters, setAnimes, page, pageSize, setErr)
        getAllAnimes(setTotalAnimes, setErr)
        

        if (animeToUpdate) {
            fetch('https://anime-crud-api.vercel.app/api/animes/' + animeToUpdate.id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(animeToUpdate)
            }).catch(err => {
                console.log(err.name, err.message)
            }).finally(() => setAnimeToUpdate(undefined))
        }

        if (created) {
            setCreated(false)
        }

    }, [filters, page, pageSize, toDelete, animeToUpdate, created]);

    const handlePageSizeChange = (size: number) => {
        setPageSize(size);
    }

    if (err) return <h1>{err.name}: {err.message}</h1>

    return (
        <>
            <main>
                <SearchFilters filters={filters} setFilters={setFilters} setCreated={setCreated} />
                <SearchCards data={animes} toDelete={toDelete} setToDelete={setToDelete} setToUpdate={setAnimeToUpdate} toUpdate={animeToUpdate} />
                <SearchPagination onPageSizeChange={handlePageSizeChange} page={page} setPage={setPage} pageSize={pageSize} setPageSize={setPageSize} totalData={totalAnimes} />
            </main>
        </>
    )
}
