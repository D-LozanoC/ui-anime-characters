import { AbilitiesModelInterface } from "../types/interfaces.js";
export default class AbilitiesModel implements AbilitiesModelInterface {
    getAllAbilities(): Promise<string[] | null>;
}
