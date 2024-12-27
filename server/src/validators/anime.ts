import z from 'zod'
import { CharacterSchema } from './characters.ts'
import { Anime } from '@prisma/client'

const AnimeSchema = z.object({
    id: z.string().uuid(),
    thumbnail: z.string().url({ message: "Thumbnail must be a valid URL." }),
    title: z.string().min(1, { message: "Title is required and cannot be empty." }),
    synopsis: z.string().min(10, { message: "Synopsis must be at least 10 characters long." }),
    statusName: z.enum(
        ['Cancelled', 'Ongoing', 'Completed', 'Upcoming'],
        { message: "Status must be one of: Cancelled, Ongoing, Completed, or Upcoming." }
    ),
    studio: z.string().min(1, { message: "Studio name is required and cannot be empty." }),
    director: z.string().min(1, { message: "Director name is required and cannot be empty." }),
    releaseDate: z.string().regex(
        /^\d{4}-\d{2}-\d{2}$/,
        { message: "Release date must be in the format YYYY-MM-DD." }
    ),
    episodeCount: z.string().regex(
        /^\d+$/,
        { message: "Episode count must be a positive integer." }
    ),
    durationPerEpisode: z.string().regex(
        /^\d+$/,
        { message: "Duration per episode must be a positive integer in minutes." }
    ),
    characters: CharacterSchema.optional()
})

function validateAnime(anime: Anime) {
    return AnimeSchema.safeParse(anime)
}

function validatePartialAnime(anime: Anime){
    return AnimeSchema.partial().safeParse(anime)
}

export { validateAnime, validatePartialAnime }