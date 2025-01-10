import z from 'zod'

export const CharacterSchema = z.object({
    animeId: z.string().uuid(),
    name: z.string(),
    description: z.string(),
    origin: z.string(),
    birthDate: z.string(),
    age: z.string(),
    abilities: z.array(z.string()),
    relations: z.array(z.string().uuid()).optional(),
    relatedTo: z.array(z.string().uuid()).optional(),
    role: z.string(),
    personality: z.string(),
    background: z.string(),
    bio: z.string(),
    thumbnail: z.string().url(),
})

export function validateCharacter(character: any) {
    return CharacterSchema.safeParse(character)
}

export function validatePartialCharacter(character: any) {
    return CharacterSchema.partial().safeParse(character)
}