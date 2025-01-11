"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAnime = validateAnime;
exports.validatePartialAnime = validatePartialAnime;
const zod_1 = __importDefault(require("zod"));
const characters_js_1 = require("./characters.js");
const AnimeSchema = zod_1.default.object({
    thumbnail: zod_1.default.string().url({ message: "Thumbnail must be a valid URL." }),
    title: zod_1.default.string().min(1, { message: "Title is required and cannot be empty." }),
    synopsis: zod_1.default.string().min(10, { message: "Synopsis must be at least 10 characters long." }),
    statusName: zod_1.default.enum(['Cancelled', 'Ongoing', 'Completed', 'Upcoming'], { message: "Status must be one of: Cancelled, Ongoing, Completed, or Upcoming." }),
    studio: zod_1.default.string().min(1, { message: "Studio name is required and cannot be empty." }),
    director: zod_1.default.string().min(1, { message: "Director name is required and cannot be empty." }),
    releaseDate: zod_1.default.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Release date must be in the format YYYY-MM-DD." }),
    episodeCount: zod_1.default.string().regex(/^\d+$/, { message: "Episode count must be a positive integer." }),
    durationPerEpisode: zod_1.default.string().regex(/^\d+$/, { message: "Duration per episode must be a positive integer in minutes." }),
    characters: characters_js_1.CharacterSchema.optional(),
    genres: zod_1.default.array(zod_1.default.string()).min(1, { message: "At least one genre is required." })
});
function validateAnime(object) {
    return AnimeSchema.safeParse(object);
}
function validatePartialAnime(object) {
    return AnimeSchema.partial().safeParse(object);
}
