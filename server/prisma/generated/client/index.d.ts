
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Anime
 * 
 */
export type Anime = $Result.DefaultSelection<Prisma.$AnimePayload>
/**
 * Model Status
 * 
 */
export type Status = $Result.DefaultSelection<Prisma.$StatusPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model Abilities
 * 
 */
export type Abilities = $Result.DefaultSelection<Prisma.$AbilitiesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Anime
 * const anime = await prisma.anime.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Anime
   * const anime = await prisma.anime.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.anime`: Exposes CRUD operations for the **Anime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anime
    * const anime = await prisma.anime.findMany()
    * ```
    */
  get anime(): Prisma.AnimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.abilities`: Exposes CRUD operations for the **Abilities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abilities
    * const abilities = await prisma.abilities.findMany()
    * ```
    */
  get abilities(): Prisma.AbilitiesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Anime: 'Anime',
    Status: 'Status',
    Genre: 'Genre',
    Character: 'Character',
    Abilities: 'Abilities'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "anime" | "status" | "genre" | "character" | "abilities"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Anime: {
        payload: Prisma.$AnimePayload<ExtArgs>
        fields: Prisma.AnimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          findFirst: {
            args: Prisma.AnimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          findMany: {
            args: Prisma.AnimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          create: {
            args: Prisma.AnimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          createMany: {
            args: Prisma.AnimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          delete: {
            args: Prisma.AnimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          update: {
            args: Prisma.AnimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          deleteMany: {
            args: Prisma.AnimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          upsert: {
            args: Prisma.AnimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          aggregate: {
            args: Prisma.AnimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnime>
          }
          groupBy: {
            args: Prisma.AnimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeCountAggregateOutputType> | number
          }
        }
      }
      Status: {
        payload: Prisma.$StatusPayload<ExtArgs>
        fields: Prisma.StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findFirst: {
            args: Prisma.StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findMany: {
            args: Prisma.StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          create: {
            args: Prisma.StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          createMany: {
            args: Prisma.StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          delete: {
            args: Prisma.StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          update: {
            args: Prisma.StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          deleteMany: {
            args: Prisma.StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          upsert: {
            args: Prisma.StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      Abilities: {
        payload: Prisma.$AbilitiesPayload<ExtArgs>
        fields: Prisma.AbilitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbilitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbilitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload>
          }
          findFirst: {
            args: Prisma.AbilitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbilitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload>
          }
          findMany: {
            args: Prisma.AbilitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload>[]
          }
          create: {
            args: Prisma.AbilitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload>
          }
          createMany: {
            args: Prisma.AbilitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbilitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload>[]
          }
          delete: {
            args: Prisma.AbilitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload>
          }
          update: {
            args: Prisma.AbilitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload>
          }
          deleteMany: {
            args: Prisma.AbilitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbilitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbilitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload>[]
          }
          upsert: {
            args: Prisma.AbilitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbilitiesPayload>
          }
          aggregate: {
            args: Prisma.AbilitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbilities>
          }
          groupBy: {
            args: Prisma.AbilitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbilitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbilitiesCountArgs<ExtArgs>
            result: $Utils.Optional<AbilitiesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    anime?: AnimeOmit
    status?: StatusOmit
    genre?: GenreOmit
    character?: CharacterOmit
    abilities?: AbilitiesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AnimeCountOutputType
   */

  export type AnimeCountOutputType = {
    genres: number
    characters: number
  }

  export type AnimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | AnimeCountOutputTypeCountGenresArgs
    characters?: boolean | AnimeCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeCountOutputType
     */
    select?: AnimeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }

  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Count Type StatusCountOutputType
   */

  export type StatusCountOutputType = {
    anime: number
  }

  export type StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | StatusCountOutputTypeCountAnimeArgs
  }

  // Custom InputTypes
  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeCountAnimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    anime: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | GenreCountOutputTypeCountAnimeArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountAnimeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeWhereInput
  }


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    abilities: number
    relations: number
    relatedTo: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abilities?: boolean | CharacterCountOutputTypeCountAbilitiesArgs
    relations?: boolean | CharacterCountOutputTypeCountRelationsArgs
    relatedTo?: boolean | CharacterCountOutputTypeCountRelatedToArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountAbilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilitiesWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountRelatedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Count Type AbilitiesCountOutputType
   */

  export type AbilitiesCountOutputType = {
    character: number
  }

  export type AbilitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | AbilitiesCountOutputTypeCountCharacterArgs
  }

  // Custom InputTypes
  /**
   * AbilitiesCountOutputType without action
   */
  export type AbilitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbilitiesCountOutputType
     */
    select?: AbilitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AbilitiesCountOutputType without action
   */
  export type AbilitiesCountOutputTypeCountCharacterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Anime
   */

  export type AggregateAnime = {
    _count: AnimeCountAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  export type AnimeMinAggregateOutputType = {
    id: string | null
    thumbnail: string | null
    title: string | null
    synopsis: string | null
    statusName: string | null
    studio: string | null
    director: string | null
    releaseDate: string | null
    episodeCount: string | null
    durationPerEpisode: string | null
  }

  export type AnimeMaxAggregateOutputType = {
    id: string | null
    thumbnail: string | null
    title: string | null
    synopsis: string | null
    statusName: string | null
    studio: string | null
    director: string | null
    releaseDate: string | null
    episodeCount: string | null
    durationPerEpisode: string | null
  }

  export type AnimeCountAggregateOutputType = {
    id: number
    thumbnail: number
    title: number
    synopsis: number
    statusName: number
    studio: number
    director: number
    releaseDate: number
    episodeCount: number
    durationPerEpisode: number
    _all: number
  }


  export type AnimeMinAggregateInputType = {
    id?: true
    thumbnail?: true
    title?: true
    synopsis?: true
    statusName?: true
    studio?: true
    director?: true
    releaseDate?: true
    episodeCount?: true
    durationPerEpisode?: true
  }

  export type AnimeMaxAggregateInputType = {
    id?: true
    thumbnail?: true
    title?: true
    synopsis?: true
    statusName?: true
    studio?: true
    director?: true
    releaseDate?: true
    episodeCount?: true
    durationPerEpisode?: true
  }

  export type AnimeCountAggregateInputType = {
    id?: true
    thumbnail?: true
    title?: true
    synopsis?: true
    statusName?: true
    studio?: true
    director?: true
    releaseDate?: true
    episodeCount?: true
    durationPerEpisode?: true
    _all?: true
  }

  export type AnimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anime to aggregate.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anime
    **/
    _count?: true | AnimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeMaxAggregateInputType
  }

  export type GetAnimeAggregateType<T extends AnimeAggregateArgs> = {
        [P in keyof T & keyof AggregateAnime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnime[P]>
      : GetScalarType<T[P], AggregateAnime[P]>
  }




  export type AnimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeWhereInput
    orderBy?: AnimeOrderByWithAggregationInput | AnimeOrderByWithAggregationInput[]
    by: AnimeScalarFieldEnum[] | AnimeScalarFieldEnum
    having?: AnimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeCountAggregateInputType | true
    _min?: AnimeMinAggregateInputType
    _max?: AnimeMaxAggregateInputType
  }

  export type AnimeGroupByOutputType = {
    id: string
    thumbnail: string
    title: string
    synopsis: string
    statusName: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
    _count: AnimeCountAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  type GetAnimeGroupByPayload<T extends AnimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeGroupByOutputType[P]>
        }
      >
    >


  export type AnimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thumbnail?: boolean
    title?: boolean
    synopsis?: boolean
    statusName?: boolean
    studio?: boolean
    director?: boolean
    releaseDate?: boolean
    episodeCount?: boolean
    durationPerEpisode?: boolean
    genres?: boolean | Anime$genresArgs<ExtArgs>
    status?: boolean | StatusDefaultArgs<ExtArgs>
    characters?: boolean | Anime$charactersArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thumbnail?: boolean
    title?: boolean
    synopsis?: boolean
    statusName?: boolean
    studio?: boolean
    director?: boolean
    releaseDate?: boolean
    episodeCount?: boolean
    durationPerEpisode?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    thumbnail?: boolean
    title?: boolean
    synopsis?: boolean
    statusName?: boolean
    studio?: boolean
    director?: boolean
    releaseDate?: boolean
    episodeCount?: boolean
    durationPerEpisode?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectScalar = {
    id?: boolean
    thumbnail?: boolean
    title?: boolean
    synopsis?: boolean
    statusName?: boolean
    studio?: boolean
    director?: boolean
    releaseDate?: boolean
    episodeCount?: boolean
    durationPerEpisode?: boolean
  }

  export type AnimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "thumbnail" | "title" | "synopsis" | "statusName" | "studio" | "director" | "releaseDate" | "episodeCount" | "durationPerEpisode", ExtArgs["result"]["anime"]>
  export type AnimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | Anime$genresArgs<ExtArgs>
    status?: boolean | StatusDefaultArgs<ExtArgs>
    characters?: boolean | Anime$charactersArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }
  export type AnimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }

  export type $AnimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anime"
    objects: {
      genres: Prisma.$GenrePayload<ExtArgs>[]
      status: Prisma.$StatusPayload<ExtArgs>
      characters: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      thumbnail: string
      title: string
      synopsis: string
      statusName: string
      studio: string
      director: string
      releaseDate: string
      episodeCount: string
      durationPerEpisode: string
    }, ExtArgs["result"]["anime"]>
    composites: {}
  }

  type AnimeGetPayload<S extends boolean | null | undefined | AnimeDefaultArgs> = $Result.GetResult<Prisma.$AnimePayload, S>

  type AnimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeCountAggregateInputType | true
    }

  export interface AnimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anime'], meta: { name: 'Anime' } }
    /**
     * Find zero or one Anime that matches the filter.
     * @param {AnimeFindUniqueArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeFindUniqueArgs>(args: SelectSubset<T, AnimeFindUniqueArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Anime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeFindUniqueOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindFirstArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeFindFirstArgs>(args?: SelectSubset<T, AnimeFindFirstArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Anime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindFirstOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anime
     * const anime = await prisma.anime.findMany()
     * 
     * // Get first 10 Anime
     * const anime = await prisma.anime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeWithIdOnly = await prisma.anime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimeFindManyArgs>(args?: SelectSubset<T, AnimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Anime.
     * @param {AnimeCreateArgs} args - Arguments to create a Anime.
     * @example
     * // Create one Anime
     * const Anime = await prisma.anime.create({
     *   data: {
     *     // ... data to create a Anime
     *   }
     * })
     * 
     */
    create<T extends AnimeCreateArgs>(args: SelectSubset<T, AnimeCreateArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Anime.
     * @param {AnimeCreateManyArgs} args - Arguments to create many Anime.
     * @example
     * // Create many Anime
     * const anime = await prisma.anime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeCreateManyArgs>(args?: SelectSubset<T, AnimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Anime and returns the data saved in the database.
     * @param {AnimeCreateManyAndReturnArgs} args - Arguments to create many Anime.
     * @example
     * // Create many Anime
     * const anime = await prisma.anime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Anime and only return the `id`
     * const animeWithIdOnly = await prisma.anime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Anime.
     * @param {AnimeDeleteArgs} args - Arguments to delete one Anime.
     * @example
     * // Delete one Anime
     * const Anime = await prisma.anime.delete({
     *   where: {
     *     // ... filter to delete one Anime
     *   }
     * })
     * 
     */
    delete<T extends AnimeDeleteArgs>(args: SelectSubset<T, AnimeDeleteArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Anime.
     * @param {AnimeUpdateArgs} args - Arguments to update one Anime.
     * @example
     * // Update one Anime
     * const anime = await prisma.anime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeUpdateArgs>(args: SelectSubset<T, AnimeUpdateArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Anime.
     * @param {AnimeDeleteManyArgs} args - Arguments to filter Anime to delete.
     * @example
     * // Delete a few Anime
     * const { count } = await prisma.anime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeDeleteManyArgs>(args?: SelectSubset<T, AnimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anime
     * const anime = await prisma.anime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeUpdateManyArgs>(args: SelectSubset<T, AnimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime and returns the data updated in the database.
     * @param {AnimeUpdateManyAndReturnArgs} args - Arguments to update many Anime.
     * @example
     * // Update many Anime
     * const anime = await prisma.anime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Anime and only return the `id`
     * const animeWithIdOnly = await prisma.anime.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Anime.
     * @param {AnimeUpsertArgs} args - Arguments to update or create a Anime.
     * @example
     * // Update or create a Anime
     * const anime = await prisma.anime.upsert({
     *   create: {
     *     // ... data to create a Anime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anime we want to update
     *   }
     * })
     */
    upsert<T extends AnimeUpsertArgs>(args: SelectSubset<T, AnimeUpsertArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeCountArgs} args - Arguments to filter Anime to count.
     * @example
     * // Count the number of Anime
     * const count = await prisma.anime.count({
     *   where: {
     *     // ... the filter for the Anime we want to count
     *   }
     * })
    **/
    count<T extends AnimeCountArgs>(
      args?: Subset<T, AnimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnimeAggregateArgs>(args: Subset<T, AnimeAggregateArgs>): Prisma.PrismaPromise<GetAnimeAggregateType<T>>

    /**
     * Group by Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeGroupByArgs['orderBy'] }
        : { orderBy?: AnimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anime model
   */
  readonly fields: AnimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genres<T extends Anime$genresArgs<ExtArgs> = {}>(args?: Subset<T, Anime$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    status<T extends StatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusDefaultArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    characters<T extends Anime$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Anime$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Anime model
   */ 
  interface AnimeFieldRefs {
    readonly id: FieldRef<"Anime", 'String'>
    readonly thumbnail: FieldRef<"Anime", 'String'>
    readonly title: FieldRef<"Anime", 'String'>
    readonly synopsis: FieldRef<"Anime", 'String'>
    readonly statusName: FieldRef<"Anime", 'String'>
    readonly studio: FieldRef<"Anime", 'String'>
    readonly director: FieldRef<"Anime", 'String'>
    readonly releaseDate: FieldRef<"Anime", 'String'>
    readonly episodeCount: FieldRef<"Anime", 'String'>
    readonly durationPerEpisode: FieldRef<"Anime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Anime findUnique
   */
  export type AnimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime findUniqueOrThrow
   */
  export type AnimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime findFirst
   */
  export type AnimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime findFirstOrThrow
   */
  export type AnimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime findMany
   */
  export type AnimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime create
   */
  export type AnimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The data needed to create a Anime.
     */
    data: XOR<AnimeCreateInput, AnimeUncheckedCreateInput>
  }

  /**
   * Anime createMany
   */
  export type AnimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anime.
     */
    data: AnimeCreateManyInput | AnimeCreateManyInput[]
  }

  /**
   * Anime createManyAndReturn
   */
  export type AnimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * The data used to create many Anime.
     */
    data: AnimeCreateManyInput | AnimeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Anime update
   */
  export type AnimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The data needed to update a Anime.
     */
    data: XOR<AnimeUpdateInput, AnimeUncheckedUpdateInput>
    /**
     * Choose, which Anime to update.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime updateMany
   */
  export type AnimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anime.
     */
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyInput>
    /**
     * Filter which Anime to update
     */
    where?: AnimeWhereInput
  }

  /**
   * Anime updateManyAndReturn
   */
  export type AnimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * The data used to update Anime.
     */
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyInput>
    /**
     * Filter which Anime to update
     */
    where?: AnimeWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Anime upsert
   */
  export type AnimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The filter to search for the Anime to update in case it exists.
     */
    where: AnimeWhereUniqueInput
    /**
     * In case the Anime found by the `where` argument doesn't exist, create a new Anime with this data.
     */
    create: XOR<AnimeCreateInput, AnimeUncheckedCreateInput>
    /**
     * In case the Anime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeUpdateInput, AnimeUncheckedUpdateInput>
  }

  /**
   * Anime delete
   */
  export type AnimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter which Anime to delete.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime deleteMany
   */
  export type AnimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anime to delete
     */
    where?: AnimeWhereInput
  }

  /**
   * Anime.genres
   */
  export type Anime$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Anime.characters
   */
  export type Anime$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Anime without action
   */
  export type AnimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
  }


  /**
   * Model Status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusMinAggregateOutputType = {
    name: string | null
  }

  export type StatusMaxAggregateOutputType = {
    name: string | null
  }

  export type StatusCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type StatusMinAggregateInputType = {
    name?: true
  }

  export type StatusMaxAggregateInputType = {
    name?: true
  }

  export type StatusCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithAggregationInput | StatusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    name: string
    _count: StatusCountAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    anime?: boolean | Status$animeArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectScalar = {
    name?: boolean
  }

  export type StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name", ExtArgs["result"]["status"]>
  export type StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | Status$animeArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status"
    objects: {
      anime: Prisma.$AnimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = $Result.GetResult<Prisma.$StatusPayload, S>

  type StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status'], meta: { name: 'Status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusFindUniqueArgs>(args: SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusFindFirstArgs>(args?: SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const statusWithNameOnly = await prisma.status.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends StatusFindManyArgs>(args?: SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends StatusCreateArgs>(args: SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Statuses.
     * @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusCreateManyArgs>(args?: SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {StatusCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statuses and only return the `name`
     * const statusWithNameOnly = await prisma.status.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends StatusDeleteArgs>(args: SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateArgs>(args: SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDeleteManyArgs>(args?: SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateManyArgs>(args: SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {StatusUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statuses and only return the `name`
     * const statusWithNameOnly = await prisma.status.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpsertArgs>(args: SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status model
   */
  readonly fields: StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anime<T extends Status$animeArgs<ExtArgs> = {}>(args?: Subset<T, Status$animeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Status model
   */ 
  interface StatusFieldRefs {
    readonly name: FieldRef<"Status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Status findUnique
   */
  export type StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findFirst
   */
  export type StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findMany
   */
  export type StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status create
   */
  export type StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }

  /**
   * Status createMany
   */
  export type StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
  }

  /**
   * Status createManyAndReturn
   */
  export type StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
  }

  /**
   * Status update
   */
  export type StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
  }

  /**
   * Status updateManyAndReturn
   */
  export type StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
  }

  /**
   * Status upsert
   */
  export type StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }

  /**
   * Status delete
   */
  export type StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
  }

  /**
   * Status.anime
   */
  export type Status$animeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    where?: AnimeWhereInput
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    cursor?: AnimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Status without action
   */
  export type StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    name?: true
  }

  export type GenreCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    name: string
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    anime?: boolean | Genre$animeArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    name?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | Genre$animeArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      anime: Prisma.$AnimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const genreWithNameOnly = await prisma.genre.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `name`
     * const genreWithNameOnly = await prisma.genre.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `name`
     * const genreWithNameOnly = await prisma.genre.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anime<T extends Genre$animeArgs<ExtArgs> = {}>(args?: Subset<T, Genre$animeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */ 
  interface GenreFieldRefs {
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }

  /**
   * Genre.anime
   */
  export type Genre$animeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    where?: AnimeWhereInput
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    cursor?: AnimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterMinAggregateOutputType = {
    id: string | null
    animeId: string | null
    name: string | null
    description: string | null
    origin: string | null
    birthDate: string | null
    age: string | null
    role: string | null
    thumbnail: string | null
    personality: string | null
    background: string | null
    bio: string | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: string | null
    animeId: string | null
    name: string | null
    description: string | null
    origin: string | null
    birthDate: string | null
    age: string | null
    role: string | null
    thumbnail: string | null
    personality: string | null
    background: string | null
    bio: string | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    animeId: number
    name: number
    description: number
    origin: number
    birthDate: number
    age: number
    role: number
    thumbnail: number
    personality: number
    background: number
    bio: number
    _all: number
  }


  export type CharacterMinAggregateInputType = {
    id?: true
    animeId?: true
    name?: true
    description?: true
    origin?: true
    birthDate?: true
    age?: true
    role?: true
    thumbnail?: true
    personality?: true
    background?: true
    bio?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    animeId?: true
    name?: true
    description?: true
    origin?: true
    birthDate?: true
    age?: true
    role?: true
    thumbnail?: true
    personality?: true
    background?: true
    bio?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    animeId?: true
    name?: true
    description?: true
    origin?: true
    birthDate?: true
    age?: true
    role?: true
    thumbnail?: true
    personality?: true
    background?: true
    bio?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: string
    animeId: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeId?: boolean
    name?: boolean
    description?: boolean
    origin?: boolean
    birthDate?: boolean
    age?: boolean
    role?: boolean
    thumbnail?: boolean
    personality?: boolean
    background?: boolean
    bio?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    abilities?: boolean | Character$abilitiesArgs<ExtArgs>
    relations?: boolean | Character$relationsArgs<ExtArgs>
    relatedTo?: boolean | Character$relatedToArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeId?: boolean
    name?: boolean
    description?: boolean
    origin?: boolean
    birthDate?: boolean
    age?: boolean
    role?: boolean
    thumbnail?: boolean
    personality?: boolean
    background?: boolean
    bio?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeId?: boolean
    name?: boolean
    description?: boolean
    origin?: boolean
    birthDate?: boolean
    age?: boolean
    role?: boolean
    thumbnail?: boolean
    personality?: boolean
    background?: boolean
    bio?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    animeId?: boolean
    name?: boolean
    description?: boolean
    origin?: boolean
    birthDate?: boolean
    age?: boolean
    role?: boolean
    thumbnail?: boolean
    personality?: boolean
    background?: boolean
    bio?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animeId" | "name" | "description" | "origin" | "birthDate" | "age" | "role" | "thumbnail" | "personality" | "background" | "bio", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    abilities?: boolean | Character$abilitiesArgs<ExtArgs>
    relations?: boolean | Character$relationsArgs<ExtArgs>
    relatedTo?: boolean | Character$relatedToArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
  }

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      anime: Prisma.$AnimePayload<ExtArgs>
      abilities: Prisma.$AbilitiesPayload<ExtArgs>[]
      relations: Prisma.$CharacterPayload<ExtArgs>[]
      relatedTo: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      animeId: string
      name: string
      description: string
      origin: string
      birthDate: string
      age: string
      role: string
      thumbnail: string
      personality: string
      background: string
      bio: string
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anime<T extends AnimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeDefaultArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    abilities<T extends Character$abilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Character$abilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    relations<T extends Character$relationsArgs<ExtArgs> = {}>(args?: Subset<T, Character$relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    relatedTo<T extends Character$relatedToArgs<ExtArgs> = {}>(args?: Subset<T, Character$relatedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */ 
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'String'>
    readonly animeId: FieldRef<"Character", 'String'>
    readonly name: FieldRef<"Character", 'String'>
    readonly description: FieldRef<"Character", 'String'>
    readonly origin: FieldRef<"Character", 'String'>
    readonly birthDate: FieldRef<"Character", 'String'>
    readonly age: FieldRef<"Character", 'String'>
    readonly role: FieldRef<"Character", 'String'>
    readonly thumbnail: FieldRef<"Character", 'String'>
    readonly personality: FieldRef<"Character", 'String'>
    readonly background: FieldRef<"Character", 'String'>
    readonly bio: FieldRef<"Character", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
  }

  /**
   * Character.abilities
   */
  export type Character$abilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
    where?: AbilitiesWhereInput
    orderBy?: AbilitiesOrderByWithRelationInput | AbilitiesOrderByWithRelationInput[]
    cursor?: AbilitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbilitiesScalarFieldEnum | AbilitiesScalarFieldEnum[]
  }

  /**
   * Character.relations
   */
  export type Character$relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character.relatedTo
   */
  export type Character$relatedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model Abilities
   */

  export type AggregateAbilities = {
    _count: AbilitiesCountAggregateOutputType | null
    _min: AbilitiesMinAggregateOutputType | null
    _max: AbilitiesMaxAggregateOutputType | null
  }

  export type AbilitiesMinAggregateOutputType = {
    name: string | null
    description: string | null
  }

  export type AbilitiesMaxAggregateOutputType = {
    name: string | null
    description: string | null
  }

  export type AbilitiesCountAggregateOutputType = {
    name: number
    description: number
    _all: number
  }


  export type AbilitiesMinAggregateInputType = {
    name?: true
    description?: true
  }

  export type AbilitiesMaxAggregateInputType = {
    name?: true
    description?: true
  }

  export type AbilitiesCountAggregateInputType = {
    name?: true
    description?: true
    _all?: true
  }

  export type AbilitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abilities to aggregate.
     */
    where?: AbilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilitiesOrderByWithRelationInput | AbilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abilities
    **/
    _count?: true | AbilitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbilitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbilitiesMaxAggregateInputType
  }

  export type GetAbilitiesAggregateType<T extends AbilitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateAbilities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbilities[P]>
      : GetScalarType<T[P], AggregateAbilities[P]>
  }




  export type AbilitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbilitiesWhereInput
    orderBy?: AbilitiesOrderByWithAggregationInput | AbilitiesOrderByWithAggregationInput[]
    by: AbilitiesScalarFieldEnum[] | AbilitiesScalarFieldEnum
    having?: AbilitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbilitiesCountAggregateInputType | true
    _min?: AbilitiesMinAggregateInputType
    _max?: AbilitiesMaxAggregateInputType
  }

  export type AbilitiesGroupByOutputType = {
    name: string
    description: string
    _count: AbilitiesCountAggregateOutputType | null
    _min: AbilitiesMinAggregateOutputType | null
    _max: AbilitiesMaxAggregateOutputType | null
  }

  type GetAbilitiesGroupByPayload<T extends AbilitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbilitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbilitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbilitiesGroupByOutputType[P]>
            : GetScalarType<T[P], AbilitiesGroupByOutputType[P]>
        }
      >
    >


  export type AbilitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    character?: boolean | Abilities$characterArgs<ExtArgs>
    _count?: boolean | AbilitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abilities"]>

  export type AbilitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["abilities"]>

  export type AbilitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["abilities"]>

  export type AbilitiesSelectScalar = {
    name?: boolean
    description?: boolean
  }

  export type AbilitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "description", ExtArgs["result"]["abilities"]>
  export type AbilitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | Abilities$characterArgs<ExtArgs>
    _count?: boolean | AbilitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AbilitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AbilitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AbilitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Abilities"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      description: string
    }, ExtArgs["result"]["abilities"]>
    composites: {}
  }

  type AbilitiesGetPayload<S extends boolean | null | undefined | AbilitiesDefaultArgs> = $Result.GetResult<Prisma.$AbilitiesPayload, S>

  type AbilitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbilitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbilitiesCountAggregateInputType | true
    }

  export interface AbilitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Abilities'], meta: { name: 'Abilities' } }
    /**
     * Find zero or one Abilities that matches the filter.
     * @param {AbilitiesFindUniqueArgs} args - Arguments to find a Abilities
     * @example
     * // Get one Abilities
     * const abilities = await prisma.abilities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbilitiesFindUniqueArgs>(args: SelectSubset<T, AbilitiesFindUniqueArgs<ExtArgs>>): Prisma__AbilitiesClient<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Abilities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbilitiesFindUniqueOrThrowArgs} args - Arguments to find a Abilities
     * @example
     * // Get one Abilities
     * const abilities = await prisma.abilities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbilitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, AbilitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbilitiesClient<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Abilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilitiesFindFirstArgs} args - Arguments to find a Abilities
     * @example
     * // Get one Abilities
     * const abilities = await prisma.abilities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbilitiesFindFirstArgs>(args?: SelectSubset<T, AbilitiesFindFirstArgs<ExtArgs>>): Prisma__AbilitiesClient<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Abilities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilitiesFindFirstOrThrowArgs} args - Arguments to find a Abilities
     * @example
     * // Get one Abilities
     * const abilities = await prisma.abilities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbilitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, AbilitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbilitiesClient<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Abilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abilities
     * const abilities = await prisma.abilities.findMany()
     * 
     * // Get first 10 Abilities
     * const abilities = await prisma.abilities.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const abilitiesWithNameOnly = await prisma.abilities.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends AbilitiesFindManyArgs>(args?: SelectSubset<T, AbilitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Abilities.
     * @param {AbilitiesCreateArgs} args - Arguments to create a Abilities.
     * @example
     * // Create one Abilities
     * const Abilities = await prisma.abilities.create({
     *   data: {
     *     // ... data to create a Abilities
     *   }
     * })
     * 
     */
    create<T extends AbilitiesCreateArgs>(args: SelectSubset<T, AbilitiesCreateArgs<ExtArgs>>): Prisma__AbilitiesClient<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Abilities.
     * @param {AbilitiesCreateManyArgs} args - Arguments to create many Abilities.
     * @example
     * // Create many Abilities
     * const abilities = await prisma.abilities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbilitiesCreateManyArgs>(args?: SelectSubset<T, AbilitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Abilities and returns the data saved in the database.
     * @param {AbilitiesCreateManyAndReturnArgs} args - Arguments to create many Abilities.
     * @example
     * // Create many Abilities
     * const abilities = await prisma.abilities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Abilities and only return the `name`
     * const abilitiesWithNameOnly = await prisma.abilities.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbilitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, AbilitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Abilities.
     * @param {AbilitiesDeleteArgs} args - Arguments to delete one Abilities.
     * @example
     * // Delete one Abilities
     * const Abilities = await prisma.abilities.delete({
     *   where: {
     *     // ... filter to delete one Abilities
     *   }
     * })
     * 
     */
    delete<T extends AbilitiesDeleteArgs>(args: SelectSubset<T, AbilitiesDeleteArgs<ExtArgs>>): Prisma__AbilitiesClient<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Abilities.
     * @param {AbilitiesUpdateArgs} args - Arguments to update one Abilities.
     * @example
     * // Update one Abilities
     * const abilities = await prisma.abilities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbilitiesUpdateArgs>(args: SelectSubset<T, AbilitiesUpdateArgs<ExtArgs>>): Prisma__AbilitiesClient<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Abilities.
     * @param {AbilitiesDeleteManyArgs} args - Arguments to filter Abilities to delete.
     * @example
     * // Delete a few Abilities
     * const { count } = await prisma.abilities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbilitiesDeleteManyArgs>(args?: SelectSubset<T, AbilitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abilities
     * const abilities = await prisma.abilities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbilitiesUpdateManyArgs>(args: SelectSubset<T, AbilitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abilities and returns the data updated in the database.
     * @param {AbilitiesUpdateManyAndReturnArgs} args - Arguments to update many Abilities.
     * @example
     * // Update many Abilities
     * const abilities = await prisma.abilities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Abilities and only return the `name`
     * const abilitiesWithNameOnly = await prisma.abilities.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbilitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, AbilitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Abilities.
     * @param {AbilitiesUpsertArgs} args - Arguments to update or create a Abilities.
     * @example
     * // Update or create a Abilities
     * const abilities = await prisma.abilities.upsert({
     *   create: {
     *     // ... data to create a Abilities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Abilities we want to update
     *   }
     * })
     */
    upsert<T extends AbilitiesUpsertArgs>(args: SelectSubset<T, AbilitiesUpsertArgs<ExtArgs>>): Prisma__AbilitiesClient<$Result.GetResult<Prisma.$AbilitiesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilitiesCountArgs} args - Arguments to filter Abilities to count.
     * @example
     * // Count the number of Abilities
     * const count = await prisma.abilities.count({
     *   where: {
     *     // ... the filter for the Abilities we want to count
     *   }
     * })
    **/
    count<T extends AbilitiesCountArgs>(
      args?: Subset<T, AbilitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbilitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbilitiesAggregateArgs>(args: Subset<T, AbilitiesAggregateArgs>): Prisma.PrismaPromise<GetAbilitiesAggregateType<T>>

    /**
     * Group by Abilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbilitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbilitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbilitiesGroupByArgs['orderBy'] }
        : { orderBy?: AbilitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbilitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbilitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Abilities model
   */
  readonly fields: AbilitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Abilities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbilitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends Abilities$characterArgs<ExtArgs> = {}>(args?: Subset<T, Abilities$characterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Abilities model
   */ 
  interface AbilitiesFieldRefs {
    readonly name: FieldRef<"Abilities", 'String'>
    readonly description: FieldRef<"Abilities", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Abilities findUnique
   */
  export type AbilitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
    /**
     * Filter, which Abilities to fetch.
     */
    where: AbilitiesWhereUniqueInput
  }

  /**
   * Abilities findUniqueOrThrow
   */
  export type AbilitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
    /**
     * Filter, which Abilities to fetch.
     */
    where: AbilitiesWhereUniqueInput
  }

  /**
   * Abilities findFirst
   */
  export type AbilitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
    /**
     * Filter, which Abilities to fetch.
     */
    where?: AbilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilitiesOrderByWithRelationInput | AbilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abilities.
     */
    cursor?: AbilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abilities.
     */
    distinct?: AbilitiesScalarFieldEnum | AbilitiesScalarFieldEnum[]
  }

  /**
   * Abilities findFirstOrThrow
   */
  export type AbilitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
    /**
     * Filter, which Abilities to fetch.
     */
    where?: AbilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilitiesOrderByWithRelationInput | AbilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abilities.
     */
    cursor?: AbilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abilities.
     */
    distinct?: AbilitiesScalarFieldEnum | AbilitiesScalarFieldEnum[]
  }

  /**
   * Abilities findMany
   */
  export type AbilitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
    /**
     * Filter, which Abilities to fetch.
     */
    where?: AbilitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abilities to fetch.
     */
    orderBy?: AbilitiesOrderByWithRelationInput | AbilitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abilities.
     */
    cursor?: AbilitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abilities.
     */
    skip?: number
    distinct?: AbilitiesScalarFieldEnum | AbilitiesScalarFieldEnum[]
  }

  /**
   * Abilities create
   */
  export type AbilitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Abilities.
     */
    data: XOR<AbilitiesCreateInput, AbilitiesUncheckedCreateInput>
  }

  /**
   * Abilities createMany
   */
  export type AbilitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Abilities.
     */
    data: AbilitiesCreateManyInput | AbilitiesCreateManyInput[]
  }

  /**
   * Abilities createManyAndReturn
   */
  export type AbilitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * The data used to create many Abilities.
     */
    data: AbilitiesCreateManyInput | AbilitiesCreateManyInput[]
  }

  /**
   * Abilities update
   */
  export type AbilitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Abilities.
     */
    data: XOR<AbilitiesUpdateInput, AbilitiesUncheckedUpdateInput>
    /**
     * Choose, which Abilities to update.
     */
    where: AbilitiesWhereUniqueInput
  }

  /**
   * Abilities updateMany
   */
  export type AbilitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Abilities.
     */
    data: XOR<AbilitiesUpdateManyMutationInput, AbilitiesUncheckedUpdateManyInput>
    /**
     * Filter which Abilities to update
     */
    where?: AbilitiesWhereInput
  }

  /**
   * Abilities updateManyAndReturn
   */
  export type AbilitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * The data used to update Abilities.
     */
    data: XOR<AbilitiesUpdateManyMutationInput, AbilitiesUncheckedUpdateManyInput>
    /**
     * Filter which Abilities to update
     */
    where?: AbilitiesWhereInput
  }

  /**
   * Abilities upsert
   */
  export type AbilitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Abilities to update in case it exists.
     */
    where: AbilitiesWhereUniqueInput
    /**
     * In case the Abilities found by the `where` argument doesn't exist, create a new Abilities with this data.
     */
    create: XOR<AbilitiesCreateInput, AbilitiesUncheckedCreateInput>
    /**
     * In case the Abilities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbilitiesUpdateInput, AbilitiesUncheckedUpdateInput>
  }

  /**
   * Abilities delete
   */
  export type AbilitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
    /**
     * Filter which Abilities to delete.
     */
    where: AbilitiesWhereUniqueInput
  }

  /**
   * Abilities deleteMany
   */
  export type AbilitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abilities to delete
     */
    where?: AbilitiesWhereInput
  }

  /**
   * Abilities.character
   */
  export type Abilities$characterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Abilities without action
   */
  export type AbilitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Abilities
     */
    select?: AbilitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Abilities
     */
    omit?: AbilitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbilitiesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnimeScalarFieldEnum: {
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

  export type AnimeScalarFieldEnum = (typeof AnimeScalarFieldEnum)[keyof typeof AnimeScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    name: 'name'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
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

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const AbilitiesScalarFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type AbilitiesScalarFieldEnum = (typeof AbilitiesScalarFieldEnum)[keyof typeof AbilitiesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type AnimeWhereInput = {
    AND?: AnimeWhereInput | AnimeWhereInput[]
    OR?: AnimeWhereInput[]
    NOT?: AnimeWhereInput | AnimeWhereInput[]
    id?: StringFilter<"Anime"> | string
    thumbnail?: StringFilter<"Anime"> | string
    title?: StringFilter<"Anime"> | string
    synopsis?: StringFilter<"Anime"> | string
    statusName?: StringFilter<"Anime"> | string
    studio?: StringFilter<"Anime"> | string
    director?: StringFilter<"Anime"> | string
    releaseDate?: StringFilter<"Anime"> | string
    episodeCount?: StringFilter<"Anime"> | string
    durationPerEpisode?: StringFilter<"Anime"> | string
    genres?: GenreListRelationFilter
    status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
    characters?: CharacterListRelationFilter
  }

  export type AnimeOrderByWithRelationInput = {
    id?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    statusName?: SortOrder
    studio?: SortOrder
    director?: SortOrder
    releaseDate?: SortOrder
    episodeCount?: SortOrder
    durationPerEpisode?: SortOrder
    genres?: GenreOrderByRelationAggregateInput
    status?: StatusOrderByWithRelationInput
    characters?: CharacterOrderByRelationAggregateInput
  }

  export type AnimeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: AnimeWhereInput | AnimeWhereInput[]
    OR?: AnimeWhereInput[]
    NOT?: AnimeWhereInput | AnimeWhereInput[]
    thumbnail?: StringFilter<"Anime"> | string
    synopsis?: StringFilter<"Anime"> | string
    statusName?: StringFilter<"Anime"> | string
    studio?: StringFilter<"Anime"> | string
    director?: StringFilter<"Anime"> | string
    releaseDate?: StringFilter<"Anime"> | string
    episodeCount?: StringFilter<"Anime"> | string
    durationPerEpisode?: StringFilter<"Anime"> | string
    genres?: GenreListRelationFilter
    status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
    characters?: CharacterListRelationFilter
  }, "id" | "title">

  export type AnimeOrderByWithAggregationInput = {
    id?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    statusName?: SortOrder
    studio?: SortOrder
    director?: SortOrder
    releaseDate?: SortOrder
    episodeCount?: SortOrder
    durationPerEpisode?: SortOrder
    _count?: AnimeCountOrderByAggregateInput
    _max?: AnimeMaxOrderByAggregateInput
    _min?: AnimeMinOrderByAggregateInput
  }

  export type AnimeScalarWhereWithAggregatesInput = {
    AND?: AnimeScalarWhereWithAggregatesInput | AnimeScalarWhereWithAggregatesInput[]
    OR?: AnimeScalarWhereWithAggregatesInput[]
    NOT?: AnimeScalarWhereWithAggregatesInput | AnimeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Anime"> | string
    thumbnail?: StringWithAggregatesFilter<"Anime"> | string
    title?: StringWithAggregatesFilter<"Anime"> | string
    synopsis?: StringWithAggregatesFilter<"Anime"> | string
    statusName?: StringWithAggregatesFilter<"Anime"> | string
    studio?: StringWithAggregatesFilter<"Anime"> | string
    director?: StringWithAggregatesFilter<"Anime"> | string
    releaseDate?: StringWithAggregatesFilter<"Anime"> | string
    episodeCount?: StringWithAggregatesFilter<"Anime"> | string
    durationPerEpisode?: StringWithAggregatesFilter<"Anime"> | string
  }

  export type StatusWhereInput = {
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    name?: StringFilter<"Status"> | string
    anime?: AnimeListRelationFilter
  }

  export type StatusOrderByWithRelationInput = {
    name?: SortOrder
    anime?: AnimeOrderByRelationAggregateInput
  }

  export type StatusWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    anime?: AnimeListRelationFilter
  }, "name" | "name">

  export type StatusOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: StatusCountOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    OR?: StatusScalarWhereWithAggregatesInput[]
    NOT?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Status"> | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    name?: StringFilter<"Genre"> | string
    anime?: AnimeListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    name?: SortOrder
    anime?: AnimeOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    anime?: AnimeListRelationFilter
  }, "name" | "name">

  export type GenreOrderByWithAggregationInput = {
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: StringFilter<"Character"> | string
    animeId?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    description?: StringFilter<"Character"> | string
    origin?: StringFilter<"Character"> | string
    birthDate?: StringFilter<"Character"> | string
    age?: StringFilter<"Character"> | string
    role?: StringFilter<"Character"> | string
    thumbnail?: StringFilter<"Character"> | string
    personality?: StringFilter<"Character"> | string
    background?: StringFilter<"Character"> | string
    bio?: StringFilter<"Character"> | string
    anime?: XOR<AnimeScalarRelationFilter, AnimeWhereInput>
    abilities?: AbilitiesListRelationFilter
    relations?: CharacterListRelationFilter
    relatedTo?: CharacterListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    animeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    origin?: SortOrder
    birthDate?: SortOrder
    age?: SortOrder
    role?: SortOrder
    thumbnail?: SortOrder
    personality?: SortOrder
    background?: SortOrder
    bio?: SortOrder
    anime?: AnimeOrderByWithRelationInput
    abilities?: AbilitiesOrderByRelationAggregateInput
    relations?: CharacterOrderByRelationAggregateInput
    relatedTo?: CharacterOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    animeId?: StringFilter<"Character"> | string
    description?: StringFilter<"Character"> | string
    origin?: StringFilter<"Character"> | string
    birthDate?: StringFilter<"Character"> | string
    age?: StringFilter<"Character"> | string
    role?: StringFilter<"Character"> | string
    thumbnail?: StringFilter<"Character"> | string
    personality?: StringFilter<"Character"> | string
    background?: StringFilter<"Character"> | string
    bio?: StringFilter<"Character"> | string
    anime?: XOR<AnimeScalarRelationFilter, AnimeWhereInput>
    abilities?: AbilitiesListRelationFilter
    relations?: CharacterListRelationFilter
    relatedTo?: CharacterListRelationFilter
  }, "id" | "name">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    animeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    origin?: SortOrder
    birthDate?: SortOrder
    age?: SortOrder
    role?: SortOrder
    thumbnail?: SortOrder
    personality?: SortOrder
    background?: SortOrder
    bio?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Character"> | string
    animeId?: StringWithAggregatesFilter<"Character"> | string
    name?: StringWithAggregatesFilter<"Character"> | string
    description?: StringWithAggregatesFilter<"Character"> | string
    origin?: StringWithAggregatesFilter<"Character"> | string
    birthDate?: StringWithAggregatesFilter<"Character"> | string
    age?: StringWithAggregatesFilter<"Character"> | string
    role?: StringWithAggregatesFilter<"Character"> | string
    thumbnail?: StringWithAggregatesFilter<"Character"> | string
    personality?: StringWithAggregatesFilter<"Character"> | string
    background?: StringWithAggregatesFilter<"Character"> | string
    bio?: StringWithAggregatesFilter<"Character"> | string
  }

  export type AbilitiesWhereInput = {
    AND?: AbilitiesWhereInput | AbilitiesWhereInput[]
    OR?: AbilitiesWhereInput[]
    NOT?: AbilitiesWhereInput | AbilitiesWhereInput[]
    name?: StringFilter<"Abilities"> | string
    description?: StringFilter<"Abilities"> | string
    character?: CharacterListRelationFilter
  }

  export type AbilitiesOrderByWithRelationInput = {
    name?: SortOrder
    description?: SortOrder
    character?: CharacterOrderByRelationAggregateInput
  }

  export type AbilitiesWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: AbilitiesWhereInput | AbilitiesWhereInput[]
    OR?: AbilitiesWhereInput[]
    NOT?: AbilitiesWhereInput | AbilitiesWhereInput[]
    description?: StringFilter<"Abilities"> | string
    character?: CharacterListRelationFilter
  }, "name" | "name">

  export type AbilitiesOrderByWithAggregationInput = {
    name?: SortOrder
    description?: SortOrder
    _count?: AbilitiesCountOrderByAggregateInput
    _max?: AbilitiesMaxOrderByAggregateInput
    _min?: AbilitiesMinOrderByAggregateInput
  }

  export type AbilitiesScalarWhereWithAggregatesInput = {
    AND?: AbilitiesScalarWhereWithAggregatesInput | AbilitiesScalarWhereWithAggregatesInput[]
    OR?: AbilitiesScalarWhereWithAggregatesInput[]
    NOT?: AbilitiesScalarWhereWithAggregatesInput | AbilitiesScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Abilities"> | string
    description?: StringWithAggregatesFilter<"Abilities"> | string
  }

  export type AnimeCreateInput = {
    id?: string
    thumbnail: string
    title: string
    synopsis: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
    genres?: GenreCreateNestedManyWithoutAnimeInput
    status: StatusCreateNestedOneWithoutAnimeInput
    characters?: CharacterCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateInput = {
    id?: string
    thumbnail: string
    title: string
    synopsis: string
    statusName: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
    genres?: GenreUncheckedCreateNestedManyWithoutAnimeInput
    characters?: CharacterUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
    genres?: GenreUpdateManyWithoutAnimeNestedInput
    status?: StatusUpdateOneRequiredWithoutAnimeNestedInput
    characters?: CharacterUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    statusName?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
    genres?: GenreUncheckedUpdateManyWithoutAnimeNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeCreateManyInput = {
    id?: string
    thumbnail: string
    title: string
    synopsis: string
    statusName: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
  }

  export type AnimeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    statusName?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
  }

  export type StatusCreateInput = {
    name: string
    anime?: AnimeCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    name: string
    anime?: AnimeUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusCreateManyInput = {
    name: string
  }

  export type StatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreCreateInput = {
    name: string
    anime?: AnimeCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    name: string
    anime?: AnimeUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterCreateInput = {
    id?: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    anime: AnimeCreateNestedOneWithoutCharactersInput
    abilities?: AbilitiesCreateNestedManyWithoutCharacterInput
    relations?: CharacterCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterCreateNestedManyWithoutRelationsInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: string
    animeId: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    abilities?: AbilitiesUncheckedCreateNestedManyWithoutCharacterInput
    relations?: CharacterUncheckedCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterUncheckedCreateNestedManyWithoutRelationsInput
  }

  export type CharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUpdateOneRequiredWithoutCharactersNestedInput
    abilities?: AbilitiesUpdateManyWithoutCharacterNestedInput
    relations?: CharacterUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUpdateManyWithoutRelationsNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    abilities?: AbilitiesUncheckedUpdateManyWithoutCharacterNestedInput
    relations?: CharacterUncheckedUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUncheckedUpdateManyWithoutRelationsNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: string
    animeId: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
  }

  export type CharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type AbilitiesCreateInput = {
    name: string
    description: string
    character?: CharacterCreateNestedManyWithoutAbilitiesInput
  }

  export type AbilitiesUncheckedCreateInput = {
    name: string
    description: string
    character?: CharacterUncheckedCreateNestedManyWithoutAbilitiesInput
  }

  export type AbilitiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    character?: CharacterUpdateManyWithoutAbilitiesNestedInput
  }

  export type AbilitiesUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    character?: CharacterUncheckedUpdateManyWithoutAbilitiesNestedInput
  }

  export type AbilitiesCreateManyInput = {
    name: string
    description: string
  }

  export type AbilitiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AbilitiesUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type StatusScalarRelationFilter = {
    is?: StatusWhereInput
    isNot?: StatusWhereInput
  }

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput
    some?: CharacterWhereInput
    none?: CharacterWhereInput
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimeCountOrderByAggregateInput = {
    id?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    statusName?: SortOrder
    studio?: SortOrder
    director?: SortOrder
    releaseDate?: SortOrder
    episodeCount?: SortOrder
    durationPerEpisode?: SortOrder
  }

  export type AnimeMaxOrderByAggregateInput = {
    id?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    statusName?: SortOrder
    studio?: SortOrder
    director?: SortOrder
    releaseDate?: SortOrder
    episodeCount?: SortOrder
    durationPerEpisode?: SortOrder
  }

  export type AnimeMinOrderByAggregateInput = {
    id?: SortOrder
    thumbnail?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    statusName?: SortOrder
    studio?: SortOrder
    director?: SortOrder
    releaseDate?: SortOrder
    episodeCount?: SortOrder
    durationPerEpisode?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AnimeListRelationFilter = {
    every?: AnimeWhereInput
    some?: AnimeWhereInput
    none?: AnimeWhereInput
  }

  export type AnimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    name?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    name?: SortOrder
  }

  export type AnimeScalarRelationFilter = {
    is?: AnimeWhereInput
    isNot?: AnimeWhereInput
  }

  export type AbilitiesListRelationFilter = {
    every?: AbilitiesWhereInput
    some?: AbilitiesWhereInput
    none?: AbilitiesWhereInput
  }

  export type AbilitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    origin?: SortOrder
    birthDate?: SortOrder
    age?: SortOrder
    role?: SortOrder
    thumbnail?: SortOrder
    personality?: SortOrder
    background?: SortOrder
    bio?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    origin?: SortOrder
    birthDate?: SortOrder
    age?: SortOrder
    role?: SortOrder
    thumbnail?: SortOrder
    personality?: SortOrder
    background?: SortOrder
    bio?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    origin?: SortOrder
    birthDate?: SortOrder
    age?: SortOrder
    role?: SortOrder
    thumbnail?: SortOrder
    personality?: SortOrder
    background?: SortOrder
    bio?: SortOrder
  }

  export type AbilitiesCountOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
  }

  export type AbilitiesMaxOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
  }

  export type AbilitiesMinOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
  }

  export type GenreCreateNestedManyWithoutAnimeInput = {
    create?: XOR<GenreCreateWithoutAnimeInput, GenreUncheckedCreateWithoutAnimeInput> | GenreCreateWithoutAnimeInput[] | GenreUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAnimeInput | GenreCreateOrConnectWithoutAnimeInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type StatusCreateNestedOneWithoutAnimeInput = {
    create?: XOR<StatusCreateWithoutAnimeInput, StatusUncheckedCreateWithoutAnimeInput>
    connectOrCreate?: StatusCreateOrConnectWithoutAnimeInput
    connect?: StatusWhereUniqueInput
  }

  export type CharacterCreateNestedManyWithoutAnimeInput = {
    create?: XOR<CharacterCreateWithoutAnimeInput, CharacterUncheckedCreateWithoutAnimeInput> | CharacterCreateWithoutAnimeInput[] | CharacterUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAnimeInput | CharacterCreateOrConnectWithoutAnimeInput[]
    createMany?: CharacterCreateManyAnimeInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<GenreCreateWithoutAnimeInput, GenreUncheckedCreateWithoutAnimeInput> | GenreCreateWithoutAnimeInput[] | GenreUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAnimeInput | GenreCreateOrConnectWithoutAnimeInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<CharacterCreateWithoutAnimeInput, CharacterUncheckedCreateWithoutAnimeInput> | CharacterCreateWithoutAnimeInput[] | CharacterUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAnimeInput | CharacterCreateOrConnectWithoutAnimeInput[]
    createMany?: CharacterCreateManyAnimeInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type GenreUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<GenreCreateWithoutAnimeInput, GenreUncheckedCreateWithoutAnimeInput> | GenreCreateWithoutAnimeInput[] | GenreUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAnimeInput | GenreCreateOrConnectWithoutAnimeInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutAnimeInput | GenreUpsertWithWhereUniqueWithoutAnimeInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutAnimeInput | GenreUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutAnimeInput | GenreUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type StatusUpdateOneRequiredWithoutAnimeNestedInput = {
    create?: XOR<StatusCreateWithoutAnimeInput, StatusUncheckedCreateWithoutAnimeInput>
    connectOrCreate?: StatusCreateOrConnectWithoutAnimeInput
    upsert?: StatusUpsertWithoutAnimeInput
    connect?: StatusWhereUniqueInput
    update?: XOR<XOR<StatusUpdateToOneWithWhereWithoutAnimeInput, StatusUpdateWithoutAnimeInput>, StatusUncheckedUpdateWithoutAnimeInput>
  }

  export type CharacterUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<CharacterCreateWithoutAnimeInput, CharacterUncheckedCreateWithoutAnimeInput> | CharacterCreateWithoutAnimeInput[] | CharacterUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAnimeInput | CharacterCreateOrConnectWithoutAnimeInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutAnimeInput | CharacterUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: CharacterCreateManyAnimeInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutAnimeInput | CharacterUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutAnimeInput | CharacterUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<GenreCreateWithoutAnimeInput, GenreUncheckedCreateWithoutAnimeInput> | GenreCreateWithoutAnimeInput[] | GenreUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutAnimeInput | GenreCreateOrConnectWithoutAnimeInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutAnimeInput | GenreUpsertWithWhereUniqueWithoutAnimeInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutAnimeInput | GenreUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutAnimeInput | GenreUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<CharacterCreateWithoutAnimeInput, CharacterUncheckedCreateWithoutAnimeInput> | CharacterCreateWithoutAnimeInput[] | CharacterUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAnimeInput | CharacterCreateOrConnectWithoutAnimeInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutAnimeInput | CharacterUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: CharacterCreateManyAnimeInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutAnimeInput | CharacterUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutAnimeInput | CharacterUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type AnimeCreateNestedManyWithoutStatusInput = {
    create?: XOR<AnimeCreateWithoutStatusInput, AnimeUncheckedCreateWithoutStatusInput> | AnimeCreateWithoutStatusInput[] | AnimeUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutStatusInput | AnimeCreateOrConnectWithoutStatusInput[]
    createMany?: AnimeCreateManyStatusInputEnvelope
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
  }

  export type AnimeUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<AnimeCreateWithoutStatusInput, AnimeUncheckedCreateWithoutStatusInput> | AnimeCreateWithoutStatusInput[] | AnimeUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutStatusInput | AnimeCreateOrConnectWithoutStatusInput[]
    createMany?: AnimeCreateManyStatusInputEnvelope
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
  }

  export type AnimeUpdateManyWithoutStatusNestedInput = {
    create?: XOR<AnimeCreateWithoutStatusInput, AnimeUncheckedCreateWithoutStatusInput> | AnimeCreateWithoutStatusInput[] | AnimeUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutStatusInput | AnimeCreateOrConnectWithoutStatusInput[]
    upsert?: AnimeUpsertWithWhereUniqueWithoutStatusInput | AnimeUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: AnimeCreateManyStatusInputEnvelope
    set?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    disconnect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    delete?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    update?: AnimeUpdateWithWhereUniqueWithoutStatusInput | AnimeUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: AnimeUpdateManyWithWhereWithoutStatusInput | AnimeUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
  }

  export type AnimeUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<AnimeCreateWithoutStatusInput, AnimeUncheckedCreateWithoutStatusInput> | AnimeCreateWithoutStatusInput[] | AnimeUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutStatusInput | AnimeCreateOrConnectWithoutStatusInput[]
    upsert?: AnimeUpsertWithWhereUniqueWithoutStatusInput | AnimeUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: AnimeCreateManyStatusInputEnvelope
    set?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    disconnect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    delete?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    update?: AnimeUpdateWithWhereUniqueWithoutStatusInput | AnimeUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: AnimeUpdateManyWithWhereWithoutStatusInput | AnimeUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
  }

  export type AnimeCreateNestedManyWithoutGenresInput = {
    create?: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput> | AnimeCreateWithoutGenresInput[] | AnimeUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutGenresInput | AnimeCreateOrConnectWithoutGenresInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
  }

  export type AnimeUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput> | AnimeCreateWithoutGenresInput[] | AnimeUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutGenresInput | AnimeCreateOrConnectWithoutGenresInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
  }

  export type AnimeUpdateManyWithoutGenresNestedInput = {
    create?: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput> | AnimeCreateWithoutGenresInput[] | AnimeUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutGenresInput | AnimeCreateOrConnectWithoutGenresInput[]
    upsert?: AnimeUpsertWithWhereUniqueWithoutGenresInput | AnimeUpsertWithWhereUniqueWithoutGenresInput[]
    set?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    disconnect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    delete?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    update?: AnimeUpdateWithWhereUniqueWithoutGenresInput | AnimeUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: AnimeUpdateManyWithWhereWithoutGenresInput | AnimeUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
  }

  export type AnimeUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput> | AnimeCreateWithoutGenresInput[] | AnimeUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutGenresInput | AnimeCreateOrConnectWithoutGenresInput[]
    upsert?: AnimeUpsertWithWhereUniqueWithoutGenresInput | AnimeUpsertWithWhereUniqueWithoutGenresInput[]
    set?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    disconnect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    delete?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    update?: AnimeUpdateWithWhereUniqueWithoutGenresInput | AnimeUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: AnimeUpdateManyWithWhereWithoutGenresInput | AnimeUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
  }

  export type AnimeCreateNestedOneWithoutCharactersInput = {
    create?: XOR<AnimeCreateWithoutCharactersInput, AnimeUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutCharactersInput
    connect?: AnimeWhereUniqueInput
  }

  export type AbilitiesCreateNestedManyWithoutCharacterInput = {
    create?: XOR<AbilitiesCreateWithoutCharacterInput, AbilitiesUncheckedCreateWithoutCharacterInput> | AbilitiesCreateWithoutCharacterInput[] | AbilitiesUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: AbilitiesCreateOrConnectWithoutCharacterInput | AbilitiesCreateOrConnectWithoutCharacterInput[]
    connect?: AbilitiesWhereUniqueInput | AbilitiesWhereUniqueInput[]
  }

  export type CharacterCreateNestedManyWithoutRelatedToInput = {
    create?: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput> | CharacterCreateWithoutRelatedToInput[] | CharacterUncheckedCreateWithoutRelatedToInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelatedToInput | CharacterCreateOrConnectWithoutRelatedToInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterCreateNestedManyWithoutRelationsInput = {
    create?: XOR<CharacterCreateWithoutRelationsInput, CharacterUncheckedCreateWithoutRelationsInput> | CharacterCreateWithoutRelationsInput[] | CharacterUncheckedCreateWithoutRelationsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelationsInput | CharacterCreateOrConnectWithoutRelationsInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type AbilitiesUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<AbilitiesCreateWithoutCharacterInput, AbilitiesUncheckedCreateWithoutCharacterInput> | AbilitiesCreateWithoutCharacterInput[] | AbilitiesUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: AbilitiesCreateOrConnectWithoutCharacterInput | AbilitiesCreateOrConnectWithoutCharacterInput[]
    connect?: AbilitiesWhereUniqueInput | AbilitiesWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutRelatedToInput = {
    create?: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput> | CharacterCreateWithoutRelatedToInput[] | CharacterUncheckedCreateWithoutRelatedToInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelatedToInput | CharacterCreateOrConnectWithoutRelatedToInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutRelationsInput = {
    create?: XOR<CharacterCreateWithoutRelationsInput, CharacterUncheckedCreateWithoutRelationsInput> | CharacterCreateWithoutRelationsInput[] | CharacterUncheckedCreateWithoutRelationsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelationsInput | CharacterCreateOrConnectWithoutRelationsInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type AnimeUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<AnimeCreateWithoutCharactersInput, AnimeUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutCharactersInput
    upsert?: AnimeUpsertWithoutCharactersInput
    connect?: AnimeWhereUniqueInput
    update?: XOR<XOR<AnimeUpdateToOneWithWhereWithoutCharactersInput, AnimeUpdateWithoutCharactersInput>, AnimeUncheckedUpdateWithoutCharactersInput>
  }

  export type AbilitiesUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<AbilitiesCreateWithoutCharacterInput, AbilitiesUncheckedCreateWithoutCharacterInput> | AbilitiesCreateWithoutCharacterInput[] | AbilitiesUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: AbilitiesCreateOrConnectWithoutCharacterInput | AbilitiesCreateOrConnectWithoutCharacterInput[]
    upsert?: AbilitiesUpsertWithWhereUniqueWithoutCharacterInput | AbilitiesUpsertWithWhereUniqueWithoutCharacterInput[]
    set?: AbilitiesWhereUniqueInput | AbilitiesWhereUniqueInput[]
    disconnect?: AbilitiesWhereUniqueInput | AbilitiesWhereUniqueInput[]
    delete?: AbilitiesWhereUniqueInput | AbilitiesWhereUniqueInput[]
    connect?: AbilitiesWhereUniqueInput | AbilitiesWhereUniqueInput[]
    update?: AbilitiesUpdateWithWhereUniqueWithoutCharacterInput | AbilitiesUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: AbilitiesUpdateManyWithWhereWithoutCharacterInput | AbilitiesUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: AbilitiesScalarWhereInput | AbilitiesScalarWhereInput[]
  }

  export type CharacterUpdateManyWithoutRelatedToNestedInput = {
    create?: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput> | CharacterCreateWithoutRelatedToInput[] | CharacterUncheckedCreateWithoutRelatedToInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelatedToInput | CharacterCreateOrConnectWithoutRelatedToInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutRelatedToInput | CharacterUpsertWithWhereUniqueWithoutRelatedToInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutRelatedToInput | CharacterUpdateWithWhereUniqueWithoutRelatedToInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutRelatedToInput | CharacterUpdateManyWithWhereWithoutRelatedToInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUpdateManyWithoutRelationsNestedInput = {
    create?: XOR<CharacterCreateWithoutRelationsInput, CharacterUncheckedCreateWithoutRelationsInput> | CharacterCreateWithoutRelationsInput[] | CharacterUncheckedCreateWithoutRelationsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelationsInput | CharacterCreateOrConnectWithoutRelationsInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutRelationsInput | CharacterUpsertWithWhereUniqueWithoutRelationsInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutRelationsInput | CharacterUpdateWithWhereUniqueWithoutRelationsInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutRelationsInput | CharacterUpdateManyWithWhereWithoutRelationsInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type AbilitiesUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<AbilitiesCreateWithoutCharacterInput, AbilitiesUncheckedCreateWithoutCharacterInput> | AbilitiesCreateWithoutCharacterInput[] | AbilitiesUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: AbilitiesCreateOrConnectWithoutCharacterInput | AbilitiesCreateOrConnectWithoutCharacterInput[]
    upsert?: AbilitiesUpsertWithWhereUniqueWithoutCharacterInput | AbilitiesUpsertWithWhereUniqueWithoutCharacterInput[]
    set?: AbilitiesWhereUniqueInput | AbilitiesWhereUniqueInput[]
    disconnect?: AbilitiesWhereUniqueInput | AbilitiesWhereUniqueInput[]
    delete?: AbilitiesWhereUniqueInput | AbilitiesWhereUniqueInput[]
    connect?: AbilitiesWhereUniqueInput | AbilitiesWhereUniqueInput[]
    update?: AbilitiesUpdateWithWhereUniqueWithoutCharacterInput | AbilitiesUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: AbilitiesUpdateManyWithWhereWithoutCharacterInput | AbilitiesUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: AbilitiesScalarWhereInput | AbilitiesScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutRelatedToNestedInput = {
    create?: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput> | CharacterCreateWithoutRelatedToInput[] | CharacterUncheckedCreateWithoutRelatedToInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelatedToInput | CharacterCreateOrConnectWithoutRelatedToInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutRelatedToInput | CharacterUpsertWithWhereUniqueWithoutRelatedToInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutRelatedToInput | CharacterUpdateWithWhereUniqueWithoutRelatedToInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutRelatedToInput | CharacterUpdateManyWithWhereWithoutRelatedToInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutRelationsNestedInput = {
    create?: XOR<CharacterCreateWithoutRelationsInput, CharacterUncheckedCreateWithoutRelationsInput> | CharacterCreateWithoutRelationsInput[] | CharacterUncheckedCreateWithoutRelationsInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutRelationsInput | CharacterCreateOrConnectWithoutRelationsInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutRelationsInput | CharacterUpsertWithWhereUniqueWithoutRelationsInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutRelationsInput | CharacterUpdateWithWhereUniqueWithoutRelationsInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutRelationsInput | CharacterUpdateManyWithWhereWithoutRelationsInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterCreateNestedManyWithoutAbilitiesInput = {
    create?: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput> | CharacterCreateWithoutAbilitiesInput[] | CharacterUncheckedCreateWithoutAbilitiesInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAbilitiesInput | CharacterCreateOrConnectWithoutAbilitiesInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutAbilitiesInput = {
    create?: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput> | CharacterCreateWithoutAbilitiesInput[] | CharacterUncheckedCreateWithoutAbilitiesInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAbilitiesInput | CharacterCreateOrConnectWithoutAbilitiesInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUpdateManyWithoutAbilitiesNestedInput = {
    create?: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput> | CharacterCreateWithoutAbilitiesInput[] | CharacterUncheckedCreateWithoutAbilitiesInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAbilitiesInput | CharacterCreateOrConnectWithoutAbilitiesInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutAbilitiesInput | CharacterUpsertWithWhereUniqueWithoutAbilitiesInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutAbilitiesInput | CharacterUpdateWithWhereUniqueWithoutAbilitiesInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutAbilitiesInput | CharacterUpdateManyWithWhereWithoutAbilitiesInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutAbilitiesNestedInput = {
    create?: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput> | CharacterCreateWithoutAbilitiesInput[] | CharacterUncheckedCreateWithoutAbilitiesInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutAbilitiesInput | CharacterCreateOrConnectWithoutAbilitiesInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutAbilitiesInput | CharacterUpsertWithWhereUniqueWithoutAbilitiesInput[]
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutAbilitiesInput | CharacterUpdateWithWhereUniqueWithoutAbilitiesInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutAbilitiesInput | CharacterUpdateManyWithWhereWithoutAbilitiesInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GenreCreateWithoutAnimeInput = {
    name: string
  }

  export type GenreUncheckedCreateWithoutAnimeInput = {
    name: string
  }

  export type GenreCreateOrConnectWithoutAnimeInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutAnimeInput, GenreUncheckedCreateWithoutAnimeInput>
  }

  export type StatusCreateWithoutAnimeInput = {
    name: string
  }

  export type StatusUncheckedCreateWithoutAnimeInput = {
    name: string
  }

  export type StatusCreateOrConnectWithoutAnimeInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutAnimeInput, StatusUncheckedCreateWithoutAnimeInput>
  }

  export type CharacterCreateWithoutAnimeInput = {
    id?: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    abilities?: AbilitiesCreateNestedManyWithoutCharacterInput
    relations?: CharacterCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterCreateNestedManyWithoutRelationsInput
  }

  export type CharacterUncheckedCreateWithoutAnimeInput = {
    id?: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    abilities?: AbilitiesUncheckedCreateNestedManyWithoutCharacterInput
    relations?: CharacterUncheckedCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterUncheckedCreateNestedManyWithoutRelationsInput
  }

  export type CharacterCreateOrConnectWithoutAnimeInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutAnimeInput, CharacterUncheckedCreateWithoutAnimeInput>
  }

  export type CharacterCreateManyAnimeInputEnvelope = {
    data: CharacterCreateManyAnimeInput | CharacterCreateManyAnimeInput[]
  }

  export type GenreUpsertWithWhereUniqueWithoutAnimeInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutAnimeInput, GenreUncheckedUpdateWithoutAnimeInput>
    create: XOR<GenreCreateWithoutAnimeInput, GenreUncheckedCreateWithoutAnimeInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutAnimeInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutAnimeInput, GenreUncheckedUpdateWithoutAnimeInput>
  }

  export type GenreUpdateManyWithWhereWithoutAnimeInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutAnimeInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    name?: StringFilter<"Genre"> | string
  }

  export type StatusUpsertWithoutAnimeInput = {
    update: XOR<StatusUpdateWithoutAnimeInput, StatusUncheckedUpdateWithoutAnimeInput>
    create: XOR<StatusCreateWithoutAnimeInput, StatusUncheckedCreateWithoutAnimeInput>
    where?: StatusWhereInput
  }

  export type StatusUpdateToOneWithWhereWithoutAnimeInput = {
    where?: StatusWhereInput
    data: XOR<StatusUpdateWithoutAnimeInput, StatusUncheckedUpdateWithoutAnimeInput>
  }

  export type StatusUpdateWithoutAnimeInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StatusUncheckedUpdateWithoutAnimeInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterUpsertWithWhereUniqueWithoutAnimeInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutAnimeInput, CharacterUncheckedUpdateWithoutAnimeInput>
    create: XOR<CharacterCreateWithoutAnimeInput, CharacterUncheckedCreateWithoutAnimeInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutAnimeInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutAnimeInput, CharacterUncheckedUpdateWithoutAnimeInput>
  }

  export type CharacterUpdateManyWithWhereWithoutAnimeInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutAnimeInput>
  }

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    OR?: CharacterScalarWhereInput[]
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    id?: StringFilter<"Character"> | string
    animeId?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    description?: StringFilter<"Character"> | string
    origin?: StringFilter<"Character"> | string
    birthDate?: StringFilter<"Character"> | string
    age?: StringFilter<"Character"> | string
    role?: StringFilter<"Character"> | string
    thumbnail?: StringFilter<"Character"> | string
    personality?: StringFilter<"Character"> | string
    background?: StringFilter<"Character"> | string
    bio?: StringFilter<"Character"> | string
  }

  export type AnimeCreateWithoutStatusInput = {
    id?: string
    thumbnail: string
    title: string
    synopsis: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
    genres?: GenreCreateNestedManyWithoutAnimeInput
    characters?: CharacterCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateWithoutStatusInput = {
    id?: string
    thumbnail: string
    title: string
    synopsis: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
    genres?: GenreUncheckedCreateNestedManyWithoutAnimeInput
    characters?: CharacterUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeCreateOrConnectWithoutStatusInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutStatusInput, AnimeUncheckedCreateWithoutStatusInput>
  }

  export type AnimeCreateManyStatusInputEnvelope = {
    data: AnimeCreateManyStatusInput | AnimeCreateManyStatusInput[]
  }

  export type AnimeUpsertWithWhereUniqueWithoutStatusInput = {
    where: AnimeWhereUniqueInput
    update: XOR<AnimeUpdateWithoutStatusInput, AnimeUncheckedUpdateWithoutStatusInput>
    create: XOR<AnimeCreateWithoutStatusInput, AnimeUncheckedCreateWithoutStatusInput>
  }

  export type AnimeUpdateWithWhereUniqueWithoutStatusInput = {
    where: AnimeWhereUniqueInput
    data: XOR<AnimeUpdateWithoutStatusInput, AnimeUncheckedUpdateWithoutStatusInput>
  }

  export type AnimeUpdateManyWithWhereWithoutStatusInput = {
    where: AnimeScalarWhereInput
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyWithoutStatusInput>
  }

  export type AnimeScalarWhereInput = {
    AND?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
    OR?: AnimeScalarWhereInput[]
    NOT?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
    id?: StringFilter<"Anime"> | string
    thumbnail?: StringFilter<"Anime"> | string
    title?: StringFilter<"Anime"> | string
    synopsis?: StringFilter<"Anime"> | string
    statusName?: StringFilter<"Anime"> | string
    studio?: StringFilter<"Anime"> | string
    director?: StringFilter<"Anime"> | string
    releaseDate?: StringFilter<"Anime"> | string
    episodeCount?: StringFilter<"Anime"> | string
    durationPerEpisode?: StringFilter<"Anime"> | string
  }

  export type AnimeCreateWithoutGenresInput = {
    id?: string
    thumbnail: string
    title: string
    synopsis: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
    status: StatusCreateNestedOneWithoutAnimeInput
    characters?: CharacterCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateWithoutGenresInput = {
    id?: string
    thumbnail: string
    title: string
    synopsis: string
    statusName: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
    characters?: CharacterUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeCreateOrConnectWithoutGenresInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput>
  }

  export type AnimeUpsertWithWhereUniqueWithoutGenresInput = {
    where: AnimeWhereUniqueInput
    update: XOR<AnimeUpdateWithoutGenresInput, AnimeUncheckedUpdateWithoutGenresInput>
    create: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput>
  }

  export type AnimeUpdateWithWhereUniqueWithoutGenresInput = {
    where: AnimeWhereUniqueInput
    data: XOR<AnimeUpdateWithoutGenresInput, AnimeUncheckedUpdateWithoutGenresInput>
  }

  export type AnimeUpdateManyWithWhereWithoutGenresInput = {
    where: AnimeScalarWhereInput
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyWithoutGenresInput>
  }

  export type AnimeCreateWithoutCharactersInput = {
    id?: string
    thumbnail: string
    title: string
    synopsis: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
    genres?: GenreCreateNestedManyWithoutAnimeInput
    status: StatusCreateNestedOneWithoutAnimeInput
  }

  export type AnimeUncheckedCreateWithoutCharactersInput = {
    id?: string
    thumbnail: string
    title: string
    synopsis: string
    statusName: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
    genres?: GenreUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeCreateOrConnectWithoutCharactersInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutCharactersInput, AnimeUncheckedCreateWithoutCharactersInput>
  }

  export type AbilitiesCreateWithoutCharacterInput = {
    name: string
    description: string
  }

  export type AbilitiesUncheckedCreateWithoutCharacterInput = {
    name: string
    description: string
  }

  export type AbilitiesCreateOrConnectWithoutCharacterInput = {
    where: AbilitiesWhereUniqueInput
    create: XOR<AbilitiesCreateWithoutCharacterInput, AbilitiesUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterCreateWithoutRelatedToInput = {
    id?: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    anime: AnimeCreateNestedOneWithoutCharactersInput
    abilities?: AbilitiesCreateNestedManyWithoutCharacterInput
    relations?: CharacterCreateNestedManyWithoutRelatedToInput
  }

  export type CharacterUncheckedCreateWithoutRelatedToInput = {
    id?: string
    animeId: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    abilities?: AbilitiesUncheckedCreateNestedManyWithoutCharacterInput
    relations?: CharacterUncheckedCreateNestedManyWithoutRelatedToInput
  }

  export type CharacterCreateOrConnectWithoutRelatedToInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput>
  }

  export type CharacterCreateWithoutRelationsInput = {
    id?: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    anime: AnimeCreateNestedOneWithoutCharactersInput
    abilities?: AbilitiesCreateNestedManyWithoutCharacterInput
    relatedTo?: CharacterCreateNestedManyWithoutRelationsInput
  }

  export type CharacterUncheckedCreateWithoutRelationsInput = {
    id?: string
    animeId: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    abilities?: AbilitiesUncheckedCreateNestedManyWithoutCharacterInput
    relatedTo?: CharacterUncheckedCreateNestedManyWithoutRelationsInput
  }

  export type CharacterCreateOrConnectWithoutRelationsInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutRelationsInput, CharacterUncheckedCreateWithoutRelationsInput>
  }

  export type AnimeUpsertWithoutCharactersInput = {
    update: XOR<AnimeUpdateWithoutCharactersInput, AnimeUncheckedUpdateWithoutCharactersInput>
    create: XOR<AnimeCreateWithoutCharactersInput, AnimeUncheckedCreateWithoutCharactersInput>
    where?: AnimeWhereInput
  }

  export type AnimeUpdateToOneWithWhereWithoutCharactersInput = {
    where?: AnimeWhereInput
    data: XOR<AnimeUpdateWithoutCharactersInput, AnimeUncheckedUpdateWithoutCharactersInput>
  }

  export type AnimeUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
    genres?: GenreUpdateManyWithoutAnimeNestedInput
    status?: StatusUpdateOneRequiredWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    statusName?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
    genres?: GenreUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AbilitiesUpsertWithWhereUniqueWithoutCharacterInput = {
    where: AbilitiesWhereUniqueInput
    update: XOR<AbilitiesUpdateWithoutCharacterInput, AbilitiesUncheckedUpdateWithoutCharacterInput>
    create: XOR<AbilitiesCreateWithoutCharacterInput, AbilitiesUncheckedCreateWithoutCharacterInput>
  }

  export type AbilitiesUpdateWithWhereUniqueWithoutCharacterInput = {
    where: AbilitiesWhereUniqueInput
    data: XOR<AbilitiesUpdateWithoutCharacterInput, AbilitiesUncheckedUpdateWithoutCharacterInput>
  }

  export type AbilitiesUpdateManyWithWhereWithoutCharacterInput = {
    where: AbilitiesScalarWhereInput
    data: XOR<AbilitiesUpdateManyMutationInput, AbilitiesUncheckedUpdateManyWithoutCharacterInput>
  }

  export type AbilitiesScalarWhereInput = {
    AND?: AbilitiesScalarWhereInput | AbilitiesScalarWhereInput[]
    OR?: AbilitiesScalarWhereInput[]
    NOT?: AbilitiesScalarWhereInput | AbilitiesScalarWhereInput[]
    name?: StringFilter<"Abilities"> | string
    description?: StringFilter<"Abilities"> | string
  }

  export type CharacterUpsertWithWhereUniqueWithoutRelatedToInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutRelatedToInput, CharacterUncheckedUpdateWithoutRelatedToInput>
    create: XOR<CharacterCreateWithoutRelatedToInput, CharacterUncheckedCreateWithoutRelatedToInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutRelatedToInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutRelatedToInput, CharacterUncheckedUpdateWithoutRelatedToInput>
  }

  export type CharacterUpdateManyWithWhereWithoutRelatedToInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutRelatedToInput>
  }

  export type CharacterUpsertWithWhereUniqueWithoutRelationsInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutRelationsInput, CharacterUncheckedUpdateWithoutRelationsInput>
    create: XOR<CharacterCreateWithoutRelationsInput, CharacterUncheckedCreateWithoutRelationsInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutRelationsInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutRelationsInput, CharacterUncheckedUpdateWithoutRelationsInput>
  }

  export type CharacterUpdateManyWithWhereWithoutRelationsInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutRelationsInput>
  }

  export type CharacterCreateWithoutAbilitiesInput = {
    id?: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    anime: AnimeCreateNestedOneWithoutCharactersInput
    relations?: CharacterCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterCreateNestedManyWithoutRelationsInput
  }

  export type CharacterUncheckedCreateWithoutAbilitiesInput = {
    id?: string
    animeId: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
    relations?: CharacterUncheckedCreateNestedManyWithoutRelatedToInput
    relatedTo?: CharacterUncheckedCreateNestedManyWithoutRelationsInput
  }

  export type CharacterCreateOrConnectWithoutAbilitiesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
  }

  export type CharacterUpsertWithWhereUniqueWithoutAbilitiesInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutAbilitiesInput, CharacterUncheckedUpdateWithoutAbilitiesInput>
    create: XOR<CharacterCreateWithoutAbilitiesInput, CharacterUncheckedCreateWithoutAbilitiesInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutAbilitiesInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutAbilitiesInput, CharacterUncheckedUpdateWithoutAbilitiesInput>
  }

  export type CharacterUpdateManyWithWhereWithoutAbilitiesInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutAbilitiesInput>
  }

  export type CharacterCreateManyAnimeInput = {
    id?: string
    name: string
    description: string
    origin: string
    birthDate: string
    age: string
    role: string
    thumbnail: string
    personality: string
    background: string
    bio: string
  }

  export type GenreUpdateWithoutAnimeInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutAnimeInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyWithoutAnimeInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterUpdateWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    abilities?: AbilitiesUpdateManyWithoutCharacterNestedInput
    relations?: CharacterUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUpdateManyWithoutRelationsNestedInput
  }

  export type CharacterUncheckedUpdateWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    abilities?: AbilitiesUncheckedUpdateManyWithoutCharacterNestedInput
    relations?: CharacterUncheckedUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUncheckedUpdateManyWithoutRelationsNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutAnimeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeCreateManyStatusInput = {
    id?: string
    thumbnail: string
    title: string
    synopsis: string
    studio: string
    director: string
    releaseDate: string
    episodeCount: string
    durationPerEpisode: string
  }

  export type AnimeUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
    genres?: GenreUpdateManyWithoutAnimeNestedInput
    characters?: CharacterUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
    genres?: GenreUncheckedUpdateManyWithoutAnimeNestedInput
    characters?: CharacterUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateManyWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
    status?: StatusUpdateOneRequiredWithoutAnimeNestedInput
    characters?: CharacterUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    statusName?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
    characters?: CharacterUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateManyWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    statusName?: StringFieldUpdateOperationsInput | string
    studio?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    releaseDate?: StringFieldUpdateOperationsInput | string
    episodeCount?: StringFieldUpdateOperationsInput | string
    durationPerEpisode?: StringFieldUpdateOperationsInput | string
  }

  export type AbilitiesUpdateWithoutCharacterInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AbilitiesUncheckedUpdateWithoutCharacterInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AbilitiesUncheckedUpdateManyWithoutCharacterInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterUpdateWithoutRelatedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUpdateOneRequiredWithoutCharactersNestedInput
    abilities?: AbilitiesUpdateManyWithoutCharacterNestedInput
    relations?: CharacterUpdateManyWithoutRelatedToNestedInput
  }

  export type CharacterUncheckedUpdateWithoutRelatedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    abilities?: AbilitiesUncheckedUpdateManyWithoutCharacterNestedInput
    relations?: CharacterUncheckedUpdateManyWithoutRelatedToNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutRelatedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterUpdateWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUpdateOneRequiredWithoutCharactersNestedInput
    abilities?: AbilitiesUpdateManyWithoutCharacterNestedInput
    relatedTo?: CharacterUpdateManyWithoutRelationsNestedInput
  }

  export type CharacterUncheckedUpdateWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    abilities?: AbilitiesUncheckedUpdateManyWithoutCharacterNestedInput
    relatedTo?: CharacterUncheckedUpdateManyWithoutRelationsNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
  }

  export type CharacterUpdateWithoutAbilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    anime?: AnimeUpdateOneRequiredWithoutCharactersNestedInput
    relations?: CharacterUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUpdateManyWithoutRelationsNestedInput
  }

  export type CharacterUncheckedUpdateWithoutAbilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    relations?: CharacterUncheckedUpdateManyWithoutRelatedToNestedInput
    relatedTo?: CharacterUncheckedUpdateManyWithoutRelationsNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutAbilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}