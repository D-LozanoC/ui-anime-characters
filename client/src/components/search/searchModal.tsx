import { Anime } from "@/types/anime"
import { Dispatch, forwardRef, SetStateAction, useEffect, useImperativeHandle, useRef, useState } from "react"
import SearchModalForm from "./searchModalForm"
import Link from "next/link"
import { Character } from "@/types/character"
import { isAnime, isCharacter } from "@/utils/isData"

type modalProps = {
    data: Anime | Character | undefined,
    setToDelete: Dispatch<SetStateAction<string | undefined>>,
    toDelete: string | undefined,
    setToUpdate: Dispatch<SetStateAction<Anime | Character | undefined>>,
    toUpdate: Anime | Character | undefined
}

const SearchModal = forwardRef((props: modalProps, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    const data = props.data
    const [toUpdate, setToUpdate] = useState<boolean>(false)

    useImperativeHandle(ref, () => {
        return {
            show() {
                if (dialogRef.current) dialogRef.current.showModal();
            }
        }
    })

    useEffect(() => {
        if (props.toDelete) {
            if (isAnime(data)) {
                const deleteAnime = async () => {
                    try {
                        const response = await fetch(`http://localhost:3001/api/animes/${props.toDelete}`, {
                            method: "DELETE",
                        });

                        if (!response.ok) {
                            throw new Error(`Error al eliminar: ${response.statusText}`);
                        }

                        console.log(`Anime con id ${props.toDelete} eliminado exitosamente.`);
                    } catch (err: any) {
                        console.error("Error al eliminar el anime:", err.message);
                    } finally {
                        props.setToDelete("");
                    }
                };

                deleteAnime();
            } else if (isCharacter(data)) {
                const deleteAnime = async () => {
                    try {
                        const response = await fetch(`http://localhost:3001/api/animes/${data.animeId}/characters/${props.toDelete}`, {
                            method: "DELETE",
                        });

                        if (!response.ok) {
                            throw new Error(`Error al eliminar: ${response.statusText}`);
                        }

                        console.log(`Anime con id ${props.toDelete} eliminado exitosamente.`);
                    } catch (err: any) {
                        console.error("Error al eliminar el anime:", err.message);
                    } finally {
                        props.setToDelete("");
                    }
                };

                deleteAnime();
            }
        }

        if (props.toUpdate) {
            onClose()
        }

    }, [props.toDelete, props.toUpdate]);

    const onClose = () => {
        setToUpdate(false)
        dialogRef.current?.close()
    }

    const onDeleteHandle = () => {
        let title
        if (isAnime(data)) {
            title = 'anime'
        } else if (isCharacter(data)){
            title = 'personaje'
        }
        if (confirm(`¿Esta seguro de borrar el ${title}?`)) {
            if (data && data.id) {
                props.setToDelete(data.id)
            }
            onClose()
        }
    }

    const onUpdateHandle = () => {
        setToUpdate((prev) => !prev)
    }

    const onHrefHandle = () => {
        window.location.href = `http://localhost:3000/animes/${data?.id}`
    }

    if (!data) {
        return
    }

    return (
        <>
            <dialog ref={dialogRef}>
                {
                    toUpdate ?
                        (<SearchModalForm data={data} setToUpdate={setToUpdate} setDataToUpdate={props.setToUpdate} />)
                        :
                        isAnime(data)
                            ? (

                                <div className="searchModal">
                                    <img src={data.thumbnail} alt="data" />
                                    <div className="modalInfo">
                                        <h1>{data.title}</h1>
                                        <span className="creationInfo">
                                            <small><strong>
                                                <time dateTime={new Date(data.releaseDate).toString()}>{new Date(data.releaseDate).getFullYear().toString() + ', '}</time>
                                                {data.studio}
                                            </strong></small>
                                            <small>{data.director}</small>
                                        </span>
                                        <span className="episodes">
                                            <p>{data.episodeCount} episodios, {data.durationPerEpisode} min</p>
                                        </span>

                                        <span>
                                            <div className="tags">
                                                {data.genres.map((genre) => (
                                                    <small key={genre} className="tag">{genre}</small>
                                                ))}
                                            </div>
                                        </span>

                                        <p className="synopsisModal">{data.synopsis}</p>

                                        <div className="modalButtons">
                                            <button className="update" onClick={onUpdateHandle}>Update</button>
                                            <button className="delete" onClick={onDeleteHandle}>Delete</button>
                                            <Link className="see" href={`/animes/${data?.id}`}>
                                                <p onClick={onHrefHandle}>Personajes</p>
                                            </Link>
                                        </div>
                                        <span className="statusContainer">
                                            <p>{data.statusName}</p>
                                            <span className={`statusName status-${data.statusName.toLowerCase()}`} />
                                        </span>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="searchModal">
                                    <img src={data.thumbnail} alt="data" />
                                    <div className="modalCharacterInfo">
                                        <h1>{data.name}</h1>

                                        <span>
                                            <div className="tags">
                                                {data.abilities.map((ability) => {
                                                    if (typeof ability === 'object' && 'name' in ability) {
                                                        return (
                                                            <small key={ability.name + data.name} className="tag">{ability?.name}</small>
                                                        )
                                                    }
                                                    return (<></>)
                                                })}
                                            </div>
                                        </span>

                                        <div className="modalButtons">
                                            <button className="update" onClick={onUpdateHandle}>Update</button>
                                            <button className="delete" onClick={onDeleteHandle}>Delete</button>
                                        </div>
                                        <span className="statusContainer">
                                            <p>{data.role}</p>
                                            <span className={`statusName status-${data.role.toLowerCase()}`} />
                                        </span>
                                    </div>
                                </div>
                            )
                }
                <button className="close" onClick={onClose}>«</button>
            </dialog>
        </>
    )

})


export default SearchModal