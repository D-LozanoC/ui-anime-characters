import prismaClient from "../utils/connector.ts";
export default class StatusModel {
    async getAllStatus() {
        const status = await prismaClient.status.findMany();
        return status.map((status) => status.name);
    }
}
