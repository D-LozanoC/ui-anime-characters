import { Query } from "../types/interfaces.ts"
import { queryProps } from "../types/props.ts"

const buildFindManyQuery = ({ genres, statusName, order, page, pageSize }: queryProps) => {
    const query: Query = {
        where: {},
        orderBy: {},
        skip: undefined,
        take: undefined,
        include: {
            genres: true
        },
    }

    if (genres) {
        query.where = {
            genres: {
                some: {
                    name: {
                        in: genres
                    }
                }
            }
        }
    }

    
    if (statusName) {
        query.where = {
            ...query.where,
            statusName
        }
    }
    
    if (order === 'desc' || order === 'asc') {
        query.orderBy = {
            title: order
        }
    }
    
    if (page && pageSize) {
        query.skip = (page - 1) * pageSize
        query.take = pageSize
    }
    
    console.log(query)
    return query;
}

export { buildFindManyQuery }