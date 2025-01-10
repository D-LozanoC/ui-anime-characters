'use client'

import { Dispatch, SetStateAction, useRef, useState } from "react";
import SearchCard from "./searchCard";
import SearchModal from "./searchModal";
import { Anime } from "@/types/anime";
import { Character } from "@/types/character";
import {isAnime} from "@/utils/isData";

type cardsProps = {
    data: Anime[] | Character[] | undefined,
    setToDelete: Dispatch<SetStateAction<string | undefined>>,
    toDelete: string | undefined,
    setToUpdate: Dispatch<SetStateAction<Anime | Character | undefined>>,
    toUpdate: Anime | Character | undefined
}

export default function SearchCards(params: cardsProps) {
    const ref = useRef<HTMLDialogElement>(null)
    const [modalData, setModalData] = useState<Anime | Character | undefined>(undefined)

    const handleClick = (data: Anime | Character) => {
        setModalData(data)
        if (ref.current) { ref.current.show() };
    }
    
    return (
        <>
            <section className='cards'>
                {
                    isAnime(params.data)
                        ?
                        params.data.map((anime) => (
                            < SearchCard
                                key={anime.id}
                                data={anime}
                                handleClick={() => handleClick(anime)}
                            />)
                        )
                        :
                        params.data?.map((character) => (
                            < SearchCard
                                key={character.id}
                                data={character}
                                handleClick={() => handleClick(character)}
                            />)
                        )
                }
            </section>
            <SearchModal
                ref={ref}
                data={modalData}
                setToDelete={params.setToDelete}
                toDelete={params.toDelete}
                setToUpdate={params.setToUpdate}
                toUpdate={params.toUpdate}
            />
        </>
    )
}