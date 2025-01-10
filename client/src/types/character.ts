export type Character = {
    animeId: string,
    id: string,
    thumbnail: string,
    name: string,
    origin: string,
    bio: string,
    description: string,
    background: string,
    abilities: { name: string, description: string }[] | string[]
    birthDate: string,
    personality: string,
    role: string,
    age: string,
}

