import { Query } from "../types/interfaces.js";
import { queryProps } from "../types/props.js";
declare const buildFindManyQuery: ({ genres, statusName, order, page, pageSize, animeId, abilities, title, name }: queryProps) => Query;
export { buildFindManyQuery };
