import { Application } from 'express';
import { modelProps } from './types/props.ts';
declare const createApp: ({ animeModel, characterModel, genreModel, abilitiesModel, statusModel }: modelProps) => Application;
export default createApp;
