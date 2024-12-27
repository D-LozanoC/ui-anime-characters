import z from 'zod'
import { Character } from '@prisma/client'

export const CharacterSchema = z.object({
    id: z.string().uuid(),
    animeId: z.string().uuid(),
    name: z.string(),
    description: z.string(),
    origin: z.string().optional(),
    birthDate: z.date().optional(),
    age: z.string().optional(),
    abilities: z.array(z.string()).optional(),
    relations: z.array(z.string().uuid()).optional(),
    relatedTo: z.array(z.string().uuid()).optional(),
    role: z.string().optional(),
    personality: z.string().optional(),
    background: z.string().optional(),
    bio: z.string().optional(),
    thumbnail: z.string().url(),
})

export default function validateCharacter(character: Character) {
    return CharacterSchema.safeParse(character)
}