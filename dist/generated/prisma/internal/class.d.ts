import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Usuarios
  * const usuarios = await prisma.usuario.findMany()
  * ```
  */
    get usuario(): Prisma.UsuarioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.chatStreamer`: Exposes CRUD operations for the **ChatStreamer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ChatStreamers
      * const chatStreamers = await prisma.chatStreamer.findMany()
      * ```
      */
    get chatStreamer(): Prisma.ChatStreamerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.suscripcion`: Exposes CRUD operations for the **Suscripcion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Suscripcions
      * const suscripcions = await prisma.suscripcion.findMany()
      * ```
      */
    get suscripcion(): Prisma.SuscripcionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.regalo`: Exposes CRUD operations for the **Regalo** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Regalos
      * const regalos = await prisma.regalo.findMany()
      * ```
      */
    get regalo(): Prisma.RegaloDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Categorias
      * const categorias = await prisma.categoria.findMany()
      * ```
      */
    get categoria(): Prisma.CategoriaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.juego`: Exposes CRUD operations for the **Juego** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Juegos
      * const juegos = await prisma.juego.findMany()
      * ```
      */
    get juego(): Prisma.JuegoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.juegosEnVideo`: Exposes CRUD operations for the **JuegosEnVideo** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more JuegosEnVideos
      * const juegosEnVideos = await prisma.juegosEnVideo.findMany()
      * ```
      */
    get juegosEnVideo(): Prisma.JuegosEnVideoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.video`: Exposes CRUD operations for the **Video** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Videos
      * const videos = await prisma.video.findMany()
      * ```
      */
    get video(): Prisma.VideoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.logros`: Exposes CRUD operations for the **Logros** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Logros
      * const logros = await prisma.logros.findMany()
      * ```
      */
    get logros(): Prisma.LogrosDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map