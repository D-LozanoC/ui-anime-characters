import { Status } from "@prisma/client";
import { StatusModelInterface } from "../types/interfaces.js";
import prismaClient from "../utils/connector.js";

export default class StatusModel implements StatusModelInterface {
    async getAllStatus(): Promise<string[] | null> {
        const status = await prismaClient.status.findMany()
        return status.map((status: Status) => status.name) 
    }
}