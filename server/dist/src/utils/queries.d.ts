import { Query } from "../types/interfaces.ts";
import { queryProps } from "../types/props.ts";
declare const buildFindManyQuery: ({ genres, statusName, order, page, pageSize, animeId, abilities, title, name }: queryProps) => Query;
export { buildFindManyQuery };
