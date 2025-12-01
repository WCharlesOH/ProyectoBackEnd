import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly Usuario: "Usuario";
    readonly ChatStreamer: "ChatStreamer";
    readonly Suscripcion: "Suscripcion";
    readonly Regalo: "Regalo";
    readonly Categoria: "Categoria";
    readonly Juego: "Juego";
    readonly JuegosEnVideo: "JuegosEnVideo";
    readonly Video: "Video";
    readonly Logros: "Logros";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly ID: "ID";
    readonly NombreUsuario: "NombreUsuario";
    readonly Contraseña: "Contraseña";
    readonly email: "email";
    readonly HorasTransmision: "HorasTransmision";
    readonly Monedas: "Monedas";
    readonly EnVivo: "EnVivo";
    readonly ImagenPerfil: "ImagenPerfil";
    readonly NivelStreams: "NivelStreams";
    readonly Puntos: "Puntos";
    readonly fechaCreacion: "fechaCreacion";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const ChatStreamerScalarFieldEnum: {
    readonly ID_Streamer: "ID_Streamer";
    readonly ID_Viewer: "ID_Viewer";
    readonly NivelViewer: "NivelViewer";
    readonly Habilitado: "Habilitado";
    readonly Viendo: "Viendo";
};
export type ChatStreamerScalarFieldEnum = (typeof ChatStreamerScalarFieldEnum)[keyof typeof ChatStreamerScalarFieldEnum];
export declare const SuscripcionScalarFieldEnum: {
    readonly ID_Streamer: "ID_Streamer";
    readonly ID_Viewer: "ID_Viewer";
};
export type SuscripcionScalarFieldEnum = (typeof SuscripcionScalarFieldEnum)[keyof typeof SuscripcionScalarFieldEnum];
export declare const RegaloScalarFieldEnum: {
    readonly ID_Regalo: "ID_Regalo";
    readonly NombreRegalo: "NombreRegalo";
    readonly PrecioRegalo: "PrecioRegalo";
    readonly DescripcionRegalo: "DescripcionRegalo";
    readonly icono: "icono";
    readonly ID_Streamer: "ID_Streamer";
};
export type RegaloScalarFieldEnum = (typeof RegaloScalarFieldEnum)[keyof typeof RegaloScalarFieldEnum];
export declare const CategoriaScalarFieldEnum: {
    readonly ID: "ID";
    readonly Nombre: "Nombre";
};
export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum];
export declare const JuegoScalarFieldEnum: {
    readonly ID_Juego: "ID_Juego";
    readonly Nombre: "Nombre";
    readonly Descripcion: "Descripcion";
    readonly CategoriaID: "CategoriaID";
};
export type JuegoScalarFieldEnum = (typeof JuegoScalarFieldEnum)[keyof typeof JuegoScalarFieldEnum];
export declare const JuegosEnVideoScalarFieldEnum: {
    readonly ID_Juego: "ID_Juego";
    readonly ID_Video: "ID_Video";
};
export type JuegosEnVideoScalarFieldEnum = (typeof JuegosEnVideoScalarFieldEnum)[keyof typeof JuegosEnVideoScalarFieldEnum];
export declare const VideoScalarFieldEnum: {
    readonly ID_Video: "ID_Video";
    readonly Titulo: "Titulo";
    readonly Url: "Url";
    readonly Duracion: "Duracion";
    readonly Estado: "Estado";
    readonly CategoriaDeVideo: "CategoriaDeVideo";
    readonly FechaSubida: "FechaSubida";
    readonly ID_Usuario: "ID_Usuario";
};
export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum];
export declare const LogrosScalarFieldEnum: {
    readonly ID_Logro: "ID_Logro";
    readonly Nombre: "Nombre";
    readonly Puntaje: "Puntaje";
    readonly Completado: "Completado";
    readonly ID_Usuario: "ID_Usuario";
};
export type LogrosScalarFieldEnum = (typeof LogrosScalarFieldEnum)[keyof typeof LogrosScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map