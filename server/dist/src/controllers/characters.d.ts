import { NextFunction, Request, Response } from "express";
import { CharacterModelInterface } from "../types/interfaces.js";
export default class CharacterController {
    #private;
    constructor({ model }: {
        model: CharacterModelInterface;
    });
    getAllCharacters: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getCharacterById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createCharacter: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createCharacters: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateCharacter: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteCharacter: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
