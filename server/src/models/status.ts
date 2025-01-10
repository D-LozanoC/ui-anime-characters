import { StatusModelInterface } from "../types/interfaces.ts";
import prismaClient from "../utils/connector.ts";

export default class StatusModel implements StatusModelInterface {
    async getAllStatus(): Promise<string[] | null> {
        const status = await prismaClient.status.findMany()
        return status.map(genre => genre.name) 
    }
}