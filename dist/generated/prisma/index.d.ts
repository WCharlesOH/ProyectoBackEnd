
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model ChatStreamer
 * 
 */
export type ChatStreamer = $Result.DefaultSelection<Prisma.$ChatStreamerPayload>
/**
 * Model Suscripcion
 * 
 */
export type Suscripcion = $Result.DefaultSelection<Prisma.$SuscripcionPayload>
/**
 * Model Regalo
 * 
 */
export type Regalo = $Result.DefaultSelection<Prisma.$RegaloPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Juego
 * 
 */
export type Juego = $Result.DefaultSelection<Prisma.$JuegoPayload>
/**
 * Model JuegosEnVideo
 * 
 */
export type JuegosEnVideo = $Result.DefaultSelection<Prisma.$JuegosEnVideoPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model LogrosUsuario
 * 
 */
export type LogrosUsuario = $Result.DefaultSelection<Prisma.$LogrosUsuarioPayload>
/**
 * Model Logros
 * 
 */
export type Logros = $Result.DefaultSelection<Prisma.$LogrosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatStreamer`: Exposes CRUD operations for the **ChatStreamer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatStreamers
    * const chatStreamers = await prisma.chatStreamer.findMany()
    * ```
    */
  get chatStreamer(): Prisma.ChatStreamerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suscripcion`: Exposes CRUD operations for the **Suscripcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suscripcions
    * const suscripcions = await prisma.suscripcion.findMany()
    * ```
    */
  get suscripcion(): Prisma.SuscripcionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regalo`: Exposes CRUD operations for the **Regalo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regalos
    * const regalos = await prisma.regalo.findMany()
    * ```
    */
  get regalo(): Prisma.RegaloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.juego`: Exposes CRUD operations for the **Juego** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Juegos
    * const juegos = await prisma.juego.findMany()
    * ```
    */
  get juego(): Prisma.JuegoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.juegosEnVideo`: Exposes CRUD operations for the **JuegosEnVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JuegosEnVideos
    * const juegosEnVideos = await prisma.juegosEnVideo.findMany()
    * ```
    */
  get juegosEnVideo(): Prisma.JuegosEnVideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logrosUsuario`: Exposes CRUD operations for the **LogrosUsuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogrosUsuarios
    * const logrosUsuarios = await prisma.logrosUsuario.findMany()
    * ```
    */
  get logrosUsuario(): Prisma.LogrosUsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logros`: Exposes CRUD operations for the **Logros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logros
    * const logros = await prisma.logros.findMany()
    * ```
    */
  get logros(): Prisma.LogrosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    ChatStreamer: 'ChatStreamer',
    Suscripcion: 'Suscripcion',
    Regalo: 'Regalo',
    Categoria: 'Categoria',
    Juego: 'Juego',
    JuegosEnVideo: 'JuegosEnVideo',
    Video: 'Video',
    LogrosUsuario: 'LogrosUsuario',
    Logros: 'Logros'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "chatStreamer" | "suscripcion" | "regalo" | "categoria" | "juego" | "juegosEnVideo" | "video" | "logrosUsuario" | "logros"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      ChatStreamer: {
        payload: Prisma.$ChatStreamerPayload<ExtArgs>
        fields: Prisma.ChatStreamerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatStreamerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatStreamerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload>
          }
          findFirst: {
            args: Prisma.ChatStreamerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatStreamerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload>
          }
          findMany: {
            args: Prisma.ChatStreamerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload>[]
          }
          create: {
            args: Prisma.ChatStreamerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload>
          }
          createMany: {
            args: Prisma.ChatStreamerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatStreamerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload>[]
          }
          delete: {
            args: Prisma.ChatStreamerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload>
          }
          update: {
            args: Prisma.ChatStreamerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload>
          }
          deleteMany: {
            args: Prisma.ChatStreamerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatStreamerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatStreamerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload>[]
          }
          upsert: {
            args: Prisma.ChatStreamerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatStreamerPayload>
          }
          aggregate: {
            args: Prisma.ChatStreamerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatStreamer>
          }
          groupBy: {
            args: Prisma.ChatStreamerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatStreamerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatStreamerCountArgs<ExtArgs>
            result: $Utils.Optional<ChatStreamerCountAggregateOutputType> | number
          }
        }
      }
      Suscripcion: {
        payload: Prisma.$SuscripcionPayload<ExtArgs>
        fields: Prisma.SuscripcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuscripcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuscripcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload>
          }
          findFirst: {
            args: Prisma.SuscripcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuscripcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload>
          }
          findMany: {
            args: Prisma.SuscripcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload>[]
          }
          create: {
            args: Prisma.SuscripcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload>
          }
          createMany: {
            args: Prisma.SuscripcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuscripcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload>[]
          }
          delete: {
            args: Prisma.SuscripcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload>
          }
          update: {
            args: Prisma.SuscripcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload>
          }
          deleteMany: {
            args: Prisma.SuscripcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuscripcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuscripcionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload>[]
          }
          upsert: {
            args: Prisma.SuscripcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuscripcionPayload>
          }
          aggregate: {
            args: Prisma.SuscripcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuscripcion>
          }
          groupBy: {
            args: Prisma.SuscripcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuscripcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuscripcionCountArgs<ExtArgs>
            result: $Utils.Optional<SuscripcionCountAggregateOutputType> | number
          }
        }
      }
      Regalo: {
        payload: Prisma.$RegaloPayload<ExtArgs>
        fields: Prisma.RegaloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegaloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegaloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          findFirst: {
            args: Prisma.RegaloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegaloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          findMany: {
            args: Prisma.RegaloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>[]
          }
          create: {
            args: Prisma.RegaloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          createMany: {
            args: Prisma.RegaloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegaloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>[]
          }
          delete: {
            args: Prisma.RegaloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          update: {
            args: Prisma.RegaloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          deleteMany: {
            args: Prisma.RegaloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegaloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegaloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>[]
          }
          upsert: {
            args: Prisma.RegaloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          aggregate: {
            args: Prisma.RegaloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegalo>
          }
          groupBy: {
            args: Prisma.RegaloGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegaloGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegaloCountArgs<ExtArgs>
            result: $Utils.Optional<RegaloCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Juego: {
        payload: Prisma.$JuegoPayload<ExtArgs>
        fields: Prisma.JuegoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JuegoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JuegoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          findFirst: {
            args: Prisma.JuegoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JuegoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          findMany: {
            args: Prisma.JuegoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>[]
          }
          create: {
            args: Prisma.JuegoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          createMany: {
            args: Prisma.JuegoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JuegoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>[]
          }
          delete: {
            args: Prisma.JuegoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          update: {
            args: Prisma.JuegoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          deleteMany: {
            args: Prisma.JuegoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JuegoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JuegoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>[]
          }
          upsert: {
            args: Prisma.JuegoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegoPayload>
          }
          aggregate: {
            args: Prisma.JuegoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuego>
          }
          groupBy: {
            args: Prisma.JuegoGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuegoGroupByOutputType>[]
          }
          count: {
            args: Prisma.JuegoCountArgs<ExtArgs>
            result: $Utils.Optional<JuegoCountAggregateOutputType> | number
          }
        }
      }
      JuegosEnVideo: {
        payload: Prisma.$JuegosEnVideoPayload<ExtArgs>
        fields: Prisma.JuegosEnVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JuegosEnVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JuegosEnVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload>
          }
          findFirst: {
            args: Prisma.JuegosEnVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JuegosEnVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload>
          }
          findMany: {
            args: Prisma.JuegosEnVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload>[]
          }
          create: {
            args: Prisma.JuegosEnVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload>
          }
          createMany: {
            args: Prisma.JuegosEnVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JuegosEnVideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload>[]
          }
          delete: {
            args: Prisma.JuegosEnVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload>
          }
          update: {
            args: Prisma.JuegosEnVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload>
          }
          deleteMany: {
            args: Prisma.JuegosEnVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JuegosEnVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JuegosEnVideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload>[]
          }
          upsert: {
            args: Prisma.JuegosEnVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JuegosEnVideoPayload>
          }
          aggregate: {
            args: Prisma.JuegosEnVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJuegosEnVideo>
          }
          groupBy: {
            args: Prisma.JuegosEnVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<JuegosEnVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.JuegosEnVideoCountArgs<ExtArgs>
            result: $Utils.Optional<JuegosEnVideoCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      LogrosUsuario: {
        payload: Prisma.$LogrosUsuarioPayload<ExtArgs>
        fields: Prisma.LogrosUsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogrosUsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogrosUsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload>
          }
          findFirst: {
            args: Prisma.LogrosUsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogrosUsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload>
          }
          findMany: {
            args: Prisma.LogrosUsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload>[]
          }
          create: {
            args: Prisma.LogrosUsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload>
          }
          createMany: {
            args: Prisma.LogrosUsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogrosUsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload>[]
          }
          delete: {
            args: Prisma.LogrosUsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload>
          }
          update: {
            args: Prisma.LogrosUsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload>
          }
          deleteMany: {
            args: Prisma.LogrosUsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogrosUsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogrosUsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload>[]
          }
          upsert: {
            args: Prisma.LogrosUsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosUsuarioPayload>
          }
          aggregate: {
            args: Prisma.LogrosUsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogrosUsuario>
          }
          groupBy: {
            args: Prisma.LogrosUsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogrosUsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogrosUsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<LogrosUsuarioCountAggregateOutputType> | number
          }
        }
      }
      Logros: {
        payload: Prisma.$LogrosPayload<ExtArgs>
        fields: Prisma.LogrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogrosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogrosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload>
          }
          findFirst: {
            args: Prisma.LogrosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogrosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload>
          }
          findMany: {
            args: Prisma.LogrosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload>[]
          }
          create: {
            args: Prisma.LogrosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload>
          }
          createMany: {
            args: Prisma.LogrosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogrosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload>[]
          }
          delete: {
            args: Prisma.LogrosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload>
          }
          update: {
            args: Prisma.LogrosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload>
          }
          deleteMany: {
            args: Prisma.LogrosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogrosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogrosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload>[]
          }
          upsert: {
            args: Prisma.LogrosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogrosPayload>
          }
          aggregate: {
            args: Prisma.LogrosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogros>
          }
          groupBy: {
            args: Prisma.LogrosGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogrosCountArgs<ExtArgs>
            result: $Utils.Optional<LogrosCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuario?: UsuarioOmit
    chatStreamer?: ChatStreamerOmit
    suscripcion?: SuscripcionOmit
    regalo?: RegaloOmit
    categoria?: CategoriaOmit
    juego?: JuegoOmit
    juegosEnVideo?: JuegosEnVideoOmit
    video?: VideoOmit
    logrosUsuario?: LogrosUsuarioOmit
    logros?: LogrosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    regalos: number
    videos: number
    LogrosUsuario: number
    streamerSuscripciones: number
    viewerSuscripciones: number
    streamerCHat: number
    viewerEnChat: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regalos?: boolean | UsuarioCountOutputTypeCountRegalosArgs
    videos?: boolean | UsuarioCountOutputTypeCountVideosArgs
    LogrosUsuario?: boolean | UsuarioCountOutputTypeCountLogrosUsuarioArgs
    streamerSuscripciones?: boolean | UsuarioCountOutputTypeCountStreamerSuscripcionesArgs
    viewerSuscripciones?: boolean | UsuarioCountOutputTypeCountViewerSuscripcionesArgs
    streamerCHat?: boolean | UsuarioCountOutputTypeCountStreamerCHatArgs
    viewerEnChat?: boolean | UsuarioCountOutputTypeCountViewerEnChatArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRegalosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegaloWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLogrosUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogrosUsuarioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountStreamerSuscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuscripcionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountViewerSuscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuscripcionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountStreamerCHatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatStreamerWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountViewerEnChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatStreamerWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    juegos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | CategoriaCountOutputTypeCountJuegosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountJuegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegoWhereInput
  }


  /**
   * Count Type JuegoCountOutputType
   */

  export type JuegoCountOutputType = {
    Jogos: number
  }

  export type JuegoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Jogos?: boolean | JuegoCountOutputTypeCountJogosArgs
  }

  // Custom InputTypes
  /**
   * JuegoCountOutputType without action
   */
  export type JuegoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegoCountOutputType
     */
    select?: JuegoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JuegoCountOutputType without action
   */
  export type JuegoCountOutputTypeCountJogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegosEnVideoWhereInput
  }


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    V_DEOs: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    V_DEOs?: boolean | VideoCountOutputTypeCountV_DEOsArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountV_DEOsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegosEnVideoWhereInput
  }


  /**
   * Count Type LogrosCountOutputType
   */

  export type LogrosCountOutputType = {
    usuariologros: number
  }

  export type LogrosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuariologros?: boolean | LogrosCountOutputTypeCountUsuariologrosArgs
  }

  // Custom InputTypes
  /**
   * LogrosCountOutputType without action
   */
  export type LogrosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosCountOutputType
     */
    select?: LogrosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LogrosCountOutputType without action
   */
  export type LogrosCountOutputTypeCountUsuariologrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogrosUsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    ID: number | null
    HorasTransmision: number | null
    Monedas: number | null
    NivelStreams: number | null
    Puntos: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    ID: number | null
    HorasTransmision: number | null
    Monedas: number | null
    NivelStreams: number | null
    Puntos: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    ID: number | null
    NombreUsuario: string | null
    Contraseña: string | null
    email: string | null
    HorasTransmision: number | null
    Monedas: number | null
    EnVivo: boolean | null
    ImagenPerfil: string | null
    NivelStreams: number | null
    Puntos: number | null
    fechaCreacion: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    ID: number | null
    NombreUsuario: string | null
    Contraseña: string | null
    email: string | null
    HorasTransmision: number | null
    Monedas: number | null
    EnVivo: boolean | null
    ImagenPerfil: string | null
    NivelStreams: number | null
    Puntos: number | null
    fechaCreacion: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    ID: number
    NombreUsuario: number
    Contraseña: number
    email: number
    HorasTransmision: number
    Monedas: number
    EnVivo: number
    ImagenPerfil: number
    NivelStreams: number
    Puntos: number
    fechaCreacion: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    ID?: true
    HorasTransmision?: true
    Monedas?: true
    NivelStreams?: true
    Puntos?: true
  }

  export type UsuarioSumAggregateInputType = {
    ID?: true
    HorasTransmision?: true
    Monedas?: true
    NivelStreams?: true
    Puntos?: true
  }

  export type UsuarioMinAggregateInputType = {
    ID?: true
    NombreUsuario?: true
    Contraseña?: true
    email?: true
    HorasTransmision?: true
    Monedas?: true
    EnVivo?: true
    ImagenPerfil?: true
    NivelStreams?: true
    Puntos?: true
    fechaCreacion?: true
  }

  export type UsuarioMaxAggregateInputType = {
    ID?: true
    NombreUsuario?: true
    Contraseña?: true
    email?: true
    HorasTransmision?: true
    Monedas?: true
    EnVivo?: true
    ImagenPerfil?: true
    NivelStreams?: true
    Puntos?: true
    fechaCreacion?: true
  }

  export type UsuarioCountAggregateInputType = {
    ID?: true
    NombreUsuario?: true
    Contraseña?: true
    email?: true
    HorasTransmision?: true
    Monedas?: true
    EnVivo?: true
    ImagenPerfil?: true
    NivelStreams?: true
    Puntos?: true
    fechaCreacion?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    ID: number
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    NombreUsuario?: boolean
    Contraseña?: boolean
    email?: boolean
    HorasTransmision?: boolean
    Monedas?: boolean
    EnVivo?: boolean
    ImagenPerfil?: boolean
    NivelStreams?: boolean
    Puntos?: boolean
    fechaCreacion?: boolean
    regalos?: boolean | Usuario$regalosArgs<ExtArgs>
    videos?: boolean | Usuario$videosArgs<ExtArgs>
    LogrosUsuario?: boolean | Usuario$LogrosUsuarioArgs<ExtArgs>
    streamerSuscripciones?: boolean | Usuario$streamerSuscripcionesArgs<ExtArgs>
    viewerSuscripciones?: boolean | Usuario$viewerSuscripcionesArgs<ExtArgs>
    streamerCHat?: boolean | Usuario$streamerCHatArgs<ExtArgs>
    viewerEnChat?: boolean | Usuario$viewerEnChatArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    NombreUsuario?: boolean
    Contraseña?: boolean
    email?: boolean
    HorasTransmision?: boolean
    Monedas?: boolean
    EnVivo?: boolean
    ImagenPerfil?: boolean
    NivelStreams?: boolean
    Puntos?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    NombreUsuario?: boolean
    Contraseña?: boolean
    email?: boolean
    HorasTransmision?: boolean
    Monedas?: boolean
    EnVivo?: boolean
    ImagenPerfil?: boolean
    NivelStreams?: boolean
    Puntos?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    ID?: boolean
    NombreUsuario?: boolean
    Contraseña?: boolean
    email?: boolean
    HorasTransmision?: boolean
    Monedas?: boolean
    EnVivo?: boolean
    ImagenPerfil?: boolean
    NivelStreams?: boolean
    Puntos?: boolean
    fechaCreacion?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "NombreUsuario" | "Contraseña" | "email" | "HorasTransmision" | "Monedas" | "EnVivo" | "ImagenPerfil" | "NivelStreams" | "Puntos" | "fechaCreacion", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regalos?: boolean | Usuario$regalosArgs<ExtArgs>
    videos?: boolean | Usuario$videosArgs<ExtArgs>
    LogrosUsuario?: boolean | Usuario$LogrosUsuarioArgs<ExtArgs>
    streamerSuscripciones?: boolean | Usuario$streamerSuscripcionesArgs<ExtArgs>
    viewerSuscripciones?: boolean | Usuario$viewerSuscripcionesArgs<ExtArgs>
    streamerCHat?: boolean | Usuario$streamerCHatArgs<ExtArgs>
    viewerEnChat?: boolean | Usuario$viewerEnChatArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      regalos: Prisma.$RegaloPayload<ExtArgs>[]
      videos: Prisma.$VideoPayload<ExtArgs>[]
      LogrosUsuario: Prisma.$LogrosUsuarioPayload<ExtArgs>[]
      streamerSuscripciones: Prisma.$SuscripcionPayload<ExtArgs>[]
      viewerSuscripciones: Prisma.$SuscripcionPayload<ExtArgs>[]
      streamerCHat: Prisma.$ChatStreamerPayload<ExtArgs>[]
      viewerEnChat: Prisma.$ChatStreamerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      NombreUsuario: string
      Contraseña: string
      email: string
      HorasTransmision: number
      Monedas: number
      EnVivo: boolean
      ImagenPerfil: string
      NivelStreams: number
      Puntos: number
      fechaCreacion: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const usuarioWithIDOnly = await prisma.usuario.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `ID`
     * const usuarioWithIDOnly = await prisma.usuario.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `ID`
     * const usuarioWithIDOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { ID: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    regalos<T extends Usuario$regalosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$regalosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends Usuario$videosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LogrosUsuario<T extends Usuario$LogrosUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$LogrosUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    streamerSuscripciones<T extends Usuario$streamerSuscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$streamerSuscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewerSuscripciones<T extends Usuario$viewerSuscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$viewerSuscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    streamerCHat<T extends Usuario$streamerCHatArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$streamerCHatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewerEnChat<T extends Usuario$viewerEnChatArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$viewerEnChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly ID: FieldRef<"Usuario", 'Int'>
    readonly NombreUsuario: FieldRef<"Usuario", 'String'>
    readonly Contraseña: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly HorasTransmision: FieldRef<"Usuario", 'Int'>
    readonly Monedas: FieldRef<"Usuario", 'Int'>
    readonly EnVivo: FieldRef<"Usuario", 'Boolean'>
    readonly ImagenPerfil: FieldRef<"Usuario", 'String'>
    readonly NivelStreams: FieldRef<"Usuario", 'Int'>
    readonly Puntos: FieldRef<"Usuario", 'Int'>
    readonly fechaCreacion: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.regalos
   */
  export type Usuario$regalosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    where?: RegaloWhereInput
    orderBy?: RegaloOrderByWithRelationInput | RegaloOrderByWithRelationInput[]
    cursor?: RegaloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegaloScalarFieldEnum | RegaloScalarFieldEnum[]
  }

  /**
   * Usuario.videos
   */
  export type Usuario$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Usuario.LogrosUsuario
   */
  export type Usuario$LogrosUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    where?: LogrosUsuarioWhereInput
    orderBy?: LogrosUsuarioOrderByWithRelationInput | LogrosUsuarioOrderByWithRelationInput[]
    cursor?: LogrosUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogrosUsuarioScalarFieldEnum | LogrosUsuarioScalarFieldEnum[]
  }

  /**
   * Usuario.streamerSuscripciones
   */
  export type Usuario$streamerSuscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    where?: SuscripcionWhereInput
    orderBy?: SuscripcionOrderByWithRelationInput | SuscripcionOrderByWithRelationInput[]
    cursor?: SuscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuscripcionScalarFieldEnum | SuscripcionScalarFieldEnum[]
  }

  /**
   * Usuario.viewerSuscripciones
   */
  export type Usuario$viewerSuscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    where?: SuscripcionWhereInput
    orderBy?: SuscripcionOrderByWithRelationInput | SuscripcionOrderByWithRelationInput[]
    cursor?: SuscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuscripcionScalarFieldEnum | SuscripcionScalarFieldEnum[]
  }

  /**
   * Usuario.streamerCHat
   */
  export type Usuario$streamerCHatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    where?: ChatStreamerWhereInput
    orderBy?: ChatStreamerOrderByWithRelationInput | ChatStreamerOrderByWithRelationInput[]
    cursor?: ChatStreamerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatStreamerScalarFieldEnum | ChatStreamerScalarFieldEnum[]
  }

  /**
   * Usuario.viewerEnChat
   */
  export type Usuario$viewerEnChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    where?: ChatStreamerWhereInput
    orderBy?: ChatStreamerOrderByWithRelationInput | ChatStreamerOrderByWithRelationInput[]
    cursor?: ChatStreamerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatStreamerScalarFieldEnum | ChatStreamerScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model ChatStreamer
   */

  export type AggregateChatStreamer = {
    _count: ChatStreamerCountAggregateOutputType | null
    _avg: ChatStreamerAvgAggregateOutputType | null
    _sum: ChatStreamerSumAggregateOutputType | null
    _min: ChatStreamerMinAggregateOutputType | null
    _max: ChatStreamerMaxAggregateOutputType | null
  }

  export type ChatStreamerAvgAggregateOutputType = {
    ID_Streamer: number | null
    ID_Viewer: number | null
    NivelViewer: number | null
  }

  export type ChatStreamerSumAggregateOutputType = {
    ID_Streamer: number | null
    ID_Viewer: number | null
    NivelViewer: number | null
  }

  export type ChatStreamerMinAggregateOutputType = {
    ID_Streamer: number | null
    ID_Viewer: number | null
    NivelViewer: number | null
    Habilitado: boolean | null
    Viendo: boolean | null
  }

  export type ChatStreamerMaxAggregateOutputType = {
    ID_Streamer: number | null
    ID_Viewer: number | null
    NivelViewer: number | null
    Habilitado: boolean | null
    Viendo: boolean | null
  }

  export type ChatStreamerCountAggregateOutputType = {
    ID_Streamer: number
    ID_Viewer: number
    NivelViewer: number
    Habilitado: number
    Viendo: number
    _all: number
  }


  export type ChatStreamerAvgAggregateInputType = {
    ID_Streamer?: true
    ID_Viewer?: true
    NivelViewer?: true
  }

  export type ChatStreamerSumAggregateInputType = {
    ID_Streamer?: true
    ID_Viewer?: true
    NivelViewer?: true
  }

  export type ChatStreamerMinAggregateInputType = {
    ID_Streamer?: true
    ID_Viewer?: true
    NivelViewer?: true
    Habilitado?: true
    Viendo?: true
  }

  export type ChatStreamerMaxAggregateInputType = {
    ID_Streamer?: true
    ID_Viewer?: true
    NivelViewer?: true
    Habilitado?: true
    Viendo?: true
  }

  export type ChatStreamerCountAggregateInputType = {
    ID_Streamer?: true
    ID_Viewer?: true
    NivelViewer?: true
    Habilitado?: true
    Viendo?: true
    _all?: true
  }

  export type ChatStreamerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatStreamer to aggregate.
     */
    where?: ChatStreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatStreamers to fetch.
     */
    orderBy?: ChatStreamerOrderByWithRelationInput | ChatStreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatStreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatStreamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatStreamers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatStreamers
    **/
    _count?: true | ChatStreamerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatStreamerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatStreamerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatStreamerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatStreamerMaxAggregateInputType
  }

  export type GetChatStreamerAggregateType<T extends ChatStreamerAggregateArgs> = {
        [P in keyof T & keyof AggregateChatStreamer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatStreamer[P]>
      : GetScalarType<T[P], AggregateChatStreamer[P]>
  }




  export type ChatStreamerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatStreamerWhereInput
    orderBy?: ChatStreamerOrderByWithAggregationInput | ChatStreamerOrderByWithAggregationInput[]
    by: ChatStreamerScalarFieldEnum[] | ChatStreamerScalarFieldEnum
    having?: ChatStreamerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatStreamerCountAggregateInputType | true
    _avg?: ChatStreamerAvgAggregateInputType
    _sum?: ChatStreamerSumAggregateInputType
    _min?: ChatStreamerMinAggregateInputType
    _max?: ChatStreamerMaxAggregateInputType
  }

  export type ChatStreamerGroupByOutputType = {
    ID_Streamer: number
    ID_Viewer: number
    NivelViewer: number
    Habilitado: boolean
    Viendo: boolean
    _count: ChatStreamerCountAggregateOutputType | null
    _avg: ChatStreamerAvgAggregateOutputType | null
    _sum: ChatStreamerSumAggregateOutputType | null
    _min: ChatStreamerMinAggregateOutputType | null
    _max: ChatStreamerMaxAggregateOutputType | null
  }

  type GetChatStreamerGroupByPayload<T extends ChatStreamerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatStreamerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatStreamerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatStreamerGroupByOutputType[P]>
            : GetScalarType<T[P], ChatStreamerGroupByOutputType[P]>
        }
      >
    >


  export type ChatStreamerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Streamer?: boolean
    ID_Viewer?: boolean
    NivelViewer?: boolean
    Habilitado?: boolean
    Viendo?: boolean
    streamerC?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewerC?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatStreamer"]>

  export type ChatStreamerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Streamer?: boolean
    ID_Viewer?: boolean
    NivelViewer?: boolean
    Habilitado?: boolean
    Viendo?: boolean
    streamerC?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewerC?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatStreamer"]>

  export type ChatStreamerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Streamer?: boolean
    ID_Viewer?: boolean
    NivelViewer?: boolean
    Habilitado?: boolean
    Viendo?: boolean
    streamerC?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewerC?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatStreamer"]>

  export type ChatStreamerSelectScalar = {
    ID_Streamer?: boolean
    ID_Viewer?: boolean
    NivelViewer?: boolean
    Habilitado?: boolean
    Viendo?: boolean
  }

  export type ChatStreamerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Streamer" | "ID_Viewer" | "NivelViewer" | "Habilitado" | "Viendo", ExtArgs["result"]["chatStreamer"]>
  export type ChatStreamerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamerC?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewerC?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ChatStreamerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamerC?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewerC?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ChatStreamerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamerC?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewerC?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ChatStreamerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatStreamer"
    objects: {
      streamerC: Prisma.$UsuarioPayload<ExtArgs>
      viewerC: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Streamer: number
      ID_Viewer: number
      NivelViewer: number
      Habilitado: boolean
      Viendo: boolean
    }, ExtArgs["result"]["chatStreamer"]>
    composites: {}
  }

  type ChatStreamerGetPayload<S extends boolean | null | undefined | ChatStreamerDefaultArgs> = $Result.GetResult<Prisma.$ChatStreamerPayload, S>

  type ChatStreamerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatStreamerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatStreamerCountAggregateInputType | true
    }

  export interface ChatStreamerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatStreamer'], meta: { name: 'ChatStreamer' } }
    /**
     * Find zero or one ChatStreamer that matches the filter.
     * @param {ChatStreamerFindUniqueArgs} args - Arguments to find a ChatStreamer
     * @example
     * // Get one ChatStreamer
     * const chatStreamer = await prisma.chatStreamer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatStreamerFindUniqueArgs>(args: SelectSubset<T, ChatStreamerFindUniqueArgs<ExtArgs>>): Prisma__ChatStreamerClient<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatStreamer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatStreamerFindUniqueOrThrowArgs} args - Arguments to find a ChatStreamer
     * @example
     * // Get one ChatStreamer
     * const chatStreamer = await prisma.chatStreamer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatStreamerFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatStreamerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatStreamerClient<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatStreamer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatStreamerFindFirstArgs} args - Arguments to find a ChatStreamer
     * @example
     * // Get one ChatStreamer
     * const chatStreamer = await prisma.chatStreamer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatStreamerFindFirstArgs>(args?: SelectSubset<T, ChatStreamerFindFirstArgs<ExtArgs>>): Prisma__ChatStreamerClient<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatStreamer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatStreamerFindFirstOrThrowArgs} args - Arguments to find a ChatStreamer
     * @example
     * // Get one ChatStreamer
     * const chatStreamer = await prisma.chatStreamer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatStreamerFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatStreamerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatStreamerClient<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatStreamers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatStreamerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatStreamers
     * const chatStreamers = await prisma.chatStreamer.findMany()
     * 
     * // Get first 10 ChatStreamers
     * const chatStreamers = await prisma.chatStreamer.findMany({ take: 10 })
     * 
     * // Only select the `ID_Streamer`
     * const chatStreamerWithID_StreamerOnly = await prisma.chatStreamer.findMany({ select: { ID_Streamer: true } })
     * 
     */
    findMany<T extends ChatStreamerFindManyArgs>(args?: SelectSubset<T, ChatStreamerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatStreamer.
     * @param {ChatStreamerCreateArgs} args - Arguments to create a ChatStreamer.
     * @example
     * // Create one ChatStreamer
     * const ChatStreamer = await prisma.chatStreamer.create({
     *   data: {
     *     // ... data to create a ChatStreamer
     *   }
     * })
     * 
     */
    create<T extends ChatStreamerCreateArgs>(args: SelectSubset<T, ChatStreamerCreateArgs<ExtArgs>>): Prisma__ChatStreamerClient<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatStreamers.
     * @param {ChatStreamerCreateManyArgs} args - Arguments to create many ChatStreamers.
     * @example
     * // Create many ChatStreamers
     * const chatStreamer = await prisma.chatStreamer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatStreamerCreateManyArgs>(args?: SelectSubset<T, ChatStreamerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatStreamers and returns the data saved in the database.
     * @param {ChatStreamerCreateManyAndReturnArgs} args - Arguments to create many ChatStreamers.
     * @example
     * // Create many ChatStreamers
     * const chatStreamer = await prisma.chatStreamer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatStreamers and only return the `ID_Streamer`
     * const chatStreamerWithID_StreamerOnly = await prisma.chatStreamer.createManyAndReturn({
     *   select: { ID_Streamer: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatStreamerCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatStreamerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatStreamer.
     * @param {ChatStreamerDeleteArgs} args - Arguments to delete one ChatStreamer.
     * @example
     * // Delete one ChatStreamer
     * const ChatStreamer = await prisma.chatStreamer.delete({
     *   where: {
     *     // ... filter to delete one ChatStreamer
     *   }
     * })
     * 
     */
    delete<T extends ChatStreamerDeleteArgs>(args: SelectSubset<T, ChatStreamerDeleteArgs<ExtArgs>>): Prisma__ChatStreamerClient<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatStreamer.
     * @param {ChatStreamerUpdateArgs} args - Arguments to update one ChatStreamer.
     * @example
     * // Update one ChatStreamer
     * const chatStreamer = await prisma.chatStreamer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatStreamerUpdateArgs>(args: SelectSubset<T, ChatStreamerUpdateArgs<ExtArgs>>): Prisma__ChatStreamerClient<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatStreamers.
     * @param {ChatStreamerDeleteManyArgs} args - Arguments to filter ChatStreamers to delete.
     * @example
     * // Delete a few ChatStreamers
     * const { count } = await prisma.chatStreamer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatStreamerDeleteManyArgs>(args?: SelectSubset<T, ChatStreamerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatStreamers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatStreamerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatStreamers
     * const chatStreamer = await prisma.chatStreamer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatStreamerUpdateManyArgs>(args: SelectSubset<T, ChatStreamerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatStreamers and returns the data updated in the database.
     * @param {ChatStreamerUpdateManyAndReturnArgs} args - Arguments to update many ChatStreamers.
     * @example
     * // Update many ChatStreamers
     * const chatStreamer = await prisma.chatStreamer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatStreamers and only return the `ID_Streamer`
     * const chatStreamerWithID_StreamerOnly = await prisma.chatStreamer.updateManyAndReturn({
     *   select: { ID_Streamer: true },
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
    updateManyAndReturn<T extends ChatStreamerUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatStreamerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatStreamer.
     * @param {ChatStreamerUpsertArgs} args - Arguments to update or create a ChatStreamer.
     * @example
     * // Update or create a ChatStreamer
     * const chatStreamer = await prisma.chatStreamer.upsert({
     *   create: {
     *     // ... data to create a ChatStreamer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatStreamer we want to update
     *   }
     * })
     */
    upsert<T extends ChatStreamerUpsertArgs>(args: SelectSubset<T, ChatStreamerUpsertArgs<ExtArgs>>): Prisma__ChatStreamerClient<$Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatStreamers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatStreamerCountArgs} args - Arguments to filter ChatStreamers to count.
     * @example
     * // Count the number of ChatStreamers
     * const count = await prisma.chatStreamer.count({
     *   where: {
     *     // ... the filter for the ChatStreamers we want to count
     *   }
     * })
    **/
    count<T extends ChatStreamerCountArgs>(
      args?: Subset<T, ChatStreamerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatStreamerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatStreamer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatStreamerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatStreamerAggregateArgs>(args: Subset<T, ChatStreamerAggregateArgs>): Prisma.PrismaPromise<GetChatStreamerAggregateType<T>>

    /**
     * Group by ChatStreamer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatStreamerGroupByArgs} args - Group by arguments.
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
      T extends ChatStreamerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatStreamerGroupByArgs['orderBy'] }
        : { orderBy?: ChatStreamerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatStreamerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatStreamerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatStreamer model
   */
  readonly fields: ChatStreamerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatStreamer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatStreamerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streamerC<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viewerC<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatStreamer model
   */
  interface ChatStreamerFieldRefs {
    readonly ID_Streamer: FieldRef<"ChatStreamer", 'Int'>
    readonly ID_Viewer: FieldRef<"ChatStreamer", 'Int'>
    readonly NivelViewer: FieldRef<"ChatStreamer", 'Int'>
    readonly Habilitado: FieldRef<"ChatStreamer", 'Boolean'>
    readonly Viendo: FieldRef<"ChatStreamer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ChatStreamer findUnique
   */
  export type ChatStreamerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    /**
     * Filter, which ChatStreamer to fetch.
     */
    where: ChatStreamerWhereUniqueInput
  }

  /**
   * ChatStreamer findUniqueOrThrow
   */
  export type ChatStreamerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    /**
     * Filter, which ChatStreamer to fetch.
     */
    where: ChatStreamerWhereUniqueInput
  }

  /**
   * ChatStreamer findFirst
   */
  export type ChatStreamerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    /**
     * Filter, which ChatStreamer to fetch.
     */
    where?: ChatStreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatStreamers to fetch.
     */
    orderBy?: ChatStreamerOrderByWithRelationInput | ChatStreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatStreamers.
     */
    cursor?: ChatStreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatStreamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatStreamers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatStreamers.
     */
    distinct?: ChatStreamerScalarFieldEnum | ChatStreamerScalarFieldEnum[]
  }

  /**
   * ChatStreamer findFirstOrThrow
   */
  export type ChatStreamerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    /**
     * Filter, which ChatStreamer to fetch.
     */
    where?: ChatStreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatStreamers to fetch.
     */
    orderBy?: ChatStreamerOrderByWithRelationInput | ChatStreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatStreamers.
     */
    cursor?: ChatStreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatStreamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatStreamers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatStreamers.
     */
    distinct?: ChatStreamerScalarFieldEnum | ChatStreamerScalarFieldEnum[]
  }

  /**
   * ChatStreamer findMany
   */
  export type ChatStreamerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    /**
     * Filter, which ChatStreamers to fetch.
     */
    where?: ChatStreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatStreamers to fetch.
     */
    orderBy?: ChatStreamerOrderByWithRelationInput | ChatStreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatStreamers.
     */
    cursor?: ChatStreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatStreamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatStreamers.
     */
    skip?: number
    distinct?: ChatStreamerScalarFieldEnum | ChatStreamerScalarFieldEnum[]
  }

  /**
   * ChatStreamer create
   */
  export type ChatStreamerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatStreamer.
     */
    data: XOR<ChatStreamerCreateInput, ChatStreamerUncheckedCreateInput>
  }

  /**
   * ChatStreamer createMany
   */
  export type ChatStreamerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatStreamers.
     */
    data: ChatStreamerCreateManyInput | ChatStreamerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatStreamer createManyAndReturn
   */
  export type ChatStreamerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * The data used to create many ChatStreamers.
     */
    data: ChatStreamerCreateManyInput | ChatStreamerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatStreamer update
   */
  export type ChatStreamerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatStreamer.
     */
    data: XOR<ChatStreamerUpdateInput, ChatStreamerUncheckedUpdateInput>
    /**
     * Choose, which ChatStreamer to update.
     */
    where: ChatStreamerWhereUniqueInput
  }

  /**
   * ChatStreamer updateMany
   */
  export type ChatStreamerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatStreamers.
     */
    data: XOR<ChatStreamerUpdateManyMutationInput, ChatStreamerUncheckedUpdateManyInput>
    /**
     * Filter which ChatStreamers to update
     */
    where?: ChatStreamerWhereInput
    /**
     * Limit how many ChatStreamers to update.
     */
    limit?: number
  }

  /**
   * ChatStreamer updateManyAndReturn
   */
  export type ChatStreamerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * The data used to update ChatStreamers.
     */
    data: XOR<ChatStreamerUpdateManyMutationInput, ChatStreamerUncheckedUpdateManyInput>
    /**
     * Filter which ChatStreamers to update
     */
    where?: ChatStreamerWhereInput
    /**
     * Limit how many ChatStreamers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatStreamer upsert
   */
  export type ChatStreamerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatStreamer to update in case it exists.
     */
    where: ChatStreamerWhereUniqueInput
    /**
     * In case the ChatStreamer found by the `where` argument doesn't exist, create a new ChatStreamer with this data.
     */
    create: XOR<ChatStreamerCreateInput, ChatStreamerUncheckedCreateInput>
    /**
     * In case the ChatStreamer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatStreamerUpdateInput, ChatStreamerUncheckedUpdateInput>
  }

  /**
   * ChatStreamer delete
   */
  export type ChatStreamerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
    /**
     * Filter which ChatStreamer to delete.
     */
    where: ChatStreamerWhereUniqueInput
  }

  /**
   * ChatStreamer deleteMany
   */
  export type ChatStreamerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatStreamers to delete
     */
    where?: ChatStreamerWhereInput
    /**
     * Limit how many ChatStreamers to delete.
     */
    limit?: number
  }

  /**
   * ChatStreamer without action
   */
  export type ChatStreamerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: ChatStreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: ChatStreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatStreamerInclude<ExtArgs> | null
  }


  /**
   * Model Suscripcion
   */

  export type AggregateSuscripcion = {
    _count: SuscripcionCountAggregateOutputType | null
    _avg: SuscripcionAvgAggregateOutputType | null
    _sum: SuscripcionSumAggregateOutputType | null
    _min: SuscripcionMinAggregateOutputType | null
    _max: SuscripcionMaxAggregateOutputType | null
  }

  export type SuscripcionAvgAggregateOutputType = {
    ID_Streamer: number | null
    ID_Viewer: number | null
  }

  export type SuscripcionSumAggregateOutputType = {
    ID_Streamer: number | null
    ID_Viewer: number | null
  }

  export type SuscripcionMinAggregateOutputType = {
    ID_Streamer: number | null
    ID_Viewer: number | null
  }

  export type SuscripcionMaxAggregateOutputType = {
    ID_Streamer: number | null
    ID_Viewer: number | null
  }

  export type SuscripcionCountAggregateOutputType = {
    ID_Streamer: number
    ID_Viewer: number
    _all: number
  }


  export type SuscripcionAvgAggregateInputType = {
    ID_Streamer?: true
    ID_Viewer?: true
  }

  export type SuscripcionSumAggregateInputType = {
    ID_Streamer?: true
    ID_Viewer?: true
  }

  export type SuscripcionMinAggregateInputType = {
    ID_Streamer?: true
    ID_Viewer?: true
  }

  export type SuscripcionMaxAggregateInputType = {
    ID_Streamer?: true
    ID_Viewer?: true
  }

  export type SuscripcionCountAggregateInputType = {
    ID_Streamer?: true
    ID_Viewer?: true
    _all?: true
  }

  export type SuscripcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suscripcion to aggregate.
     */
    where?: SuscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suscripcions to fetch.
     */
    orderBy?: SuscripcionOrderByWithRelationInput | SuscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suscripcions
    **/
    _count?: true | SuscripcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuscripcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuscripcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuscripcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuscripcionMaxAggregateInputType
  }

  export type GetSuscripcionAggregateType<T extends SuscripcionAggregateArgs> = {
        [P in keyof T & keyof AggregateSuscripcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuscripcion[P]>
      : GetScalarType<T[P], AggregateSuscripcion[P]>
  }




  export type SuscripcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuscripcionWhereInput
    orderBy?: SuscripcionOrderByWithAggregationInput | SuscripcionOrderByWithAggregationInput[]
    by: SuscripcionScalarFieldEnum[] | SuscripcionScalarFieldEnum
    having?: SuscripcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuscripcionCountAggregateInputType | true
    _avg?: SuscripcionAvgAggregateInputType
    _sum?: SuscripcionSumAggregateInputType
    _min?: SuscripcionMinAggregateInputType
    _max?: SuscripcionMaxAggregateInputType
  }

  export type SuscripcionGroupByOutputType = {
    ID_Streamer: number
    ID_Viewer: number
    _count: SuscripcionCountAggregateOutputType | null
    _avg: SuscripcionAvgAggregateOutputType | null
    _sum: SuscripcionSumAggregateOutputType | null
    _min: SuscripcionMinAggregateOutputType | null
    _max: SuscripcionMaxAggregateOutputType | null
  }

  type GetSuscripcionGroupByPayload<T extends SuscripcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuscripcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuscripcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuscripcionGroupByOutputType[P]>
            : GetScalarType<T[P], SuscripcionGroupByOutputType[P]>
        }
      >
    >


  export type SuscripcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Streamer?: boolean
    ID_Viewer?: boolean
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suscripcion"]>

  export type SuscripcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Streamer?: boolean
    ID_Viewer?: boolean
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suscripcion"]>

  export type SuscripcionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Streamer?: boolean
    ID_Viewer?: boolean
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suscripcion"]>

  export type SuscripcionSelectScalar = {
    ID_Streamer?: boolean
    ID_Viewer?: boolean
  }

  export type SuscripcionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Streamer" | "ID_Viewer", ExtArgs["result"]["suscripcion"]>
  export type SuscripcionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SuscripcionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type SuscripcionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
    viewer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $SuscripcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suscripcion"
    objects: {
      streamer: Prisma.$UsuarioPayload<ExtArgs>
      viewer: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Streamer: number
      ID_Viewer: number
    }, ExtArgs["result"]["suscripcion"]>
    composites: {}
  }

  type SuscripcionGetPayload<S extends boolean | null | undefined | SuscripcionDefaultArgs> = $Result.GetResult<Prisma.$SuscripcionPayload, S>

  type SuscripcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuscripcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuscripcionCountAggregateInputType | true
    }

  export interface SuscripcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suscripcion'], meta: { name: 'Suscripcion' } }
    /**
     * Find zero or one Suscripcion that matches the filter.
     * @param {SuscripcionFindUniqueArgs} args - Arguments to find a Suscripcion
     * @example
     * // Get one Suscripcion
     * const suscripcion = await prisma.suscripcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuscripcionFindUniqueArgs>(args: SelectSubset<T, SuscripcionFindUniqueArgs<ExtArgs>>): Prisma__SuscripcionClient<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suscripcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuscripcionFindUniqueOrThrowArgs} args - Arguments to find a Suscripcion
     * @example
     * // Get one Suscripcion
     * const suscripcion = await prisma.suscripcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuscripcionFindUniqueOrThrowArgs>(args: SelectSubset<T, SuscripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuscripcionClient<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suscripcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuscripcionFindFirstArgs} args - Arguments to find a Suscripcion
     * @example
     * // Get one Suscripcion
     * const suscripcion = await prisma.suscripcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuscripcionFindFirstArgs>(args?: SelectSubset<T, SuscripcionFindFirstArgs<ExtArgs>>): Prisma__SuscripcionClient<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suscripcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuscripcionFindFirstOrThrowArgs} args - Arguments to find a Suscripcion
     * @example
     * // Get one Suscripcion
     * const suscripcion = await prisma.suscripcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuscripcionFindFirstOrThrowArgs>(args?: SelectSubset<T, SuscripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuscripcionClient<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suscripcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuscripcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suscripcions
     * const suscripcions = await prisma.suscripcion.findMany()
     * 
     * // Get first 10 Suscripcions
     * const suscripcions = await prisma.suscripcion.findMany({ take: 10 })
     * 
     * // Only select the `ID_Streamer`
     * const suscripcionWithID_StreamerOnly = await prisma.suscripcion.findMany({ select: { ID_Streamer: true } })
     * 
     */
    findMany<T extends SuscripcionFindManyArgs>(args?: SelectSubset<T, SuscripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suscripcion.
     * @param {SuscripcionCreateArgs} args - Arguments to create a Suscripcion.
     * @example
     * // Create one Suscripcion
     * const Suscripcion = await prisma.suscripcion.create({
     *   data: {
     *     // ... data to create a Suscripcion
     *   }
     * })
     * 
     */
    create<T extends SuscripcionCreateArgs>(args: SelectSubset<T, SuscripcionCreateArgs<ExtArgs>>): Prisma__SuscripcionClient<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suscripcions.
     * @param {SuscripcionCreateManyArgs} args - Arguments to create many Suscripcions.
     * @example
     * // Create many Suscripcions
     * const suscripcion = await prisma.suscripcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuscripcionCreateManyArgs>(args?: SelectSubset<T, SuscripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suscripcions and returns the data saved in the database.
     * @param {SuscripcionCreateManyAndReturnArgs} args - Arguments to create many Suscripcions.
     * @example
     * // Create many Suscripcions
     * const suscripcion = await prisma.suscripcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suscripcions and only return the `ID_Streamer`
     * const suscripcionWithID_StreamerOnly = await prisma.suscripcion.createManyAndReturn({
     *   select: { ID_Streamer: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuscripcionCreateManyAndReturnArgs>(args?: SelectSubset<T, SuscripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suscripcion.
     * @param {SuscripcionDeleteArgs} args - Arguments to delete one Suscripcion.
     * @example
     * // Delete one Suscripcion
     * const Suscripcion = await prisma.suscripcion.delete({
     *   where: {
     *     // ... filter to delete one Suscripcion
     *   }
     * })
     * 
     */
    delete<T extends SuscripcionDeleteArgs>(args: SelectSubset<T, SuscripcionDeleteArgs<ExtArgs>>): Prisma__SuscripcionClient<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suscripcion.
     * @param {SuscripcionUpdateArgs} args - Arguments to update one Suscripcion.
     * @example
     * // Update one Suscripcion
     * const suscripcion = await prisma.suscripcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuscripcionUpdateArgs>(args: SelectSubset<T, SuscripcionUpdateArgs<ExtArgs>>): Prisma__SuscripcionClient<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suscripcions.
     * @param {SuscripcionDeleteManyArgs} args - Arguments to filter Suscripcions to delete.
     * @example
     * // Delete a few Suscripcions
     * const { count } = await prisma.suscripcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuscripcionDeleteManyArgs>(args?: SelectSubset<T, SuscripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuscripcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suscripcions
     * const suscripcion = await prisma.suscripcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuscripcionUpdateManyArgs>(args: SelectSubset<T, SuscripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suscripcions and returns the data updated in the database.
     * @param {SuscripcionUpdateManyAndReturnArgs} args - Arguments to update many Suscripcions.
     * @example
     * // Update many Suscripcions
     * const suscripcion = await prisma.suscripcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suscripcions and only return the `ID_Streamer`
     * const suscripcionWithID_StreamerOnly = await prisma.suscripcion.updateManyAndReturn({
     *   select: { ID_Streamer: true },
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
    updateManyAndReturn<T extends SuscripcionUpdateManyAndReturnArgs>(args: SelectSubset<T, SuscripcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suscripcion.
     * @param {SuscripcionUpsertArgs} args - Arguments to update or create a Suscripcion.
     * @example
     * // Update or create a Suscripcion
     * const suscripcion = await prisma.suscripcion.upsert({
     *   create: {
     *     // ... data to create a Suscripcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suscripcion we want to update
     *   }
     * })
     */
    upsert<T extends SuscripcionUpsertArgs>(args: SelectSubset<T, SuscripcionUpsertArgs<ExtArgs>>): Prisma__SuscripcionClient<$Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuscripcionCountArgs} args - Arguments to filter Suscripcions to count.
     * @example
     * // Count the number of Suscripcions
     * const count = await prisma.suscripcion.count({
     *   where: {
     *     // ... the filter for the Suscripcions we want to count
     *   }
     * })
    **/
    count<T extends SuscripcionCountArgs>(
      args?: Subset<T, SuscripcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuscripcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuscripcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuscripcionAggregateArgs>(args: Subset<T, SuscripcionAggregateArgs>): Prisma.PrismaPromise<GetSuscripcionAggregateType<T>>

    /**
     * Group by Suscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuscripcionGroupByArgs} args - Group by arguments.
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
      T extends SuscripcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuscripcionGroupByArgs['orderBy'] }
        : { orderBy?: SuscripcionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuscripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuscripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suscripcion model
   */
  readonly fields: SuscripcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suscripcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuscripcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streamer<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viewer<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Suscripcion model
   */
  interface SuscripcionFieldRefs {
    readonly ID_Streamer: FieldRef<"Suscripcion", 'Int'>
    readonly ID_Viewer: FieldRef<"Suscripcion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Suscripcion findUnique
   */
  export type SuscripcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Suscripcion to fetch.
     */
    where: SuscripcionWhereUniqueInput
  }

  /**
   * Suscripcion findUniqueOrThrow
   */
  export type SuscripcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Suscripcion to fetch.
     */
    where: SuscripcionWhereUniqueInput
  }

  /**
   * Suscripcion findFirst
   */
  export type SuscripcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Suscripcion to fetch.
     */
    where?: SuscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suscripcions to fetch.
     */
    orderBy?: SuscripcionOrderByWithRelationInput | SuscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suscripcions.
     */
    cursor?: SuscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suscripcions.
     */
    distinct?: SuscripcionScalarFieldEnum | SuscripcionScalarFieldEnum[]
  }

  /**
   * Suscripcion findFirstOrThrow
   */
  export type SuscripcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Suscripcion to fetch.
     */
    where?: SuscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suscripcions to fetch.
     */
    orderBy?: SuscripcionOrderByWithRelationInput | SuscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suscripcions.
     */
    cursor?: SuscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suscripcions.
     */
    distinct?: SuscripcionScalarFieldEnum | SuscripcionScalarFieldEnum[]
  }

  /**
   * Suscripcion findMany
   */
  export type SuscripcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Suscripcions to fetch.
     */
    where?: SuscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suscripcions to fetch.
     */
    orderBy?: SuscripcionOrderByWithRelationInput | SuscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suscripcions.
     */
    cursor?: SuscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suscripcions.
     */
    skip?: number
    distinct?: SuscripcionScalarFieldEnum | SuscripcionScalarFieldEnum[]
  }

  /**
   * Suscripcion create
   */
  export type SuscripcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    /**
     * The data needed to create a Suscripcion.
     */
    data: XOR<SuscripcionCreateInput, SuscripcionUncheckedCreateInput>
  }

  /**
   * Suscripcion createMany
   */
  export type SuscripcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suscripcions.
     */
    data: SuscripcionCreateManyInput | SuscripcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suscripcion createManyAndReturn
   */
  export type SuscripcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * The data used to create many Suscripcions.
     */
    data: SuscripcionCreateManyInput | SuscripcionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suscripcion update
   */
  export type SuscripcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    /**
     * The data needed to update a Suscripcion.
     */
    data: XOR<SuscripcionUpdateInput, SuscripcionUncheckedUpdateInput>
    /**
     * Choose, which Suscripcion to update.
     */
    where: SuscripcionWhereUniqueInput
  }

  /**
   * Suscripcion updateMany
   */
  export type SuscripcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suscripcions.
     */
    data: XOR<SuscripcionUpdateManyMutationInput, SuscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Suscripcions to update
     */
    where?: SuscripcionWhereInput
    /**
     * Limit how many Suscripcions to update.
     */
    limit?: number
  }

  /**
   * Suscripcion updateManyAndReturn
   */
  export type SuscripcionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * The data used to update Suscripcions.
     */
    data: XOR<SuscripcionUpdateManyMutationInput, SuscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Suscripcions to update
     */
    where?: SuscripcionWhereInput
    /**
     * Limit how many Suscripcions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Suscripcion upsert
   */
  export type SuscripcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    /**
     * The filter to search for the Suscripcion to update in case it exists.
     */
    where: SuscripcionWhereUniqueInput
    /**
     * In case the Suscripcion found by the `where` argument doesn't exist, create a new Suscripcion with this data.
     */
    create: XOR<SuscripcionCreateInput, SuscripcionUncheckedCreateInput>
    /**
     * In case the Suscripcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuscripcionUpdateInput, SuscripcionUncheckedUpdateInput>
  }

  /**
   * Suscripcion delete
   */
  export type SuscripcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
    /**
     * Filter which Suscripcion to delete.
     */
    where: SuscripcionWhereUniqueInput
  }

  /**
   * Suscripcion deleteMany
   */
  export type SuscripcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suscripcions to delete
     */
    where?: SuscripcionWhereInput
    /**
     * Limit how many Suscripcions to delete.
     */
    limit?: number
  }

  /**
   * Suscripcion without action
   */
  export type SuscripcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: SuscripcionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: SuscripcionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuscripcionInclude<ExtArgs> | null
  }


  /**
   * Model Regalo
   */

  export type AggregateRegalo = {
    _count: RegaloCountAggregateOutputType | null
    _avg: RegaloAvgAggregateOutputType | null
    _sum: RegaloSumAggregateOutputType | null
    _min: RegaloMinAggregateOutputType | null
    _max: RegaloMaxAggregateOutputType | null
  }

  export type RegaloAvgAggregateOutputType = {
    ID_Regalo: number | null
    PrecioRegalo: number | null
    ID_Streamer: number | null
  }

  export type RegaloSumAggregateOutputType = {
    ID_Regalo: number | null
    PrecioRegalo: number | null
    ID_Streamer: number | null
  }

  export type RegaloMinAggregateOutputType = {
    ID_Regalo: number | null
    NombreRegalo: string | null
    PrecioRegalo: number | null
    DescripcionRegalo: string | null
    icono: string | null
    ID_Streamer: number | null
  }

  export type RegaloMaxAggregateOutputType = {
    ID_Regalo: number | null
    NombreRegalo: string | null
    PrecioRegalo: number | null
    DescripcionRegalo: string | null
    icono: string | null
    ID_Streamer: number | null
  }

  export type RegaloCountAggregateOutputType = {
    ID_Regalo: number
    NombreRegalo: number
    PrecioRegalo: number
    DescripcionRegalo: number
    icono: number
    ID_Streamer: number
    _all: number
  }


  export type RegaloAvgAggregateInputType = {
    ID_Regalo?: true
    PrecioRegalo?: true
    ID_Streamer?: true
  }

  export type RegaloSumAggregateInputType = {
    ID_Regalo?: true
    PrecioRegalo?: true
    ID_Streamer?: true
  }

  export type RegaloMinAggregateInputType = {
    ID_Regalo?: true
    NombreRegalo?: true
    PrecioRegalo?: true
    DescripcionRegalo?: true
    icono?: true
    ID_Streamer?: true
  }

  export type RegaloMaxAggregateInputType = {
    ID_Regalo?: true
    NombreRegalo?: true
    PrecioRegalo?: true
    DescripcionRegalo?: true
    icono?: true
    ID_Streamer?: true
  }

  export type RegaloCountAggregateInputType = {
    ID_Regalo?: true
    NombreRegalo?: true
    PrecioRegalo?: true
    DescripcionRegalo?: true
    icono?: true
    ID_Streamer?: true
    _all?: true
  }

  export type RegaloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regalo to aggregate.
     */
    where?: RegaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regalos to fetch.
     */
    orderBy?: RegaloOrderByWithRelationInput | RegaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regalos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regalos
    **/
    _count?: true | RegaloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegaloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegaloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegaloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegaloMaxAggregateInputType
  }

  export type GetRegaloAggregateType<T extends RegaloAggregateArgs> = {
        [P in keyof T & keyof AggregateRegalo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegalo[P]>
      : GetScalarType<T[P], AggregateRegalo[P]>
  }




  export type RegaloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegaloWhereInput
    orderBy?: RegaloOrderByWithAggregationInput | RegaloOrderByWithAggregationInput[]
    by: RegaloScalarFieldEnum[] | RegaloScalarFieldEnum
    having?: RegaloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegaloCountAggregateInputType | true
    _avg?: RegaloAvgAggregateInputType
    _sum?: RegaloSumAggregateInputType
    _min?: RegaloMinAggregateInputType
    _max?: RegaloMaxAggregateInputType
  }

  export type RegaloGroupByOutputType = {
    ID_Regalo: number
    NombreRegalo: string
    PrecioRegalo: number
    DescripcionRegalo: string
    icono: string
    ID_Streamer: number
    _count: RegaloCountAggregateOutputType | null
    _avg: RegaloAvgAggregateOutputType | null
    _sum: RegaloSumAggregateOutputType | null
    _min: RegaloMinAggregateOutputType | null
    _max: RegaloMaxAggregateOutputType | null
  }

  type GetRegaloGroupByPayload<T extends RegaloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegaloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegaloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegaloGroupByOutputType[P]>
            : GetScalarType<T[P], RegaloGroupByOutputType[P]>
        }
      >
    >


  export type RegaloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Regalo?: boolean
    NombreRegalo?: boolean
    PrecioRegalo?: boolean
    DescripcionRegalo?: boolean
    icono?: boolean
    ID_Streamer?: boolean
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regalo"]>

  export type RegaloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Regalo?: boolean
    NombreRegalo?: boolean
    PrecioRegalo?: boolean
    DescripcionRegalo?: boolean
    icono?: boolean
    ID_Streamer?: boolean
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regalo"]>

  export type RegaloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Regalo?: boolean
    NombreRegalo?: boolean
    PrecioRegalo?: boolean
    DescripcionRegalo?: boolean
    icono?: boolean
    ID_Streamer?: boolean
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regalo"]>

  export type RegaloSelectScalar = {
    ID_Regalo?: boolean
    NombreRegalo?: boolean
    PrecioRegalo?: boolean
    DescripcionRegalo?: boolean
    icono?: boolean
    ID_Streamer?: boolean
  }

  export type RegaloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Regalo" | "NombreRegalo" | "PrecioRegalo" | "DescripcionRegalo" | "icono" | "ID_Streamer", ExtArgs["result"]["regalo"]>
  export type RegaloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RegaloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RegaloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RegaloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regalo"
    objects: {
      streamer: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Regalo: number
      NombreRegalo: string
      PrecioRegalo: number
      DescripcionRegalo: string
      icono: string
      ID_Streamer: number
    }, ExtArgs["result"]["regalo"]>
    composites: {}
  }

  type RegaloGetPayload<S extends boolean | null | undefined | RegaloDefaultArgs> = $Result.GetResult<Prisma.$RegaloPayload, S>

  type RegaloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegaloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegaloCountAggregateInputType | true
    }

  export interface RegaloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regalo'], meta: { name: 'Regalo' } }
    /**
     * Find zero or one Regalo that matches the filter.
     * @param {RegaloFindUniqueArgs} args - Arguments to find a Regalo
     * @example
     * // Get one Regalo
     * const regalo = await prisma.regalo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegaloFindUniqueArgs>(args: SelectSubset<T, RegaloFindUniqueArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regalo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegaloFindUniqueOrThrowArgs} args - Arguments to find a Regalo
     * @example
     * // Get one Regalo
     * const regalo = await prisma.regalo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegaloFindUniqueOrThrowArgs>(args: SelectSubset<T, RegaloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regalo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloFindFirstArgs} args - Arguments to find a Regalo
     * @example
     * // Get one Regalo
     * const regalo = await prisma.regalo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegaloFindFirstArgs>(args?: SelectSubset<T, RegaloFindFirstArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regalo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloFindFirstOrThrowArgs} args - Arguments to find a Regalo
     * @example
     * // Get one Regalo
     * const regalo = await prisma.regalo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegaloFindFirstOrThrowArgs>(args?: SelectSubset<T, RegaloFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regalos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regalos
     * const regalos = await prisma.regalo.findMany()
     * 
     * // Get first 10 Regalos
     * const regalos = await prisma.regalo.findMany({ take: 10 })
     * 
     * // Only select the `ID_Regalo`
     * const regaloWithID_RegaloOnly = await prisma.regalo.findMany({ select: { ID_Regalo: true } })
     * 
     */
    findMany<T extends RegaloFindManyArgs>(args?: SelectSubset<T, RegaloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regalo.
     * @param {RegaloCreateArgs} args - Arguments to create a Regalo.
     * @example
     * // Create one Regalo
     * const Regalo = await prisma.regalo.create({
     *   data: {
     *     // ... data to create a Regalo
     *   }
     * })
     * 
     */
    create<T extends RegaloCreateArgs>(args: SelectSubset<T, RegaloCreateArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regalos.
     * @param {RegaloCreateManyArgs} args - Arguments to create many Regalos.
     * @example
     * // Create many Regalos
     * const regalo = await prisma.regalo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegaloCreateManyArgs>(args?: SelectSubset<T, RegaloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regalos and returns the data saved in the database.
     * @param {RegaloCreateManyAndReturnArgs} args - Arguments to create many Regalos.
     * @example
     * // Create many Regalos
     * const regalo = await prisma.regalo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regalos and only return the `ID_Regalo`
     * const regaloWithID_RegaloOnly = await prisma.regalo.createManyAndReturn({
     *   select: { ID_Regalo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegaloCreateManyAndReturnArgs>(args?: SelectSubset<T, RegaloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Regalo.
     * @param {RegaloDeleteArgs} args - Arguments to delete one Regalo.
     * @example
     * // Delete one Regalo
     * const Regalo = await prisma.regalo.delete({
     *   where: {
     *     // ... filter to delete one Regalo
     *   }
     * })
     * 
     */
    delete<T extends RegaloDeleteArgs>(args: SelectSubset<T, RegaloDeleteArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regalo.
     * @param {RegaloUpdateArgs} args - Arguments to update one Regalo.
     * @example
     * // Update one Regalo
     * const regalo = await prisma.regalo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegaloUpdateArgs>(args: SelectSubset<T, RegaloUpdateArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regalos.
     * @param {RegaloDeleteManyArgs} args - Arguments to filter Regalos to delete.
     * @example
     * // Delete a few Regalos
     * const { count } = await prisma.regalo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegaloDeleteManyArgs>(args?: SelectSubset<T, RegaloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regalos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regalos
     * const regalo = await prisma.regalo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegaloUpdateManyArgs>(args: SelectSubset<T, RegaloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regalos and returns the data updated in the database.
     * @param {RegaloUpdateManyAndReturnArgs} args - Arguments to update many Regalos.
     * @example
     * // Update many Regalos
     * const regalo = await prisma.regalo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regalos and only return the `ID_Regalo`
     * const regaloWithID_RegaloOnly = await prisma.regalo.updateManyAndReturn({
     *   select: { ID_Regalo: true },
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
    updateManyAndReturn<T extends RegaloUpdateManyAndReturnArgs>(args: SelectSubset<T, RegaloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Regalo.
     * @param {RegaloUpsertArgs} args - Arguments to update or create a Regalo.
     * @example
     * // Update or create a Regalo
     * const regalo = await prisma.regalo.upsert({
     *   create: {
     *     // ... data to create a Regalo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regalo we want to update
     *   }
     * })
     */
    upsert<T extends RegaloUpsertArgs>(args: SelectSubset<T, RegaloUpsertArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regalos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloCountArgs} args - Arguments to filter Regalos to count.
     * @example
     * // Count the number of Regalos
     * const count = await prisma.regalo.count({
     *   where: {
     *     // ... the filter for the Regalos we want to count
     *   }
     * })
    **/
    count<T extends RegaloCountArgs>(
      args?: Subset<T, RegaloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegaloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regalo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegaloAggregateArgs>(args: Subset<T, RegaloAggregateArgs>): Prisma.PrismaPromise<GetRegaloAggregateType<T>>

    /**
     * Group by Regalo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloGroupByArgs} args - Group by arguments.
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
      T extends RegaloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegaloGroupByArgs['orderBy'] }
        : { orderBy?: RegaloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegaloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegaloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regalo model
   */
  readonly fields: RegaloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regalo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegaloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streamer<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Regalo model
   */
  interface RegaloFieldRefs {
    readonly ID_Regalo: FieldRef<"Regalo", 'Int'>
    readonly NombreRegalo: FieldRef<"Regalo", 'String'>
    readonly PrecioRegalo: FieldRef<"Regalo", 'Int'>
    readonly DescripcionRegalo: FieldRef<"Regalo", 'String'>
    readonly icono: FieldRef<"Regalo", 'String'>
    readonly ID_Streamer: FieldRef<"Regalo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Regalo findUnique
   */
  export type RegaloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter, which Regalo to fetch.
     */
    where: RegaloWhereUniqueInput
  }

  /**
   * Regalo findUniqueOrThrow
   */
  export type RegaloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter, which Regalo to fetch.
     */
    where: RegaloWhereUniqueInput
  }

  /**
   * Regalo findFirst
   */
  export type RegaloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter, which Regalo to fetch.
     */
    where?: RegaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regalos to fetch.
     */
    orderBy?: RegaloOrderByWithRelationInput | RegaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regalos.
     */
    cursor?: RegaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regalos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regalos.
     */
    distinct?: RegaloScalarFieldEnum | RegaloScalarFieldEnum[]
  }

  /**
   * Regalo findFirstOrThrow
   */
  export type RegaloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter, which Regalo to fetch.
     */
    where?: RegaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regalos to fetch.
     */
    orderBy?: RegaloOrderByWithRelationInput | RegaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regalos.
     */
    cursor?: RegaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regalos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regalos.
     */
    distinct?: RegaloScalarFieldEnum | RegaloScalarFieldEnum[]
  }

  /**
   * Regalo findMany
   */
  export type RegaloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter, which Regalos to fetch.
     */
    where?: RegaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regalos to fetch.
     */
    orderBy?: RegaloOrderByWithRelationInput | RegaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regalos.
     */
    cursor?: RegaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regalos.
     */
    skip?: number
    distinct?: RegaloScalarFieldEnum | RegaloScalarFieldEnum[]
  }

  /**
   * Regalo create
   */
  export type RegaloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * The data needed to create a Regalo.
     */
    data: XOR<RegaloCreateInput, RegaloUncheckedCreateInput>
  }

  /**
   * Regalo createMany
   */
  export type RegaloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regalos.
     */
    data: RegaloCreateManyInput | RegaloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Regalo createManyAndReturn
   */
  export type RegaloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * The data used to create many Regalos.
     */
    data: RegaloCreateManyInput | RegaloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Regalo update
   */
  export type RegaloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * The data needed to update a Regalo.
     */
    data: XOR<RegaloUpdateInput, RegaloUncheckedUpdateInput>
    /**
     * Choose, which Regalo to update.
     */
    where: RegaloWhereUniqueInput
  }

  /**
   * Regalo updateMany
   */
  export type RegaloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regalos.
     */
    data: XOR<RegaloUpdateManyMutationInput, RegaloUncheckedUpdateManyInput>
    /**
     * Filter which Regalos to update
     */
    where?: RegaloWhereInput
    /**
     * Limit how many Regalos to update.
     */
    limit?: number
  }

  /**
   * Regalo updateManyAndReturn
   */
  export type RegaloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * The data used to update Regalos.
     */
    data: XOR<RegaloUpdateManyMutationInput, RegaloUncheckedUpdateManyInput>
    /**
     * Filter which Regalos to update
     */
    where?: RegaloWhereInput
    /**
     * Limit how many Regalos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Regalo upsert
   */
  export type RegaloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * The filter to search for the Regalo to update in case it exists.
     */
    where: RegaloWhereUniqueInput
    /**
     * In case the Regalo found by the `where` argument doesn't exist, create a new Regalo with this data.
     */
    create: XOR<RegaloCreateInput, RegaloUncheckedCreateInput>
    /**
     * In case the Regalo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegaloUpdateInput, RegaloUncheckedUpdateInput>
  }

  /**
   * Regalo delete
   */
  export type RegaloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter which Regalo to delete.
     */
    where: RegaloWhereUniqueInput
  }

  /**
   * Regalo deleteMany
   */
  export type RegaloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regalos to delete
     */
    where?: RegaloWhereInput
    /**
     * Limit how many Regalos to delete.
     */
    limit?: number
  }

  /**
   * Regalo without action
   */
  export type RegaloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    ID: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    ID: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    ID: number | null
    Nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    ID: number | null
    Nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    ID: number
    Nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    ID?: true
  }

  export type CategoriaSumAggregateInputType = {
    ID?: true
  }

  export type CategoriaMinAggregateInputType = {
    ID?: true
    Nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    ID?: true
    Nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    ID?: true
    Nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    ID: number
    Nombre: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Nombre?: boolean
    juegos?: boolean | Categoria$juegosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    Nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    ID?: boolean
    Nombre?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "Nombre", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    juegos?: boolean | Categoria$juegosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      juegos: Prisma.$JuegoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      Nombre: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const categoriaWithIDOnly = await prisma.categoria.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `ID`
     * const categoriaWithIDOnly = await prisma.categoria.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `ID`
     * const categoriaWithIDOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { ID: true },
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
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    juegos<T extends Categoria$juegosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$juegosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly ID: FieldRef<"Categoria", 'Int'>
    readonly Nombre: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.juegos
   */
  export type Categoria$juegosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    where?: JuegoWhereInput
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    cursor?: JuegoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Juego
   */

  export type AggregateJuego = {
    _count: JuegoCountAggregateOutputType | null
    _avg: JuegoAvgAggregateOutputType | null
    _sum: JuegoSumAggregateOutputType | null
    _min: JuegoMinAggregateOutputType | null
    _max: JuegoMaxAggregateOutputType | null
  }

  export type JuegoAvgAggregateOutputType = {
    ID_Juego: number | null
    CategoriaID: number | null
  }

  export type JuegoSumAggregateOutputType = {
    ID_Juego: number | null
    CategoriaID: number | null
  }

  export type JuegoMinAggregateOutputType = {
    ID_Juego: number | null
    Nombre: string | null
    Descripcion: string | null
    CategoriaID: number | null
  }

  export type JuegoMaxAggregateOutputType = {
    ID_Juego: number | null
    Nombre: string | null
    Descripcion: string | null
    CategoriaID: number | null
  }

  export type JuegoCountAggregateOutputType = {
    ID_Juego: number
    Nombre: number
    Descripcion: number
    CategoriaID: number
    _all: number
  }


  export type JuegoAvgAggregateInputType = {
    ID_Juego?: true
    CategoriaID?: true
  }

  export type JuegoSumAggregateInputType = {
    ID_Juego?: true
    CategoriaID?: true
  }

  export type JuegoMinAggregateInputType = {
    ID_Juego?: true
    Nombre?: true
    Descripcion?: true
    CategoriaID?: true
  }

  export type JuegoMaxAggregateInputType = {
    ID_Juego?: true
    Nombre?: true
    Descripcion?: true
    CategoriaID?: true
  }

  export type JuegoCountAggregateInputType = {
    ID_Juego?: true
    Nombre?: true
    Descripcion?: true
    CategoriaID?: true
    _all?: true
  }

  export type JuegoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juego to aggregate.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Juegos
    **/
    _count?: true | JuegoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JuegoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JuegoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuegoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuegoMaxAggregateInputType
  }

  export type GetJuegoAggregateType<T extends JuegoAggregateArgs> = {
        [P in keyof T & keyof AggregateJuego]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuego[P]>
      : GetScalarType<T[P], AggregateJuego[P]>
  }




  export type JuegoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegoWhereInput
    orderBy?: JuegoOrderByWithAggregationInput | JuegoOrderByWithAggregationInput[]
    by: JuegoScalarFieldEnum[] | JuegoScalarFieldEnum
    having?: JuegoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuegoCountAggregateInputType | true
    _avg?: JuegoAvgAggregateInputType
    _sum?: JuegoSumAggregateInputType
    _min?: JuegoMinAggregateInputType
    _max?: JuegoMaxAggregateInputType
  }

  export type JuegoGroupByOutputType = {
    ID_Juego: number
    Nombre: string
    Descripcion: string | null
    CategoriaID: number
    _count: JuegoCountAggregateOutputType | null
    _avg: JuegoAvgAggregateOutputType | null
    _sum: JuegoSumAggregateOutputType | null
    _min: JuegoMinAggregateOutputType | null
    _max: JuegoMaxAggregateOutputType | null
  }

  type GetJuegoGroupByPayload<T extends JuegoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuegoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuegoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuegoGroupByOutputType[P]>
            : GetScalarType<T[P], JuegoGroupByOutputType[P]>
        }
      >
    >


  export type JuegoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Juego?: boolean
    Nombre?: boolean
    Descripcion?: boolean
    CategoriaID?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    Jogos?: boolean | Juego$JogosArgs<ExtArgs>
    _count?: boolean | JuegoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juego"]>

  export type JuegoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Juego?: boolean
    Nombre?: boolean
    Descripcion?: boolean
    CategoriaID?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juego"]>

  export type JuegoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Juego?: boolean
    Nombre?: boolean
    Descripcion?: boolean
    CategoriaID?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juego"]>

  export type JuegoSelectScalar = {
    ID_Juego?: boolean
    Nombre?: boolean
    Descripcion?: boolean
    CategoriaID?: boolean
  }

  export type JuegoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Juego" | "Nombre" | "Descripcion" | "CategoriaID", ExtArgs["result"]["juego"]>
  export type JuegoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    Jogos?: boolean | Juego$JogosArgs<ExtArgs>
    _count?: boolean | JuegoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type JuegoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type JuegoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $JuegoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Juego"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      Jogos: Prisma.$JuegosEnVideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Juego: number
      Nombre: string
      Descripcion: string | null
      CategoriaID: number
    }, ExtArgs["result"]["juego"]>
    composites: {}
  }

  type JuegoGetPayload<S extends boolean | null | undefined | JuegoDefaultArgs> = $Result.GetResult<Prisma.$JuegoPayload, S>

  type JuegoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JuegoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuegoCountAggregateInputType | true
    }

  export interface JuegoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Juego'], meta: { name: 'Juego' } }
    /**
     * Find zero or one Juego that matches the filter.
     * @param {JuegoFindUniqueArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JuegoFindUniqueArgs>(args: SelectSubset<T, JuegoFindUniqueArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Juego that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JuegoFindUniqueOrThrowArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JuegoFindUniqueOrThrowArgs>(args: SelectSubset<T, JuegoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juego that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoFindFirstArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JuegoFindFirstArgs>(args?: SelectSubset<T, JuegoFindFirstArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Juego that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoFindFirstOrThrowArgs} args - Arguments to find a Juego
     * @example
     * // Get one Juego
     * const juego = await prisma.juego.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JuegoFindFirstOrThrowArgs>(args?: SelectSubset<T, JuegoFindFirstOrThrowArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Juegos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Juegos
     * const juegos = await prisma.juego.findMany()
     * 
     * // Get first 10 Juegos
     * const juegos = await prisma.juego.findMany({ take: 10 })
     * 
     * // Only select the `ID_Juego`
     * const juegoWithID_JuegoOnly = await prisma.juego.findMany({ select: { ID_Juego: true } })
     * 
     */
    findMany<T extends JuegoFindManyArgs>(args?: SelectSubset<T, JuegoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Juego.
     * @param {JuegoCreateArgs} args - Arguments to create a Juego.
     * @example
     * // Create one Juego
     * const Juego = await prisma.juego.create({
     *   data: {
     *     // ... data to create a Juego
     *   }
     * })
     * 
     */
    create<T extends JuegoCreateArgs>(args: SelectSubset<T, JuegoCreateArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Juegos.
     * @param {JuegoCreateManyArgs} args - Arguments to create many Juegos.
     * @example
     * // Create many Juegos
     * const juego = await prisma.juego.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JuegoCreateManyArgs>(args?: SelectSubset<T, JuegoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Juegos and returns the data saved in the database.
     * @param {JuegoCreateManyAndReturnArgs} args - Arguments to create many Juegos.
     * @example
     * // Create many Juegos
     * const juego = await prisma.juego.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Juegos and only return the `ID_Juego`
     * const juegoWithID_JuegoOnly = await prisma.juego.createManyAndReturn({
     *   select: { ID_Juego: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JuegoCreateManyAndReturnArgs>(args?: SelectSubset<T, JuegoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Juego.
     * @param {JuegoDeleteArgs} args - Arguments to delete one Juego.
     * @example
     * // Delete one Juego
     * const Juego = await prisma.juego.delete({
     *   where: {
     *     // ... filter to delete one Juego
     *   }
     * })
     * 
     */
    delete<T extends JuegoDeleteArgs>(args: SelectSubset<T, JuegoDeleteArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Juego.
     * @param {JuegoUpdateArgs} args - Arguments to update one Juego.
     * @example
     * // Update one Juego
     * const juego = await prisma.juego.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JuegoUpdateArgs>(args: SelectSubset<T, JuegoUpdateArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Juegos.
     * @param {JuegoDeleteManyArgs} args - Arguments to filter Juegos to delete.
     * @example
     * // Delete a few Juegos
     * const { count } = await prisma.juego.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JuegoDeleteManyArgs>(args?: SelectSubset<T, JuegoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Juegos
     * const juego = await prisma.juego.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JuegoUpdateManyArgs>(args: SelectSubset<T, JuegoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Juegos and returns the data updated in the database.
     * @param {JuegoUpdateManyAndReturnArgs} args - Arguments to update many Juegos.
     * @example
     * // Update many Juegos
     * const juego = await prisma.juego.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Juegos and only return the `ID_Juego`
     * const juegoWithID_JuegoOnly = await prisma.juego.updateManyAndReturn({
     *   select: { ID_Juego: true },
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
    updateManyAndReturn<T extends JuegoUpdateManyAndReturnArgs>(args: SelectSubset<T, JuegoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Juego.
     * @param {JuegoUpsertArgs} args - Arguments to update or create a Juego.
     * @example
     * // Update or create a Juego
     * const juego = await prisma.juego.upsert({
     *   create: {
     *     // ... data to create a Juego
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Juego we want to update
     *   }
     * })
     */
    upsert<T extends JuegoUpsertArgs>(args: SelectSubset<T, JuegoUpsertArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Juegos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoCountArgs} args - Arguments to filter Juegos to count.
     * @example
     * // Count the number of Juegos
     * const count = await prisma.juego.count({
     *   where: {
     *     // ... the filter for the Juegos we want to count
     *   }
     * })
    **/
    count<T extends JuegoCountArgs>(
      args?: Subset<T, JuegoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuegoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Juego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JuegoAggregateArgs>(args: Subset<T, JuegoAggregateArgs>): Prisma.PrismaPromise<GetJuegoAggregateType<T>>

    /**
     * Group by Juego.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegoGroupByArgs} args - Group by arguments.
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
      T extends JuegoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JuegoGroupByArgs['orderBy'] }
        : { orderBy?: JuegoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JuegoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuegoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Juego model
   */
  readonly fields: JuegoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Juego.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JuegoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Jogos<T extends Juego$JogosArgs<ExtArgs> = {}>(args?: Subset<T, Juego$JogosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Juego model
   */
  interface JuegoFieldRefs {
    readonly ID_Juego: FieldRef<"Juego", 'Int'>
    readonly Nombre: FieldRef<"Juego", 'String'>
    readonly Descripcion: FieldRef<"Juego", 'String'>
    readonly CategoriaID: FieldRef<"Juego", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Juego findUnique
   */
  export type JuegoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego findUniqueOrThrow
   */
  export type JuegoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego findFirst
   */
  export type JuegoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juegos.
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juegos.
     */
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Juego findFirstOrThrow
   */
  export type JuegoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juego to fetch.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Juegos.
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Juegos.
     */
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Juego findMany
   */
  export type JuegoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter, which Juegos to fetch.
     */
    where?: JuegoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Juegos to fetch.
     */
    orderBy?: JuegoOrderByWithRelationInput | JuegoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Juegos.
     */
    cursor?: JuegoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Juegos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Juegos.
     */
    skip?: number
    distinct?: JuegoScalarFieldEnum | JuegoScalarFieldEnum[]
  }

  /**
   * Juego create
   */
  export type JuegoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * The data needed to create a Juego.
     */
    data: XOR<JuegoCreateInput, JuegoUncheckedCreateInput>
  }

  /**
   * Juego createMany
   */
  export type JuegoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Juegos.
     */
    data: JuegoCreateManyInput | JuegoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Juego createManyAndReturn
   */
  export type JuegoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * The data used to create many Juegos.
     */
    data: JuegoCreateManyInput | JuegoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Juego update
   */
  export type JuegoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * The data needed to update a Juego.
     */
    data: XOR<JuegoUpdateInput, JuegoUncheckedUpdateInput>
    /**
     * Choose, which Juego to update.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego updateMany
   */
  export type JuegoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Juegos.
     */
    data: XOR<JuegoUpdateManyMutationInput, JuegoUncheckedUpdateManyInput>
    /**
     * Filter which Juegos to update
     */
    where?: JuegoWhereInput
    /**
     * Limit how many Juegos to update.
     */
    limit?: number
  }

  /**
   * Juego updateManyAndReturn
   */
  export type JuegoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * The data used to update Juegos.
     */
    data: XOR<JuegoUpdateManyMutationInput, JuegoUncheckedUpdateManyInput>
    /**
     * Filter which Juegos to update
     */
    where?: JuegoWhereInput
    /**
     * Limit how many Juegos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Juego upsert
   */
  export type JuegoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * The filter to search for the Juego to update in case it exists.
     */
    where: JuegoWhereUniqueInput
    /**
     * In case the Juego found by the `where` argument doesn't exist, create a new Juego with this data.
     */
    create: XOR<JuegoCreateInput, JuegoUncheckedCreateInput>
    /**
     * In case the Juego was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JuegoUpdateInput, JuegoUncheckedUpdateInput>
  }

  /**
   * Juego delete
   */
  export type JuegoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
    /**
     * Filter which Juego to delete.
     */
    where: JuegoWhereUniqueInput
  }

  /**
   * Juego deleteMany
   */
  export type JuegoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Juegos to delete
     */
    where?: JuegoWhereInput
    /**
     * Limit how many Juegos to delete.
     */
    limit?: number
  }

  /**
   * Juego.Jogos
   */
  export type Juego$JogosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    where?: JuegosEnVideoWhereInput
    orderBy?: JuegosEnVideoOrderByWithRelationInput | JuegosEnVideoOrderByWithRelationInput[]
    cursor?: JuegosEnVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuegosEnVideoScalarFieldEnum | JuegosEnVideoScalarFieldEnum[]
  }

  /**
   * Juego without action
   */
  export type JuegoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Juego
     */
    select?: JuegoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Juego
     */
    omit?: JuegoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegoInclude<ExtArgs> | null
  }


  /**
   * Model JuegosEnVideo
   */

  export type AggregateJuegosEnVideo = {
    _count: JuegosEnVideoCountAggregateOutputType | null
    _avg: JuegosEnVideoAvgAggregateOutputType | null
    _sum: JuegosEnVideoSumAggregateOutputType | null
    _min: JuegosEnVideoMinAggregateOutputType | null
    _max: JuegosEnVideoMaxAggregateOutputType | null
  }

  export type JuegosEnVideoAvgAggregateOutputType = {
    ID_Juego: number | null
    ID_Video: number | null
  }

  export type JuegosEnVideoSumAggregateOutputType = {
    ID_Juego: number | null
    ID_Video: number | null
  }

  export type JuegosEnVideoMinAggregateOutputType = {
    ID_Juego: number | null
    ID_Video: number | null
  }

  export type JuegosEnVideoMaxAggregateOutputType = {
    ID_Juego: number | null
    ID_Video: number | null
  }

  export type JuegosEnVideoCountAggregateOutputType = {
    ID_Juego: number
    ID_Video: number
    _all: number
  }


  export type JuegosEnVideoAvgAggregateInputType = {
    ID_Juego?: true
    ID_Video?: true
  }

  export type JuegosEnVideoSumAggregateInputType = {
    ID_Juego?: true
    ID_Video?: true
  }

  export type JuegosEnVideoMinAggregateInputType = {
    ID_Juego?: true
    ID_Video?: true
  }

  export type JuegosEnVideoMaxAggregateInputType = {
    ID_Juego?: true
    ID_Video?: true
  }

  export type JuegosEnVideoCountAggregateInputType = {
    ID_Juego?: true
    ID_Video?: true
    _all?: true
  }

  export type JuegosEnVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JuegosEnVideo to aggregate.
     */
    where?: JuegosEnVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuegosEnVideos to fetch.
     */
    orderBy?: JuegosEnVideoOrderByWithRelationInput | JuegosEnVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JuegosEnVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuegosEnVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuegosEnVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JuegosEnVideos
    **/
    _count?: true | JuegosEnVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JuegosEnVideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JuegosEnVideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JuegosEnVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JuegosEnVideoMaxAggregateInputType
  }

  export type GetJuegosEnVideoAggregateType<T extends JuegosEnVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateJuegosEnVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJuegosEnVideo[P]>
      : GetScalarType<T[P], AggregateJuegosEnVideo[P]>
  }




  export type JuegosEnVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JuegosEnVideoWhereInput
    orderBy?: JuegosEnVideoOrderByWithAggregationInput | JuegosEnVideoOrderByWithAggregationInput[]
    by: JuegosEnVideoScalarFieldEnum[] | JuegosEnVideoScalarFieldEnum
    having?: JuegosEnVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JuegosEnVideoCountAggregateInputType | true
    _avg?: JuegosEnVideoAvgAggregateInputType
    _sum?: JuegosEnVideoSumAggregateInputType
    _min?: JuegosEnVideoMinAggregateInputType
    _max?: JuegosEnVideoMaxAggregateInputType
  }

  export type JuegosEnVideoGroupByOutputType = {
    ID_Juego: number
    ID_Video: number
    _count: JuegosEnVideoCountAggregateOutputType | null
    _avg: JuegosEnVideoAvgAggregateOutputType | null
    _sum: JuegosEnVideoSumAggregateOutputType | null
    _min: JuegosEnVideoMinAggregateOutputType | null
    _max: JuegosEnVideoMaxAggregateOutputType | null
  }

  type GetJuegosEnVideoGroupByPayload<T extends JuegosEnVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JuegosEnVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JuegosEnVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JuegosEnVideoGroupByOutputType[P]>
            : GetScalarType<T[P], JuegosEnVideoGroupByOutputType[P]>
        }
      >
    >


  export type JuegosEnVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Juego?: boolean
    ID_Video?: boolean
    game?: boolean | JuegoDefaultArgs<ExtArgs>
    Vedeo?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juegosEnVideo"]>

  export type JuegosEnVideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Juego?: boolean
    ID_Video?: boolean
    game?: boolean | JuegoDefaultArgs<ExtArgs>
    Vedeo?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juegosEnVideo"]>

  export type JuegosEnVideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Juego?: boolean
    ID_Video?: boolean
    game?: boolean | JuegoDefaultArgs<ExtArgs>
    Vedeo?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["juegosEnVideo"]>

  export type JuegosEnVideoSelectScalar = {
    ID_Juego?: boolean
    ID_Video?: boolean
  }

  export type JuegosEnVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Juego" | "ID_Video", ExtArgs["result"]["juegosEnVideo"]>
  export type JuegosEnVideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | JuegoDefaultArgs<ExtArgs>
    Vedeo?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type JuegosEnVideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | JuegoDefaultArgs<ExtArgs>
    Vedeo?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type JuegosEnVideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | JuegoDefaultArgs<ExtArgs>
    Vedeo?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $JuegosEnVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JuegosEnVideo"
    objects: {
      game: Prisma.$JuegoPayload<ExtArgs>
      Vedeo: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Juego: number
      ID_Video: number
    }, ExtArgs["result"]["juegosEnVideo"]>
    composites: {}
  }

  type JuegosEnVideoGetPayload<S extends boolean | null | undefined | JuegosEnVideoDefaultArgs> = $Result.GetResult<Prisma.$JuegosEnVideoPayload, S>

  type JuegosEnVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JuegosEnVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JuegosEnVideoCountAggregateInputType | true
    }

  export interface JuegosEnVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JuegosEnVideo'], meta: { name: 'JuegosEnVideo' } }
    /**
     * Find zero or one JuegosEnVideo that matches the filter.
     * @param {JuegosEnVideoFindUniqueArgs} args - Arguments to find a JuegosEnVideo
     * @example
     * // Get one JuegosEnVideo
     * const juegosEnVideo = await prisma.juegosEnVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JuegosEnVideoFindUniqueArgs>(args: SelectSubset<T, JuegosEnVideoFindUniqueArgs<ExtArgs>>): Prisma__JuegosEnVideoClient<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JuegosEnVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JuegosEnVideoFindUniqueOrThrowArgs} args - Arguments to find a JuegosEnVideo
     * @example
     * // Get one JuegosEnVideo
     * const juegosEnVideo = await prisma.juegosEnVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JuegosEnVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, JuegosEnVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JuegosEnVideoClient<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JuegosEnVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosEnVideoFindFirstArgs} args - Arguments to find a JuegosEnVideo
     * @example
     * // Get one JuegosEnVideo
     * const juegosEnVideo = await prisma.juegosEnVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JuegosEnVideoFindFirstArgs>(args?: SelectSubset<T, JuegosEnVideoFindFirstArgs<ExtArgs>>): Prisma__JuegosEnVideoClient<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JuegosEnVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosEnVideoFindFirstOrThrowArgs} args - Arguments to find a JuegosEnVideo
     * @example
     * // Get one JuegosEnVideo
     * const juegosEnVideo = await prisma.juegosEnVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JuegosEnVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, JuegosEnVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__JuegosEnVideoClient<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JuegosEnVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosEnVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JuegosEnVideos
     * const juegosEnVideos = await prisma.juegosEnVideo.findMany()
     * 
     * // Get first 10 JuegosEnVideos
     * const juegosEnVideos = await prisma.juegosEnVideo.findMany({ take: 10 })
     * 
     * // Only select the `ID_Juego`
     * const juegosEnVideoWithID_JuegoOnly = await prisma.juegosEnVideo.findMany({ select: { ID_Juego: true } })
     * 
     */
    findMany<T extends JuegosEnVideoFindManyArgs>(args?: SelectSubset<T, JuegosEnVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JuegosEnVideo.
     * @param {JuegosEnVideoCreateArgs} args - Arguments to create a JuegosEnVideo.
     * @example
     * // Create one JuegosEnVideo
     * const JuegosEnVideo = await prisma.juegosEnVideo.create({
     *   data: {
     *     // ... data to create a JuegosEnVideo
     *   }
     * })
     * 
     */
    create<T extends JuegosEnVideoCreateArgs>(args: SelectSubset<T, JuegosEnVideoCreateArgs<ExtArgs>>): Prisma__JuegosEnVideoClient<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JuegosEnVideos.
     * @param {JuegosEnVideoCreateManyArgs} args - Arguments to create many JuegosEnVideos.
     * @example
     * // Create many JuegosEnVideos
     * const juegosEnVideo = await prisma.juegosEnVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JuegosEnVideoCreateManyArgs>(args?: SelectSubset<T, JuegosEnVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JuegosEnVideos and returns the data saved in the database.
     * @param {JuegosEnVideoCreateManyAndReturnArgs} args - Arguments to create many JuegosEnVideos.
     * @example
     * // Create many JuegosEnVideos
     * const juegosEnVideo = await prisma.juegosEnVideo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JuegosEnVideos and only return the `ID_Juego`
     * const juegosEnVideoWithID_JuegoOnly = await prisma.juegosEnVideo.createManyAndReturn({
     *   select: { ID_Juego: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JuegosEnVideoCreateManyAndReturnArgs>(args?: SelectSubset<T, JuegosEnVideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JuegosEnVideo.
     * @param {JuegosEnVideoDeleteArgs} args - Arguments to delete one JuegosEnVideo.
     * @example
     * // Delete one JuegosEnVideo
     * const JuegosEnVideo = await prisma.juegosEnVideo.delete({
     *   where: {
     *     // ... filter to delete one JuegosEnVideo
     *   }
     * })
     * 
     */
    delete<T extends JuegosEnVideoDeleteArgs>(args: SelectSubset<T, JuegosEnVideoDeleteArgs<ExtArgs>>): Prisma__JuegosEnVideoClient<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JuegosEnVideo.
     * @param {JuegosEnVideoUpdateArgs} args - Arguments to update one JuegosEnVideo.
     * @example
     * // Update one JuegosEnVideo
     * const juegosEnVideo = await prisma.juegosEnVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JuegosEnVideoUpdateArgs>(args: SelectSubset<T, JuegosEnVideoUpdateArgs<ExtArgs>>): Prisma__JuegosEnVideoClient<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JuegosEnVideos.
     * @param {JuegosEnVideoDeleteManyArgs} args - Arguments to filter JuegosEnVideos to delete.
     * @example
     * // Delete a few JuegosEnVideos
     * const { count } = await prisma.juegosEnVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JuegosEnVideoDeleteManyArgs>(args?: SelectSubset<T, JuegosEnVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JuegosEnVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosEnVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JuegosEnVideos
     * const juegosEnVideo = await prisma.juegosEnVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JuegosEnVideoUpdateManyArgs>(args: SelectSubset<T, JuegosEnVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JuegosEnVideos and returns the data updated in the database.
     * @param {JuegosEnVideoUpdateManyAndReturnArgs} args - Arguments to update many JuegosEnVideos.
     * @example
     * // Update many JuegosEnVideos
     * const juegosEnVideo = await prisma.juegosEnVideo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JuegosEnVideos and only return the `ID_Juego`
     * const juegosEnVideoWithID_JuegoOnly = await prisma.juegosEnVideo.updateManyAndReturn({
     *   select: { ID_Juego: true },
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
    updateManyAndReturn<T extends JuegosEnVideoUpdateManyAndReturnArgs>(args: SelectSubset<T, JuegosEnVideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JuegosEnVideo.
     * @param {JuegosEnVideoUpsertArgs} args - Arguments to update or create a JuegosEnVideo.
     * @example
     * // Update or create a JuegosEnVideo
     * const juegosEnVideo = await prisma.juegosEnVideo.upsert({
     *   create: {
     *     // ... data to create a JuegosEnVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JuegosEnVideo we want to update
     *   }
     * })
     */
    upsert<T extends JuegosEnVideoUpsertArgs>(args: SelectSubset<T, JuegosEnVideoUpsertArgs<ExtArgs>>): Prisma__JuegosEnVideoClient<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JuegosEnVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosEnVideoCountArgs} args - Arguments to filter JuegosEnVideos to count.
     * @example
     * // Count the number of JuegosEnVideos
     * const count = await prisma.juegosEnVideo.count({
     *   where: {
     *     // ... the filter for the JuegosEnVideos we want to count
     *   }
     * })
    **/
    count<T extends JuegosEnVideoCountArgs>(
      args?: Subset<T, JuegosEnVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JuegosEnVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JuegosEnVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosEnVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JuegosEnVideoAggregateArgs>(args: Subset<T, JuegosEnVideoAggregateArgs>): Prisma.PrismaPromise<GetJuegosEnVideoAggregateType<T>>

    /**
     * Group by JuegosEnVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JuegosEnVideoGroupByArgs} args - Group by arguments.
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
      T extends JuegosEnVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JuegosEnVideoGroupByArgs['orderBy'] }
        : { orderBy?: JuegosEnVideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JuegosEnVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJuegosEnVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JuegosEnVideo model
   */
  readonly fields: JuegosEnVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JuegosEnVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JuegosEnVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends JuegoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JuegoDefaultArgs<ExtArgs>>): Prisma__JuegoClient<$Result.GetResult<Prisma.$JuegoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Vedeo<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JuegosEnVideo model
   */
  interface JuegosEnVideoFieldRefs {
    readonly ID_Juego: FieldRef<"JuegosEnVideo", 'Int'>
    readonly ID_Video: FieldRef<"JuegosEnVideo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JuegosEnVideo findUnique
   */
  export type JuegosEnVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    /**
     * Filter, which JuegosEnVideo to fetch.
     */
    where: JuegosEnVideoWhereUniqueInput
  }

  /**
   * JuegosEnVideo findUniqueOrThrow
   */
  export type JuegosEnVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    /**
     * Filter, which JuegosEnVideo to fetch.
     */
    where: JuegosEnVideoWhereUniqueInput
  }

  /**
   * JuegosEnVideo findFirst
   */
  export type JuegosEnVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    /**
     * Filter, which JuegosEnVideo to fetch.
     */
    where?: JuegosEnVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuegosEnVideos to fetch.
     */
    orderBy?: JuegosEnVideoOrderByWithRelationInput | JuegosEnVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JuegosEnVideos.
     */
    cursor?: JuegosEnVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuegosEnVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuegosEnVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JuegosEnVideos.
     */
    distinct?: JuegosEnVideoScalarFieldEnum | JuegosEnVideoScalarFieldEnum[]
  }

  /**
   * JuegosEnVideo findFirstOrThrow
   */
  export type JuegosEnVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    /**
     * Filter, which JuegosEnVideo to fetch.
     */
    where?: JuegosEnVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuegosEnVideos to fetch.
     */
    orderBy?: JuegosEnVideoOrderByWithRelationInput | JuegosEnVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JuegosEnVideos.
     */
    cursor?: JuegosEnVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuegosEnVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuegosEnVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JuegosEnVideos.
     */
    distinct?: JuegosEnVideoScalarFieldEnum | JuegosEnVideoScalarFieldEnum[]
  }

  /**
   * JuegosEnVideo findMany
   */
  export type JuegosEnVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    /**
     * Filter, which JuegosEnVideos to fetch.
     */
    where?: JuegosEnVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JuegosEnVideos to fetch.
     */
    orderBy?: JuegosEnVideoOrderByWithRelationInput | JuegosEnVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JuegosEnVideos.
     */
    cursor?: JuegosEnVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JuegosEnVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JuegosEnVideos.
     */
    skip?: number
    distinct?: JuegosEnVideoScalarFieldEnum | JuegosEnVideoScalarFieldEnum[]
  }

  /**
   * JuegosEnVideo create
   */
  export type JuegosEnVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    /**
     * The data needed to create a JuegosEnVideo.
     */
    data: XOR<JuegosEnVideoCreateInput, JuegosEnVideoUncheckedCreateInput>
  }

  /**
   * JuegosEnVideo createMany
   */
  export type JuegosEnVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JuegosEnVideos.
     */
    data: JuegosEnVideoCreateManyInput | JuegosEnVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JuegosEnVideo createManyAndReturn
   */
  export type JuegosEnVideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * The data used to create many JuegosEnVideos.
     */
    data: JuegosEnVideoCreateManyInput | JuegosEnVideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JuegosEnVideo update
   */
  export type JuegosEnVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    /**
     * The data needed to update a JuegosEnVideo.
     */
    data: XOR<JuegosEnVideoUpdateInput, JuegosEnVideoUncheckedUpdateInput>
    /**
     * Choose, which JuegosEnVideo to update.
     */
    where: JuegosEnVideoWhereUniqueInput
  }

  /**
   * JuegosEnVideo updateMany
   */
  export type JuegosEnVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JuegosEnVideos.
     */
    data: XOR<JuegosEnVideoUpdateManyMutationInput, JuegosEnVideoUncheckedUpdateManyInput>
    /**
     * Filter which JuegosEnVideos to update
     */
    where?: JuegosEnVideoWhereInput
    /**
     * Limit how many JuegosEnVideos to update.
     */
    limit?: number
  }

  /**
   * JuegosEnVideo updateManyAndReturn
   */
  export type JuegosEnVideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * The data used to update JuegosEnVideos.
     */
    data: XOR<JuegosEnVideoUpdateManyMutationInput, JuegosEnVideoUncheckedUpdateManyInput>
    /**
     * Filter which JuegosEnVideos to update
     */
    where?: JuegosEnVideoWhereInput
    /**
     * Limit how many JuegosEnVideos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JuegosEnVideo upsert
   */
  export type JuegosEnVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    /**
     * The filter to search for the JuegosEnVideo to update in case it exists.
     */
    where: JuegosEnVideoWhereUniqueInput
    /**
     * In case the JuegosEnVideo found by the `where` argument doesn't exist, create a new JuegosEnVideo with this data.
     */
    create: XOR<JuegosEnVideoCreateInput, JuegosEnVideoUncheckedCreateInput>
    /**
     * In case the JuegosEnVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JuegosEnVideoUpdateInput, JuegosEnVideoUncheckedUpdateInput>
  }

  /**
   * JuegosEnVideo delete
   */
  export type JuegosEnVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    /**
     * Filter which JuegosEnVideo to delete.
     */
    where: JuegosEnVideoWhereUniqueInput
  }

  /**
   * JuegosEnVideo deleteMany
   */
  export type JuegosEnVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JuegosEnVideos to delete
     */
    where?: JuegosEnVideoWhereInput
    /**
     * Limit how many JuegosEnVideos to delete.
     */
    limit?: number
  }

  /**
   * JuegosEnVideo without action
   */
  export type JuegosEnVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    ID_Video: number | null
    Duracion: number | null
    ID_Usuario: number | null
  }

  export type VideoSumAggregateOutputType = {
    ID_Video: number | null
    Duracion: number | null
    ID_Usuario: number | null
  }

  export type VideoMinAggregateOutputType = {
    ID_Video: number | null
    Titulo: string | null
    Url: string | null
    Duracion: number | null
    Estado: boolean | null
    CategoriaDeVideo: string | null
    FechaSubida: Date | null
    ID_Usuario: number | null
  }

  export type VideoMaxAggregateOutputType = {
    ID_Video: number | null
    Titulo: string | null
    Url: string | null
    Duracion: number | null
    Estado: boolean | null
    CategoriaDeVideo: string | null
    FechaSubida: Date | null
    ID_Usuario: number | null
  }

  export type VideoCountAggregateOutputType = {
    ID_Video: number
    Titulo: number
    Url: number
    Duracion: number
    Estado: number
    CategoriaDeVideo: number
    FechaSubida: number
    ID_Usuario: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    ID_Video?: true
    Duracion?: true
    ID_Usuario?: true
  }

  export type VideoSumAggregateInputType = {
    ID_Video?: true
    Duracion?: true
    ID_Usuario?: true
  }

  export type VideoMinAggregateInputType = {
    ID_Video?: true
    Titulo?: true
    Url?: true
    Duracion?: true
    Estado?: true
    CategoriaDeVideo?: true
    FechaSubida?: true
    ID_Usuario?: true
  }

  export type VideoMaxAggregateInputType = {
    ID_Video?: true
    Titulo?: true
    Url?: true
    Duracion?: true
    Estado?: true
    CategoriaDeVideo?: true
    FechaSubida?: true
    ID_Usuario?: true
  }

  export type VideoCountAggregateInputType = {
    ID_Video?: true
    Titulo?: true
    Url?: true
    Duracion?: true
    Estado?: true
    CategoriaDeVideo?: true
    FechaSubida?: true
    ID_Usuario?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    ID_Video: number
    Titulo: string
    Url: string
    Duracion: number | null
    Estado: boolean
    CategoriaDeVideo: string
    FechaSubida: Date
    ID_Usuario: number
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Video?: boolean
    Titulo?: boolean
    Url?: boolean
    Duracion?: boolean
    Estado?: boolean
    CategoriaDeVideo?: boolean
    FechaSubida?: boolean
    ID_Usuario?: boolean
    V_DEOs?: boolean | Video$V_DEOsArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Video?: boolean
    Titulo?: boolean
    Url?: boolean
    Duracion?: boolean
    Estado?: boolean
    CategoriaDeVideo?: boolean
    FechaSubida?: boolean
    ID_Usuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Video?: boolean
    Titulo?: boolean
    Url?: boolean
    Duracion?: boolean
    Estado?: boolean
    CategoriaDeVideo?: boolean
    FechaSubida?: boolean
    ID_Usuario?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    ID_Video?: boolean
    Titulo?: boolean
    Url?: boolean
    Duracion?: boolean
    Estado?: boolean
    CategoriaDeVideo?: boolean
    FechaSubida?: boolean
    ID_Usuario?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Video" | "Titulo" | "Url" | "Duracion" | "Estado" | "CategoriaDeVideo" | "FechaSubida" | "ID_Usuario", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    V_DEOs?: boolean | Video$V_DEOsArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      V_DEOs: Prisma.$JuegosEnVideoPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Video: number
      Titulo: string
      Url: string
      Duracion: number | null
      Estado: boolean
      CategoriaDeVideo: string
      FechaSubida: Date
      ID_Usuario: number
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `ID_Video`
     * const videoWithID_VideoOnly = await prisma.video.findMany({ select: { ID_Video: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `ID_Video`
     * const videoWithID_VideoOnly = await prisma.video.createManyAndReturn({
     *   select: { ID_Video: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `ID_Video`
     * const videoWithID_VideoOnly = await prisma.video.updateManyAndReturn({
     *   select: { ID_Video: true },
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    V_DEOs<T extends Video$V_DEOsArgs<ExtArgs> = {}>(args?: Subset<T, Video$V_DEOsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JuegosEnVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly ID_Video: FieldRef<"Video", 'Int'>
    readonly Titulo: FieldRef<"Video", 'String'>
    readonly Url: FieldRef<"Video", 'String'>
    readonly Duracion: FieldRef<"Video", 'Int'>
    readonly Estado: FieldRef<"Video", 'Boolean'>
    readonly CategoriaDeVideo: FieldRef<"Video", 'String'>
    readonly FechaSubida: FieldRef<"Video", 'DateTime'>
    readonly ID_Usuario: FieldRef<"Video", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.V_DEOs
   */
  export type Video$V_DEOsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JuegosEnVideo
     */
    select?: JuegosEnVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JuegosEnVideo
     */
    omit?: JuegosEnVideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JuegosEnVideoInclude<ExtArgs> | null
    where?: JuegosEnVideoWhereInput
    orderBy?: JuegosEnVideoOrderByWithRelationInput | JuegosEnVideoOrderByWithRelationInput[]
    cursor?: JuegosEnVideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JuegosEnVideoScalarFieldEnum | JuegosEnVideoScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model LogrosUsuario
   */

  export type AggregateLogrosUsuario = {
    _count: LogrosUsuarioCountAggregateOutputType | null
    _avg: LogrosUsuarioAvgAggregateOutputType | null
    _sum: LogrosUsuarioSumAggregateOutputType | null
    _min: LogrosUsuarioMinAggregateOutputType | null
    _max: LogrosUsuarioMaxAggregateOutputType | null
  }

  export type LogrosUsuarioAvgAggregateOutputType = {
    ID_Usuario: number | null
    ID_Logro: number | null
  }

  export type LogrosUsuarioSumAggregateOutputType = {
    ID_Usuario: number | null
    ID_Logro: number | null
  }

  export type LogrosUsuarioMinAggregateOutputType = {
    ID_Usuario: number | null
    ID_Logro: number | null
    Completado: boolean | null
  }

  export type LogrosUsuarioMaxAggregateOutputType = {
    ID_Usuario: number | null
    ID_Logro: number | null
    Completado: boolean | null
  }

  export type LogrosUsuarioCountAggregateOutputType = {
    ID_Usuario: number
    ID_Logro: number
    Completado: number
    _all: number
  }


  export type LogrosUsuarioAvgAggregateInputType = {
    ID_Usuario?: true
    ID_Logro?: true
  }

  export type LogrosUsuarioSumAggregateInputType = {
    ID_Usuario?: true
    ID_Logro?: true
  }

  export type LogrosUsuarioMinAggregateInputType = {
    ID_Usuario?: true
    ID_Logro?: true
    Completado?: true
  }

  export type LogrosUsuarioMaxAggregateInputType = {
    ID_Usuario?: true
    ID_Logro?: true
    Completado?: true
  }

  export type LogrosUsuarioCountAggregateInputType = {
    ID_Usuario?: true
    ID_Logro?: true
    Completado?: true
    _all?: true
  }

  export type LogrosUsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogrosUsuario to aggregate.
     */
    where?: LogrosUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogrosUsuarios to fetch.
     */
    orderBy?: LogrosUsuarioOrderByWithRelationInput | LogrosUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogrosUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogrosUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogrosUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogrosUsuarios
    **/
    _count?: true | LogrosUsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogrosUsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogrosUsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogrosUsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogrosUsuarioMaxAggregateInputType
  }

  export type GetLogrosUsuarioAggregateType<T extends LogrosUsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateLogrosUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogrosUsuario[P]>
      : GetScalarType<T[P], AggregateLogrosUsuario[P]>
  }




  export type LogrosUsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogrosUsuarioWhereInput
    orderBy?: LogrosUsuarioOrderByWithAggregationInput | LogrosUsuarioOrderByWithAggregationInput[]
    by: LogrosUsuarioScalarFieldEnum[] | LogrosUsuarioScalarFieldEnum
    having?: LogrosUsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogrosUsuarioCountAggregateInputType | true
    _avg?: LogrosUsuarioAvgAggregateInputType
    _sum?: LogrosUsuarioSumAggregateInputType
    _min?: LogrosUsuarioMinAggregateInputType
    _max?: LogrosUsuarioMaxAggregateInputType
  }

  export type LogrosUsuarioGroupByOutputType = {
    ID_Usuario: number
    ID_Logro: number
    Completado: boolean
    _count: LogrosUsuarioCountAggregateOutputType | null
    _avg: LogrosUsuarioAvgAggregateOutputType | null
    _sum: LogrosUsuarioSumAggregateOutputType | null
    _min: LogrosUsuarioMinAggregateOutputType | null
    _max: LogrosUsuarioMaxAggregateOutputType | null
  }

  type GetLogrosUsuarioGroupByPayload<T extends LogrosUsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogrosUsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogrosUsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogrosUsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], LogrosUsuarioGroupByOutputType[P]>
        }
      >
    >


  export type LogrosUsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Usuario?: boolean
    ID_Logro?: boolean
    Completado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    logros?: boolean | LogrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logrosUsuario"]>

  export type LogrosUsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Usuario?: boolean
    ID_Logro?: boolean
    Completado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    logros?: boolean | LogrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logrosUsuario"]>

  export type LogrosUsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Usuario?: boolean
    ID_Logro?: boolean
    Completado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    logros?: boolean | LogrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logrosUsuario"]>

  export type LogrosUsuarioSelectScalar = {
    ID_Usuario?: boolean
    ID_Logro?: boolean
    Completado?: boolean
  }

  export type LogrosUsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Usuario" | "ID_Logro" | "Completado", ExtArgs["result"]["logrosUsuario"]>
  export type LogrosUsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    logros?: boolean | LogrosDefaultArgs<ExtArgs>
  }
  export type LogrosUsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    logros?: boolean | LogrosDefaultArgs<ExtArgs>
  }
  export type LogrosUsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    logros?: boolean | LogrosDefaultArgs<ExtArgs>
  }

  export type $LogrosUsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogrosUsuario"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      logros: Prisma.$LogrosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Usuario: number
      ID_Logro: number
      Completado: boolean
    }, ExtArgs["result"]["logrosUsuario"]>
    composites: {}
  }

  type LogrosUsuarioGetPayload<S extends boolean | null | undefined | LogrosUsuarioDefaultArgs> = $Result.GetResult<Prisma.$LogrosUsuarioPayload, S>

  type LogrosUsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogrosUsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogrosUsuarioCountAggregateInputType | true
    }

  export interface LogrosUsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogrosUsuario'], meta: { name: 'LogrosUsuario' } }
    /**
     * Find zero or one LogrosUsuario that matches the filter.
     * @param {LogrosUsuarioFindUniqueArgs} args - Arguments to find a LogrosUsuario
     * @example
     * // Get one LogrosUsuario
     * const logrosUsuario = await prisma.logrosUsuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogrosUsuarioFindUniqueArgs>(args: SelectSubset<T, LogrosUsuarioFindUniqueArgs<ExtArgs>>): Prisma__LogrosUsuarioClient<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogrosUsuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogrosUsuarioFindUniqueOrThrowArgs} args - Arguments to find a LogrosUsuario
     * @example
     * // Get one LogrosUsuario
     * const logrosUsuario = await prisma.logrosUsuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogrosUsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, LogrosUsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogrosUsuarioClient<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogrosUsuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosUsuarioFindFirstArgs} args - Arguments to find a LogrosUsuario
     * @example
     * // Get one LogrosUsuario
     * const logrosUsuario = await prisma.logrosUsuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogrosUsuarioFindFirstArgs>(args?: SelectSubset<T, LogrosUsuarioFindFirstArgs<ExtArgs>>): Prisma__LogrosUsuarioClient<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogrosUsuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosUsuarioFindFirstOrThrowArgs} args - Arguments to find a LogrosUsuario
     * @example
     * // Get one LogrosUsuario
     * const logrosUsuario = await prisma.logrosUsuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogrosUsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, LogrosUsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogrosUsuarioClient<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogrosUsuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosUsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogrosUsuarios
     * const logrosUsuarios = await prisma.logrosUsuario.findMany()
     * 
     * // Get first 10 LogrosUsuarios
     * const logrosUsuarios = await prisma.logrosUsuario.findMany({ take: 10 })
     * 
     * // Only select the `ID_Usuario`
     * const logrosUsuarioWithID_UsuarioOnly = await prisma.logrosUsuario.findMany({ select: { ID_Usuario: true } })
     * 
     */
    findMany<T extends LogrosUsuarioFindManyArgs>(args?: SelectSubset<T, LogrosUsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogrosUsuario.
     * @param {LogrosUsuarioCreateArgs} args - Arguments to create a LogrosUsuario.
     * @example
     * // Create one LogrosUsuario
     * const LogrosUsuario = await prisma.logrosUsuario.create({
     *   data: {
     *     // ... data to create a LogrosUsuario
     *   }
     * })
     * 
     */
    create<T extends LogrosUsuarioCreateArgs>(args: SelectSubset<T, LogrosUsuarioCreateArgs<ExtArgs>>): Prisma__LogrosUsuarioClient<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogrosUsuarios.
     * @param {LogrosUsuarioCreateManyArgs} args - Arguments to create many LogrosUsuarios.
     * @example
     * // Create many LogrosUsuarios
     * const logrosUsuario = await prisma.logrosUsuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogrosUsuarioCreateManyArgs>(args?: SelectSubset<T, LogrosUsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogrosUsuarios and returns the data saved in the database.
     * @param {LogrosUsuarioCreateManyAndReturnArgs} args - Arguments to create many LogrosUsuarios.
     * @example
     * // Create many LogrosUsuarios
     * const logrosUsuario = await prisma.logrosUsuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogrosUsuarios and only return the `ID_Usuario`
     * const logrosUsuarioWithID_UsuarioOnly = await prisma.logrosUsuario.createManyAndReturn({
     *   select: { ID_Usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogrosUsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, LogrosUsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogrosUsuario.
     * @param {LogrosUsuarioDeleteArgs} args - Arguments to delete one LogrosUsuario.
     * @example
     * // Delete one LogrosUsuario
     * const LogrosUsuario = await prisma.logrosUsuario.delete({
     *   where: {
     *     // ... filter to delete one LogrosUsuario
     *   }
     * })
     * 
     */
    delete<T extends LogrosUsuarioDeleteArgs>(args: SelectSubset<T, LogrosUsuarioDeleteArgs<ExtArgs>>): Prisma__LogrosUsuarioClient<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogrosUsuario.
     * @param {LogrosUsuarioUpdateArgs} args - Arguments to update one LogrosUsuario.
     * @example
     * // Update one LogrosUsuario
     * const logrosUsuario = await prisma.logrosUsuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogrosUsuarioUpdateArgs>(args: SelectSubset<T, LogrosUsuarioUpdateArgs<ExtArgs>>): Prisma__LogrosUsuarioClient<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogrosUsuarios.
     * @param {LogrosUsuarioDeleteManyArgs} args - Arguments to filter LogrosUsuarios to delete.
     * @example
     * // Delete a few LogrosUsuarios
     * const { count } = await prisma.logrosUsuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogrosUsuarioDeleteManyArgs>(args?: SelectSubset<T, LogrosUsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogrosUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosUsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogrosUsuarios
     * const logrosUsuario = await prisma.logrosUsuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogrosUsuarioUpdateManyArgs>(args: SelectSubset<T, LogrosUsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogrosUsuarios and returns the data updated in the database.
     * @param {LogrosUsuarioUpdateManyAndReturnArgs} args - Arguments to update many LogrosUsuarios.
     * @example
     * // Update many LogrosUsuarios
     * const logrosUsuario = await prisma.logrosUsuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogrosUsuarios and only return the `ID_Usuario`
     * const logrosUsuarioWithID_UsuarioOnly = await prisma.logrosUsuario.updateManyAndReturn({
     *   select: { ID_Usuario: true },
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
    updateManyAndReturn<T extends LogrosUsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, LogrosUsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogrosUsuario.
     * @param {LogrosUsuarioUpsertArgs} args - Arguments to update or create a LogrosUsuario.
     * @example
     * // Update or create a LogrosUsuario
     * const logrosUsuario = await prisma.logrosUsuario.upsert({
     *   create: {
     *     // ... data to create a LogrosUsuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogrosUsuario we want to update
     *   }
     * })
     */
    upsert<T extends LogrosUsuarioUpsertArgs>(args: SelectSubset<T, LogrosUsuarioUpsertArgs<ExtArgs>>): Prisma__LogrosUsuarioClient<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogrosUsuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosUsuarioCountArgs} args - Arguments to filter LogrosUsuarios to count.
     * @example
     * // Count the number of LogrosUsuarios
     * const count = await prisma.logrosUsuario.count({
     *   where: {
     *     // ... the filter for the LogrosUsuarios we want to count
     *   }
     * })
    **/
    count<T extends LogrosUsuarioCountArgs>(
      args?: Subset<T, LogrosUsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogrosUsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogrosUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosUsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogrosUsuarioAggregateArgs>(args: Subset<T, LogrosUsuarioAggregateArgs>): Prisma.PrismaPromise<GetLogrosUsuarioAggregateType<T>>

    /**
     * Group by LogrosUsuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosUsuarioGroupByArgs} args - Group by arguments.
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
      T extends LogrosUsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogrosUsuarioGroupByArgs['orderBy'] }
        : { orderBy?: LogrosUsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogrosUsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogrosUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogrosUsuario model
   */
  readonly fields: LogrosUsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogrosUsuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogrosUsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logros<T extends LogrosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LogrosDefaultArgs<ExtArgs>>): Prisma__LogrosClient<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LogrosUsuario model
   */
  interface LogrosUsuarioFieldRefs {
    readonly ID_Usuario: FieldRef<"LogrosUsuario", 'Int'>
    readonly ID_Logro: FieldRef<"LogrosUsuario", 'Int'>
    readonly Completado: FieldRef<"LogrosUsuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * LogrosUsuario findUnique
   */
  export type LogrosUsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which LogrosUsuario to fetch.
     */
    where: LogrosUsuarioWhereUniqueInput
  }

  /**
   * LogrosUsuario findUniqueOrThrow
   */
  export type LogrosUsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which LogrosUsuario to fetch.
     */
    where: LogrosUsuarioWhereUniqueInput
  }

  /**
   * LogrosUsuario findFirst
   */
  export type LogrosUsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which LogrosUsuario to fetch.
     */
    where?: LogrosUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogrosUsuarios to fetch.
     */
    orderBy?: LogrosUsuarioOrderByWithRelationInput | LogrosUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogrosUsuarios.
     */
    cursor?: LogrosUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogrosUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogrosUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogrosUsuarios.
     */
    distinct?: LogrosUsuarioScalarFieldEnum | LogrosUsuarioScalarFieldEnum[]
  }

  /**
   * LogrosUsuario findFirstOrThrow
   */
  export type LogrosUsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which LogrosUsuario to fetch.
     */
    where?: LogrosUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogrosUsuarios to fetch.
     */
    orderBy?: LogrosUsuarioOrderByWithRelationInput | LogrosUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogrosUsuarios.
     */
    cursor?: LogrosUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogrosUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogrosUsuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogrosUsuarios.
     */
    distinct?: LogrosUsuarioScalarFieldEnum | LogrosUsuarioScalarFieldEnum[]
  }

  /**
   * LogrosUsuario findMany
   */
  export type LogrosUsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    /**
     * Filter, which LogrosUsuarios to fetch.
     */
    where?: LogrosUsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogrosUsuarios to fetch.
     */
    orderBy?: LogrosUsuarioOrderByWithRelationInput | LogrosUsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogrosUsuarios.
     */
    cursor?: LogrosUsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogrosUsuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogrosUsuarios.
     */
    skip?: number
    distinct?: LogrosUsuarioScalarFieldEnum | LogrosUsuarioScalarFieldEnum[]
  }

  /**
   * LogrosUsuario create
   */
  export type LogrosUsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a LogrosUsuario.
     */
    data: XOR<LogrosUsuarioCreateInput, LogrosUsuarioUncheckedCreateInput>
  }

  /**
   * LogrosUsuario createMany
   */
  export type LogrosUsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogrosUsuarios.
     */
    data: LogrosUsuarioCreateManyInput | LogrosUsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogrosUsuario createManyAndReturn
   */
  export type LogrosUsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many LogrosUsuarios.
     */
    data: LogrosUsuarioCreateManyInput | LogrosUsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogrosUsuario update
   */
  export type LogrosUsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a LogrosUsuario.
     */
    data: XOR<LogrosUsuarioUpdateInput, LogrosUsuarioUncheckedUpdateInput>
    /**
     * Choose, which LogrosUsuario to update.
     */
    where: LogrosUsuarioWhereUniqueInput
  }

  /**
   * LogrosUsuario updateMany
   */
  export type LogrosUsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogrosUsuarios.
     */
    data: XOR<LogrosUsuarioUpdateManyMutationInput, LogrosUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which LogrosUsuarios to update
     */
    where?: LogrosUsuarioWhereInput
    /**
     * Limit how many LogrosUsuarios to update.
     */
    limit?: number
  }

  /**
   * LogrosUsuario updateManyAndReturn
   */
  export type LogrosUsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * The data used to update LogrosUsuarios.
     */
    data: XOR<LogrosUsuarioUpdateManyMutationInput, LogrosUsuarioUncheckedUpdateManyInput>
    /**
     * Filter which LogrosUsuarios to update
     */
    where?: LogrosUsuarioWhereInput
    /**
     * Limit how many LogrosUsuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogrosUsuario upsert
   */
  export type LogrosUsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the LogrosUsuario to update in case it exists.
     */
    where: LogrosUsuarioWhereUniqueInput
    /**
     * In case the LogrosUsuario found by the `where` argument doesn't exist, create a new LogrosUsuario with this data.
     */
    create: XOR<LogrosUsuarioCreateInput, LogrosUsuarioUncheckedCreateInput>
    /**
     * In case the LogrosUsuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogrosUsuarioUpdateInput, LogrosUsuarioUncheckedUpdateInput>
  }

  /**
   * LogrosUsuario delete
   */
  export type LogrosUsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    /**
     * Filter which LogrosUsuario to delete.
     */
    where: LogrosUsuarioWhereUniqueInput
  }

  /**
   * LogrosUsuario deleteMany
   */
  export type LogrosUsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogrosUsuarios to delete
     */
    where?: LogrosUsuarioWhereInput
    /**
     * Limit how many LogrosUsuarios to delete.
     */
    limit?: number
  }

  /**
   * LogrosUsuario without action
   */
  export type LogrosUsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Logros
   */

  export type AggregateLogros = {
    _count: LogrosCountAggregateOutputType | null
    _avg: LogrosAvgAggregateOutputType | null
    _sum: LogrosSumAggregateOutputType | null
    _min: LogrosMinAggregateOutputType | null
    _max: LogrosMaxAggregateOutputType | null
  }

  export type LogrosAvgAggregateOutputType = {
    ID_Logro: number | null
    Puntaje: number | null
  }

  export type LogrosSumAggregateOutputType = {
    ID_Logro: number | null
    Puntaje: number | null
  }

  export type LogrosMinAggregateOutputType = {
    ID_Logro: number | null
    Nombre: string | null
    descripcion: string | null
    Puntaje: number | null
  }

  export type LogrosMaxAggregateOutputType = {
    ID_Logro: number | null
    Nombre: string | null
    descripcion: string | null
    Puntaje: number | null
  }

  export type LogrosCountAggregateOutputType = {
    ID_Logro: number
    Nombre: number
    descripcion: number
    Puntaje: number
    _all: number
  }


  export type LogrosAvgAggregateInputType = {
    ID_Logro?: true
    Puntaje?: true
  }

  export type LogrosSumAggregateInputType = {
    ID_Logro?: true
    Puntaje?: true
  }

  export type LogrosMinAggregateInputType = {
    ID_Logro?: true
    Nombre?: true
    descripcion?: true
    Puntaje?: true
  }

  export type LogrosMaxAggregateInputType = {
    ID_Logro?: true
    Nombre?: true
    descripcion?: true
    Puntaje?: true
  }

  export type LogrosCountAggregateInputType = {
    ID_Logro?: true
    Nombre?: true
    descripcion?: true
    Puntaje?: true
    _all?: true
  }

  export type LogrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logros to aggregate.
     */
    where?: LogrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logros to fetch.
     */
    orderBy?: LogrosOrderByWithRelationInput | LogrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logros
    **/
    _count?: true | LogrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogrosMaxAggregateInputType
  }

  export type GetLogrosAggregateType<T extends LogrosAggregateArgs> = {
        [P in keyof T & keyof AggregateLogros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogros[P]>
      : GetScalarType<T[P], AggregateLogros[P]>
  }




  export type LogrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogrosWhereInput
    orderBy?: LogrosOrderByWithAggregationInput | LogrosOrderByWithAggregationInput[]
    by: LogrosScalarFieldEnum[] | LogrosScalarFieldEnum
    having?: LogrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogrosCountAggregateInputType | true
    _avg?: LogrosAvgAggregateInputType
    _sum?: LogrosSumAggregateInputType
    _min?: LogrosMinAggregateInputType
    _max?: LogrosMaxAggregateInputType
  }

  export type LogrosGroupByOutputType = {
    ID_Logro: number
    Nombre: string
    descripcion: string
    Puntaje: number
    _count: LogrosCountAggregateOutputType | null
    _avg: LogrosAvgAggregateOutputType | null
    _sum: LogrosSumAggregateOutputType | null
    _min: LogrosMinAggregateOutputType | null
    _max: LogrosMaxAggregateOutputType | null
  }

  type GetLogrosGroupByPayload<T extends LogrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogrosGroupByOutputType[P]>
            : GetScalarType<T[P], LogrosGroupByOutputType[P]>
        }
      >
    >


  export type LogrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Logro?: boolean
    Nombre?: boolean
    descripcion?: boolean
    Puntaje?: boolean
    usuariologros?: boolean | Logros$usuariologrosArgs<ExtArgs>
    _count?: boolean | LogrosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logros"]>

  export type LogrosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Logro?: boolean
    Nombre?: boolean
    descripcion?: boolean
    Puntaje?: boolean
  }, ExtArgs["result"]["logros"]>

  export type LogrosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Logro?: boolean
    Nombre?: boolean
    descripcion?: boolean
    Puntaje?: boolean
  }, ExtArgs["result"]["logros"]>

  export type LogrosSelectScalar = {
    ID_Logro?: boolean
    Nombre?: boolean
    descripcion?: boolean
    Puntaje?: boolean
  }

  export type LogrosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Logro" | "Nombre" | "descripcion" | "Puntaje", ExtArgs["result"]["logros"]>
  export type LogrosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuariologros?: boolean | Logros$usuariologrosArgs<ExtArgs>
    _count?: boolean | LogrosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LogrosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LogrosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LogrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Logros"
    objects: {
      usuariologros: Prisma.$LogrosUsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Logro: number
      Nombre: string
      descripcion: string
      Puntaje: number
    }, ExtArgs["result"]["logros"]>
    composites: {}
  }

  type LogrosGetPayload<S extends boolean | null | undefined | LogrosDefaultArgs> = $Result.GetResult<Prisma.$LogrosPayload, S>

  type LogrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogrosCountAggregateInputType | true
    }

  export interface LogrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Logros'], meta: { name: 'Logros' } }
    /**
     * Find zero or one Logros that matches the filter.
     * @param {LogrosFindUniqueArgs} args - Arguments to find a Logros
     * @example
     * // Get one Logros
     * const logros = await prisma.logros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogrosFindUniqueArgs>(args: SelectSubset<T, LogrosFindUniqueArgs<ExtArgs>>): Prisma__LogrosClient<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogrosFindUniqueOrThrowArgs} args - Arguments to find a Logros
     * @example
     * // Get one Logros
     * const logros = await prisma.logros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogrosFindUniqueOrThrowArgs>(args: SelectSubset<T, LogrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogrosClient<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosFindFirstArgs} args - Arguments to find a Logros
     * @example
     * // Get one Logros
     * const logros = await prisma.logros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogrosFindFirstArgs>(args?: SelectSubset<T, LogrosFindFirstArgs<ExtArgs>>): Prisma__LogrosClient<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosFindFirstOrThrowArgs} args - Arguments to find a Logros
     * @example
     * // Get one Logros
     * const logros = await prisma.logros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogrosFindFirstOrThrowArgs>(args?: SelectSubset<T, LogrosFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogrosClient<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logros
     * const logros = await prisma.logros.findMany()
     * 
     * // Get first 10 Logros
     * const logros = await prisma.logros.findMany({ take: 10 })
     * 
     * // Only select the `ID_Logro`
     * const logrosWithID_LogroOnly = await prisma.logros.findMany({ select: { ID_Logro: true } })
     * 
     */
    findMany<T extends LogrosFindManyArgs>(args?: SelectSubset<T, LogrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logros.
     * @param {LogrosCreateArgs} args - Arguments to create a Logros.
     * @example
     * // Create one Logros
     * const Logros = await prisma.logros.create({
     *   data: {
     *     // ... data to create a Logros
     *   }
     * })
     * 
     */
    create<T extends LogrosCreateArgs>(args: SelectSubset<T, LogrosCreateArgs<ExtArgs>>): Prisma__LogrosClient<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logros.
     * @param {LogrosCreateManyArgs} args - Arguments to create many Logros.
     * @example
     * // Create many Logros
     * const logros = await prisma.logros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogrosCreateManyArgs>(args?: SelectSubset<T, LogrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logros and returns the data saved in the database.
     * @param {LogrosCreateManyAndReturnArgs} args - Arguments to create many Logros.
     * @example
     * // Create many Logros
     * const logros = await prisma.logros.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logros and only return the `ID_Logro`
     * const logrosWithID_LogroOnly = await prisma.logros.createManyAndReturn({
     *   select: { ID_Logro: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogrosCreateManyAndReturnArgs>(args?: SelectSubset<T, LogrosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logros.
     * @param {LogrosDeleteArgs} args - Arguments to delete one Logros.
     * @example
     * // Delete one Logros
     * const Logros = await prisma.logros.delete({
     *   where: {
     *     // ... filter to delete one Logros
     *   }
     * })
     * 
     */
    delete<T extends LogrosDeleteArgs>(args: SelectSubset<T, LogrosDeleteArgs<ExtArgs>>): Prisma__LogrosClient<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logros.
     * @param {LogrosUpdateArgs} args - Arguments to update one Logros.
     * @example
     * // Update one Logros
     * const logros = await prisma.logros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogrosUpdateArgs>(args: SelectSubset<T, LogrosUpdateArgs<ExtArgs>>): Prisma__LogrosClient<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logros.
     * @param {LogrosDeleteManyArgs} args - Arguments to filter Logros to delete.
     * @example
     * // Delete a few Logros
     * const { count } = await prisma.logros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogrosDeleteManyArgs>(args?: SelectSubset<T, LogrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logros
     * const logros = await prisma.logros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogrosUpdateManyArgs>(args: SelectSubset<T, LogrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logros and returns the data updated in the database.
     * @param {LogrosUpdateManyAndReturnArgs} args - Arguments to update many Logros.
     * @example
     * // Update many Logros
     * const logros = await prisma.logros.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logros and only return the `ID_Logro`
     * const logrosWithID_LogroOnly = await prisma.logros.updateManyAndReturn({
     *   select: { ID_Logro: true },
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
    updateManyAndReturn<T extends LogrosUpdateManyAndReturnArgs>(args: SelectSubset<T, LogrosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logros.
     * @param {LogrosUpsertArgs} args - Arguments to update or create a Logros.
     * @example
     * // Update or create a Logros
     * const logros = await prisma.logros.upsert({
     *   create: {
     *     // ... data to create a Logros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logros we want to update
     *   }
     * })
     */
    upsert<T extends LogrosUpsertArgs>(args: SelectSubset<T, LogrosUpsertArgs<ExtArgs>>): Prisma__LogrosClient<$Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosCountArgs} args - Arguments to filter Logros to count.
     * @example
     * // Count the number of Logros
     * const count = await prisma.logros.count({
     *   where: {
     *     // ... the filter for the Logros we want to count
     *   }
     * })
    **/
    count<T extends LogrosCountArgs>(
      args?: Subset<T, LogrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogrosAggregateArgs>(args: Subset<T, LogrosAggregateArgs>): Prisma.PrismaPromise<GetLogrosAggregateType<T>>

    /**
     * Group by Logros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogrosGroupByArgs} args - Group by arguments.
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
      T extends LogrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogrosGroupByArgs['orderBy'] }
        : { orderBy?: LogrosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Logros model
   */
  readonly fields: LogrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Logros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuariologros<T extends Logros$usuariologrosArgs<ExtArgs> = {}>(args?: Subset<T, Logros$usuariologrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogrosUsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Logros model
   */
  interface LogrosFieldRefs {
    readonly ID_Logro: FieldRef<"Logros", 'Int'>
    readonly Nombre: FieldRef<"Logros", 'String'>
    readonly descripcion: FieldRef<"Logros", 'String'>
    readonly Puntaje: FieldRef<"Logros", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Logros findUnique
   */
  export type LogrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosInclude<ExtArgs> | null
    /**
     * Filter, which Logros to fetch.
     */
    where: LogrosWhereUniqueInput
  }

  /**
   * Logros findUniqueOrThrow
   */
  export type LogrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosInclude<ExtArgs> | null
    /**
     * Filter, which Logros to fetch.
     */
    where: LogrosWhereUniqueInput
  }

  /**
   * Logros findFirst
   */
  export type LogrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosInclude<ExtArgs> | null
    /**
     * Filter, which Logros to fetch.
     */
    where?: LogrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logros to fetch.
     */
    orderBy?: LogrosOrderByWithRelationInput | LogrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logros.
     */
    cursor?: LogrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logros.
     */
    distinct?: LogrosScalarFieldEnum | LogrosScalarFieldEnum[]
  }

  /**
   * Logros findFirstOrThrow
   */
  export type LogrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosInclude<ExtArgs> | null
    /**
     * Filter, which Logros to fetch.
     */
    where?: LogrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logros to fetch.
     */
    orderBy?: LogrosOrderByWithRelationInput | LogrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logros.
     */
    cursor?: LogrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logros.
     */
    distinct?: LogrosScalarFieldEnum | LogrosScalarFieldEnum[]
  }

  /**
   * Logros findMany
   */
  export type LogrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosInclude<ExtArgs> | null
    /**
     * Filter, which Logros to fetch.
     */
    where?: LogrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logros to fetch.
     */
    orderBy?: LogrosOrderByWithRelationInput | LogrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logros.
     */
    cursor?: LogrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logros.
     */
    skip?: number
    distinct?: LogrosScalarFieldEnum | LogrosScalarFieldEnum[]
  }

  /**
   * Logros create
   */
  export type LogrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosInclude<ExtArgs> | null
    /**
     * The data needed to create a Logros.
     */
    data: XOR<LogrosCreateInput, LogrosUncheckedCreateInput>
  }

  /**
   * Logros createMany
   */
  export type LogrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logros.
     */
    data: LogrosCreateManyInput | LogrosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Logros createManyAndReturn
   */
  export type LogrosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * The data used to create many Logros.
     */
    data: LogrosCreateManyInput | LogrosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Logros update
   */
  export type LogrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosInclude<ExtArgs> | null
    /**
     * The data needed to update a Logros.
     */
    data: XOR<LogrosUpdateInput, LogrosUncheckedUpdateInput>
    /**
     * Choose, which Logros to update.
     */
    where: LogrosWhereUniqueInput
  }

  /**
   * Logros updateMany
   */
  export type LogrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logros.
     */
    data: XOR<LogrosUpdateManyMutationInput, LogrosUncheckedUpdateManyInput>
    /**
     * Filter which Logros to update
     */
    where?: LogrosWhereInput
    /**
     * Limit how many Logros to update.
     */
    limit?: number
  }

  /**
   * Logros updateManyAndReturn
   */
  export type LogrosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * The data used to update Logros.
     */
    data: XOR<LogrosUpdateManyMutationInput, LogrosUncheckedUpdateManyInput>
    /**
     * Filter which Logros to update
     */
    where?: LogrosWhereInput
    /**
     * Limit how many Logros to update.
     */
    limit?: number
  }

  /**
   * Logros upsert
   */
  export type LogrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosInclude<ExtArgs> | null
    /**
     * The filter to search for the Logros to update in case it exists.
     */
    where: LogrosWhereUniqueInput
    /**
     * In case the Logros found by the `where` argument doesn't exist, create a new Logros with this data.
     */
    create: XOR<LogrosCreateInput, LogrosUncheckedCreateInput>
    /**
     * In case the Logros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogrosUpdateInput, LogrosUncheckedUpdateInput>
  }

  /**
   * Logros delete
   */
  export type LogrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosInclude<ExtArgs> | null
    /**
     * Filter which Logros to delete.
     */
    where: LogrosWhereUniqueInput
  }

  /**
   * Logros deleteMany
   */
  export type LogrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logros to delete
     */
    where?: LogrosWhereInput
    /**
     * Limit how many Logros to delete.
     */
    limit?: number
  }

  /**
   * Logros.usuariologros
   */
  export type Logros$usuariologrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogrosUsuario
     */
    select?: LogrosUsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogrosUsuario
     */
    omit?: LogrosUsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosUsuarioInclude<ExtArgs> | null
    where?: LogrosUsuarioWhereInput
    orderBy?: LogrosUsuarioOrderByWithRelationInput | LogrosUsuarioOrderByWithRelationInput[]
    cursor?: LogrosUsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogrosUsuarioScalarFieldEnum | LogrosUsuarioScalarFieldEnum[]
  }

  /**
   * Logros without action
   */
  export type LogrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: LogrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Logros
     */
    omit?: LogrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogrosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    ID: 'ID',
    NombreUsuario: 'NombreUsuario',
    Contraseña: 'Contraseña',
    email: 'email',
    HorasTransmision: 'HorasTransmision',
    Monedas: 'Monedas',
    EnVivo: 'EnVivo',
    ImagenPerfil: 'ImagenPerfil',
    NivelStreams: 'NivelStreams',
    Puntos: 'Puntos',
    fechaCreacion: 'fechaCreacion'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ChatStreamerScalarFieldEnum: {
    ID_Streamer: 'ID_Streamer',
    ID_Viewer: 'ID_Viewer',
    NivelViewer: 'NivelViewer',
    Habilitado: 'Habilitado',
    Viendo: 'Viendo'
  };

  export type ChatStreamerScalarFieldEnum = (typeof ChatStreamerScalarFieldEnum)[keyof typeof ChatStreamerScalarFieldEnum]


  export const SuscripcionScalarFieldEnum: {
    ID_Streamer: 'ID_Streamer',
    ID_Viewer: 'ID_Viewer'
  };

  export type SuscripcionScalarFieldEnum = (typeof SuscripcionScalarFieldEnum)[keyof typeof SuscripcionScalarFieldEnum]


  export const RegaloScalarFieldEnum: {
    ID_Regalo: 'ID_Regalo',
    NombreRegalo: 'NombreRegalo',
    PrecioRegalo: 'PrecioRegalo',
    DescripcionRegalo: 'DescripcionRegalo',
    icono: 'icono',
    ID_Streamer: 'ID_Streamer'
  };

  export type RegaloScalarFieldEnum = (typeof RegaloScalarFieldEnum)[keyof typeof RegaloScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    ID: 'ID',
    Nombre: 'Nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const JuegoScalarFieldEnum: {
    ID_Juego: 'ID_Juego',
    Nombre: 'Nombre',
    Descripcion: 'Descripcion',
    CategoriaID: 'CategoriaID'
  };

  export type JuegoScalarFieldEnum = (typeof JuegoScalarFieldEnum)[keyof typeof JuegoScalarFieldEnum]


  export const JuegosEnVideoScalarFieldEnum: {
    ID_Juego: 'ID_Juego',
    ID_Video: 'ID_Video'
  };

  export type JuegosEnVideoScalarFieldEnum = (typeof JuegosEnVideoScalarFieldEnum)[keyof typeof JuegosEnVideoScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    ID_Video: 'ID_Video',
    Titulo: 'Titulo',
    Url: 'Url',
    Duracion: 'Duracion',
    Estado: 'Estado',
    CategoriaDeVideo: 'CategoriaDeVideo',
    FechaSubida: 'FechaSubida',
    ID_Usuario: 'ID_Usuario'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const LogrosUsuarioScalarFieldEnum: {
    ID_Usuario: 'ID_Usuario',
    ID_Logro: 'ID_Logro',
    Completado: 'Completado'
  };

  export type LogrosUsuarioScalarFieldEnum = (typeof LogrosUsuarioScalarFieldEnum)[keyof typeof LogrosUsuarioScalarFieldEnum]


  export const LogrosScalarFieldEnum: {
    ID_Logro: 'ID_Logro',
    Nombre: 'Nombre',
    descripcion: 'descripcion',
    Puntaje: 'Puntaje'
  };

  export type LogrosScalarFieldEnum = (typeof LogrosScalarFieldEnum)[keyof typeof LogrosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    ID?: IntFilter<"Usuario"> | number
    NombreUsuario?: StringFilter<"Usuario"> | string
    Contraseña?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    HorasTransmision?: IntFilter<"Usuario"> | number
    Monedas?: IntFilter<"Usuario"> | number
    EnVivo?: BoolFilter<"Usuario"> | boolean
    ImagenPerfil?: StringFilter<"Usuario"> | string
    NivelStreams?: IntFilter<"Usuario"> | number
    Puntos?: IntFilter<"Usuario"> | number
    fechaCreacion?: DateTimeFilter<"Usuario"> | Date | string
    regalos?: RegaloListRelationFilter
    videos?: VideoListRelationFilter
    LogrosUsuario?: LogrosUsuarioListRelationFilter
    streamerSuscripciones?: SuscripcionListRelationFilter
    viewerSuscripciones?: SuscripcionListRelationFilter
    streamerCHat?: ChatStreamerListRelationFilter
    viewerEnChat?: ChatStreamerListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    ID?: SortOrder
    NombreUsuario?: SortOrder
    Contraseña?: SortOrder
    email?: SortOrder
    HorasTransmision?: SortOrder
    Monedas?: SortOrder
    EnVivo?: SortOrder
    ImagenPerfil?: SortOrder
    NivelStreams?: SortOrder
    Puntos?: SortOrder
    fechaCreacion?: SortOrder
    regalos?: RegaloOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    LogrosUsuario?: LogrosUsuarioOrderByRelationAggregateInput
    streamerSuscripciones?: SuscripcionOrderByRelationAggregateInput
    viewerSuscripciones?: SuscripcionOrderByRelationAggregateInput
    streamerCHat?: ChatStreamerOrderByRelationAggregateInput
    viewerEnChat?: ChatStreamerOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    NombreUsuario?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    Contraseña?: StringFilter<"Usuario"> | string
    HorasTransmision?: IntFilter<"Usuario"> | number
    Monedas?: IntFilter<"Usuario"> | number
    EnVivo?: BoolFilter<"Usuario"> | boolean
    ImagenPerfil?: StringFilter<"Usuario"> | string
    NivelStreams?: IntFilter<"Usuario"> | number
    Puntos?: IntFilter<"Usuario"> | number
    fechaCreacion?: DateTimeFilter<"Usuario"> | Date | string
    regalos?: RegaloListRelationFilter
    videos?: VideoListRelationFilter
    LogrosUsuario?: LogrosUsuarioListRelationFilter
    streamerSuscripciones?: SuscripcionListRelationFilter
    viewerSuscripciones?: SuscripcionListRelationFilter
    streamerCHat?: ChatStreamerListRelationFilter
    viewerEnChat?: ChatStreamerListRelationFilter
  }, "ID" | "NombreUsuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    ID?: SortOrder
    NombreUsuario?: SortOrder
    Contraseña?: SortOrder
    email?: SortOrder
    HorasTransmision?: SortOrder
    Monedas?: SortOrder
    EnVivo?: SortOrder
    ImagenPerfil?: SortOrder
    NivelStreams?: SortOrder
    Puntos?: SortOrder
    fechaCreacion?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Usuario"> | number
    NombreUsuario?: StringWithAggregatesFilter<"Usuario"> | string
    Contraseña?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    HorasTransmision?: IntWithAggregatesFilter<"Usuario"> | number
    Monedas?: IntWithAggregatesFilter<"Usuario"> | number
    EnVivo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    ImagenPerfil?: StringWithAggregatesFilter<"Usuario"> | string
    NivelStreams?: IntWithAggregatesFilter<"Usuario"> | number
    Puntos?: IntWithAggregatesFilter<"Usuario"> | number
    fechaCreacion?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ChatStreamerWhereInput = {
    AND?: ChatStreamerWhereInput | ChatStreamerWhereInput[]
    OR?: ChatStreamerWhereInput[]
    NOT?: ChatStreamerWhereInput | ChatStreamerWhereInput[]
    ID_Streamer?: IntFilter<"ChatStreamer"> | number
    ID_Viewer?: IntFilter<"ChatStreamer"> | number
    NivelViewer?: IntFilter<"ChatStreamer"> | number
    Habilitado?: BoolFilter<"ChatStreamer"> | boolean
    Viendo?: BoolFilter<"ChatStreamer"> | boolean
    streamerC?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viewerC?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ChatStreamerOrderByWithRelationInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
    NivelViewer?: SortOrder
    Habilitado?: SortOrder
    Viendo?: SortOrder
    streamerC?: UsuarioOrderByWithRelationInput
    viewerC?: UsuarioOrderByWithRelationInput
  }

  export type ChatStreamerWhereUniqueInput = Prisma.AtLeast<{
    ID_Streamer_ID_Viewer?: ChatStreamerID_StreamerID_ViewerCompoundUniqueInput
    AND?: ChatStreamerWhereInput | ChatStreamerWhereInput[]
    OR?: ChatStreamerWhereInput[]
    NOT?: ChatStreamerWhereInput | ChatStreamerWhereInput[]
    ID_Streamer?: IntFilter<"ChatStreamer"> | number
    ID_Viewer?: IntFilter<"ChatStreamer"> | number
    NivelViewer?: IntFilter<"ChatStreamer"> | number
    Habilitado?: BoolFilter<"ChatStreamer"> | boolean
    Viendo?: BoolFilter<"ChatStreamer"> | boolean
    streamerC?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viewerC?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "ID_Streamer_ID_Viewer">

  export type ChatStreamerOrderByWithAggregationInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
    NivelViewer?: SortOrder
    Habilitado?: SortOrder
    Viendo?: SortOrder
    _count?: ChatStreamerCountOrderByAggregateInput
    _avg?: ChatStreamerAvgOrderByAggregateInput
    _max?: ChatStreamerMaxOrderByAggregateInput
    _min?: ChatStreamerMinOrderByAggregateInput
    _sum?: ChatStreamerSumOrderByAggregateInput
  }

  export type ChatStreamerScalarWhereWithAggregatesInput = {
    AND?: ChatStreamerScalarWhereWithAggregatesInput | ChatStreamerScalarWhereWithAggregatesInput[]
    OR?: ChatStreamerScalarWhereWithAggregatesInput[]
    NOT?: ChatStreamerScalarWhereWithAggregatesInput | ChatStreamerScalarWhereWithAggregatesInput[]
    ID_Streamer?: IntWithAggregatesFilter<"ChatStreamer"> | number
    ID_Viewer?: IntWithAggregatesFilter<"ChatStreamer"> | number
    NivelViewer?: IntWithAggregatesFilter<"ChatStreamer"> | number
    Habilitado?: BoolWithAggregatesFilter<"ChatStreamer"> | boolean
    Viendo?: BoolWithAggregatesFilter<"ChatStreamer"> | boolean
  }

  export type SuscripcionWhereInput = {
    AND?: SuscripcionWhereInput | SuscripcionWhereInput[]
    OR?: SuscripcionWhereInput[]
    NOT?: SuscripcionWhereInput | SuscripcionWhereInput[]
    ID_Streamer?: IntFilter<"Suscripcion"> | number
    ID_Viewer?: IntFilter<"Suscripcion"> | number
    streamer?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viewer?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type SuscripcionOrderByWithRelationInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
    streamer?: UsuarioOrderByWithRelationInput
    viewer?: UsuarioOrderByWithRelationInput
  }

  export type SuscripcionWhereUniqueInput = Prisma.AtLeast<{
    ID_Streamer_ID_Viewer?: SuscripcionID_StreamerID_ViewerCompoundUniqueInput
    AND?: SuscripcionWhereInput | SuscripcionWhereInput[]
    OR?: SuscripcionWhereInput[]
    NOT?: SuscripcionWhereInput | SuscripcionWhereInput[]
    ID_Streamer?: IntFilter<"Suscripcion"> | number
    ID_Viewer?: IntFilter<"Suscripcion"> | number
    streamer?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    viewer?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "ID_Streamer_ID_Viewer">

  export type SuscripcionOrderByWithAggregationInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
    _count?: SuscripcionCountOrderByAggregateInput
    _avg?: SuscripcionAvgOrderByAggregateInput
    _max?: SuscripcionMaxOrderByAggregateInput
    _min?: SuscripcionMinOrderByAggregateInput
    _sum?: SuscripcionSumOrderByAggregateInput
  }

  export type SuscripcionScalarWhereWithAggregatesInput = {
    AND?: SuscripcionScalarWhereWithAggregatesInput | SuscripcionScalarWhereWithAggregatesInput[]
    OR?: SuscripcionScalarWhereWithAggregatesInput[]
    NOT?: SuscripcionScalarWhereWithAggregatesInput | SuscripcionScalarWhereWithAggregatesInput[]
    ID_Streamer?: IntWithAggregatesFilter<"Suscripcion"> | number
    ID_Viewer?: IntWithAggregatesFilter<"Suscripcion"> | number
  }

  export type RegaloWhereInput = {
    AND?: RegaloWhereInput | RegaloWhereInput[]
    OR?: RegaloWhereInput[]
    NOT?: RegaloWhereInput | RegaloWhereInput[]
    ID_Regalo?: IntFilter<"Regalo"> | number
    NombreRegalo?: StringFilter<"Regalo"> | string
    PrecioRegalo?: IntFilter<"Regalo"> | number
    DescripcionRegalo?: StringFilter<"Regalo"> | string
    icono?: StringFilter<"Regalo"> | string
    ID_Streamer?: IntFilter<"Regalo"> | number
    streamer?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type RegaloOrderByWithRelationInput = {
    ID_Regalo?: SortOrder
    NombreRegalo?: SortOrder
    PrecioRegalo?: SortOrder
    DescripcionRegalo?: SortOrder
    icono?: SortOrder
    ID_Streamer?: SortOrder
    streamer?: UsuarioOrderByWithRelationInput
  }

  export type RegaloWhereUniqueInput = Prisma.AtLeast<{
    ID_Regalo?: number
    AND?: RegaloWhereInput | RegaloWhereInput[]
    OR?: RegaloWhereInput[]
    NOT?: RegaloWhereInput | RegaloWhereInput[]
    NombreRegalo?: StringFilter<"Regalo"> | string
    PrecioRegalo?: IntFilter<"Regalo"> | number
    DescripcionRegalo?: StringFilter<"Regalo"> | string
    icono?: StringFilter<"Regalo"> | string
    ID_Streamer?: IntFilter<"Regalo"> | number
    streamer?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "ID_Regalo">

  export type RegaloOrderByWithAggregationInput = {
    ID_Regalo?: SortOrder
    NombreRegalo?: SortOrder
    PrecioRegalo?: SortOrder
    DescripcionRegalo?: SortOrder
    icono?: SortOrder
    ID_Streamer?: SortOrder
    _count?: RegaloCountOrderByAggregateInput
    _avg?: RegaloAvgOrderByAggregateInput
    _max?: RegaloMaxOrderByAggregateInput
    _min?: RegaloMinOrderByAggregateInput
    _sum?: RegaloSumOrderByAggregateInput
  }

  export type RegaloScalarWhereWithAggregatesInput = {
    AND?: RegaloScalarWhereWithAggregatesInput | RegaloScalarWhereWithAggregatesInput[]
    OR?: RegaloScalarWhereWithAggregatesInput[]
    NOT?: RegaloScalarWhereWithAggregatesInput | RegaloScalarWhereWithAggregatesInput[]
    ID_Regalo?: IntWithAggregatesFilter<"Regalo"> | number
    NombreRegalo?: StringWithAggregatesFilter<"Regalo"> | string
    PrecioRegalo?: IntWithAggregatesFilter<"Regalo"> | number
    DescripcionRegalo?: StringWithAggregatesFilter<"Regalo"> | string
    icono?: StringWithAggregatesFilter<"Regalo"> | string
    ID_Streamer?: IntWithAggregatesFilter<"Regalo"> | number
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    ID?: IntFilter<"Categoria"> | number
    Nombre?: StringFilter<"Categoria"> | string
    juegos?: JuegoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    ID?: SortOrder
    Nombre?: SortOrder
    juegos?: JuegoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    Nombre?: StringFilter<"Categoria"> | string
    juegos?: JuegoListRelationFilter
  }, "ID">

  export type CategoriaOrderByWithAggregationInput = {
    ID?: SortOrder
    Nombre?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Categoria"> | number
    Nombre?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type JuegoWhereInput = {
    AND?: JuegoWhereInput | JuegoWhereInput[]
    OR?: JuegoWhereInput[]
    NOT?: JuegoWhereInput | JuegoWhereInput[]
    ID_Juego?: IntFilter<"Juego"> | number
    Nombre?: StringFilter<"Juego"> | string
    Descripcion?: StringNullableFilter<"Juego"> | string | null
    CategoriaID?: IntFilter<"Juego"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    Jogos?: JuegosEnVideoListRelationFilter
  }

  export type JuegoOrderByWithRelationInput = {
    ID_Juego?: SortOrder
    Nombre?: SortOrder
    Descripcion?: SortOrderInput | SortOrder
    CategoriaID?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    Jogos?: JuegosEnVideoOrderByRelationAggregateInput
  }

  export type JuegoWhereUniqueInput = Prisma.AtLeast<{
    ID_Juego?: number
    AND?: JuegoWhereInput | JuegoWhereInput[]
    OR?: JuegoWhereInput[]
    NOT?: JuegoWhereInput | JuegoWhereInput[]
    Nombre?: StringFilter<"Juego"> | string
    Descripcion?: StringNullableFilter<"Juego"> | string | null
    CategoriaID?: IntFilter<"Juego"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    Jogos?: JuegosEnVideoListRelationFilter
  }, "ID_Juego">

  export type JuegoOrderByWithAggregationInput = {
    ID_Juego?: SortOrder
    Nombre?: SortOrder
    Descripcion?: SortOrderInput | SortOrder
    CategoriaID?: SortOrder
    _count?: JuegoCountOrderByAggregateInput
    _avg?: JuegoAvgOrderByAggregateInput
    _max?: JuegoMaxOrderByAggregateInput
    _min?: JuegoMinOrderByAggregateInput
    _sum?: JuegoSumOrderByAggregateInput
  }

  export type JuegoScalarWhereWithAggregatesInput = {
    AND?: JuegoScalarWhereWithAggregatesInput | JuegoScalarWhereWithAggregatesInput[]
    OR?: JuegoScalarWhereWithAggregatesInput[]
    NOT?: JuegoScalarWhereWithAggregatesInput | JuegoScalarWhereWithAggregatesInput[]
    ID_Juego?: IntWithAggregatesFilter<"Juego"> | number
    Nombre?: StringWithAggregatesFilter<"Juego"> | string
    Descripcion?: StringNullableWithAggregatesFilter<"Juego"> | string | null
    CategoriaID?: IntWithAggregatesFilter<"Juego"> | number
  }

  export type JuegosEnVideoWhereInput = {
    AND?: JuegosEnVideoWhereInput | JuegosEnVideoWhereInput[]
    OR?: JuegosEnVideoWhereInput[]
    NOT?: JuegosEnVideoWhereInput | JuegosEnVideoWhereInput[]
    ID_Juego?: IntFilter<"JuegosEnVideo"> | number
    ID_Video?: IntFilter<"JuegosEnVideo"> | number
    game?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
    Vedeo?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type JuegosEnVideoOrderByWithRelationInput = {
    ID_Juego?: SortOrder
    ID_Video?: SortOrder
    game?: JuegoOrderByWithRelationInput
    Vedeo?: VideoOrderByWithRelationInput
  }

  export type JuegosEnVideoWhereUniqueInput = Prisma.AtLeast<{
    ID_Juego_ID_Video?: JuegosEnVideoID_JuegoID_VideoCompoundUniqueInput
    AND?: JuegosEnVideoWhereInput | JuegosEnVideoWhereInput[]
    OR?: JuegosEnVideoWhereInput[]
    NOT?: JuegosEnVideoWhereInput | JuegosEnVideoWhereInput[]
    ID_Juego?: IntFilter<"JuegosEnVideo"> | number
    ID_Video?: IntFilter<"JuegosEnVideo"> | number
    game?: XOR<JuegoScalarRelationFilter, JuegoWhereInput>
    Vedeo?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "ID_Juego_ID_Video">

  export type JuegosEnVideoOrderByWithAggregationInput = {
    ID_Juego?: SortOrder
    ID_Video?: SortOrder
    _count?: JuegosEnVideoCountOrderByAggregateInput
    _avg?: JuegosEnVideoAvgOrderByAggregateInput
    _max?: JuegosEnVideoMaxOrderByAggregateInput
    _min?: JuegosEnVideoMinOrderByAggregateInput
    _sum?: JuegosEnVideoSumOrderByAggregateInput
  }

  export type JuegosEnVideoScalarWhereWithAggregatesInput = {
    AND?: JuegosEnVideoScalarWhereWithAggregatesInput | JuegosEnVideoScalarWhereWithAggregatesInput[]
    OR?: JuegosEnVideoScalarWhereWithAggregatesInput[]
    NOT?: JuegosEnVideoScalarWhereWithAggregatesInput | JuegosEnVideoScalarWhereWithAggregatesInput[]
    ID_Juego?: IntWithAggregatesFilter<"JuegosEnVideo"> | number
    ID_Video?: IntWithAggregatesFilter<"JuegosEnVideo"> | number
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    ID_Video?: IntFilter<"Video"> | number
    Titulo?: StringFilter<"Video"> | string
    Url?: StringFilter<"Video"> | string
    Duracion?: IntNullableFilter<"Video"> | number | null
    Estado?: BoolFilter<"Video"> | boolean
    CategoriaDeVideo?: StringFilter<"Video"> | string
    FechaSubida?: DateTimeFilter<"Video"> | Date | string
    ID_Usuario?: IntFilter<"Video"> | number
    V_DEOs?: JuegosEnVideoListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    ID_Video?: SortOrder
    Titulo?: SortOrder
    Url?: SortOrder
    Duracion?: SortOrderInput | SortOrder
    Estado?: SortOrder
    CategoriaDeVideo?: SortOrder
    FechaSubida?: SortOrder
    ID_Usuario?: SortOrder
    V_DEOs?: JuegosEnVideoOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    ID_Video?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    Titulo?: StringFilter<"Video"> | string
    Url?: StringFilter<"Video"> | string
    Duracion?: IntNullableFilter<"Video"> | number | null
    Estado?: BoolFilter<"Video"> | boolean
    CategoriaDeVideo?: StringFilter<"Video"> | string
    FechaSubida?: DateTimeFilter<"Video"> | Date | string
    ID_Usuario?: IntFilter<"Video"> | number
    V_DEOs?: JuegosEnVideoListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "ID_Video">

  export type VideoOrderByWithAggregationInput = {
    ID_Video?: SortOrder
    Titulo?: SortOrder
    Url?: SortOrder
    Duracion?: SortOrderInput | SortOrder
    Estado?: SortOrder
    CategoriaDeVideo?: SortOrder
    FechaSubida?: SortOrder
    ID_Usuario?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    ID_Video?: IntWithAggregatesFilter<"Video"> | number
    Titulo?: StringWithAggregatesFilter<"Video"> | string
    Url?: StringWithAggregatesFilter<"Video"> | string
    Duracion?: IntNullableWithAggregatesFilter<"Video"> | number | null
    Estado?: BoolWithAggregatesFilter<"Video"> | boolean
    CategoriaDeVideo?: StringWithAggregatesFilter<"Video"> | string
    FechaSubida?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    ID_Usuario?: IntWithAggregatesFilter<"Video"> | number
  }

  export type LogrosUsuarioWhereInput = {
    AND?: LogrosUsuarioWhereInput | LogrosUsuarioWhereInput[]
    OR?: LogrosUsuarioWhereInput[]
    NOT?: LogrosUsuarioWhereInput | LogrosUsuarioWhereInput[]
    ID_Usuario?: IntFilter<"LogrosUsuario"> | number
    ID_Logro?: IntFilter<"LogrosUsuario"> | number
    Completado?: BoolFilter<"LogrosUsuario"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    logros?: XOR<LogrosScalarRelationFilter, LogrosWhereInput>
  }

  export type LogrosUsuarioOrderByWithRelationInput = {
    ID_Usuario?: SortOrder
    ID_Logro?: SortOrder
    Completado?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    logros?: LogrosOrderByWithRelationInput
  }

  export type LogrosUsuarioWhereUniqueInput = Prisma.AtLeast<{
    ID_Usuario_ID_Logro?: LogrosUsuarioID_UsuarioID_LogroCompoundUniqueInput
    AND?: LogrosUsuarioWhereInput | LogrosUsuarioWhereInput[]
    OR?: LogrosUsuarioWhereInput[]
    NOT?: LogrosUsuarioWhereInput | LogrosUsuarioWhereInput[]
    ID_Usuario?: IntFilter<"LogrosUsuario"> | number
    ID_Logro?: IntFilter<"LogrosUsuario"> | number
    Completado?: BoolFilter<"LogrosUsuario"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    logros?: XOR<LogrosScalarRelationFilter, LogrosWhereInput>
  }, "ID_Usuario_ID_Logro">

  export type LogrosUsuarioOrderByWithAggregationInput = {
    ID_Usuario?: SortOrder
    ID_Logro?: SortOrder
    Completado?: SortOrder
    _count?: LogrosUsuarioCountOrderByAggregateInput
    _avg?: LogrosUsuarioAvgOrderByAggregateInput
    _max?: LogrosUsuarioMaxOrderByAggregateInput
    _min?: LogrosUsuarioMinOrderByAggregateInput
    _sum?: LogrosUsuarioSumOrderByAggregateInput
  }

  export type LogrosUsuarioScalarWhereWithAggregatesInput = {
    AND?: LogrosUsuarioScalarWhereWithAggregatesInput | LogrosUsuarioScalarWhereWithAggregatesInput[]
    OR?: LogrosUsuarioScalarWhereWithAggregatesInput[]
    NOT?: LogrosUsuarioScalarWhereWithAggregatesInput | LogrosUsuarioScalarWhereWithAggregatesInput[]
    ID_Usuario?: IntWithAggregatesFilter<"LogrosUsuario"> | number
    ID_Logro?: IntWithAggregatesFilter<"LogrosUsuario"> | number
    Completado?: BoolWithAggregatesFilter<"LogrosUsuario"> | boolean
  }

  export type LogrosWhereInput = {
    AND?: LogrosWhereInput | LogrosWhereInput[]
    OR?: LogrosWhereInput[]
    NOT?: LogrosWhereInput | LogrosWhereInput[]
    ID_Logro?: IntFilter<"Logros"> | number
    Nombre?: StringFilter<"Logros"> | string
    descripcion?: StringFilter<"Logros"> | string
    Puntaje?: IntFilter<"Logros"> | number
    usuariologros?: LogrosUsuarioListRelationFilter
  }

  export type LogrosOrderByWithRelationInput = {
    ID_Logro?: SortOrder
    Nombre?: SortOrder
    descripcion?: SortOrder
    Puntaje?: SortOrder
    usuariologros?: LogrosUsuarioOrderByRelationAggregateInput
  }

  export type LogrosWhereUniqueInput = Prisma.AtLeast<{
    ID_Logro?: number
    Nombre?: string
    AND?: LogrosWhereInput | LogrosWhereInput[]
    OR?: LogrosWhereInput[]
    NOT?: LogrosWhereInput | LogrosWhereInput[]
    descripcion?: StringFilter<"Logros"> | string
    Puntaje?: IntFilter<"Logros"> | number
    usuariologros?: LogrosUsuarioListRelationFilter
  }, "ID_Logro" | "Nombre">

  export type LogrosOrderByWithAggregationInput = {
    ID_Logro?: SortOrder
    Nombre?: SortOrder
    descripcion?: SortOrder
    Puntaje?: SortOrder
    _count?: LogrosCountOrderByAggregateInput
    _avg?: LogrosAvgOrderByAggregateInput
    _max?: LogrosMaxOrderByAggregateInput
    _min?: LogrosMinOrderByAggregateInput
    _sum?: LogrosSumOrderByAggregateInput
  }

  export type LogrosScalarWhereWithAggregatesInput = {
    AND?: LogrosScalarWhereWithAggregatesInput | LogrosScalarWhereWithAggregatesInput[]
    OR?: LogrosScalarWhereWithAggregatesInput[]
    NOT?: LogrosScalarWhereWithAggregatesInput | LogrosScalarWhereWithAggregatesInput[]
    ID_Logro?: IntWithAggregatesFilter<"Logros"> | number
    Nombre?: StringWithAggregatesFilter<"Logros"> | string
    descripcion?: StringWithAggregatesFilter<"Logros"> | string
    Puntaje?: IntWithAggregatesFilter<"Logros"> | number
  }

  export type UsuarioCreateInput = {
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloCreateNestedManyWithoutStreamerInput
    videos?: VideoCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioUncheckedCreateInput = {
    ID?: number
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloUncheckedCreateNestedManyWithoutStreamerInput
    videos?: VideoUncheckedCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerUncheckedCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerUncheckedCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioUpdateInput = {
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUpdateManyWithoutStreamerNestedInput
    videos?: VideoUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUncheckedUpdateManyWithoutStreamerNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUncheckedUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUncheckedUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioCreateManyInput = {
    ID?: number
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatStreamerCreateInput = {
    NivelViewer?: number
    Habilitado?: boolean
    Viendo: boolean
    streamerC: UsuarioCreateNestedOneWithoutStreamerCHatInput
    viewerC: UsuarioCreateNestedOneWithoutViewerEnChatInput
  }

  export type ChatStreamerUncheckedCreateInput = {
    ID_Streamer: number
    ID_Viewer: number
    NivelViewer?: number
    Habilitado?: boolean
    Viendo: boolean
  }

  export type ChatStreamerUpdateInput = {
    NivelViewer?: IntFieldUpdateOperationsInput | number
    Habilitado?: BoolFieldUpdateOperationsInput | boolean
    Viendo?: BoolFieldUpdateOperationsInput | boolean
    streamerC?: UsuarioUpdateOneRequiredWithoutStreamerCHatNestedInput
    viewerC?: UsuarioUpdateOneRequiredWithoutViewerEnChatNestedInput
  }

  export type ChatStreamerUncheckedUpdateInput = {
    ID_Streamer?: IntFieldUpdateOperationsInput | number
    ID_Viewer?: IntFieldUpdateOperationsInput | number
    NivelViewer?: IntFieldUpdateOperationsInput | number
    Habilitado?: BoolFieldUpdateOperationsInput | boolean
    Viendo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatStreamerCreateManyInput = {
    ID_Streamer: number
    ID_Viewer: number
    NivelViewer?: number
    Habilitado?: boolean
    Viendo: boolean
  }

  export type ChatStreamerUpdateManyMutationInput = {
    NivelViewer?: IntFieldUpdateOperationsInput | number
    Habilitado?: BoolFieldUpdateOperationsInput | boolean
    Viendo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatStreamerUncheckedUpdateManyInput = {
    ID_Streamer?: IntFieldUpdateOperationsInput | number
    ID_Viewer?: IntFieldUpdateOperationsInput | number
    NivelViewer?: IntFieldUpdateOperationsInput | number
    Habilitado?: BoolFieldUpdateOperationsInput | boolean
    Viendo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SuscripcionCreateInput = {
    streamer: UsuarioCreateNestedOneWithoutStreamerSuscripcionesInput
    viewer: UsuarioCreateNestedOneWithoutViewerSuscripcionesInput
  }

  export type SuscripcionUncheckedCreateInput = {
    ID_Streamer: number
    ID_Viewer: number
  }

  export type SuscripcionUpdateInput = {
    streamer?: UsuarioUpdateOneRequiredWithoutStreamerSuscripcionesNestedInput
    viewer?: UsuarioUpdateOneRequiredWithoutViewerSuscripcionesNestedInput
  }

  export type SuscripcionUncheckedUpdateInput = {
    ID_Streamer?: IntFieldUpdateOperationsInput | number
    ID_Viewer?: IntFieldUpdateOperationsInput | number
  }

  export type SuscripcionCreateManyInput = {
    ID_Streamer: number
    ID_Viewer: number
  }

  export type SuscripcionUpdateManyMutationInput = {

  }

  export type SuscripcionUncheckedUpdateManyInput = {
    ID_Streamer?: IntFieldUpdateOperationsInput | number
    ID_Viewer?: IntFieldUpdateOperationsInput | number
  }

  export type RegaloCreateInput = {
    NombreRegalo: string
    PrecioRegalo: number
    DescripcionRegalo: string
    icono: string
    streamer: UsuarioCreateNestedOneWithoutRegalosInput
  }

  export type RegaloUncheckedCreateInput = {
    ID_Regalo?: number
    NombreRegalo: string
    PrecioRegalo: number
    DescripcionRegalo: string
    icono: string
    ID_Streamer: number
  }

  export type RegaloUpdateInput = {
    NombreRegalo?: StringFieldUpdateOperationsInput | string
    PrecioRegalo?: IntFieldUpdateOperationsInput | number
    DescripcionRegalo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
    streamer?: UsuarioUpdateOneRequiredWithoutRegalosNestedInput
  }

  export type RegaloUncheckedUpdateInput = {
    ID_Regalo?: IntFieldUpdateOperationsInput | number
    NombreRegalo?: StringFieldUpdateOperationsInput | string
    PrecioRegalo?: IntFieldUpdateOperationsInput | number
    DescripcionRegalo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
    ID_Streamer?: IntFieldUpdateOperationsInput | number
  }

  export type RegaloCreateManyInput = {
    ID_Regalo?: number
    NombreRegalo: string
    PrecioRegalo: number
    DescripcionRegalo: string
    icono: string
    ID_Streamer: number
  }

  export type RegaloUpdateManyMutationInput = {
    NombreRegalo?: StringFieldUpdateOperationsInput | string
    PrecioRegalo?: IntFieldUpdateOperationsInput | number
    DescripcionRegalo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
  }

  export type RegaloUncheckedUpdateManyInput = {
    ID_Regalo?: IntFieldUpdateOperationsInput | number
    NombreRegalo?: StringFieldUpdateOperationsInput | string
    PrecioRegalo?: IntFieldUpdateOperationsInput | number
    DescripcionRegalo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
    ID_Streamer?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaCreateInput = {
    Nombre: string
    juegos?: JuegoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    ID?: number
    Nombre: string
    juegos?: JuegoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    juegos?: JuegoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    juegos?: JuegoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    ID?: number
    Nombre: string
  }

  export type CategoriaUpdateManyMutationInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type JuegoCreateInput = {
    Nombre: string
    Descripcion?: string | null
    categoria: CategoriaCreateNestedOneWithoutJuegosInput
    Jogos?: JuegosEnVideoCreateNestedManyWithoutGameInput
  }

  export type JuegoUncheckedCreateInput = {
    ID_Juego?: number
    Nombre: string
    Descripcion?: string | null
    CategoriaID: number
    Jogos?: JuegosEnVideoUncheckedCreateNestedManyWithoutGameInput
  }

  export type JuegoUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutJuegosNestedInput
    Jogos?: JuegosEnVideoUpdateManyWithoutGameNestedInput
  }

  export type JuegoUncheckedUpdateInput = {
    ID_Juego?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    CategoriaID?: IntFieldUpdateOperationsInput | number
    Jogos?: JuegosEnVideoUncheckedUpdateManyWithoutGameNestedInput
  }

  export type JuegoCreateManyInput = {
    ID_Juego?: number
    Nombre: string
    Descripcion?: string | null
    CategoriaID: number
  }

  export type JuegoUpdateManyMutationInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JuegoUncheckedUpdateManyInput = {
    ID_Juego?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    CategoriaID?: IntFieldUpdateOperationsInput | number
  }

  export type JuegosEnVideoCreateInput = {
    game: JuegoCreateNestedOneWithoutJogosInput
    Vedeo: VideoCreateNestedOneWithoutV_DEOsInput
  }

  export type JuegosEnVideoUncheckedCreateInput = {
    ID_Juego: number
    ID_Video: number
  }

  export type JuegosEnVideoUpdateInput = {
    game?: JuegoUpdateOneRequiredWithoutJogosNestedInput
    Vedeo?: VideoUpdateOneRequiredWithoutV_DEOsNestedInput
  }

  export type JuegosEnVideoUncheckedUpdateInput = {
    ID_Juego?: IntFieldUpdateOperationsInput | number
    ID_Video?: IntFieldUpdateOperationsInput | number
  }

  export type JuegosEnVideoCreateManyInput = {
    ID_Juego: number
    ID_Video: number
  }

  export type JuegosEnVideoUpdateManyMutationInput = {

  }

  export type JuegosEnVideoUncheckedUpdateManyInput = {
    ID_Juego?: IntFieldUpdateOperationsInput | number
    ID_Video?: IntFieldUpdateOperationsInput | number
  }

  export type VideoCreateInput = {
    Titulo: string
    Url: string
    Duracion?: number | null
    Estado: boolean
    CategoriaDeVideo: string
    FechaSubida?: Date | string
    V_DEOs?: JuegosEnVideoCreateNestedManyWithoutVedeoInput
    usuario: UsuarioCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    ID_Video?: number
    Titulo: string
    Url: string
    Duracion?: number | null
    Estado: boolean
    CategoriaDeVideo: string
    FechaSubida?: Date | string
    ID_Usuario: number
    V_DEOs?: JuegosEnVideoUncheckedCreateNestedManyWithoutVedeoInput
  }

  export type VideoUpdateInput = {
    Titulo?: StringFieldUpdateOperationsInput | string
    Url?: StringFieldUpdateOperationsInput | string
    Duracion?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: BoolFieldUpdateOperationsInput | boolean
    CategoriaDeVideo?: StringFieldUpdateOperationsInput | string
    FechaSubida?: DateTimeFieldUpdateOperationsInput | Date | string
    V_DEOs?: JuegosEnVideoUpdateManyWithoutVedeoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    ID_Video?: IntFieldUpdateOperationsInput | number
    Titulo?: StringFieldUpdateOperationsInput | string
    Url?: StringFieldUpdateOperationsInput | string
    Duracion?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: BoolFieldUpdateOperationsInput | boolean
    CategoriaDeVideo?: StringFieldUpdateOperationsInput | string
    FechaSubida?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    V_DEOs?: JuegosEnVideoUncheckedUpdateManyWithoutVedeoNestedInput
  }

  export type VideoCreateManyInput = {
    ID_Video?: number
    Titulo: string
    Url: string
    Duracion?: number | null
    Estado: boolean
    CategoriaDeVideo: string
    FechaSubida?: Date | string
    ID_Usuario: number
  }

  export type VideoUpdateManyMutationInput = {
    Titulo?: StringFieldUpdateOperationsInput | string
    Url?: StringFieldUpdateOperationsInput | string
    Duracion?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: BoolFieldUpdateOperationsInput | boolean
    CategoriaDeVideo?: StringFieldUpdateOperationsInput | string
    FechaSubida?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    ID_Video?: IntFieldUpdateOperationsInput | number
    Titulo?: StringFieldUpdateOperationsInput | string
    Url?: StringFieldUpdateOperationsInput | string
    Duracion?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: BoolFieldUpdateOperationsInput | boolean
    CategoriaDeVideo?: StringFieldUpdateOperationsInput | string
    FechaSubida?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_Usuario?: IntFieldUpdateOperationsInput | number
  }

  export type LogrosUsuarioCreateInput = {
    Completado?: boolean
    usuario: UsuarioCreateNestedOneWithoutLogrosUsuarioInput
    logros: LogrosCreateNestedOneWithoutUsuariologrosInput
  }

  export type LogrosUsuarioUncheckedCreateInput = {
    ID_Usuario: number
    ID_Logro: number
    Completado?: boolean
  }

  export type LogrosUsuarioUpdateInput = {
    Completado?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutLogrosUsuarioNestedInput
    logros?: LogrosUpdateOneRequiredWithoutUsuariologrosNestedInput
  }

  export type LogrosUsuarioUncheckedUpdateInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    ID_Logro?: IntFieldUpdateOperationsInput | number
    Completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogrosUsuarioCreateManyInput = {
    ID_Usuario: number
    ID_Logro: number
    Completado?: boolean
  }

  export type LogrosUsuarioUpdateManyMutationInput = {
    Completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogrosUsuarioUncheckedUpdateManyInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    ID_Logro?: IntFieldUpdateOperationsInput | number
    Completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogrosCreateInput = {
    Nombre: string
    descripcion: string
    Puntaje: number
    usuariologros?: LogrosUsuarioCreateNestedManyWithoutLogrosInput
  }

  export type LogrosUncheckedCreateInput = {
    ID_Logro?: number
    Nombre: string
    descripcion: string
    Puntaje: number
    usuariologros?: LogrosUsuarioUncheckedCreateNestedManyWithoutLogrosInput
  }

  export type LogrosUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    Puntaje?: IntFieldUpdateOperationsInput | number
    usuariologros?: LogrosUsuarioUpdateManyWithoutLogrosNestedInput
  }

  export type LogrosUncheckedUpdateInput = {
    ID_Logro?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    Puntaje?: IntFieldUpdateOperationsInput | number
    usuariologros?: LogrosUsuarioUncheckedUpdateManyWithoutLogrosNestedInput
  }

  export type LogrosCreateManyInput = {
    ID_Logro?: number
    Nombre: string
    descripcion: string
    Puntaje: number
  }

  export type LogrosUpdateManyMutationInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    Puntaje?: IntFieldUpdateOperationsInput | number
  }

  export type LogrosUncheckedUpdateManyInput = {
    ID_Logro?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    Puntaje?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RegaloListRelationFilter = {
    every?: RegaloWhereInput
    some?: RegaloWhereInput
    none?: RegaloWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type LogrosUsuarioListRelationFilter = {
    every?: LogrosUsuarioWhereInput
    some?: LogrosUsuarioWhereInput
    none?: LogrosUsuarioWhereInput
  }

  export type SuscripcionListRelationFilter = {
    every?: SuscripcionWhereInput
    some?: SuscripcionWhereInput
    none?: SuscripcionWhereInput
  }

  export type ChatStreamerListRelationFilter = {
    every?: ChatStreamerWhereInput
    some?: ChatStreamerWhereInput
    none?: ChatStreamerWhereInput
  }

  export type RegaloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogrosUsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuscripcionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatStreamerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    ID?: SortOrder
    NombreUsuario?: SortOrder
    Contraseña?: SortOrder
    email?: SortOrder
    HorasTransmision?: SortOrder
    Monedas?: SortOrder
    EnVivo?: SortOrder
    ImagenPerfil?: SortOrder
    NivelStreams?: SortOrder
    Puntos?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    ID?: SortOrder
    HorasTransmision?: SortOrder
    Monedas?: SortOrder
    NivelStreams?: SortOrder
    Puntos?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    ID?: SortOrder
    NombreUsuario?: SortOrder
    Contraseña?: SortOrder
    email?: SortOrder
    HorasTransmision?: SortOrder
    Monedas?: SortOrder
    EnVivo?: SortOrder
    ImagenPerfil?: SortOrder
    NivelStreams?: SortOrder
    Puntos?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    ID?: SortOrder
    NombreUsuario?: SortOrder
    Contraseña?: SortOrder
    email?: SortOrder
    HorasTransmision?: SortOrder
    Monedas?: SortOrder
    EnVivo?: SortOrder
    ImagenPerfil?: SortOrder
    NivelStreams?: SortOrder
    Puntos?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    ID?: SortOrder
    HorasTransmision?: SortOrder
    Monedas?: SortOrder
    NivelStreams?: SortOrder
    Puntos?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ChatStreamerID_StreamerID_ViewerCompoundUniqueInput = {
    ID_Streamer: number
    ID_Viewer: number
  }

  export type ChatStreamerCountOrderByAggregateInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
    NivelViewer?: SortOrder
    Habilitado?: SortOrder
    Viendo?: SortOrder
  }

  export type ChatStreamerAvgOrderByAggregateInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
    NivelViewer?: SortOrder
  }

  export type ChatStreamerMaxOrderByAggregateInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
    NivelViewer?: SortOrder
    Habilitado?: SortOrder
    Viendo?: SortOrder
  }

  export type ChatStreamerMinOrderByAggregateInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
    NivelViewer?: SortOrder
    Habilitado?: SortOrder
    Viendo?: SortOrder
  }

  export type ChatStreamerSumOrderByAggregateInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
    NivelViewer?: SortOrder
  }

  export type SuscripcionID_StreamerID_ViewerCompoundUniqueInput = {
    ID_Streamer: number
    ID_Viewer: number
  }

  export type SuscripcionCountOrderByAggregateInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
  }

  export type SuscripcionAvgOrderByAggregateInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
  }

  export type SuscripcionMaxOrderByAggregateInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
  }

  export type SuscripcionMinOrderByAggregateInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
  }

  export type SuscripcionSumOrderByAggregateInput = {
    ID_Streamer?: SortOrder
    ID_Viewer?: SortOrder
  }

  export type RegaloCountOrderByAggregateInput = {
    ID_Regalo?: SortOrder
    NombreRegalo?: SortOrder
    PrecioRegalo?: SortOrder
    DescripcionRegalo?: SortOrder
    icono?: SortOrder
    ID_Streamer?: SortOrder
  }

  export type RegaloAvgOrderByAggregateInput = {
    ID_Regalo?: SortOrder
    PrecioRegalo?: SortOrder
    ID_Streamer?: SortOrder
  }

  export type RegaloMaxOrderByAggregateInput = {
    ID_Regalo?: SortOrder
    NombreRegalo?: SortOrder
    PrecioRegalo?: SortOrder
    DescripcionRegalo?: SortOrder
    icono?: SortOrder
    ID_Streamer?: SortOrder
  }

  export type RegaloMinOrderByAggregateInput = {
    ID_Regalo?: SortOrder
    NombreRegalo?: SortOrder
    PrecioRegalo?: SortOrder
    DescripcionRegalo?: SortOrder
    icono?: SortOrder
    ID_Streamer?: SortOrder
  }

  export type RegaloSumOrderByAggregateInput = {
    ID_Regalo?: SortOrder
    PrecioRegalo?: SortOrder
    ID_Streamer?: SortOrder
  }

  export type JuegoListRelationFilter = {
    every?: JuegoWhereInput
    some?: JuegoWhereInput
    none?: JuegoWhereInput
  }

  export type JuegoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    ID?: SortOrder
    Nombre?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    ID?: SortOrder
    Nombre?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    ID?: SortOrder
    Nombre?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type JuegosEnVideoListRelationFilter = {
    every?: JuegosEnVideoWhereInput
    some?: JuegosEnVideoWhereInput
    none?: JuegosEnVideoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type JuegosEnVideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JuegoCountOrderByAggregateInput = {
    ID_Juego?: SortOrder
    Nombre?: SortOrder
    Descripcion?: SortOrder
    CategoriaID?: SortOrder
  }

  export type JuegoAvgOrderByAggregateInput = {
    ID_Juego?: SortOrder
    CategoriaID?: SortOrder
  }

  export type JuegoMaxOrderByAggregateInput = {
    ID_Juego?: SortOrder
    Nombre?: SortOrder
    Descripcion?: SortOrder
    CategoriaID?: SortOrder
  }

  export type JuegoMinOrderByAggregateInput = {
    ID_Juego?: SortOrder
    Nombre?: SortOrder
    Descripcion?: SortOrder
    CategoriaID?: SortOrder
  }

  export type JuegoSumOrderByAggregateInput = {
    ID_Juego?: SortOrder
    CategoriaID?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type JuegoScalarRelationFilter = {
    is?: JuegoWhereInput
    isNot?: JuegoWhereInput
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type JuegosEnVideoID_JuegoID_VideoCompoundUniqueInput = {
    ID_Juego: number
    ID_Video: number
  }

  export type JuegosEnVideoCountOrderByAggregateInput = {
    ID_Juego?: SortOrder
    ID_Video?: SortOrder
  }

  export type JuegosEnVideoAvgOrderByAggregateInput = {
    ID_Juego?: SortOrder
    ID_Video?: SortOrder
  }

  export type JuegosEnVideoMaxOrderByAggregateInput = {
    ID_Juego?: SortOrder
    ID_Video?: SortOrder
  }

  export type JuegosEnVideoMinOrderByAggregateInput = {
    ID_Juego?: SortOrder
    ID_Video?: SortOrder
  }

  export type JuegosEnVideoSumOrderByAggregateInput = {
    ID_Juego?: SortOrder
    ID_Video?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VideoCountOrderByAggregateInput = {
    ID_Video?: SortOrder
    Titulo?: SortOrder
    Url?: SortOrder
    Duracion?: SortOrder
    Estado?: SortOrder
    CategoriaDeVideo?: SortOrder
    FechaSubida?: SortOrder
    ID_Usuario?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    ID_Video?: SortOrder
    Duracion?: SortOrder
    ID_Usuario?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    ID_Video?: SortOrder
    Titulo?: SortOrder
    Url?: SortOrder
    Duracion?: SortOrder
    Estado?: SortOrder
    CategoriaDeVideo?: SortOrder
    FechaSubida?: SortOrder
    ID_Usuario?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    ID_Video?: SortOrder
    Titulo?: SortOrder
    Url?: SortOrder
    Duracion?: SortOrder
    Estado?: SortOrder
    CategoriaDeVideo?: SortOrder
    FechaSubida?: SortOrder
    ID_Usuario?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    ID_Video?: SortOrder
    Duracion?: SortOrder
    ID_Usuario?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LogrosScalarRelationFilter = {
    is?: LogrosWhereInput
    isNot?: LogrosWhereInput
  }

  export type LogrosUsuarioID_UsuarioID_LogroCompoundUniqueInput = {
    ID_Usuario: number
    ID_Logro: number
  }

  export type LogrosUsuarioCountOrderByAggregateInput = {
    ID_Usuario?: SortOrder
    ID_Logro?: SortOrder
    Completado?: SortOrder
  }

  export type LogrosUsuarioAvgOrderByAggregateInput = {
    ID_Usuario?: SortOrder
    ID_Logro?: SortOrder
  }

  export type LogrosUsuarioMaxOrderByAggregateInput = {
    ID_Usuario?: SortOrder
    ID_Logro?: SortOrder
    Completado?: SortOrder
  }

  export type LogrosUsuarioMinOrderByAggregateInput = {
    ID_Usuario?: SortOrder
    ID_Logro?: SortOrder
    Completado?: SortOrder
  }

  export type LogrosUsuarioSumOrderByAggregateInput = {
    ID_Usuario?: SortOrder
    ID_Logro?: SortOrder
  }

  export type LogrosCountOrderByAggregateInput = {
    ID_Logro?: SortOrder
    Nombre?: SortOrder
    descripcion?: SortOrder
    Puntaje?: SortOrder
  }

  export type LogrosAvgOrderByAggregateInput = {
    ID_Logro?: SortOrder
    Puntaje?: SortOrder
  }

  export type LogrosMaxOrderByAggregateInput = {
    ID_Logro?: SortOrder
    Nombre?: SortOrder
    descripcion?: SortOrder
    Puntaje?: SortOrder
  }

  export type LogrosMinOrderByAggregateInput = {
    ID_Logro?: SortOrder
    Nombre?: SortOrder
    descripcion?: SortOrder
    Puntaje?: SortOrder
  }

  export type LogrosSumOrderByAggregateInput = {
    ID_Logro?: SortOrder
    Puntaje?: SortOrder
  }

  export type RegaloCreateNestedManyWithoutStreamerInput = {
    create?: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput> | RegaloCreateWithoutStreamerInput[] | RegaloUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: RegaloCreateOrConnectWithoutStreamerInput | RegaloCreateOrConnectWithoutStreamerInput[]
    createMany?: RegaloCreateManyStreamerInputEnvelope
    connect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput> | VideoCreateWithoutUsuarioInput[] | VideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUsuarioInput | VideoCreateOrConnectWithoutUsuarioInput[]
    createMany?: VideoCreateManyUsuarioInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type LogrosUsuarioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogrosUsuarioCreateWithoutUsuarioInput, LogrosUsuarioUncheckedCreateWithoutUsuarioInput> | LogrosUsuarioCreateWithoutUsuarioInput[] | LogrosUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogrosUsuarioCreateOrConnectWithoutUsuarioInput | LogrosUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogrosUsuarioCreateManyUsuarioInputEnvelope
    connect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
  }

  export type SuscripcionCreateNestedManyWithoutStreamerInput = {
    create?: XOR<SuscripcionCreateWithoutStreamerInput, SuscripcionUncheckedCreateWithoutStreamerInput> | SuscripcionCreateWithoutStreamerInput[] | SuscripcionUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: SuscripcionCreateOrConnectWithoutStreamerInput | SuscripcionCreateOrConnectWithoutStreamerInput[]
    createMany?: SuscripcionCreateManyStreamerInputEnvelope
    connect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
  }

  export type SuscripcionCreateNestedManyWithoutViewerInput = {
    create?: XOR<SuscripcionCreateWithoutViewerInput, SuscripcionUncheckedCreateWithoutViewerInput> | SuscripcionCreateWithoutViewerInput[] | SuscripcionUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: SuscripcionCreateOrConnectWithoutViewerInput | SuscripcionCreateOrConnectWithoutViewerInput[]
    createMany?: SuscripcionCreateManyViewerInputEnvelope
    connect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
  }

  export type ChatStreamerCreateNestedManyWithoutStreamerCInput = {
    create?: XOR<ChatStreamerCreateWithoutStreamerCInput, ChatStreamerUncheckedCreateWithoutStreamerCInput> | ChatStreamerCreateWithoutStreamerCInput[] | ChatStreamerUncheckedCreateWithoutStreamerCInput[]
    connectOrCreate?: ChatStreamerCreateOrConnectWithoutStreamerCInput | ChatStreamerCreateOrConnectWithoutStreamerCInput[]
    createMany?: ChatStreamerCreateManyStreamerCInputEnvelope
    connect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
  }

  export type ChatStreamerCreateNestedManyWithoutViewerCInput = {
    create?: XOR<ChatStreamerCreateWithoutViewerCInput, ChatStreamerUncheckedCreateWithoutViewerCInput> | ChatStreamerCreateWithoutViewerCInput[] | ChatStreamerUncheckedCreateWithoutViewerCInput[]
    connectOrCreate?: ChatStreamerCreateOrConnectWithoutViewerCInput | ChatStreamerCreateOrConnectWithoutViewerCInput[]
    createMany?: ChatStreamerCreateManyViewerCInputEnvelope
    connect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
  }

  export type RegaloUncheckedCreateNestedManyWithoutStreamerInput = {
    create?: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput> | RegaloCreateWithoutStreamerInput[] | RegaloUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: RegaloCreateOrConnectWithoutStreamerInput | RegaloCreateOrConnectWithoutStreamerInput[]
    createMany?: RegaloCreateManyStreamerInputEnvelope
    connect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput> | VideoCreateWithoutUsuarioInput[] | VideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUsuarioInput | VideoCreateOrConnectWithoutUsuarioInput[]
    createMany?: VideoCreateManyUsuarioInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type LogrosUsuarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LogrosUsuarioCreateWithoutUsuarioInput, LogrosUsuarioUncheckedCreateWithoutUsuarioInput> | LogrosUsuarioCreateWithoutUsuarioInput[] | LogrosUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogrosUsuarioCreateOrConnectWithoutUsuarioInput | LogrosUsuarioCreateOrConnectWithoutUsuarioInput[]
    createMany?: LogrosUsuarioCreateManyUsuarioInputEnvelope
    connect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
  }

  export type SuscripcionUncheckedCreateNestedManyWithoutStreamerInput = {
    create?: XOR<SuscripcionCreateWithoutStreamerInput, SuscripcionUncheckedCreateWithoutStreamerInput> | SuscripcionCreateWithoutStreamerInput[] | SuscripcionUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: SuscripcionCreateOrConnectWithoutStreamerInput | SuscripcionCreateOrConnectWithoutStreamerInput[]
    createMany?: SuscripcionCreateManyStreamerInputEnvelope
    connect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
  }

  export type SuscripcionUncheckedCreateNestedManyWithoutViewerInput = {
    create?: XOR<SuscripcionCreateWithoutViewerInput, SuscripcionUncheckedCreateWithoutViewerInput> | SuscripcionCreateWithoutViewerInput[] | SuscripcionUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: SuscripcionCreateOrConnectWithoutViewerInput | SuscripcionCreateOrConnectWithoutViewerInput[]
    createMany?: SuscripcionCreateManyViewerInputEnvelope
    connect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
  }

  export type ChatStreamerUncheckedCreateNestedManyWithoutStreamerCInput = {
    create?: XOR<ChatStreamerCreateWithoutStreamerCInput, ChatStreamerUncheckedCreateWithoutStreamerCInput> | ChatStreamerCreateWithoutStreamerCInput[] | ChatStreamerUncheckedCreateWithoutStreamerCInput[]
    connectOrCreate?: ChatStreamerCreateOrConnectWithoutStreamerCInput | ChatStreamerCreateOrConnectWithoutStreamerCInput[]
    createMany?: ChatStreamerCreateManyStreamerCInputEnvelope
    connect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
  }

  export type ChatStreamerUncheckedCreateNestedManyWithoutViewerCInput = {
    create?: XOR<ChatStreamerCreateWithoutViewerCInput, ChatStreamerUncheckedCreateWithoutViewerCInput> | ChatStreamerCreateWithoutViewerCInput[] | ChatStreamerUncheckedCreateWithoutViewerCInput[]
    connectOrCreate?: ChatStreamerCreateOrConnectWithoutViewerCInput | ChatStreamerCreateOrConnectWithoutViewerCInput[]
    createMany?: ChatStreamerCreateManyViewerCInputEnvelope
    connect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RegaloUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput> | RegaloCreateWithoutStreamerInput[] | RegaloUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: RegaloCreateOrConnectWithoutStreamerInput | RegaloCreateOrConnectWithoutStreamerInput[]
    upsert?: RegaloUpsertWithWhereUniqueWithoutStreamerInput | RegaloUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: RegaloCreateManyStreamerInputEnvelope
    set?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    disconnect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    delete?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    connect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    update?: RegaloUpdateWithWhereUniqueWithoutStreamerInput | RegaloUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: RegaloUpdateManyWithWhereWithoutStreamerInput | RegaloUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: RegaloScalarWhereInput | RegaloScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput> | VideoCreateWithoutUsuarioInput[] | VideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUsuarioInput | VideoCreateOrConnectWithoutUsuarioInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUsuarioInput | VideoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VideoCreateManyUsuarioInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUsuarioInput | VideoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUsuarioInput | VideoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type LogrosUsuarioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogrosUsuarioCreateWithoutUsuarioInput, LogrosUsuarioUncheckedCreateWithoutUsuarioInput> | LogrosUsuarioCreateWithoutUsuarioInput[] | LogrosUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogrosUsuarioCreateOrConnectWithoutUsuarioInput | LogrosUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogrosUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | LogrosUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogrosUsuarioCreateManyUsuarioInputEnvelope
    set?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    disconnect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    delete?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    connect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    update?: LogrosUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | LogrosUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogrosUsuarioUpdateManyWithWhereWithoutUsuarioInput | LogrosUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogrosUsuarioScalarWhereInput | LogrosUsuarioScalarWhereInput[]
  }

  export type SuscripcionUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<SuscripcionCreateWithoutStreamerInput, SuscripcionUncheckedCreateWithoutStreamerInput> | SuscripcionCreateWithoutStreamerInput[] | SuscripcionUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: SuscripcionCreateOrConnectWithoutStreamerInput | SuscripcionCreateOrConnectWithoutStreamerInput[]
    upsert?: SuscripcionUpsertWithWhereUniqueWithoutStreamerInput | SuscripcionUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: SuscripcionCreateManyStreamerInputEnvelope
    set?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    disconnect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    delete?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    connect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    update?: SuscripcionUpdateWithWhereUniqueWithoutStreamerInput | SuscripcionUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: SuscripcionUpdateManyWithWhereWithoutStreamerInput | SuscripcionUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: SuscripcionScalarWhereInput | SuscripcionScalarWhereInput[]
  }

  export type SuscripcionUpdateManyWithoutViewerNestedInput = {
    create?: XOR<SuscripcionCreateWithoutViewerInput, SuscripcionUncheckedCreateWithoutViewerInput> | SuscripcionCreateWithoutViewerInput[] | SuscripcionUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: SuscripcionCreateOrConnectWithoutViewerInput | SuscripcionCreateOrConnectWithoutViewerInput[]
    upsert?: SuscripcionUpsertWithWhereUniqueWithoutViewerInput | SuscripcionUpsertWithWhereUniqueWithoutViewerInput[]
    createMany?: SuscripcionCreateManyViewerInputEnvelope
    set?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    disconnect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    delete?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    connect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    update?: SuscripcionUpdateWithWhereUniqueWithoutViewerInput | SuscripcionUpdateWithWhereUniqueWithoutViewerInput[]
    updateMany?: SuscripcionUpdateManyWithWhereWithoutViewerInput | SuscripcionUpdateManyWithWhereWithoutViewerInput[]
    deleteMany?: SuscripcionScalarWhereInput | SuscripcionScalarWhereInput[]
  }

  export type ChatStreamerUpdateManyWithoutStreamerCNestedInput = {
    create?: XOR<ChatStreamerCreateWithoutStreamerCInput, ChatStreamerUncheckedCreateWithoutStreamerCInput> | ChatStreamerCreateWithoutStreamerCInput[] | ChatStreamerUncheckedCreateWithoutStreamerCInput[]
    connectOrCreate?: ChatStreamerCreateOrConnectWithoutStreamerCInput | ChatStreamerCreateOrConnectWithoutStreamerCInput[]
    upsert?: ChatStreamerUpsertWithWhereUniqueWithoutStreamerCInput | ChatStreamerUpsertWithWhereUniqueWithoutStreamerCInput[]
    createMany?: ChatStreamerCreateManyStreamerCInputEnvelope
    set?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    disconnect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    delete?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    connect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    update?: ChatStreamerUpdateWithWhereUniqueWithoutStreamerCInput | ChatStreamerUpdateWithWhereUniqueWithoutStreamerCInput[]
    updateMany?: ChatStreamerUpdateManyWithWhereWithoutStreamerCInput | ChatStreamerUpdateManyWithWhereWithoutStreamerCInput[]
    deleteMany?: ChatStreamerScalarWhereInput | ChatStreamerScalarWhereInput[]
  }

  export type ChatStreamerUpdateManyWithoutViewerCNestedInput = {
    create?: XOR<ChatStreamerCreateWithoutViewerCInput, ChatStreamerUncheckedCreateWithoutViewerCInput> | ChatStreamerCreateWithoutViewerCInput[] | ChatStreamerUncheckedCreateWithoutViewerCInput[]
    connectOrCreate?: ChatStreamerCreateOrConnectWithoutViewerCInput | ChatStreamerCreateOrConnectWithoutViewerCInput[]
    upsert?: ChatStreamerUpsertWithWhereUniqueWithoutViewerCInput | ChatStreamerUpsertWithWhereUniqueWithoutViewerCInput[]
    createMany?: ChatStreamerCreateManyViewerCInputEnvelope
    set?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    disconnect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    delete?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    connect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    update?: ChatStreamerUpdateWithWhereUniqueWithoutViewerCInput | ChatStreamerUpdateWithWhereUniqueWithoutViewerCInput[]
    updateMany?: ChatStreamerUpdateManyWithWhereWithoutViewerCInput | ChatStreamerUpdateManyWithWhereWithoutViewerCInput[]
    deleteMany?: ChatStreamerScalarWhereInput | ChatStreamerScalarWhereInput[]
  }

  export type RegaloUncheckedUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput> | RegaloCreateWithoutStreamerInput[] | RegaloUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: RegaloCreateOrConnectWithoutStreamerInput | RegaloCreateOrConnectWithoutStreamerInput[]
    upsert?: RegaloUpsertWithWhereUniqueWithoutStreamerInput | RegaloUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: RegaloCreateManyStreamerInputEnvelope
    set?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    disconnect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    delete?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    connect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    update?: RegaloUpdateWithWhereUniqueWithoutStreamerInput | RegaloUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: RegaloUpdateManyWithWhereWithoutStreamerInput | RegaloUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: RegaloScalarWhereInput | RegaloScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput> | VideoCreateWithoutUsuarioInput[] | VideoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUsuarioInput | VideoCreateOrConnectWithoutUsuarioInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUsuarioInput | VideoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: VideoCreateManyUsuarioInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUsuarioInput | VideoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUsuarioInput | VideoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type LogrosUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LogrosUsuarioCreateWithoutUsuarioInput, LogrosUsuarioUncheckedCreateWithoutUsuarioInput> | LogrosUsuarioCreateWithoutUsuarioInput[] | LogrosUsuarioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LogrosUsuarioCreateOrConnectWithoutUsuarioInput | LogrosUsuarioCreateOrConnectWithoutUsuarioInput[]
    upsert?: LogrosUsuarioUpsertWithWhereUniqueWithoutUsuarioInput | LogrosUsuarioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LogrosUsuarioCreateManyUsuarioInputEnvelope
    set?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    disconnect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    delete?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    connect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    update?: LogrosUsuarioUpdateWithWhereUniqueWithoutUsuarioInput | LogrosUsuarioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LogrosUsuarioUpdateManyWithWhereWithoutUsuarioInput | LogrosUsuarioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LogrosUsuarioScalarWhereInput | LogrosUsuarioScalarWhereInput[]
  }

  export type SuscripcionUncheckedUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<SuscripcionCreateWithoutStreamerInput, SuscripcionUncheckedCreateWithoutStreamerInput> | SuscripcionCreateWithoutStreamerInput[] | SuscripcionUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: SuscripcionCreateOrConnectWithoutStreamerInput | SuscripcionCreateOrConnectWithoutStreamerInput[]
    upsert?: SuscripcionUpsertWithWhereUniqueWithoutStreamerInput | SuscripcionUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: SuscripcionCreateManyStreamerInputEnvelope
    set?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    disconnect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    delete?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    connect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    update?: SuscripcionUpdateWithWhereUniqueWithoutStreamerInput | SuscripcionUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: SuscripcionUpdateManyWithWhereWithoutStreamerInput | SuscripcionUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: SuscripcionScalarWhereInput | SuscripcionScalarWhereInput[]
  }

  export type SuscripcionUncheckedUpdateManyWithoutViewerNestedInput = {
    create?: XOR<SuscripcionCreateWithoutViewerInput, SuscripcionUncheckedCreateWithoutViewerInput> | SuscripcionCreateWithoutViewerInput[] | SuscripcionUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: SuscripcionCreateOrConnectWithoutViewerInput | SuscripcionCreateOrConnectWithoutViewerInput[]
    upsert?: SuscripcionUpsertWithWhereUniqueWithoutViewerInput | SuscripcionUpsertWithWhereUniqueWithoutViewerInput[]
    createMany?: SuscripcionCreateManyViewerInputEnvelope
    set?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    disconnect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    delete?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    connect?: SuscripcionWhereUniqueInput | SuscripcionWhereUniqueInput[]
    update?: SuscripcionUpdateWithWhereUniqueWithoutViewerInput | SuscripcionUpdateWithWhereUniqueWithoutViewerInput[]
    updateMany?: SuscripcionUpdateManyWithWhereWithoutViewerInput | SuscripcionUpdateManyWithWhereWithoutViewerInput[]
    deleteMany?: SuscripcionScalarWhereInput | SuscripcionScalarWhereInput[]
  }

  export type ChatStreamerUncheckedUpdateManyWithoutStreamerCNestedInput = {
    create?: XOR<ChatStreamerCreateWithoutStreamerCInput, ChatStreamerUncheckedCreateWithoutStreamerCInput> | ChatStreamerCreateWithoutStreamerCInput[] | ChatStreamerUncheckedCreateWithoutStreamerCInput[]
    connectOrCreate?: ChatStreamerCreateOrConnectWithoutStreamerCInput | ChatStreamerCreateOrConnectWithoutStreamerCInput[]
    upsert?: ChatStreamerUpsertWithWhereUniqueWithoutStreamerCInput | ChatStreamerUpsertWithWhereUniqueWithoutStreamerCInput[]
    createMany?: ChatStreamerCreateManyStreamerCInputEnvelope
    set?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    disconnect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    delete?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    connect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    update?: ChatStreamerUpdateWithWhereUniqueWithoutStreamerCInput | ChatStreamerUpdateWithWhereUniqueWithoutStreamerCInput[]
    updateMany?: ChatStreamerUpdateManyWithWhereWithoutStreamerCInput | ChatStreamerUpdateManyWithWhereWithoutStreamerCInput[]
    deleteMany?: ChatStreamerScalarWhereInput | ChatStreamerScalarWhereInput[]
  }

  export type ChatStreamerUncheckedUpdateManyWithoutViewerCNestedInput = {
    create?: XOR<ChatStreamerCreateWithoutViewerCInput, ChatStreamerUncheckedCreateWithoutViewerCInput> | ChatStreamerCreateWithoutViewerCInput[] | ChatStreamerUncheckedCreateWithoutViewerCInput[]
    connectOrCreate?: ChatStreamerCreateOrConnectWithoutViewerCInput | ChatStreamerCreateOrConnectWithoutViewerCInput[]
    upsert?: ChatStreamerUpsertWithWhereUniqueWithoutViewerCInput | ChatStreamerUpsertWithWhereUniqueWithoutViewerCInput[]
    createMany?: ChatStreamerCreateManyViewerCInputEnvelope
    set?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    disconnect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    delete?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    connect?: ChatStreamerWhereUniqueInput | ChatStreamerWhereUniqueInput[]
    update?: ChatStreamerUpdateWithWhereUniqueWithoutViewerCInput | ChatStreamerUpdateWithWhereUniqueWithoutViewerCInput[]
    updateMany?: ChatStreamerUpdateManyWithWhereWithoutViewerCInput | ChatStreamerUpdateManyWithWhereWithoutViewerCInput[]
    deleteMany?: ChatStreamerScalarWhereInput | ChatStreamerScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutStreamerCHatInput = {
    create?: XOR<UsuarioCreateWithoutStreamerCHatInput, UsuarioUncheckedCreateWithoutStreamerCHatInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutStreamerCHatInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutViewerEnChatInput = {
    create?: XOR<UsuarioCreateWithoutViewerEnChatInput, UsuarioUncheckedCreateWithoutViewerEnChatInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutViewerEnChatInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutStreamerCHatNestedInput = {
    create?: XOR<UsuarioCreateWithoutStreamerCHatInput, UsuarioUncheckedCreateWithoutStreamerCHatInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutStreamerCHatInput
    upsert?: UsuarioUpsertWithoutStreamerCHatInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutStreamerCHatInput, UsuarioUpdateWithoutStreamerCHatInput>, UsuarioUncheckedUpdateWithoutStreamerCHatInput>
  }

  export type UsuarioUpdateOneRequiredWithoutViewerEnChatNestedInput = {
    create?: XOR<UsuarioCreateWithoutViewerEnChatInput, UsuarioUncheckedCreateWithoutViewerEnChatInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutViewerEnChatInput
    upsert?: UsuarioUpsertWithoutViewerEnChatInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutViewerEnChatInput, UsuarioUpdateWithoutViewerEnChatInput>, UsuarioUncheckedUpdateWithoutViewerEnChatInput>
  }

  export type UsuarioCreateNestedOneWithoutStreamerSuscripcionesInput = {
    create?: XOR<UsuarioCreateWithoutStreamerSuscripcionesInput, UsuarioUncheckedCreateWithoutStreamerSuscripcionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutStreamerSuscripcionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutViewerSuscripcionesInput = {
    create?: XOR<UsuarioCreateWithoutViewerSuscripcionesInput, UsuarioUncheckedCreateWithoutViewerSuscripcionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutViewerSuscripcionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutStreamerSuscripcionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutStreamerSuscripcionesInput, UsuarioUncheckedCreateWithoutStreamerSuscripcionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutStreamerSuscripcionesInput
    upsert?: UsuarioUpsertWithoutStreamerSuscripcionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutStreamerSuscripcionesInput, UsuarioUpdateWithoutStreamerSuscripcionesInput>, UsuarioUncheckedUpdateWithoutStreamerSuscripcionesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutViewerSuscripcionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutViewerSuscripcionesInput, UsuarioUncheckedCreateWithoutViewerSuscripcionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutViewerSuscripcionesInput
    upsert?: UsuarioUpsertWithoutViewerSuscripcionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutViewerSuscripcionesInput, UsuarioUpdateWithoutViewerSuscripcionesInput>, UsuarioUncheckedUpdateWithoutViewerSuscripcionesInput>
  }

  export type UsuarioCreateNestedOneWithoutRegalosInput = {
    create?: XOR<UsuarioCreateWithoutRegalosInput, UsuarioUncheckedCreateWithoutRegalosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRegalosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutRegalosNestedInput = {
    create?: XOR<UsuarioCreateWithoutRegalosInput, UsuarioUncheckedCreateWithoutRegalosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRegalosInput
    upsert?: UsuarioUpsertWithoutRegalosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRegalosInput, UsuarioUpdateWithoutRegalosInput>, UsuarioUncheckedUpdateWithoutRegalosInput>
  }

  export type JuegoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
  }

  export type JuegoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
  }

  export type JuegoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    upsert?: JuegoUpsertWithWhereUniqueWithoutCategoriaInput | JuegoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    set?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    disconnect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    delete?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    update?: JuegoUpdateWithWhereUniqueWithoutCategoriaInput | JuegoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: JuegoUpdateManyWithWhereWithoutCategoriaInput | JuegoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
  }

  export type JuegoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput> | JuegoCreateWithoutCategoriaInput[] | JuegoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: JuegoCreateOrConnectWithoutCategoriaInput | JuegoCreateOrConnectWithoutCategoriaInput[]
    upsert?: JuegoUpsertWithWhereUniqueWithoutCategoriaInput | JuegoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: JuegoCreateManyCategoriaInputEnvelope
    set?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    disconnect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    delete?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    connect?: JuegoWhereUniqueInput | JuegoWhereUniqueInput[]
    update?: JuegoUpdateWithWhereUniqueWithoutCategoriaInput | JuegoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: JuegoUpdateManyWithWhereWithoutCategoriaInput | JuegoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutJuegosInput = {
    create?: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutJuegosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type JuegosEnVideoCreateNestedManyWithoutGameInput = {
    create?: XOR<JuegosEnVideoCreateWithoutGameInput, JuegosEnVideoUncheckedCreateWithoutGameInput> | JuegosEnVideoCreateWithoutGameInput[] | JuegosEnVideoUncheckedCreateWithoutGameInput[]
    connectOrCreate?: JuegosEnVideoCreateOrConnectWithoutGameInput | JuegosEnVideoCreateOrConnectWithoutGameInput[]
    createMany?: JuegosEnVideoCreateManyGameInputEnvelope
    connect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
  }

  export type JuegosEnVideoUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<JuegosEnVideoCreateWithoutGameInput, JuegosEnVideoUncheckedCreateWithoutGameInput> | JuegosEnVideoCreateWithoutGameInput[] | JuegosEnVideoUncheckedCreateWithoutGameInput[]
    connectOrCreate?: JuegosEnVideoCreateOrConnectWithoutGameInput | JuegosEnVideoCreateOrConnectWithoutGameInput[]
    createMany?: JuegosEnVideoCreateManyGameInputEnvelope
    connect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoriaUpdateOneRequiredWithoutJuegosNestedInput = {
    create?: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutJuegosInput
    upsert?: CategoriaUpsertWithoutJuegosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutJuegosInput, CategoriaUpdateWithoutJuegosInput>, CategoriaUncheckedUpdateWithoutJuegosInput>
  }

  export type JuegosEnVideoUpdateManyWithoutGameNestedInput = {
    create?: XOR<JuegosEnVideoCreateWithoutGameInput, JuegosEnVideoUncheckedCreateWithoutGameInput> | JuegosEnVideoCreateWithoutGameInput[] | JuegosEnVideoUncheckedCreateWithoutGameInput[]
    connectOrCreate?: JuegosEnVideoCreateOrConnectWithoutGameInput | JuegosEnVideoCreateOrConnectWithoutGameInput[]
    upsert?: JuegosEnVideoUpsertWithWhereUniqueWithoutGameInput | JuegosEnVideoUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: JuegosEnVideoCreateManyGameInputEnvelope
    set?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    disconnect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    delete?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    connect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    update?: JuegosEnVideoUpdateWithWhereUniqueWithoutGameInput | JuegosEnVideoUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: JuegosEnVideoUpdateManyWithWhereWithoutGameInput | JuegosEnVideoUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: JuegosEnVideoScalarWhereInput | JuegosEnVideoScalarWhereInput[]
  }

  export type JuegosEnVideoUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<JuegosEnVideoCreateWithoutGameInput, JuegosEnVideoUncheckedCreateWithoutGameInput> | JuegosEnVideoCreateWithoutGameInput[] | JuegosEnVideoUncheckedCreateWithoutGameInput[]
    connectOrCreate?: JuegosEnVideoCreateOrConnectWithoutGameInput | JuegosEnVideoCreateOrConnectWithoutGameInput[]
    upsert?: JuegosEnVideoUpsertWithWhereUniqueWithoutGameInput | JuegosEnVideoUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: JuegosEnVideoCreateManyGameInputEnvelope
    set?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    disconnect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    delete?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    connect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    update?: JuegosEnVideoUpdateWithWhereUniqueWithoutGameInput | JuegosEnVideoUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: JuegosEnVideoUpdateManyWithWhereWithoutGameInput | JuegosEnVideoUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: JuegosEnVideoScalarWhereInput | JuegosEnVideoScalarWhereInput[]
  }

  export type JuegoCreateNestedOneWithoutJogosInput = {
    create?: XOR<JuegoCreateWithoutJogosInput, JuegoUncheckedCreateWithoutJogosInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutJogosInput
    connect?: JuegoWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutV_DEOsInput = {
    create?: XOR<VideoCreateWithoutV_DEOsInput, VideoUncheckedCreateWithoutV_DEOsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutV_DEOsInput
    connect?: VideoWhereUniqueInput
  }

  export type JuegoUpdateOneRequiredWithoutJogosNestedInput = {
    create?: XOR<JuegoCreateWithoutJogosInput, JuegoUncheckedCreateWithoutJogosInput>
    connectOrCreate?: JuegoCreateOrConnectWithoutJogosInput
    upsert?: JuegoUpsertWithoutJogosInput
    connect?: JuegoWhereUniqueInput
    update?: XOR<XOR<JuegoUpdateToOneWithWhereWithoutJogosInput, JuegoUpdateWithoutJogosInput>, JuegoUncheckedUpdateWithoutJogosInput>
  }

  export type VideoUpdateOneRequiredWithoutV_DEOsNestedInput = {
    create?: XOR<VideoCreateWithoutV_DEOsInput, VideoUncheckedCreateWithoutV_DEOsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutV_DEOsInput
    upsert?: VideoUpsertWithoutV_DEOsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutV_DEOsInput, VideoUpdateWithoutV_DEOsInput>, VideoUncheckedUpdateWithoutV_DEOsInput>
  }

  export type JuegosEnVideoCreateNestedManyWithoutVedeoInput = {
    create?: XOR<JuegosEnVideoCreateWithoutVedeoInput, JuegosEnVideoUncheckedCreateWithoutVedeoInput> | JuegosEnVideoCreateWithoutVedeoInput[] | JuegosEnVideoUncheckedCreateWithoutVedeoInput[]
    connectOrCreate?: JuegosEnVideoCreateOrConnectWithoutVedeoInput | JuegosEnVideoCreateOrConnectWithoutVedeoInput[]
    createMany?: JuegosEnVideoCreateManyVedeoInputEnvelope
    connect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutVideosInput = {
    create?: XOR<UsuarioCreateWithoutVideosInput, UsuarioUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVideosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type JuegosEnVideoUncheckedCreateNestedManyWithoutVedeoInput = {
    create?: XOR<JuegosEnVideoCreateWithoutVedeoInput, JuegosEnVideoUncheckedCreateWithoutVedeoInput> | JuegosEnVideoCreateWithoutVedeoInput[] | JuegosEnVideoUncheckedCreateWithoutVedeoInput[]
    connectOrCreate?: JuegosEnVideoCreateOrConnectWithoutVedeoInput | JuegosEnVideoCreateOrConnectWithoutVedeoInput[]
    createMany?: JuegosEnVideoCreateManyVedeoInputEnvelope
    connect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JuegosEnVideoUpdateManyWithoutVedeoNestedInput = {
    create?: XOR<JuegosEnVideoCreateWithoutVedeoInput, JuegosEnVideoUncheckedCreateWithoutVedeoInput> | JuegosEnVideoCreateWithoutVedeoInput[] | JuegosEnVideoUncheckedCreateWithoutVedeoInput[]
    connectOrCreate?: JuegosEnVideoCreateOrConnectWithoutVedeoInput | JuegosEnVideoCreateOrConnectWithoutVedeoInput[]
    upsert?: JuegosEnVideoUpsertWithWhereUniqueWithoutVedeoInput | JuegosEnVideoUpsertWithWhereUniqueWithoutVedeoInput[]
    createMany?: JuegosEnVideoCreateManyVedeoInputEnvelope
    set?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    disconnect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    delete?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    connect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    update?: JuegosEnVideoUpdateWithWhereUniqueWithoutVedeoInput | JuegosEnVideoUpdateWithWhereUniqueWithoutVedeoInput[]
    updateMany?: JuegosEnVideoUpdateManyWithWhereWithoutVedeoInput | JuegosEnVideoUpdateManyWithWhereWithoutVedeoInput[]
    deleteMany?: JuegosEnVideoScalarWhereInput | JuegosEnVideoScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<UsuarioCreateWithoutVideosInput, UsuarioUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutVideosInput
    upsert?: UsuarioUpsertWithoutVideosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutVideosInput, UsuarioUpdateWithoutVideosInput>, UsuarioUncheckedUpdateWithoutVideosInput>
  }

  export type JuegosEnVideoUncheckedUpdateManyWithoutVedeoNestedInput = {
    create?: XOR<JuegosEnVideoCreateWithoutVedeoInput, JuegosEnVideoUncheckedCreateWithoutVedeoInput> | JuegosEnVideoCreateWithoutVedeoInput[] | JuegosEnVideoUncheckedCreateWithoutVedeoInput[]
    connectOrCreate?: JuegosEnVideoCreateOrConnectWithoutVedeoInput | JuegosEnVideoCreateOrConnectWithoutVedeoInput[]
    upsert?: JuegosEnVideoUpsertWithWhereUniqueWithoutVedeoInput | JuegosEnVideoUpsertWithWhereUniqueWithoutVedeoInput[]
    createMany?: JuegosEnVideoCreateManyVedeoInputEnvelope
    set?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    disconnect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    delete?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    connect?: JuegosEnVideoWhereUniqueInput | JuegosEnVideoWhereUniqueInput[]
    update?: JuegosEnVideoUpdateWithWhereUniqueWithoutVedeoInput | JuegosEnVideoUpdateWithWhereUniqueWithoutVedeoInput[]
    updateMany?: JuegosEnVideoUpdateManyWithWhereWithoutVedeoInput | JuegosEnVideoUpdateManyWithWhereWithoutVedeoInput[]
    deleteMany?: JuegosEnVideoScalarWhereInput | JuegosEnVideoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutLogrosUsuarioInput = {
    create?: XOR<UsuarioCreateWithoutLogrosUsuarioInput, UsuarioUncheckedCreateWithoutLogrosUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogrosUsuarioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LogrosCreateNestedOneWithoutUsuariologrosInput = {
    create?: XOR<LogrosCreateWithoutUsuariologrosInput, LogrosUncheckedCreateWithoutUsuariologrosInput>
    connectOrCreate?: LogrosCreateOrConnectWithoutUsuariologrosInput
    connect?: LogrosWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutLogrosUsuarioNestedInput = {
    create?: XOR<UsuarioCreateWithoutLogrosUsuarioInput, UsuarioUncheckedCreateWithoutLogrosUsuarioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLogrosUsuarioInput
    upsert?: UsuarioUpsertWithoutLogrosUsuarioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLogrosUsuarioInput, UsuarioUpdateWithoutLogrosUsuarioInput>, UsuarioUncheckedUpdateWithoutLogrosUsuarioInput>
  }

  export type LogrosUpdateOneRequiredWithoutUsuariologrosNestedInput = {
    create?: XOR<LogrosCreateWithoutUsuariologrosInput, LogrosUncheckedCreateWithoutUsuariologrosInput>
    connectOrCreate?: LogrosCreateOrConnectWithoutUsuariologrosInput
    upsert?: LogrosUpsertWithoutUsuariologrosInput
    connect?: LogrosWhereUniqueInput
    update?: XOR<XOR<LogrosUpdateToOneWithWhereWithoutUsuariologrosInput, LogrosUpdateWithoutUsuariologrosInput>, LogrosUncheckedUpdateWithoutUsuariologrosInput>
  }

  export type LogrosUsuarioCreateNestedManyWithoutLogrosInput = {
    create?: XOR<LogrosUsuarioCreateWithoutLogrosInput, LogrosUsuarioUncheckedCreateWithoutLogrosInput> | LogrosUsuarioCreateWithoutLogrosInput[] | LogrosUsuarioUncheckedCreateWithoutLogrosInput[]
    connectOrCreate?: LogrosUsuarioCreateOrConnectWithoutLogrosInput | LogrosUsuarioCreateOrConnectWithoutLogrosInput[]
    createMany?: LogrosUsuarioCreateManyLogrosInputEnvelope
    connect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
  }

  export type LogrosUsuarioUncheckedCreateNestedManyWithoutLogrosInput = {
    create?: XOR<LogrosUsuarioCreateWithoutLogrosInput, LogrosUsuarioUncheckedCreateWithoutLogrosInput> | LogrosUsuarioCreateWithoutLogrosInput[] | LogrosUsuarioUncheckedCreateWithoutLogrosInput[]
    connectOrCreate?: LogrosUsuarioCreateOrConnectWithoutLogrosInput | LogrosUsuarioCreateOrConnectWithoutLogrosInput[]
    createMany?: LogrosUsuarioCreateManyLogrosInputEnvelope
    connect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
  }

  export type LogrosUsuarioUpdateManyWithoutLogrosNestedInput = {
    create?: XOR<LogrosUsuarioCreateWithoutLogrosInput, LogrosUsuarioUncheckedCreateWithoutLogrosInput> | LogrosUsuarioCreateWithoutLogrosInput[] | LogrosUsuarioUncheckedCreateWithoutLogrosInput[]
    connectOrCreate?: LogrosUsuarioCreateOrConnectWithoutLogrosInput | LogrosUsuarioCreateOrConnectWithoutLogrosInput[]
    upsert?: LogrosUsuarioUpsertWithWhereUniqueWithoutLogrosInput | LogrosUsuarioUpsertWithWhereUniqueWithoutLogrosInput[]
    createMany?: LogrosUsuarioCreateManyLogrosInputEnvelope
    set?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    disconnect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    delete?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    connect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    update?: LogrosUsuarioUpdateWithWhereUniqueWithoutLogrosInput | LogrosUsuarioUpdateWithWhereUniqueWithoutLogrosInput[]
    updateMany?: LogrosUsuarioUpdateManyWithWhereWithoutLogrosInput | LogrosUsuarioUpdateManyWithWhereWithoutLogrosInput[]
    deleteMany?: LogrosUsuarioScalarWhereInput | LogrosUsuarioScalarWhereInput[]
  }

  export type LogrosUsuarioUncheckedUpdateManyWithoutLogrosNestedInput = {
    create?: XOR<LogrosUsuarioCreateWithoutLogrosInput, LogrosUsuarioUncheckedCreateWithoutLogrosInput> | LogrosUsuarioCreateWithoutLogrosInput[] | LogrosUsuarioUncheckedCreateWithoutLogrosInput[]
    connectOrCreate?: LogrosUsuarioCreateOrConnectWithoutLogrosInput | LogrosUsuarioCreateOrConnectWithoutLogrosInput[]
    upsert?: LogrosUsuarioUpsertWithWhereUniqueWithoutLogrosInput | LogrosUsuarioUpsertWithWhereUniqueWithoutLogrosInput[]
    createMany?: LogrosUsuarioCreateManyLogrosInputEnvelope
    set?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    disconnect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    delete?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    connect?: LogrosUsuarioWhereUniqueInput | LogrosUsuarioWhereUniqueInput[]
    update?: LogrosUsuarioUpdateWithWhereUniqueWithoutLogrosInput | LogrosUsuarioUpdateWithWhereUniqueWithoutLogrosInput[]
    updateMany?: LogrosUsuarioUpdateManyWithWhereWithoutLogrosInput | LogrosUsuarioUpdateManyWithWhereWithoutLogrosInput[]
    deleteMany?: LogrosUsuarioScalarWhereInput | LogrosUsuarioScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RegaloCreateWithoutStreamerInput = {
    NombreRegalo: string
    PrecioRegalo: number
    DescripcionRegalo: string
    icono: string
  }

  export type RegaloUncheckedCreateWithoutStreamerInput = {
    ID_Regalo?: number
    NombreRegalo: string
    PrecioRegalo: number
    DescripcionRegalo: string
    icono: string
  }

  export type RegaloCreateOrConnectWithoutStreamerInput = {
    where: RegaloWhereUniqueInput
    create: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput>
  }

  export type RegaloCreateManyStreamerInputEnvelope = {
    data: RegaloCreateManyStreamerInput | RegaloCreateManyStreamerInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutUsuarioInput = {
    Titulo: string
    Url: string
    Duracion?: number | null
    Estado: boolean
    CategoriaDeVideo: string
    FechaSubida?: Date | string
    V_DEOs?: JuegosEnVideoCreateNestedManyWithoutVedeoInput
  }

  export type VideoUncheckedCreateWithoutUsuarioInput = {
    ID_Video?: number
    Titulo: string
    Url: string
    Duracion?: number | null
    Estado: boolean
    CategoriaDeVideo: string
    FechaSubida?: Date | string
    V_DEOs?: JuegosEnVideoUncheckedCreateNestedManyWithoutVedeoInput
  }

  export type VideoCreateOrConnectWithoutUsuarioInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput>
  }

  export type VideoCreateManyUsuarioInputEnvelope = {
    data: VideoCreateManyUsuarioInput | VideoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type LogrosUsuarioCreateWithoutUsuarioInput = {
    Completado?: boolean
    logros: LogrosCreateNestedOneWithoutUsuariologrosInput
  }

  export type LogrosUsuarioUncheckedCreateWithoutUsuarioInput = {
    ID_Logro: number
    Completado?: boolean
  }

  export type LogrosUsuarioCreateOrConnectWithoutUsuarioInput = {
    where: LogrosUsuarioWhereUniqueInput
    create: XOR<LogrosUsuarioCreateWithoutUsuarioInput, LogrosUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type LogrosUsuarioCreateManyUsuarioInputEnvelope = {
    data: LogrosUsuarioCreateManyUsuarioInput | LogrosUsuarioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type SuscripcionCreateWithoutStreamerInput = {
    viewer: UsuarioCreateNestedOneWithoutViewerSuscripcionesInput
  }

  export type SuscripcionUncheckedCreateWithoutStreamerInput = {
    ID_Viewer: number
  }

  export type SuscripcionCreateOrConnectWithoutStreamerInput = {
    where: SuscripcionWhereUniqueInput
    create: XOR<SuscripcionCreateWithoutStreamerInput, SuscripcionUncheckedCreateWithoutStreamerInput>
  }

  export type SuscripcionCreateManyStreamerInputEnvelope = {
    data: SuscripcionCreateManyStreamerInput | SuscripcionCreateManyStreamerInput[]
    skipDuplicates?: boolean
  }

  export type SuscripcionCreateWithoutViewerInput = {
    streamer: UsuarioCreateNestedOneWithoutStreamerSuscripcionesInput
  }

  export type SuscripcionUncheckedCreateWithoutViewerInput = {
    ID_Streamer: number
  }

  export type SuscripcionCreateOrConnectWithoutViewerInput = {
    where: SuscripcionWhereUniqueInput
    create: XOR<SuscripcionCreateWithoutViewerInput, SuscripcionUncheckedCreateWithoutViewerInput>
  }

  export type SuscripcionCreateManyViewerInputEnvelope = {
    data: SuscripcionCreateManyViewerInput | SuscripcionCreateManyViewerInput[]
    skipDuplicates?: boolean
  }

  export type ChatStreamerCreateWithoutStreamerCInput = {
    NivelViewer?: number
    Habilitado?: boolean
    Viendo: boolean
    viewerC: UsuarioCreateNestedOneWithoutViewerEnChatInput
  }

  export type ChatStreamerUncheckedCreateWithoutStreamerCInput = {
    ID_Viewer: number
    NivelViewer?: number
    Habilitado?: boolean
    Viendo: boolean
  }

  export type ChatStreamerCreateOrConnectWithoutStreamerCInput = {
    where: ChatStreamerWhereUniqueInput
    create: XOR<ChatStreamerCreateWithoutStreamerCInput, ChatStreamerUncheckedCreateWithoutStreamerCInput>
  }

  export type ChatStreamerCreateManyStreamerCInputEnvelope = {
    data: ChatStreamerCreateManyStreamerCInput | ChatStreamerCreateManyStreamerCInput[]
    skipDuplicates?: boolean
  }

  export type ChatStreamerCreateWithoutViewerCInput = {
    NivelViewer?: number
    Habilitado?: boolean
    Viendo: boolean
    streamerC: UsuarioCreateNestedOneWithoutStreamerCHatInput
  }

  export type ChatStreamerUncheckedCreateWithoutViewerCInput = {
    ID_Streamer: number
    NivelViewer?: number
    Habilitado?: boolean
    Viendo: boolean
  }

  export type ChatStreamerCreateOrConnectWithoutViewerCInput = {
    where: ChatStreamerWhereUniqueInput
    create: XOR<ChatStreamerCreateWithoutViewerCInput, ChatStreamerUncheckedCreateWithoutViewerCInput>
  }

  export type ChatStreamerCreateManyViewerCInputEnvelope = {
    data: ChatStreamerCreateManyViewerCInput | ChatStreamerCreateManyViewerCInput[]
    skipDuplicates?: boolean
  }

  export type RegaloUpsertWithWhereUniqueWithoutStreamerInput = {
    where: RegaloWhereUniqueInput
    update: XOR<RegaloUpdateWithoutStreamerInput, RegaloUncheckedUpdateWithoutStreamerInput>
    create: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput>
  }

  export type RegaloUpdateWithWhereUniqueWithoutStreamerInput = {
    where: RegaloWhereUniqueInput
    data: XOR<RegaloUpdateWithoutStreamerInput, RegaloUncheckedUpdateWithoutStreamerInput>
  }

  export type RegaloUpdateManyWithWhereWithoutStreamerInput = {
    where: RegaloScalarWhereInput
    data: XOR<RegaloUpdateManyMutationInput, RegaloUncheckedUpdateManyWithoutStreamerInput>
  }

  export type RegaloScalarWhereInput = {
    AND?: RegaloScalarWhereInput | RegaloScalarWhereInput[]
    OR?: RegaloScalarWhereInput[]
    NOT?: RegaloScalarWhereInput | RegaloScalarWhereInput[]
    ID_Regalo?: IntFilter<"Regalo"> | number
    NombreRegalo?: StringFilter<"Regalo"> | string
    PrecioRegalo?: IntFilter<"Regalo"> | number
    DescripcionRegalo?: StringFilter<"Regalo"> | string
    icono?: StringFilter<"Regalo"> | string
    ID_Streamer?: IntFilter<"Regalo"> | number
  }

  export type VideoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutUsuarioInput, VideoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<VideoCreateWithoutUsuarioInput, VideoUncheckedCreateWithoutUsuarioInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutUsuarioInput, VideoUncheckedUpdateWithoutUsuarioInput>
  }

  export type VideoUpdateManyWithWhereWithoutUsuarioInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    ID_Video?: IntFilter<"Video"> | number
    Titulo?: StringFilter<"Video"> | string
    Url?: StringFilter<"Video"> | string
    Duracion?: IntNullableFilter<"Video"> | number | null
    Estado?: BoolFilter<"Video"> | boolean
    CategoriaDeVideo?: StringFilter<"Video"> | string
    FechaSubida?: DateTimeFilter<"Video"> | Date | string
    ID_Usuario?: IntFilter<"Video"> | number
  }

  export type LogrosUsuarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LogrosUsuarioWhereUniqueInput
    update: XOR<LogrosUsuarioUpdateWithoutUsuarioInput, LogrosUsuarioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LogrosUsuarioCreateWithoutUsuarioInput, LogrosUsuarioUncheckedCreateWithoutUsuarioInput>
  }

  export type LogrosUsuarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LogrosUsuarioWhereUniqueInput
    data: XOR<LogrosUsuarioUpdateWithoutUsuarioInput, LogrosUsuarioUncheckedUpdateWithoutUsuarioInput>
  }

  export type LogrosUsuarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: LogrosUsuarioScalarWhereInput
    data: XOR<LogrosUsuarioUpdateManyMutationInput, LogrosUsuarioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type LogrosUsuarioScalarWhereInput = {
    AND?: LogrosUsuarioScalarWhereInput | LogrosUsuarioScalarWhereInput[]
    OR?: LogrosUsuarioScalarWhereInput[]
    NOT?: LogrosUsuarioScalarWhereInput | LogrosUsuarioScalarWhereInput[]
    ID_Usuario?: IntFilter<"LogrosUsuario"> | number
    ID_Logro?: IntFilter<"LogrosUsuario"> | number
    Completado?: BoolFilter<"LogrosUsuario"> | boolean
  }

  export type SuscripcionUpsertWithWhereUniqueWithoutStreamerInput = {
    where: SuscripcionWhereUniqueInput
    update: XOR<SuscripcionUpdateWithoutStreamerInput, SuscripcionUncheckedUpdateWithoutStreamerInput>
    create: XOR<SuscripcionCreateWithoutStreamerInput, SuscripcionUncheckedCreateWithoutStreamerInput>
  }

  export type SuscripcionUpdateWithWhereUniqueWithoutStreamerInput = {
    where: SuscripcionWhereUniqueInput
    data: XOR<SuscripcionUpdateWithoutStreamerInput, SuscripcionUncheckedUpdateWithoutStreamerInput>
  }

  export type SuscripcionUpdateManyWithWhereWithoutStreamerInput = {
    where: SuscripcionScalarWhereInput
    data: XOR<SuscripcionUpdateManyMutationInput, SuscripcionUncheckedUpdateManyWithoutStreamerInput>
  }

  export type SuscripcionScalarWhereInput = {
    AND?: SuscripcionScalarWhereInput | SuscripcionScalarWhereInput[]
    OR?: SuscripcionScalarWhereInput[]
    NOT?: SuscripcionScalarWhereInput | SuscripcionScalarWhereInput[]
    ID_Streamer?: IntFilter<"Suscripcion"> | number
    ID_Viewer?: IntFilter<"Suscripcion"> | number
  }

  export type SuscripcionUpsertWithWhereUniqueWithoutViewerInput = {
    where: SuscripcionWhereUniqueInput
    update: XOR<SuscripcionUpdateWithoutViewerInput, SuscripcionUncheckedUpdateWithoutViewerInput>
    create: XOR<SuscripcionCreateWithoutViewerInput, SuscripcionUncheckedCreateWithoutViewerInput>
  }

  export type SuscripcionUpdateWithWhereUniqueWithoutViewerInput = {
    where: SuscripcionWhereUniqueInput
    data: XOR<SuscripcionUpdateWithoutViewerInput, SuscripcionUncheckedUpdateWithoutViewerInput>
  }

  export type SuscripcionUpdateManyWithWhereWithoutViewerInput = {
    where: SuscripcionScalarWhereInput
    data: XOR<SuscripcionUpdateManyMutationInput, SuscripcionUncheckedUpdateManyWithoutViewerInput>
  }

  export type ChatStreamerUpsertWithWhereUniqueWithoutStreamerCInput = {
    where: ChatStreamerWhereUniqueInput
    update: XOR<ChatStreamerUpdateWithoutStreamerCInput, ChatStreamerUncheckedUpdateWithoutStreamerCInput>
    create: XOR<ChatStreamerCreateWithoutStreamerCInput, ChatStreamerUncheckedCreateWithoutStreamerCInput>
  }

  export type ChatStreamerUpdateWithWhereUniqueWithoutStreamerCInput = {
    where: ChatStreamerWhereUniqueInput
    data: XOR<ChatStreamerUpdateWithoutStreamerCInput, ChatStreamerUncheckedUpdateWithoutStreamerCInput>
  }

  export type ChatStreamerUpdateManyWithWhereWithoutStreamerCInput = {
    where: ChatStreamerScalarWhereInput
    data: XOR<ChatStreamerUpdateManyMutationInput, ChatStreamerUncheckedUpdateManyWithoutStreamerCInput>
  }

  export type ChatStreamerScalarWhereInput = {
    AND?: ChatStreamerScalarWhereInput | ChatStreamerScalarWhereInput[]
    OR?: ChatStreamerScalarWhereInput[]
    NOT?: ChatStreamerScalarWhereInput | ChatStreamerScalarWhereInput[]
    ID_Streamer?: IntFilter<"ChatStreamer"> | number
    ID_Viewer?: IntFilter<"ChatStreamer"> | number
    NivelViewer?: IntFilter<"ChatStreamer"> | number
    Habilitado?: BoolFilter<"ChatStreamer"> | boolean
    Viendo?: BoolFilter<"ChatStreamer"> | boolean
  }

  export type ChatStreamerUpsertWithWhereUniqueWithoutViewerCInput = {
    where: ChatStreamerWhereUniqueInput
    update: XOR<ChatStreamerUpdateWithoutViewerCInput, ChatStreamerUncheckedUpdateWithoutViewerCInput>
    create: XOR<ChatStreamerCreateWithoutViewerCInput, ChatStreamerUncheckedCreateWithoutViewerCInput>
  }

  export type ChatStreamerUpdateWithWhereUniqueWithoutViewerCInput = {
    where: ChatStreamerWhereUniqueInput
    data: XOR<ChatStreamerUpdateWithoutViewerCInput, ChatStreamerUncheckedUpdateWithoutViewerCInput>
  }

  export type ChatStreamerUpdateManyWithWhereWithoutViewerCInput = {
    where: ChatStreamerScalarWhereInput
    data: XOR<ChatStreamerUpdateManyMutationInput, ChatStreamerUncheckedUpdateManyWithoutViewerCInput>
  }

  export type UsuarioCreateWithoutStreamerCHatInput = {
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloCreateNestedManyWithoutStreamerInput
    videos?: VideoCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionCreateNestedManyWithoutViewerInput
    viewerEnChat?: ChatStreamerCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioUncheckedCreateWithoutStreamerCHatInput = {
    ID?: number
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloUncheckedCreateNestedManyWithoutStreamerInput
    videos?: VideoUncheckedCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutViewerInput
    viewerEnChat?: ChatStreamerUncheckedCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioCreateOrConnectWithoutStreamerCHatInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutStreamerCHatInput, UsuarioUncheckedCreateWithoutStreamerCHatInput>
  }

  export type UsuarioCreateWithoutViewerEnChatInput = {
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloCreateNestedManyWithoutStreamerInput
    videos?: VideoCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerCreateNestedManyWithoutStreamerCInput
  }

  export type UsuarioUncheckedCreateWithoutViewerEnChatInput = {
    ID?: number
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloUncheckedCreateNestedManyWithoutStreamerInput
    videos?: VideoUncheckedCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerUncheckedCreateNestedManyWithoutStreamerCInput
  }

  export type UsuarioCreateOrConnectWithoutViewerEnChatInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutViewerEnChatInput, UsuarioUncheckedCreateWithoutViewerEnChatInput>
  }

  export type UsuarioUpsertWithoutStreamerCHatInput = {
    update: XOR<UsuarioUpdateWithoutStreamerCHatInput, UsuarioUncheckedUpdateWithoutStreamerCHatInput>
    create: XOR<UsuarioCreateWithoutStreamerCHatInput, UsuarioUncheckedCreateWithoutStreamerCHatInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutStreamerCHatInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutStreamerCHatInput, UsuarioUncheckedUpdateWithoutStreamerCHatInput>
  }

  export type UsuarioUpdateWithoutStreamerCHatInput = {
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUpdateManyWithoutStreamerNestedInput
    videos?: VideoUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUpdateManyWithoutViewerNestedInput
    viewerEnChat?: ChatStreamerUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutStreamerCHatInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUncheckedUpdateManyWithoutStreamerNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutViewerNestedInput
    viewerEnChat?: ChatStreamerUncheckedUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioUpsertWithoutViewerEnChatInput = {
    update: XOR<UsuarioUpdateWithoutViewerEnChatInput, UsuarioUncheckedUpdateWithoutViewerEnChatInput>
    create: XOR<UsuarioCreateWithoutViewerEnChatInput, UsuarioUncheckedCreateWithoutViewerEnChatInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutViewerEnChatInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutViewerEnChatInput, UsuarioUncheckedUpdateWithoutViewerEnChatInput>
  }

  export type UsuarioUpdateWithoutViewerEnChatInput = {
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUpdateManyWithoutStreamerNestedInput
    videos?: VideoUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUpdateManyWithoutStreamerCNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutViewerEnChatInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUncheckedUpdateManyWithoutStreamerNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUncheckedUpdateManyWithoutStreamerCNestedInput
  }

  export type UsuarioCreateWithoutStreamerSuscripcionesInput = {
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloCreateNestedManyWithoutStreamerInput
    videos?: VideoCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioCreateNestedManyWithoutUsuarioInput
    viewerSuscripciones?: SuscripcionCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioUncheckedCreateWithoutStreamerSuscripcionesInput = {
    ID?: number
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloUncheckedCreateNestedManyWithoutStreamerInput
    videos?: VideoUncheckedCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    viewerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerUncheckedCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerUncheckedCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioCreateOrConnectWithoutStreamerSuscripcionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutStreamerSuscripcionesInput, UsuarioUncheckedCreateWithoutStreamerSuscripcionesInput>
  }

  export type UsuarioCreateWithoutViewerSuscripcionesInput = {
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloCreateNestedManyWithoutStreamerInput
    videos?: VideoCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionCreateNestedManyWithoutStreamerInput
    streamerCHat?: ChatStreamerCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioUncheckedCreateWithoutViewerSuscripcionesInput = {
    ID?: number
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloUncheckedCreateNestedManyWithoutStreamerInput
    videos?: VideoUncheckedCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutStreamerInput
    streamerCHat?: ChatStreamerUncheckedCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerUncheckedCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioCreateOrConnectWithoutViewerSuscripcionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutViewerSuscripcionesInput, UsuarioUncheckedCreateWithoutViewerSuscripcionesInput>
  }

  export type UsuarioUpsertWithoutStreamerSuscripcionesInput = {
    update: XOR<UsuarioUpdateWithoutStreamerSuscripcionesInput, UsuarioUncheckedUpdateWithoutStreamerSuscripcionesInput>
    create: XOR<UsuarioCreateWithoutStreamerSuscripcionesInput, UsuarioUncheckedCreateWithoutStreamerSuscripcionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutStreamerSuscripcionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutStreamerSuscripcionesInput, UsuarioUncheckedUpdateWithoutStreamerSuscripcionesInput>
  }

  export type UsuarioUpdateWithoutStreamerSuscripcionesInput = {
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUpdateManyWithoutStreamerNestedInput
    videos?: VideoUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUpdateManyWithoutUsuarioNestedInput
    viewerSuscripciones?: SuscripcionUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutStreamerSuscripcionesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUncheckedUpdateManyWithoutStreamerNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    viewerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUncheckedUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUncheckedUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioUpsertWithoutViewerSuscripcionesInput = {
    update: XOR<UsuarioUpdateWithoutViewerSuscripcionesInput, UsuarioUncheckedUpdateWithoutViewerSuscripcionesInput>
    create: XOR<UsuarioCreateWithoutViewerSuscripcionesInput, UsuarioUncheckedCreateWithoutViewerSuscripcionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutViewerSuscripcionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutViewerSuscripcionesInput, UsuarioUncheckedUpdateWithoutViewerSuscripcionesInput>
  }

  export type UsuarioUpdateWithoutViewerSuscripcionesInput = {
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUpdateManyWithoutStreamerNestedInput
    videos?: VideoUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUpdateManyWithoutStreamerNestedInput
    streamerCHat?: ChatStreamerUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutViewerSuscripcionesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUncheckedUpdateManyWithoutStreamerNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutStreamerNestedInput
    streamerCHat?: ChatStreamerUncheckedUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUncheckedUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioCreateWithoutRegalosInput = {
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    videos?: VideoCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioUncheckedCreateWithoutRegalosInput = {
    ID?: number
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutUsuarioInput
    LogrosUsuario?: LogrosUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerUncheckedCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerUncheckedCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioCreateOrConnectWithoutRegalosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRegalosInput, UsuarioUncheckedCreateWithoutRegalosInput>
  }

  export type UsuarioUpsertWithoutRegalosInput = {
    update: XOR<UsuarioUpdateWithoutRegalosInput, UsuarioUncheckedUpdateWithoutRegalosInput>
    create: XOR<UsuarioCreateWithoutRegalosInput, UsuarioUncheckedCreateWithoutRegalosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRegalosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRegalosInput, UsuarioUncheckedUpdateWithoutRegalosInput>
  }

  export type UsuarioUpdateWithoutRegalosInput = {
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRegalosInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutUsuarioNestedInput
    LogrosUsuario?: LogrosUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUncheckedUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUncheckedUpdateManyWithoutViewerCNestedInput
  }

  export type JuegoCreateWithoutCategoriaInput = {
    Nombre: string
    Descripcion?: string | null
    Jogos?: JuegosEnVideoCreateNestedManyWithoutGameInput
  }

  export type JuegoUncheckedCreateWithoutCategoriaInput = {
    ID_Juego?: number
    Nombre: string
    Descripcion?: string | null
    Jogos?: JuegosEnVideoUncheckedCreateNestedManyWithoutGameInput
  }

  export type JuegoCreateOrConnectWithoutCategoriaInput = {
    where: JuegoWhereUniqueInput
    create: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput>
  }

  export type JuegoCreateManyCategoriaInputEnvelope = {
    data: JuegoCreateManyCategoriaInput | JuegoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type JuegoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: JuegoWhereUniqueInput
    update: XOR<JuegoUpdateWithoutCategoriaInput, JuegoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<JuegoCreateWithoutCategoriaInput, JuegoUncheckedCreateWithoutCategoriaInput>
  }

  export type JuegoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: JuegoWhereUniqueInput
    data: XOR<JuegoUpdateWithoutCategoriaInput, JuegoUncheckedUpdateWithoutCategoriaInput>
  }

  export type JuegoUpdateManyWithWhereWithoutCategoriaInput = {
    where: JuegoScalarWhereInput
    data: XOR<JuegoUpdateManyMutationInput, JuegoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type JuegoScalarWhereInput = {
    AND?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
    OR?: JuegoScalarWhereInput[]
    NOT?: JuegoScalarWhereInput | JuegoScalarWhereInput[]
    ID_Juego?: IntFilter<"Juego"> | number
    Nombre?: StringFilter<"Juego"> | string
    Descripcion?: StringNullableFilter<"Juego"> | string | null
    CategoriaID?: IntFilter<"Juego"> | number
  }

  export type CategoriaCreateWithoutJuegosInput = {
    Nombre: string
  }

  export type CategoriaUncheckedCreateWithoutJuegosInput = {
    ID?: number
    Nombre: string
  }

  export type CategoriaCreateOrConnectWithoutJuegosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
  }

  export type JuegosEnVideoCreateWithoutGameInput = {
    Vedeo: VideoCreateNestedOneWithoutV_DEOsInput
  }

  export type JuegosEnVideoUncheckedCreateWithoutGameInput = {
    ID_Video: number
  }

  export type JuegosEnVideoCreateOrConnectWithoutGameInput = {
    where: JuegosEnVideoWhereUniqueInput
    create: XOR<JuegosEnVideoCreateWithoutGameInput, JuegosEnVideoUncheckedCreateWithoutGameInput>
  }

  export type JuegosEnVideoCreateManyGameInputEnvelope = {
    data: JuegosEnVideoCreateManyGameInput | JuegosEnVideoCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutJuegosInput = {
    update: XOR<CategoriaUpdateWithoutJuegosInput, CategoriaUncheckedUpdateWithoutJuegosInput>
    create: XOR<CategoriaCreateWithoutJuegosInput, CategoriaUncheckedCreateWithoutJuegosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutJuegosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutJuegosInput, CategoriaUncheckedUpdateWithoutJuegosInput>
  }

  export type CategoriaUpdateWithoutJuegosInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutJuegosInput = {
    ID?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
  }

  export type JuegosEnVideoUpsertWithWhereUniqueWithoutGameInput = {
    where: JuegosEnVideoWhereUniqueInput
    update: XOR<JuegosEnVideoUpdateWithoutGameInput, JuegosEnVideoUncheckedUpdateWithoutGameInput>
    create: XOR<JuegosEnVideoCreateWithoutGameInput, JuegosEnVideoUncheckedCreateWithoutGameInput>
  }

  export type JuegosEnVideoUpdateWithWhereUniqueWithoutGameInput = {
    where: JuegosEnVideoWhereUniqueInput
    data: XOR<JuegosEnVideoUpdateWithoutGameInput, JuegosEnVideoUncheckedUpdateWithoutGameInput>
  }

  export type JuegosEnVideoUpdateManyWithWhereWithoutGameInput = {
    where: JuegosEnVideoScalarWhereInput
    data: XOR<JuegosEnVideoUpdateManyMutationInput, JuegosEnVideoUncheckedUpdateManyWithoutGameInput>
  }

  export type JuegosEnVideoScalarWhereInput = {
    AND?: JuegosEnVideoScalarWhereInput | JuegosEnVideoScalarWhereInput[]
    OR?: JuegosEnVideoScalarWhereInput[]
    NOT?: JuegosEnVideoScalarWhereInput | JuegosEnVideoScalarWhereInput[]
    ID_Juego?: IntFilter<"JuegosEnVideo"> | number
    ID_Video?: IntFilter<"JuegosEnVideo"> | number
  }

  export type JuegoCreateWithoutJogosInput = {
    Nombre: string
    Descripcion?: string | null
    categoria: CategoriaCreateNestedOneWithoutJuegosInput
  }

  export type JuegoUncheckedCreateWithoutJogosInput = {
    ID_Juego?: number
    Nombre: string
    Descripcion?: string | null
    CategoriaID: number
  }

  export type JuegoCreateOrConnectWithoutJogosInput = {
    where: JuegoWhereUniqueInput
    create: XOR<JuegoCreateWithoutJogosInput, JuegoUncheckedCreateWithoutJogosInput>
  }

  export type VideoCreateWithoutV_DEOsInput = {
    Titulo: string
    Url: string
    Duracion?: number | null
    Estado: boolean
    CategoriaDeVideo: string
    FechaSubida?: Date | string
    usuario: UsuarioCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutV_DEOsInput = {
    ID_Video?: number
    Titulo: string
    Url: string
    Duracion?: number | null
    Estado: boolean
    CategoriaDeVideo: string
    FechaSubida?: Date | string
    ID_Usuario: number
  }

  export type VideoCreateOrConnectWithoutV_DEOsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutV_DEOsInput, VideoUncheckedCreateWithoutV_DEOsInput>
  }

  export type JuegoUpsertWithoutJogosInput = {
    update: XOR<JuegoUpdateWithoutJogosInput, JuegoUncheckedUpdateWithoutJogosInput>
    create: XOR<JuegoCreateWithoutJogosInput, JuegoUncheckedCreateWithoutJogosInput>
    where?: JuegoWhereInput
  }

  export type JuegoUpdateToOneWithWhereWithoutJogosInput = {
    where?: JuegoWhereInput
    data: XOR<JuegoUpdateWithoutJogosInput, JuegoUncheckedUpdateWithoutJogosInput>
  }

  export type JuegoUpdateWithoutJogosInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutJuegosNestedInput
  }

  export type JuegoUncheckedUpdateWithoutJogosInput = {
    ID_Juego?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    CategoriaID?: IntFieldUpdateOperationsInput | number
  }

  export type VideoUpsertWithoutV_DEOsInput = {
    update: XOR<VideoUpdateWithoutV_DEOsInput, VideoUncheckedUpdateWithoutV_DEOsInput>
    create: XOR<VideoCreateWithoutV_DEOsInput, VideoUncheckedCreateWithoutV_DEOsInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutV_DEOsInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutV_DEOsInput, VideoUncheckedUpdateWithoutV_DEOsInput>
  }

  export type VideoUpdateWithoutV_DEOsInput = {
    Titulo?: StringFieldUpdateOperationsInput | string
    Url?: StringFieldUpdateOperationsInput | string
    Duracion?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: BoolFieldUpdateOperationsInput | boolean
    CategoriaDeVideo?: StringFieldUpdateOperationsInput | string
    FechaSubida?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutV_DEOsInput = {
    ID_Video?: IntFieldUpdateOperationsInput | number
    Titulo?: StringFieldUpdateOperationsInput | string
    Url?: StringFieldUpdateOperationsInput | string
    Duracion?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: BoolFieldUpdateOperationsInput | boolean
    CategoriaDeVideo?: StringFieldUpdateOperationsInput | string
    FechaSubida?: DateTimeFieldUpdateOperationsInput | Date | string
    ID_Usuario?: IntFieldUpdateOperationsInput | number
  }

  export type JuegosEnVideoCreateWithoutVedeoInput = {
    game: JuegoCreateNestedOneWithoutJogosInput
  }

  export type JuegosEnVideoUncheckedCreateWithoutVedeoInput = {
    ID_Juego: number
  }

  export type JuegosEnVideoCreateOrConnectWithoutVedeoInput = {
    where: JuegosEnVideoWhereUniqueInput
    create: XOR<JuegosEnVideoCreateWithoutVedeoInput, JuegosEnVideoUncheckedCreateWithoutVedeoInput>
  }

  export type JuegosEnVideoCreateManyVedeoInputEnvelope = {
    data: JuegosEnVideoCreateManyVedeoInput | JuegosEnVideoCreateManyVedeoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutVideosInput = {
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloCreateNestedManyWithoutStreamerInput
    LogrosUsuario?: LogrosUsuarioCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioUncheckedCreateWithoutVideosInput = {
    ID?: number
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloUncheckedCreateNestedManyWithoutStreamerInput
    LogrosUsuario?: LogrosUsuarioUncheckedCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerUncheckedCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerUncheckedCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioCreateOrConnectWithoutVideosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutVideosInput, UsuarioUncheckedCreateWithoutVideosInput>
  }

  export type JuegosEnVideoUpsertWithWhereUniqueWithoutVedeoInput = {
    where: JuegosEnVideoWhereUniqueInput
    update: XOR<JuegosEnVideoUpdateWithoutVedeoInput, JuegosEnVideoUncheckedUpdateWithoutVedeoInput>
    create: XOR<JuegosEnVideoCreateWithoutVedeoInput, JuegosEnVideoUncheckedCreateWithoutVedeoInput>
  }

  export type JuegosEnVideoUpdateWithWhereUniqueWithoutVedeoInput = {
    where: JuegosEnVideoWhereUniqueInput
    data: XOR<JuegosEnVideoUpdateWithoutVedeoInput, JuegosEnVideoUncheckedUpdateWithoutVedeoInput>
  }

  export type JuegosEnVideoUpdateManyWithWhereWithoutVedeoInput = {
    where: JuegosEnVideoScalarWhereInput
    data: XOR<JuegosEnVideoUpdateManyMutationInput, JuegosEnVideoUncheckedUpdateManyWithoutVedeoInput>
  }

  export type UsuarioUpsertWithoutVideosInput = {
    update: XOR<UsuarioUpdateWithoutVideosInput, UsuarioUncheckedUpdateWithoutVideosInput>
    create: XOR<UsuarioCreateWithoutVideosInput, UsuarioUncheckedCreateWithoutVideosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutVideosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutVideosInput, UsuarioUncheckedUpdateWithoutVideosInput>
  }

  export type UsuarioUpdateWithoutVideosInput = {
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUpdateManyWithoutStreamerNestedInput
    LogrosUsuario?: LogrosUsuarioUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutVideosInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUncheckedUpdateManyWithoutStreamerNestedInput
    LogrosUsuario?: LogrosUsuarioUncheckedUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUncheckedUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUncheckedUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioCreateWithoutLogrosUsuarioInput = {
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloCreateNestedManyWithoutStreamerInput
    videos?: VideoCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioUncheckedCreateWithoutLogrosUsuarioInput = {
    ID?: number
    NombreUsuario: string
    Contraseña: string
    email: string
    HorasTransmision: number
    Monedas: number
    EnVivo?: boolean
    ImagenPerfil: string
    NivelStreams: number
    Puntos: number
    fechaCreacion?: Date | string
    regalos?: RegaloUncheckedCreateNestedManyWithoutStreamerInput
    videos?: VideoUncheckedCreateNestedManyWithoutUsuarioInput
    streamerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutStreamerInput
    viewerSuscripciones?: SuscripcionUncheckedCreateNestedManyWithoutViewerInput
    streamerCHat?: ChatStreamerUncheckedCreateNestedManyWithoutStreamerCInput
    viewerEnChat?: ChatStreamerUncheckedCreateNestedManyWithoutViewerCInput
  }

  export type UsuarioCreateOrConnectWithoutLogrosUsuarioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLogrosUsuarioInput, UsuarioUncheckedCreateWithoutLogrosUsuarioInput>
  }

  export type LogrosCreateWithoutUsuariologrosInput = {
    Nombre: string
    descripcion: string
    Puntaje: number
  }

  export type LogrosUncheckedCreateWithoutUsuariologrosInput = {
    ID_Logro?: number
    Nombre: string
    descripcion: string
    Puntaje: number
  }

  export type LogrosCreateOrConnectWithoutUsuariologrosInput = {
    where: LogrosWhereUniqueInput
    create: XOR<LogrosCreateWithoutUsuariologrosInput, LogrosUncheckedCreateWithoutUsuariologrosInput>
  }

  export type UsuarioUpsertWithoutLogrosUsuarioInput = {
    update: XOR<UsuarioUpdateWithoutLogrosUsuarioInput, UsuarioUncheckedUpdateWithoutLogrosUsuarioInput>
    create: XOR<UsuarioCreateWithoutLogrosUsuarioInput, UsuarioUncheckedCreateWithoutLogrosUsuarioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLogrosUsuarioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLogrosUsuarioInput, UsuarioUncheckedUpdateWithoutLogrosUsuarioInput>
  }

  export type UsuarioUpdateWithoutLogrosUsuarioInput = {
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUpdateManyWithoutStreamerNestedInput
    videos?: VideoUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUpdateManyWithoutViewerCNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLogrosUsuarioInput = {
    ID?: IntFieldUpdateOperationsInput | number
    NombreUsuario?: StringFieldUpdateOperationsInput | string
    Contraseña?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    HorasTransmision?: IntFieldUpdateOperationsInput | number
    Monedas?: IntFieldUpdateOperationsInput | number
    EnVivo?: BoolFieldUpdateOperationsInput | boolean
    ImagenPerfil?: StringFieldUpdateOperationsInput | string
    NivelStreams?: IntFieldUpdateOperationsInput | number
    Puntos?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    regalos?: RegaloUncheckedUpdateManyWithoutStreamerNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUsuarioNestedInput
    streamerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutStreamerNestedInput
    viewerSuscripciones?: SuscripcionUncheckedUpdateManyWithoutViewerNestedInput
    streamerCHat?: ChatStreamerUncheckedUpdateManyWithoutStreamerCNestedInput
    viewerEnChat?: ChatStreamerUncheckedUpdateManyWithoutViewerCNestedInput
  }

  export type LogrosUpsertWithoutUsuariologrosInput = {
    update: XOR<LogrosUpdateWithoutUsuariologrosInput, LogrosUncheckedUpdateWithoutUsuariologrosInput>
    create: XOR<LogrosCreateWithoutUsuariologrosInput, LogrosUncheckedCreateWithoutUsuariologrosInput>
    where?: LogrosWhereInput
  }

  export type LogrosUpdateToOneWithWhereWithoutUsuariologrosInput = {
    where?: LogrosWhereInput
    data: XOR<LogrosUpdateWithoutUsuariologrosInput, LogrosUncheckedUpdateWithoutUsuariologrosInput>
  }

  export type LogrosUpdateWithoutUsuariologrosInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    Puntaje?: IntFieldUpdateOperationsInput | number
  }

  export type LogrosUncheckedUpdateWithoutUsuariologrosInput = {
    ID_Logro?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    Puntaje?: IntFieldUpdateOperationsInput | number
  }

  export type LogrosUsuarioCreateWithoutLogrosInput = {
    Completado?: boolean
    usuario: UsuarioCreateNestedOneWithoutLogrosUsuarioInput
  }

  export type LogrosUsuarioUncheckedCreateWithoutLogrosInput = {
    ID_Usuario: number
    Completado?: boolean
  }

  export type LogrosUsuarioCreateOrConnectWithoutLogrosInput = {
    where: LogrosUsuarioWhereUniqueInput
    create: XOR<LogrosUsuarioCreateWithoutLogrosInput, LogrosUsuarioUncheckedCreateWithoutLogrosInput>
  }

  export type LogrosUsuarioCreateManyLogrosInputEnvelope = {
    data: LogrosUsuarioCreateManyLogrosInput | LogrosUsuarioCreateManyLogrosInput[]
    skipDuplicates?: boolean
  }

  export type LogrosUsuarioUpsertWithWhereUniqueWithoutLogrosInput = {
    where: LogrosUsuarioWhereUniqueInput
    update: XOR<LogrosUsuarioUpdateWithoutLogrosInput, LogrosUsuarioUncheckedUpdateWithoutLogrosInput>
    create: XOR<LogrosUsuarioCreateWithoutLogrosInput, LogrosUsuarioUncheckedCreateWithoutLogrosInput>
  }

  export type LogrosUsuarioUpdateWithWhereUniqueWithoutLogrosInput = {
    where: LogrosUsuarioWhereUniqueInput
    data: XOR<LogrosUsuarioUpdateWithoutLogrosInput, LogrosUsuarioUncheckedUpdateWithoutLogrosInput>
  }

  export type LogrosUsuarioUpdateManyWithWhereWithoutLogrosInput = {
    where: LogrosUsuarioScalarWhereInput
    data: XOR<LogrosUsuarioUpdateManyMutationInput, LogrosUsuarioUncheckedUpdateManyWithoutLogrosInput>
  }

  export type RegaloCreateManyStreamerInput = {
    ID_Regalo?: number
    NombreRegalo: string
    PrecioRegalo: number
    DescripcionRegalo: string
    icono: string
  }

  export type VideoCreateManyUsuarioInput = {
    ID_Video?: number
    Titulo: string
    Url: string
    Duracion?: number | null
    Estado: boolean
    CategoriaDeVideo: string
    FechaSubida?: Date | string
  }

  export type LogrosUsuarioCreateManyUsuarioInput = {
    ID_Logro: number
    Completado?: boolean
  }

  export type SuscripcionCreateManyStreamerInput = {
    ID_Viewer: number
  }

  export type SuscripcionCreateManyViewerInput = {
    ID_Streamer: number
  }

  export type ChatStreamerCreateManyStreamerCInput = {
    ID_Viewer: number
    NivelViewer?: number
    Habilitado?: boolean
    Viendo: boolean
  }

  export type ChatStreamerCreateManyViewerCInput = {
    ID_Streamer: number
    NivelViewer?: number
    Habilitado?: boolean
    Viendo: boolean
  }

  export type RegaloUpdateWithoutStreamerInput = {
    NombreRegalo?: StringFieldUpdateOperationsInput | string
    PrecioRegalo?: IntFieldUpdateOperationsInput | number
    DescripcionRegalo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
  }

  export type RegaloUncheckedUpdateWithoutStreamerInput = {
    ID_Regalo?: IntFieldUpdateOperationsInput | number
    NombreRegalo?: StringFieldUpdateOperationsInput | string
    PrecioRegalo?: IntFieldUpdateOperationsInput | number
    DescripcionRegalo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
  }

  export type RegaloUncheckedUpdateManyWithoutStreamerInput = {
    ID_Regalo?: IntFieldUpdateOperationsInput | number
    NombreRegalo?: StringFieldUpdateOperationsInput | string
    PrecioRegalo?: IntFieldUpdateOperationsInput | number
    DescripcionRegalo?: StringFieldUpdateOperationsInput | string
    icono?: StringFieldUpdateOperationsInput | string
  }

  export type VideoUpdateWithoutUsuarioInput = {
    Titulo?: StringFieldUpdateOperationsInput | string
    Url?: StringFieldUpdateOperationsInput | string
    Duracion?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: BoolFieldUpdateOperationsInput | boolean
    CategoriaDeVideo?: StringFieldUpdateOperationsInput | string
    FechaSubida?: DateTimeFieldUpdateOperationsInput | Date | string
    V_DEOs?: JuegosEnVideoUpdateManyWithoutVedeoNestedInput
  }

  export type VideoUncheckedUpdateWithoutUsuarioInput = {
    ID_Video?: IntFieldUpdateOperationsInput | number
    Titulo?: StringFieldUpdateOperationsInput | string
    Url?: StringFieldUpdateOperationsInput | string
    Duracion?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: BoolFieldUpdateOperationsInput | boolean
    CategoriaDeVideo?: StringFieldUpdateOperationsInput | string
    FechaSubida?: DateTimeFieldUpdateOperationsInput | Date | string
    V_DEOs?: JuegosEnVideoUncheckedUpdateManyWithoutVedeoNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutUsuarioInput = {
    ID_Video?: IntFieldUpdateOperationsInput | number
    Titulo?: StringFieldUpdateOperationsInput | string
    Url?: StringFieldUpdateOperationsInput | string
    Duracion?: NullableIntFieldUpdateOperationsInput | number | null
    Estado?: BoolFieldUpdateOperationsInput | boolean
    CategoriaDeVideo?: StringFieldUpdateOperationsInput | string
    FechaSubida?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogrosUsuarioUpdateWithoutUsuarioInput = {
    Completado?: BoolFieldUpdateOperationsInput | boolean
    logros?: LogrosUpdateOneRequiredWithoutUsuariologrosNestedInput
  }

  export type LogrosUsuarioUncheckedUpdateWithoutUsuarioInput = {
    ID_Logro?: IntFieldUpdateOperationsInput | number
    Completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogrosUsuarioUncheckedUpdateManyWithoutUsuarioInput = {
    ID_Logro?: IntFieldUpdateOperationsInput | number
    Completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SuscripcionUpdateWithoutStreamerInput = {
    viewer?: UsuarioUpdateOneRequiredWithoutViewerSuscripcionesNestedInput
  }

  export type SuscripcionUncheckedUpdateWithoutStreamerInput = {
    ID_Viewer?: IntFieldUpdateOperationsInput | number
  }

  export type SuscripcionUncheckedUpdateManyWithoutStreamerInput = {
    ID_Viewer?: IntFieldUpdateOperationsInput | number
  }

  export type SuscripcionUpdateWithoutViewerInput = {
    streamer?: UsuarioUpdateOneRequiredWithoutStreamerSuscripcionesNestedInput
  }

  export type SuscripcionUncheckedUpdateWithoutViewerInput = {
    ID_Streamer?: IntFieldUpdateOperationsInput | number
  }

  export type SuscripcionUncheckedUpdateManyWithoutViewerInput = {
    ID_Streamer?: IntFieldUpdateOperationsInput | number
  }

  export type ChatStreamerUpdateWithoutStreamerCInput = {
    NivelViewer?: IntFieldUpdateOperationsInput | number
    Habilitado?: BoolFieldUpdateOperationsInput | boolean
    Viendo?: BoolFieldUpdateOperationsInput | boolean
    viewerC?: UsuarioUpdateOneRequiredWithoutViewerEnChatNestedInput
  }

  export type ChatStreamerUncheckedUpdateWithoutStreamerCInput = {
    ID_Viewer?: IntFieldUpdateOperationsInput | number
    NivelViewer?: IntFieldUpdateOperationsInput | number
    Habilitado?: BoolFieldUpdateOperationsInput | boolean
    Viendo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatStreamerUncheckedUpdateManyWithoutStreamerCInput = {
    ID_Viewer?: IntFieldUpdateOperationsInput | number
    NivelViewer?: IntFieldUpdateOperationsInput | number
    Habilitado?: BoolFieldUpdateOperationsInput | boolean
    Viendo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatStreamerUpdateWithoutViewerCInput = {
    NivelViewer?: IntFieldUpdateOperationsInput | number
    Habilitado?: BoolFieldUpdateOperationsInput | boolean
    Viendo?: BoolFieldUpdateOperationsInput | boolean
    streamerC?: UsuarioUpdateOneRequiredWithoutStreamerCHatNestedInput
  }

  export type ChatStreamerUncheckedUpdateWithoutViewerCInput = {
    ID_Streamer?: IntFieldUpdateOperationsInput | number
    NivelViewer?: IntFieldUpdateOperationsInput | number
    Habilitado?: BoolFieldUpdateOperationsInput | boolean
    Viendo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatStreamerUncheckedUpdateManyWithoutViewerCInput = {
    ID_Streamer?: IntFieldUpdateOperationsInput | number
    NivelViewer?: IntFieldUpdateOperationsInput | number
    Habilitado?: BoolFieldUpdateOperationsInput | boolean
    Viendo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JuegoCreateManyCategoriaInput = {
    ID_Juego?: number
    Nombre: string
    Descripcion?: string | null
  }

  export type JuegoUpdateWithoutCategoriaInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Jogos?: JuegosEnVideoUpdateManyWithoutGameNestedInput
  }

  export type JuegoUncheckedUpdateWithoutCategoriaInput = {
    ID_Juego?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Jogos?: JuegosEnVideoUncheckedUpdateManyWithoutGameNestedInput
  }

  export type JuegoUncheckedUpdateManyWithoutCategoriaInput = {
    ID_Juego?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JuegosEnVideoCreateManyGameInput = {
    ID_Video: number
  }

  export type JuegosEnVideoUpdateWithoutGameInput = {
    Vedeo?: VideoUpdateOneRequiredWithoutV_DEOsNestedInput
  }

  export type JuegosEnVideoUncheckedUpdateWithoutGameInput = {
    ID_Video?: IntFieldUpdateOperationsInput | number
  }

  export type JuegosEnVideoUncheckedUpdateManyWithoutGameInput = {
    ID_Video?: IntFieldUpdateOperationsInput | number
  }

  export type JuegosEnVideoCreateManyVedeoInput = {
    ID_Juego: number
  }

  export type JuegosEnVideoUpdateWithoutVedeoInput = {
    game?: JuegoUpdateOneRequiredWithoutJogosNestedInput
  }

  export type JuegosEnVideoUncheckedUpdateWithoutVedeoInput = {
    ID_Juego?: IntFieldUpdateOperationsInput | number
  }

  export type JuegosEnVideoUncheckedUpdateManyWithoutVedeoInput = {
    ID_Juego?: IntFieldUpdateOperationsInput | number
  }

  export type LogrosUsuarioCreateManyLogrosInput = {
    ID_Usuario: number
    Completado?: boolean
  }

  export type LogrosUsuarioUpdateWithoutLogrosInput = {
    Completado?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutLogrosUsuarioNestedInput
  }

  export type LogrosUsuarioUncheckedUpdateWithoutLogrosInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    Completado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogrosUsuarioUncheckedUpdateManyWithoutLogrosInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    Completado?: BoolFieldUpdateOperationsInput | boolean
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