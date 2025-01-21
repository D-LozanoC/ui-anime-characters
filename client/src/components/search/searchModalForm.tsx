import { Anime } from "@/types/anime";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import '@/styles/form.css'
import Select from "react-select";
import makeAnimated from 'react-select/animated'
import { customStyles } from "@/utils/customStyles";
import { Character } from "@/types/character";
import { isAnime, isArrayObject, isArrayString, isCharacter } from "@/utils/isData";
import { getAllFilters } from "@/services/filters";

type modalFormProps = {
    data: Anime | Character | undefined,
    setToUpdate: Dispatch<SetStateAction<boolean>>,
    setDataToUpdate: Dispatch<SetStateAction<Anime | Character | undefined>>
}

export default function SearchModalForm(params: modalFormProps) {
    const [formData, setFormData] = useState<Anime | Character | undefined>(params.data);
    const dataForGenres = isAnime(formData) ? formData.genres.map(genre => ({ value: genre, label: genre })) : undefined
    const dataForAbilities = () => {
        if (isCharacter(formData)) {
            if (isArrayString(formData.abilities)) {
                return formData.abilities.map(ability => ({ value: ability, label: ability }))
            } else if (isArrayObject(formData.abilities)) {
                return formData.abilities.map(ability => ({ value: ability.name, label: ability.name }))
            }
        }
        return undefined
    }
    const [genres, setGenres] = useState<string[]>([]);
    const [abilities, setAbilities] = useState<string[]>([]);
    const [err, setErr] = useState<Error | null>(null);
    const [status, setStatus] = useState<string[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<{ value: string; label: string }[] | undefined>(dataForGenres);
    const [selectedAbilities, setSelectedAbilities] = useState<{ value: string; label: string }[] | undefined>(dataForAbilities());

    useEffect(() => {
        getAllFilters(setGenres, setStatus, setAbilities, setErr)
    }, []);

    if (err) return <h1>Error: {err.message}</h1>;

    const genresOptions = genres.map(genre => ({ value: genre, label: genre }))
    const abilitiesOptions = abilities.map(ability => ({ value: ability, label: ability }))
    const statusOptions = status.map(status => ({ value: status, label: status }))


    const handleStatusChange = (selectedOption: any) => {
        setFormData((prev: any) => ({ ...prev, statusName: selectedOption?.value }))
    };

    const handleSelectChange = (selected: any) => {
        setSelectedGenres(selected || [])
        if (selectedGenres) {
            setFormData((prev: any) => ({ ...prev, genres: selectedGenres.map(genre => (genre.value)) }));
        }
        setSelectedAbilities(selected || [])
        if (selectedAbilities) {
            setFormData((prev: any) => ({ ...prev, abilities: selectedAbilities.map(ability => (ability.value)) }));
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (selectedGenres && isAnime(formData)) {
            params.setDataToUpdate({ ...formData, genres: selectedGenres.map(genre => (genre.value)) })
        }

        if (selectedAbilities && isCharacter(formData)) {
            params.setDataToUpdate({ ...formData, abilities: selectedAbilities.map(ability => (ability.value)) })
        }

        params.setToUpdate(false)
    };

    const handleClose = () => {
        params.setToUpdate(false)
    }

    return (
        <>
            {
                isAnime(params.data) && isAnime(formData)
                    ?
                    (
                        <section className="modalForm">
                            <h1>Actualización de anime</h1>
                            <p>Por favor rellena los campos a actualizar:</p>
                            <form onSubmit={handleSubmit} className="updateForm">
                                <div className="formGroup">
                                    <label htmlFor="thumbnail">Thumbnail</label>
                                    <input type="text" id="thumbnail" name="thumbnail" value={formData.thumbnail} onChange={handleChange} placeholder="Enter thumbnail URL" />
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Enter title" />
                                </div>

                                <div className="formGroup">
                                    <span className="synopsisForm">
                                        <label htmlFor="synopsis">Synopsis</label>
                                        <textarea id="synopsis" name="synopsis" value={formData.synopsis} onChange={handleChange} placeholder="Enter synopsis" />
                                    </span>
                                </div>

                                <section className="formGroup">
                                    <Select isClearable required
                                        placeholder="Select status" className="react-select-container-status" classNamePrefix="react-select"
                                        options={statusOptions}
                                        value={statusOptions.find(option => option.value === formData?.statusName ? formData?.statusName : '')}
                                        onChange={handleStatusChange}
                                        styles={customStyles}
                                        components={makeAnimated()}
                                    />
                                    <Select isMulti required
                                        placeholder="Select genres" className="react-select-container" classNamePrefix="react-select"
                                        options={genresOptions}
                                        value={selectedGenres}
                                        onChange={handleSelectChange}
                                        components={makeAnimated()}
                                        styles={customStyles}
                                    />
                                </section>

                                <div className="formGroup">
                                    <label htmlFor="studio">Studio</label>
                                    <input type="text" id="studio" name="studio" value={formData.studio} onChange={handleChange} placeholder="Enter studio name" />
                                    <label htmlFor="director">Director</label>
                                    <input type="text" id="director" name="director" value={formData.director} onChange={handleChange} placeholder="Enter director name" />
                                </div>

                                <div className="date">
                                    <label htmlFor="releaseDate">Release Date</label>
                                    <input type="date" id="releaseDate" name="releaseDate" value={formData.releaseDate} onChange={handleChange} />
                                </div>

                                <div className="formGroup">
                                    <span>
                                        <label htmlFor="episodeCount">Episode Count</label>
                                        <input type="number" id="episodeCount" name="episodeCount" value={formData.episodeCount} onChange={handleChange} placeholder="Enter number of episodes" />
                                    </span>
                                    <span>
                                        <label htmlFor="durationPerEpisode">Duration per Episode (minutes)</label>
                                        <input type="number" id="durationPerEpisode" name="durationPerEpisode" value={formData.durationPerEpisode} onChange={handleChange} placeholder="Enter duration (in minutes)" />
                                    </span>
                                </div>

                                <div className="form-actions formGroup">
                                    <button type="submit" onClick={handleSubmit}>Save</button>
                                    <button type="button" onClick={handleClose}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </section>
                    )
                    :
                    (isCharacter(params.data) && isCharacter(formData)
                        ?
                        (
                            <section className="modalForm">
                                <h1>Actualización de personaje</h1>
                                <p>Por favor rellena los campos a actualizar:</p>
                                <form onSubmit={handleSubmit} className="updateForm">
                                    <div className="formGroup labelCharacter">
                                        <span>
                                            <label htmlFor="thumbnail">Thumbnail</label>
                                            <input type="text" id="thumbnail" name="thumbnail" value={formData?.thumbnail} onChange={handleChange} placeholder="Enter thumbnail URL" />
                                        </span>
                                        <span>
                                            <label htmlFor="name">Name</label>
                                            <input type="text" id="name" name="name" value={formData?.name} onChange={handleChange} placeholder="Enter title" />
                                        </span>
                                        <span>
                                            <label htmlFor="origin">Origin</label>
                                            <input type="text" id="origin" name="origin" value={formData?.origin} onChange={handleChange} placeholder="Enter origin" required />
                                        </span>
                                    </div>

                                    <section className="formGroup labelCharacter">
                                        <span className="synopsisForm">
                                            <label htmlFor="bio">Bio</label>
                                            <textarea id="bio" name="bio" value={formData?.bio} onChange={handleChange} placeholder="Enter bio" required />
                                        </span>
                                        <span className="synopsisForm">
                                            <label htmlFor="description">Description</label>
                                            <textarea id="description" name="description" value={formData?.description} onChange={handleChange} placeholder="Enter description" required />
                                        </span>
                                        <span className="synopsisForm">
                                            <label htmlFor="background">Background</label>
                                            <textarea id="background" name="background" value={formData?.background} onChange={handleChange} placeholder="Enter background" required />
                                        </span>
                                    </section>

                                    <section className="formGroup">
                                        <Select isMulti required
                                            placeholder="Select abilities" className="react-select-container" classNamePrefix="react-select"
                                            options={abilitiesOptions}
                                            value={selectedAbilities}
                                            onChange={handleSelectChange}
                                            components={makeAnimated()}
                                            styles={customStyles}
                                        />
                                    </section>

                                    <section className="formGroup">
                                        <label htmlFor="personality">Personality</label>
                                        <input type="text" id="personality" name="personality" value={formData?.personality} onChange={handleChange} placeholder="Enter character personality" required />
                                        <label htmlFor="role">Role</label>
                                        <input type="text" id="role" name="role" value={formData?.role} onChange={handleChange} placeholder="Enter character role" required />
                                    </section>

                                    <div className="date">
                                        <label htmlFor="birthDate">Birth Date</label>
                                        <input type="date" id="birthDate" name="birthDate" value={formData?.birthDate} onChange={handleChange} required />
                                        <label htmlFor="age">Age</label>
                                        <input type="number" id="age" name="age" value={formData?.age} onChange={handleChange} placeholder="Enter age" required />
                                    </div>

                                    <div className="form-actions formGroup">
                                        <button type="submit" onClick={handleSubmit}>Save</button>
                                        <button type="button" onClick={handleClose}>Cancel</button>
                                    </div>
                                </form>
                            </section>
                        )
                        :
                        (
                            <h1>Invalid Data</h1>
                        )
                    )
            }


        </>
    )
}