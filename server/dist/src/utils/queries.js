"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFindManyQuery = void 0;
const buildFindManyQuery = ({ genres, statusName, order, page, pageSize, animeId, abilities, title, name }) => {
    const query = {
        where: {},
        orderBy: {},
        skip: undefined,
        take: undefined,
        include: {
            genres: true
        },
    };
    if (genres) {
        query.where = {
            genres: {
                some: {
                    name: {
                        in: genres
                    }
                }
            }
        };
    }
    if (name) {
        query.where = {
            ...query.where,
            name: {
                contains: name
            }
        };
    }
    if (title) {
        query.where = {
            ...query.where,
            title: {
                contains: title
            }
        };
    }
    if (abilities) {
        query.where = {
            abilities: {
                some: {
                    name: {
                        in: abilities
                    }
                }
            }
        };
    }
    if (animeId) {
        query.include = {
            abilities: true
        };
        query.where = {
            ...query.where,
            animeId
        };
    }
    if (statusName) {
        query.where = {
            ...query.where,
            statusName
        };
    }
    if (order === 'desc' || order === 'asc') {
        if (animeId) {
            query.orderBy = {
                name: order
            };
        }
        else {
            query.orderBy = {
                title: order
            };
        }
    }
    if (page && pageSize) {
        query.skip = (page - 1) * pageSize;
        query.take = pageSize;
    }
    return query;
};
exports.buildFindManyQuery = buildFindManyQuery;
