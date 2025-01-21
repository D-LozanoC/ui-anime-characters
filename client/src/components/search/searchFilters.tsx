'use client';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import CreateModal from "../CreateModal";
import { getAllFilters } from "@/services/filters";

export type filtersType = {
    search: string,
    genre?: string,
    order: string,
    status?: string,
    type?: boolean,
    ability?: string,
    animeId?: string,
    isAnime: boolean
}

type filterProps = {
    filters: filtersType,
    setFilters: Dispatch<SetStateAction<filtersType>>,
    setCreated: Dispatch<SetStateAction<boolean>>
}

export default function SearchFilters({ filters, setFilters, setCreated }: filterProps) {
    const ref = useRef<HTMLDialogElement>(null)
    const [genres, setGenres] = useState<string[]>([]);
    const [abilities, setAbilities] = useState<string[]>([]);
    const [status, setStatus] = useState<string[]>([]);
    const [err, setErr] = useState<Error | null>(null);

    const data = {
        genres,
        status,
        abilities,
        animeId: filters.animeId,
        isAnime: filters.isAnime
    }

    useEffect(() => {
        getAllFilters(setGenres, setStatus, setAbilities, setErr)
    }, []);

    const handleGenreChange = (e: { target: { value: any; }; }) => {
        setFilters((prev: any) => ({ ...prev, genre: e.target.value }));
    }
    
    const handleAbilityChange = (e: { target: { value: any; }; }) => {
        setFilters((prev: any) => ({ ...prev, ability: e.target.value }));
    }

    const handleStatusChange = (e: { target: { value: any; }; }) => {
        setFilters((prev: any) => ({ ...prev, status: e.target.value }));
    }

    const handleSearchChange = (e: { target: { value: any; }; }) => {
        setFilters((prev: any) => ({ ...prev, search: e.target.value }));
    }

    const handleOrderChange = (order: 'asc' | 'desc') => {
        setFilters((prev: any) => ({ ...prev, order }));
    }

    const handleCreateClick = () => {
        if (ref.current) { ref.current.show() }
    }

    if (err) return <h1>Error: {err.message}</h1>;

    return (
        <search>
            <input
                type="text"
                id="search"
                placeholder="Buscar..."
                value={filters.search}
                onChange={handleSearchChange}
            />
            {
                filters.type
                    ?
                    (
                        <select
                            className="genres"
                            id="genres"
                            value={filters.ability}
                            onChange={handleAbilityChange}
                        >
                            <option value="all">Habilidades</option>
                            {abilities.map((ability) => (
                                <option key={ability} value={ability}>
                                    {ability}
                                </option>
                            ))}
                        </select>
                    )
                    :
                    (
                        <>
                            <select
                                className="genres"
                                id="genres"
                                value={filters.genre}
                                onChange={handleGenreChange}
                            >
                                <option value="all">Géneros</option>
                                {genres.map((genre) => (
                                    <option key={genre} value={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="status"
                                id="status"
                                value={filters.status}
                                onChange={handleStatusChange}
                            >
                                <option value="all">Status</option>
                                {status.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </>
                    )
            }

            <button className="plus" onClick={handleCreateClick}>+</button>
            <CreateModal ref={ref} data={data} setCreated={setCreated} />
            <div className="sorts">
                <button id="asc" onClick={() => handleOrderChange('asc')} className={filters.order === "asc" ? "active" : ""}>⬆ A-Z</button>
                <button id="desc" onClick={() => handleOrderChange('desc')} className={filters.order === "desc" ? "active" : ""}>⬇ Z-A</button>
            </div>
        </search>
    );
}
