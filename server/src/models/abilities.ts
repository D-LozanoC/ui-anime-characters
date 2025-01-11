import type { Abilities } from '../../prisma/generated/client/index.js'
import type { AbilitiesModelInterface } from "../types/interfaces.js";
import prismaClient from "../utils/connector.js";

export default class AbilitiesModel implements AbilitiesModelInterface {
    async getAllAbilities(): Promise<string[] | null> {
        const abilities = await prismaClient.abilities.findMany()
        return abilities.map((ability: Abilities) => ability.name)
    }
}