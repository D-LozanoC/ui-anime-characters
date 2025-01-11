import { StatusModelInterface } from "../types/interfaces.ts";
export default class StatusModel implements StatusModelInterface {
    getAllStatus(): Promise<string[] | null>;
}
