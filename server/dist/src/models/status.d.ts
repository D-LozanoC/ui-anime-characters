import { StatusModelInterface } from "../types/interfaces.js";
export default class StatusModel implements StatusModelInterface {
    getAllStatus(): Promise<string[] | null>;
}
