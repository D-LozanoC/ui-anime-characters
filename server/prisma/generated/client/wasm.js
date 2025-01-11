
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.AnimeScalarFieldEnum = {
  id: 'id',
  thumbnail: 'thumbnail',
  title: 'title',
  synopsis: 'synopsis',
  statusName: 'statusName',
  studio: 'studio',
  director: 'director',
  releaseDate: 'releaseDate',
  episodeCount: 'episodeCount',
  durationPerEpisode: 'durationPerEpisode'
};

exports.Prisma.StatusScalarFieldEnum = {
  name: 'name'
};

exports.Prisma.GenreScalarFieldEnum = {
  name: 'name'
};

exports.Prisma.CharacterScalarFieldEnum = {
  id: 'id',
  animeId: 'animeId',
  name: 'name',
  description: 'description',
  origin: 'origin',
  birthDate: 'birthDate',
  age: 'age',
  role: 'role',
  thumbnail: 'thumbnail',
  personality: 'personality',
  background: 'background',
  bio: 'bio'
};

exports.Prisma.AbilitiesScalarFieldEnum = {
  name: 'name',
  description: 'description'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  Anime: 'Anime',
  Status: 'Status',
  Genre: 'Genre',
  Character: 'Character',
  Abilities: 'Abilities'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\david\\Projects\\University\\ui-anime-characters\\test\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\david\\Projects\\University\\ui-anime-characters\\test\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.2.1",
  "engineVersion": "4123509d24aa4dede1e864b46351bf2790323b69",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlite",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": null,
        "value": "file:./dev.db"
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\"]\n  output          = \"./generated/client\"\n}\n\ndatasource db {\n  provider = \"sqlite\"\n  url      = \"file:./dev.db\"\n}\n\nmodel Anime {\n  id                 String      @id @default(uuid())\n  thumbnail          String\n  title              String      @unique\n  synopsis           String\n  genres             Genre[]     @relation(\"AnimeGenres\")\n  statusName         String\n  status             Status      @relation(fields: [statusName], references: [name])\n  studio             String\n  director           String\n  releaseDate        String\n  episodeCount       String\n  durationPerEpisode String\n  characters         Character[]\n}\n\nmodel Status {\n  name  String  @id @unique\n  anime Anime[]\n}\n\nmodel Genre {\n  name  String  @id @unique\n  anime Anime[] @relation(\"AnimeGenres\")\n}\n\nmodel Character {\n  id          String      @id @default(uuid())\n  animeId     String\n  anime       Anime       @relation(fields: [animeId], references: [id])\n  name        String      @unique\n  description String\n  origin      String\n  birthDate   String\n  age         String\n  abilities   Abilities[] @relation(\"CharacterAbilities\")\n  role        String\n  thumbnail   String\n  relations   Character[] @relation(\"relationship\")\n  relatedTo   Character[] @relation(\"relationship\")\n  personality String\n  background  String\n  bio         String\n}\n\nmodel Abilities {\n  name        String      @id @unique\n  description String\n  character   Character[] @relation(\"CharacterAbilities\")\n}\n",
  "inlineSchemaHash": "9b2f02d721ac86d1768e6f46689da4f6f3ed9a4721cb609893fe50a1311a2c52",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Anime\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"synopsis\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"genres\",\"kind\":\"object\",\"type\":\"Genre\",\"relationName\":\"AnimeGenres\"},{\"name\":\"statusName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"object\",\"type\":\"Status\",\"relationName\":\"AnimeToStatus\"},{\"name\":\"studio\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"director\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"releaseDate\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"episodeCount\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"durationPerEpisode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"characters\",\"kind\":\"object\",\"type\":\"Character\",\"relationName\":\"AnimeToCharacter\"}],\"dbName\":null},\"Status\":{\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"anime\",\"kind\":\"object\",\"type\":\"Anime\",\"relationName\":\"AnimeToStatus\"}],\"dbName\":null},\"Genre\":{\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"anime\",\"kind\":\"object\",\"type\":\"Anime\",\"relationName\":\"AnimeGenres\"}],\"dbName\":null},\"Character\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"animeId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"anime\",\"kind\":\"object\",\"type\":\"Anime\",\"relationName\":\"AnimeToCharacter\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"origin\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"age\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"abilities\",\"kind\":\"object\",\"type\":\"Abilities\",\"relationName\":\"CharacterAbilities\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"relations\",\"kind\":\"object\",\"type\":\"Character\",\"relationName\":\"relationship\"},{\"name\":\"relatedTo\",\"kind\":\"object\",\"type\":\"Character\",\"relationName\":\"relationship\"},{\"name\":\"personality\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"background\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bio\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Abilities\":{\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"character\",\"kind\":\"object\",\"type\":\"Character\",\"relationName\":\"CharacterAbilities\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {}
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

