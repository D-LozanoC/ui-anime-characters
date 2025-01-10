import { Anime } from "@/types/anime";
import { Dispatch, forwardRef, SetStateAction, useEffect, useImperativeHandle, useRef, useState } from "react";
import '@/styles/create.css'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { customStyles } from "../utils/customStyles";
import { Character } from "@/types/character";
import { isAnime, isCharacter } from "@/utils/isData";
import { animeSkeleton, characterSkeleton } from "@/utils/skeletons";


type createModalProps = {
    data: {
        genres?: string[],
        status?: string[],
        abilities?: string[],
        animeId?: string,
        isAnime: boolean
    }
    setCreated: Dispatch<SetStateAction<boolean>>
}

const resetFormData = (setFormData: Dispatch<any>) => {

}

const CreateModal = forwardRef(({ data, setCreated }: createModalProps, ref) => {
    const genresOptions = data.genres?.map(genre => ({ value: genre, label: genre }))
    const abilitiesOptions = data.abilities?.map(ability => ({ value: ability, label: ability }))
    const statusOptions = data.status?.map(status => ({ value: status, label: status }))

    const dialogRef = useRef<HTMLDialogElement>(null)

    const [formData, setFormData] = useState<any>();
    const [newData, setNewData] = useState<Omit<Anime, 'id'> | Omit<Character, 'id'> | undefined>()
    const [selectedGenres, setSelectedGenres] = useState<{ value: string; label: string }[]>([]);
    const [selectedAbilities, setSelectedAbilities] = useState<{ value: string; label: string }[]>([]);
    const [selectedStatus, setSelectedStatus] = useState<{ value: string; label: string }>({ value: '', label: '' });

    useImperativeHandle(ref, () => {
        return {
            show() {
                if (dialogRef.current) dialogRef.current.showModal();
            }
        }
    }, [dialogRef])


    useEffect(() => {
        
        if (newData) {
            if (isAnime(newData)) {
                fetch('http://localhost:3001/api/animes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newData)
                }).catch(err => console.log(err))
                    .finally(() => {
                        setNewData(undefined)
                        setFormData(animeSkeleton)
                        setSelectedGenres([])
                        setSelectedStatus({ value: '', label: '' })
                        setCreated(true)
                    })
            } else if (isCharacter(newData)) {
                fetch(`http://localhost:3001/api/animes/${data.animeId}/characters`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newData)
                }).catch(err => console.log(err))
                    .finally(() => {
                        setNewData(undefined)
                        setFormData(characterSkeleton)
                        setSelectedAbilities([])
                        setCreated(true)
                    })
            }
        }
    }, [newData, data.animeId, setCreated])

    const handleSelectChange = (selected: any) => {
        setSelectedGenres(selected || [])
        setSelectedAbilities(selected || [])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (data.animeId){
            setFormData(characterSkeleton)
        } else {
            setFormData(animeSkeleton)
        }
        
        if (isAnime({ ...formData, genres: selectedGenres.map(genre => genre.value) })) {
            setNewData({ ...formData, genres: selectedGenres.map(genre => genre.value) })
        } else if (isCharacter({ animeId: data.animeId, ...formData, abilities: selectedAbilities.map(ability => ability.value) })) {
            setNewData({ animeId: data.animeId, ...formData, abilities: selectedAbilities.map(ability => ability.value) })
        }
        onClose()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleStatusChange = (selectedOption: any) => {
        setSelectedStatus({ value: selectedOption?.value, label: selectedOption?.label})
        setFormData((prev: any) => ({ ...prev, statusName: selectedOption?.value })) // Actualiza el estado con la opción seleccionada
    };

    const onClose = () => {
        if (dialogRef.current) { dialogRef.current.close() }
    }

    return (
        <dialog ref={dialogRef}>
            <section className="modalForm">
                {(data.abilities && data.animeId) ? (<h1>Creación de personaje</h1>) : (<h1> Creación de anime</h1>)}
                <p>Por favor rellena los siguientes campos:</p>
                {
                    (data.abilities && data.animeId)
                        ?
                        (
                            <>
                                <form onSubmit={handleSubmit} className="createForm" >
                                    <section className="formGroup">
                                        <input type="text" id="thumbnail" name="thumbnail" value={formData?.thumbnail} onChange={handleChange} placeholder="Enter thumbnail URL" required />
                                        <input type="text" id="name" name="name" value={formData?.name} onChange={handleChange} placeholder="Enter name" required />
                                        <input type="text" id="origin" name="origin" value={formData?.origin} onChange={handleChange} placeholder="Enter origin" required />
                                    </section>
                                    <section className="formGroup">
                                        <textarea id="bio" name="bio" value={formData?.bio} onChange={handleChange} placeholder="Enter bio" required />
                                        <textarea id="description" name="description" value={formData?.description} onChange={handleChange} placeholder="Enter description" required />
                                        <textarea id="background" name="background" value={formData?.background} onChange={handleChange} placeholder="Enter background" required />
                                    </section>
                                    <section className="formGroup">
                                        <Select
                                            options={abilitiesOptions}
                                            isMulti
                                            value={selectedAbilities}
                                            onChange={handleSelectChange}
                                            placeholder="Select abilities"
                                            className="react-select-container"
                                            classNamePrefix="react-select"
                                            styles={customStyles}
                                            components={makeAnimated()}
                                        />
                                    </section>
                                    <section className="formGroup">
                                        <input type="text" id="personality" name="personality" value={formData?.personality} onChange={handleChange} placeholder="Enter character personality" required />
                                        <input type="text" id="role" name="role" value={formData?.role} onChange={handleChange} placeholder="Enter character role" required />
                                    </section>
                                    <div className="date">
                                        <label htmlFor="birthDate">Birth Date</label>
                                        <input type="date" id="birthDate" name="birthDate" value={formData?.birthDate} onChange={handleChange} required />
                                    </div>
                                    <section className="formGroup">
                                        <input type="number" id="age" name="age" value={formData?.age} onChange={handleChange} placeholder="Enter age" required />
                                    </section>
                                    <div className="form-actions formGroup">
                                        <button type="submit" onClick={handleSubmit}>Save</button>
                                        <button type="button" onClick={onClose}>Cancel</button>
                                    </div>
                                </form>
                            </>
                        )
                        :
                        (
                            <>
                                <form onSubmit={handleSubmit} className="createForm">

                                    <section className="formGroup">
                                        <input type="text" id="thumbnail" name="thumbnail" value={formData?.thumbnail} onChange={handleChange} placeholder="Enter thumbnail URL" required />
                                        <input type="text" id="title" name="title" value={formData?.title} onChange={handleChange} placeholder="Enter title" required />
                                    </section>
                                    <section className="formGroup">
                                        <textarea id="synopsis" name="synopsis" value={formData?.synopsis} onChange={handleChange} placeholder="Enter synopsis" />
                                    </section>
                                    <section className="formGroup">
                                        <Select
                                            isClearable
                                            options={statusOptions}
                                            value={selectedStatus}
                                            onChange={handleStatusChange}
                                            placeholder="Select status"
                                            className="react-select-container-status"
                                            classNamePrefix="react-select"
                                            styles={customStyles}
                                            components={makeAnimated()}
                                        />
                                        <Select
                                            options={genresOptions}
                                            isMulti
                                            value={selectedGenres}
                                            onChange={handleSelectChange}
                                            placeholder="Select genres"
                                            className="react-select-container"
                                            classNamePrefix="react-select"
                                            styles={customStyles}
                                            components={makeAnimated()}
                                        />
                                    </section>
                                    <section className="formGroup">
                                        <input type="text" id="studio" name="studio" value={formData?.studio} onChange={handleChange} placeholder="Enter studio name" required />
                                        <input type="text" id="director" name="director" value={formData?.director} onChange={handleChange} placeholder="Enter director name" required />
                                    </section>
                                    <div className="date">
                                        <label htmlFor="releaseDate">Release Date</label>
                                        <input type="date" id="releaseDate" name="releaseDate" value={formData?.releaseDate} onChange={handleChange} required />
                                    </div>
                                    <section className="formGroup">
                                        <input type="number" id="episodeCount" name="episodeCount" value={formData?.episodeCount} onChange={handleChange} placeholder="Enter number of episodes" required />
                                        <input type="number" id="durationPerEpisode" name="durationPerEpisode" value={formData?.durationPerEpisode} onChange={handleChange} placeholder="Enter duration (in minutes)" required />
                                    </section>
                                    <div className="form-actions formGroup">
                                        <button type="submit" onClick={handleSubmit}>Save</button>
                                        <button type="button" onClick={onClose}>Cancel</button>
                                    </div>
                                </form>
                            </>
                        )
                }
            </section >
        </dialog >
    )
})

export default CreateModal 