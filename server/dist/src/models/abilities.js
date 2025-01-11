import prismaClient from "../utils/connector.ts";
export default class AbilitiesModel {
    async getAllAbilities() {
        const abilities = await prismaClient.abilities.findMany();
        return abilities.map((ability) => ability.name);
    }
}
