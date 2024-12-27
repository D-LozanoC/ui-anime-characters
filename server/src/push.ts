import prismaClient from "./utils/connector.ts";
async function insertAnimes() {
    const animes = [
        {
            title: 'Naruto: Shippuden',
            thumbnail: 'https://example.com/thumbnail/naruto_shippuden.jpg',
            synopsis: 'Naruto Uzumaki returns to the Hidden Leaf Village after a two and a half year training journey, and faces powerful enemies including the Akatsuki.',
            statusName: 'Completed',
            studio: 'Studio Pierrot',
            director: 'Hayato Date',
            releaseDate: '2007-02-15',
            episodeCount: '500',
            durationPerEpisode: '23',
            genres: ['Action', 'Adventure', 'Fantasy', 'Shounen']
        },
        {
            title: 'Fullmetal Alchemist: Brotherhood',
            thumbnail: 'https://example.com/thumbnail/fma_brotherhood.jpg',
            synopsis: 'Two brothers use alchemy to search for the Philosopher’s Stone to restore their bodies after a failed experiment.',
            statusName: 'Completed',
            studio: 'Studio Bones',
            director: 'Yasuhiro Irie',
            releaseDate: '2009-04-05',
            episodeCount: '64',
            durationPerEpisode: '24',
            genres: ['Action', 'Adventure', 'Drama', 'Fantasy']
        },
        {
            title: 'Death Note',
            thumbnail: 'https://example.com/thumbnail/deathnote.jpg',
            synopsis: 'A high school student discovers a mysterious notebook that grants him the ability to kill anyone whose name he writes in it.',
            statusName: 'Completed',
            studio: 'Madhouse',
            director: 'Tetsurō Araki',
            releaseDate: '2006-10-03',
            episodeCount: '37',
            durationPerEpisode: '24',
            genres: ['Psychological', 'Thriller', 'Supernatural']
        },
        {
            title: 'One Piece',
            thumbnail: 'https://example.com/thumbnail/onepiece.jpg',
            synopsis: 'Monkey D. Luffy and his pirate crew search for the world\'s ultimate treasure, the One Piece.',
            statusName: 'Ongoing',
            studio: 'Toei Animation',
            director: 'Konosuke Uda',
            releaseDate: '1999-10-20',
            episodeCount: '1060',
            durationPerEpisode: '24',
            genres: ['Action', 'Adventure', 'Fantasy']
        },
        {
            title: 'Dragon Ball Z',
            thumbnail: 'https://example.com/thumbnail/dragonballz.jpg',
            synopsis: 'Goku and his friends defend the Earth from powerful foes while searching for the seven orbs known as Dragon Balls.',
            statusName: 'Completed',
            studio: 'Toei Animation',
            director: 'Daisuke Nishio',
            releaseDate: '1989-04-26',
            episodeCount: '291',
            durationPerEpisode: '24',
            genres: ['Action', 'Adventure', 'Fantasy']
        },
        {
            title: 'Hunter x Hunter (2011)',
            thumbnail: 'https://example.com/thumbnail/hunterxhunter.jpg',
            synopsis: 'A young boy embarks on a journey to find his father and become a Hunter, a professional adventurer.',
            statusName: 'Ongoing',
            studio: 'Madhouse',
            director: 'Hiroshi Kōjina',
            releaseDate: '2011-10-02',
            episodeCount: '148',
            durationPerEpisode: '24',
            genres: ['Action', 'Adventure', 'Fantasy']
        },
        {
            title: 'One Punch Man',
            thumbnail: 'https://example.com/thumbnail/onepunchman.jpg',
            synopsis: 'A man who can defeat anyone with a single punch searches for a worthy opponent.',
            statusName: 'Ongoing',
            studio: 'Madhouse, J.C. Staff',
            director: 'Shingo Natsume',
            releaseDate: '2015-10-05',
            episodeCount: '24',
            durationPerEpisode: '24',
            genres: ['Action', 'Comedy', 'Superhero']
        },
        {
            title: 'Steins;Gate',
            thumbnail: 'https://example.com/thumbnail/steinsgate.jpg',
            synopsis: 'A group of friends discover time travel and must deal with the consequences of their actions.',
            statusName: 'Completed',
            studio: 'White Fox',
            director: 'Hiroshi Hamasaki',
            releaseDate: '2011-04-06',
            episodeCount: '24',
            durationPerEpisode: '24',
            genres: ['Sci-Fi', 'Thriller', 'Psychological']
        },
        {
            title: 'Neon Genesis Evangelion',
            thumbnail: 'https://example.com/thumbnail/evangelion.jpg',
            synopsis: 'A young man must pilot a giant bio-mechanical robot to protect Earth from mysterious beings known as Angels.',
            statusName: 'Completed',
            studio: 'Gainax',
            director: 'Hideaki Anno',
            releaseDate: '1995-10-05',
            episodeCount: '26',
            durationPerEpisode: '24',
            genres: ['Mecha', 'Psychological', 'Sci-Fi']
        },
        {
            title: 'My Hero Academia',
            thumbnail: 'https://example.com/thumbnail/bhacademia.jpg',
            synopsis: 'In a world where nearly every human has superpowers, a powerless boy strives to become a hero.',
            statusName: 'Ongoing',
            studio: 'Bones',
            director: 'Kenji Nagasaki',
            releaseDate: '2016-04-03',
            episodeCount: '138',
            durationPerEpisode: '23',
            genres: ['Action', 'Superhero', 'School']
        },
                                                                           
    ];

    for (const anime of animes) {
        // Busca los géneros relacionados
        const genres = await prismaClient.genre.findMany({
            where: {
                name: { in: anime.genres },
            },
        });

        // Inserta el anime con relaciones
        await prismaClient.anime.create({
            data: {
                title: anime.title,
                thumbnail: anime.thumbnail,
                synopsis: anime.synopsis,
                statusName: anime.statusName,
                studio: anime.studio,
                director: anime.director,
                releaseDate: anime.releaseDate,
                episodeCount: anime.episodeCount,
                durationPerEpisode: anime.durationPerEpisode,
                genres: {
                    connect: genres.map((genre) => ({ name: genre.name })), // Conectar géneros existentes
                },
            },
        });

        console.log(`Inserted anime: ${anime.title}`);
    }
}

insertAnimes().catch((error) => {
    console.error('Error inserting animes:', error);
});
