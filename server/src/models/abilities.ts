import { AbilitiesModelInterface } from "../types/interfaces.ts";
import prismaClient from "../utils/connector.ts";

export default class AbilitiesModel implements AbilitiesModelInterface {
    async getAllAbilities(): Promise<string[] | null> {
        const abilities = await prismaClient.abilities.findMany()
        return abilities.map(ability => ability.name) 
    }
}