import { Request, Response } from "express"
import CharacterModel from "../models/characters.ts";

export default class CharacterController {
    #model

    constructor({ model }: { model: CharacterModel }) {
        this.#model = model;
    }

    getAllCharacters = async (req: Request, res: Response) => {
        res.json({ message: "Todos los characters" });
    }

    getCharacterById = async (req: Request, res: Response) => {
        res.json({ message: "Detalles de un character" });
    }

    createCharacter = async (req: Request, res: Response) => {
        res.status(201).json({ message: "Character creado" });
    }

    updateCharacter = async (req: Request, res: Response) => {
        res.json({ message: "Character actualizado" });
    }

    deleteCharacter = async (req: Request, res: Response) => {
        res.status(204).send();
    }
}