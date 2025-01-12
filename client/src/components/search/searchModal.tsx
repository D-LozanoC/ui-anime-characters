import { Anime } from "@/types/anime"
import { Dispatch, forwardRef, SetStateAction, useEffect, useImperativeHandle, useRef, useState } from "react"
import SearchModalForm from "./searchModalForm"
import Link from "next/link"
import { Character } from "@/types/character"
import { isAnime, isArrayObject, isArrayString, isCharacter } from "@/utils/isData"

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
    const [isAbilities, setIsAbilities] = useState<boolean>(false)

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
                        const response = await fetch(`https://anime-crud-api.vercel.app/api/animes/${props.toDelete}`, {
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
                        const response = await fetch(`https://anime-crud-api.vercel.app/api/animes/${data.animeId}/characters/${props.toDelete}`, {
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
        console.log(isAbilities);

    }, [props.toDelete, props.toUpdate]);

    const onClose = () => {
        setToUpdate(false)
        setIsAbilities(false)
        dialogRef.current?.close()
    }

    const onDeleteHandle = () => {
        let title
        if (isAnime(data)) {
            title = 'anime'
        } else if (isCharacter(data)) {
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

    const onSeeAbilitiesHandle = () => {
        setIsAbilities((prev) => !prev)
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
                                    <div className="modalCharacterInfo ">
                                        <h1 className={isAbilities ? "abilitiesTrue" : ""}>{data.name}</h1>
                                        <small className={isAbilities ? "abilitiesTrue" : ""}>{data.birthDate + ', ' + data.age}</small>
                                        <p className={isAbilities ? "abilitiesTrue" : ""}>{data.description}</p>
                                        <p className={isAbilities ? "abilitiesTrue" : ""}>{data.bio}</p>
                                        <p className={isAbilities ? "abilitiesTrue" : ""}>{data.background}</p>
                                        <p className={isAbilities ? "abilitiesTrue" : ""}>{data.personality}</p>
                                        <p className={isAbilities ? "abilitiesTrue" : ""}>{data.role}</p>
                                        <table className={isAbilities ? "abilities" : "abilitiesTrue"}>
                                            <thead>
                                                <tr>
                                                    <th>Nombre</th>
                                                    <th>Descripción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.abilities.map((ability) => {
                                                        const idx = crypto.randomUUID()
                                                        return (
                                                            <tr key={ability + idx} className="ability">
                                                                <td>{(ability as { name: string }).name}</td>
                                                                <td>{(ability as { description: string }).description}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                        <div className="modalButtons">
                                            <button className={isAbilities ? "abilitiesTrue" : "update"} onClick={onUpdateHandle}>Update</button>
                                            <button className={isAbilities ? "abilitiesTrue" : "delete"} onClick={onDeleteHandle}>Delete</button>
                                            <button className="see" onClick={onSeeAbilitiesHandle}>{isAbilities ? "Regresar" : "Habilidades"}</button>
                                        </div>
                                        <span className="statusContainer">
                                            <p>{data.origin}</p>
                                            <span className={`statusName origin`} />
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