import { AbilitiesModelInterface } from "../types/interfaces.ts";
export default class AbilitiesModel implements AbilitiesModelInterface {
    getAllAbilities(): Promise<string[] | null>;
}
