"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSchema = void 0;
exports.validateCharacter = validateCharacter;
exports.validatePartialCharacter = validatePartialCharacter;
const zod_1 = __importDefault(require("zod"));
exports.CharacterSchema = zod_1.default.object({
    animeId: zod_1.default.string().uuid(),
    name: zod_1.default.string(),
    description: zod_1.default.string(),
    origin: zod_1.default.string(),
    birthDate: zod_1.default.string(),
    age: zod_1.default.string(),
    abilities: zod_1.default.array(zod_1.default.string()),
    relations: zod_1.default.array(zod_1.default.string().uuid()).optional(),
    relatedTo: zod_1.default.array(zod_1.default.string().uuid()).optional(),
    role: zod_1.default.string(),
    personality: zod_1.default.string(),
    background: zod_1.default.string(),
    bio: zod_1.default.string(),
    thumbnail: zod_1.default.string().url(),
});
function validateCharacter(character) {
    return exports.CharacterSchema.safeParse(character);
}
function validatePartialCharacter(character) {
    return exports.CharacterSchema.partial().safeParse(character);
}
