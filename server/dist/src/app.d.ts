import { Application } from 'express';
import { modelProps } from './types/props.js';
declare const createApp: ({ animeModel, characterModel, genreModel, abilitiesModel, statusModel }: modelProps) => Application;
export default createApp;
