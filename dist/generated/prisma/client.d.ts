import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
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
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Usuario
 *
 */
export type Usuario = Prisma.UsuarioModel;
/**
 * Model ChatStreamer
 *
 */
export type ChatStreamer = Prisma.ChatStreamerModel;
/**
 * Model Suscripcion
 *
 */
export type Suscripcion = Prisma.SuscripcionModel;
/**
 * Model Regalo
 *
 */
export type Regalo = Prisma.RegaloModel;
/**
 * Model Categoria
 *
 */
export type Categoria = Prisma.CategoriaModel;
/**
 * Model Juego
 *
 */
export type Juego = Prisma.JuegoModel;
/**
 * Model JuegosEnVideo
 *
 */
export type JuegosEnVideo = Prisma.JuegosEnVideoModel;
/**
 * Model Video
 *
 */
export type Video = Prisma.VideoModel;
/**
 * Model Logros
 *
 */
export type Logros = Prisma.LogrosModel;
//# sourceMappingURL=client.d.ts.map