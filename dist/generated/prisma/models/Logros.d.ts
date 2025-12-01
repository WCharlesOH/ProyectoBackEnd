import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Logros
 *
 */
export type LogrosModel = runtime.Types.Result.DefaultSelection<Prisma.$LogrosPayload>;
export type AggregateLogros = {
    _count: LogrosCountAggregateOutputType | null;
    _avg: LogrosAvgAggregateOutputType | null;
    _sum: LogrosSumAggregateOutputType | null;
    _min: LogrosMinAggregateOutputType | null;
    _max: LogrosMaxAggregateOutputType | null;
};
export type LogrosAvgAggregateOutputType = {
    ID_Logro: number | null;
    Puntaje: number | null;
    ID_Usuario: number | null;
};
export type LogrosSumAggregateOutputType = {
    ID_Logro: number | null;
    Puntaje: number | null;
    ID_Usuario: number | null;
};
export type LogrosMinAggregateOutputType = {
    ID_Logro: number | null;
    Nombre: string | null;
    Puntaje: number | null;
    Completado: boolean | null;
    ID_Usuario: number | null;
};
export type LogrosMaxAggregateOutputType = {
    ID_Logro: number | null;
    Nombre: string | null;
    Puntaje: number | null;
    Completado: boolean | null;
    ID_Usuario: number | null;
};
export type LogrosCountAggregateOutputType = {
    ID_Logro: number;
    Nombre: number;
    Puntaje: number;
    Completado: number;
    ID_Usuario: number;
    _all: number;
};
export type LogrosAvgAggregateInputType = {
    ID_Logro?: true;
    Puntaje?: true;
    ID_Usuario?: true;
};
export type LogrosSumAggregateInputType = {
    ID_Logro?: true;
    Puntaje?: true;
    ID_Usuario?: true;
};
export type LogrosMinAggregateInputType = {
    ID_Logro?: true;
    Nombre?: true;
    Puntaje?: true;
    Completado?: true;
    ID_Usuario?: true;
};
export type LogrosMaxAggregateInputType = {
    ID_Logro?: true;
    Nombre?: true;
    Puntaje?: true;
    Completado?: true;
    ID_Usuario?: true;
};
export type LogrosCountAggregateInputType = {
    ID_Logro?: true;
    Nombre?: true;
    Puntaje?: true;
    Completado?: true;
    ID_Usuario?: true;
    _all?: true;
};
export type LogrosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Logros to aggregate.
     */
    where?: Prisma.LogrosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Logros to fetch.
     */
    orderBy?: Prisma.LogrosOrderByWithRelationInput | Prisma.LogrosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LogrosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Logros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Logros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Logros
    **/
    _count?: true | LogrosCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LogrosAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LogrosSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LogrosMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LogrosMaxAggregateInputType;
};
export type GetLogrosAggregateType<T extends LogrosAggregateArgs> = {
    [P in keyof T & keyof AggregateLogros]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLogros[P]> : Prisma.GetScalarType<T[P], AggregateLogros[P]>;
};
export type LogrosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LogrosWhereInput;
    orderBy?: Prisma.LogrosOrderByWithAggregationInput | Prisma.LogrosOrderByWithAggregationInput[];
    by: Prisma.LogrosScalarFieldEnum[] | Prisma.LogrosScalarFieldEnum;
    having?: Prisma.LogrosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LogrosCountAggregateInputType | true;
    _avg?: LogrosAvgAggregateInputType;
    _sum?: LogrosSumAggregateInputType;
    _min?: LogrosMinAggregateInputType;
    _max?: LogrosMaxAggregateInputType;
};
export type LogrosGroupByOutputType = {
    ID_Logro: number;
    Nombre: string;
    Puntaje: number;
    Completado: boolean;
    ID_Usuario: number;
    _count: LogrosCountAggregateOutputType | null;
    _avg: LogrosAvgAggregateOutputType | null;
    _sum: LogrosSumAggregateOutputType | null;
    _min: LogrosMinAggregateOutputType | null;
    _max: LogrosMaxAggregateOutputType | null;
};
type GetLogrosGroupByPayload<T extends LogrosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LogrosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LogrosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LogrosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LogrosGroupByOutputType[P]>;
}>>;
export type LogrosWhereInput = {
    AND?: Prisma.LogrosWhereInput | Prisma.LogrosWhereInput[];
    OR?: Prisma.LogrosWhereInput[];
    NOT?: Prisma.LogrosWhereInput | Prisma.LogrosWhereInput[];
    ID_Logro?: Prisma.IntFilter<"Logros"> | number;
    Nombre?: Prisma.StringFilter<"Logros"> | string;
    Puntaje?: Prisma.IntFilter<"Logros"> | number;
    Completado?: Prisma.BoolFilter<"Logros"> | boolean;
    ID_Usuario?: Prisma.IntFilter<"Logros"> | number;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type LogrosOrderByWithRelationInput = {
    ID_Logro?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Puntaje?: Prisma.SortOrder;
    Completado?: Prisma.SortOrder;
    ID_Usuario?: Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
};
export type LogrosWhereUniqueInput = Prisma.AtLeast<{
    ID_Logro?: number;
    Nombre?: string;
    AND?: Prisma.LogrosWhereInput | Prisma.LogrosWhereInput[];
    OR?: Prisma.LogrosWhereInput[];
    NOT?: Prisma.LogrosWhereInput | Prisma.LogrosWhereInput[];
    Puntaje?: Prisma.IntFilter<"Logros"> | number;
    Completado?: Prisma.BoolFilter<"Logros"> | boolean;
    ID_Usuario?: Prisma.IntFilter<"Logros"> | number;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "ID_Logro" | "Nombre">;
export type LogrosOrderByWithAggregationInput = {
    ID_Logro?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Puntaje?: Prisma.SortOrder;
    Completado?: Prisma.SortOrder;
    ID_Usuario?: Prisma.SortOrder;
    _count?: Prisma.LogrosCountOrderByAggregateInput;
    _avg?: Prisma.LogrosAvgOrderByAggregateInput;
    _max?: Prisma.LogrosMaxOrderByAggregateInput;
    _min?: Prisma.LogrosMinOrderByAggregateInput;
    _sum?: Prisma.LogrosSumOrderByAggregateInput;
};
export type LogrosScalarWhereWithAggregatesInput = {
    AND?: Prisma.LogrosScalarWhereWithAggregatesInput | Prisma.LogrosScalarWhereWithAggregatesInput[];
    OR?: Prisma.LogrosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LogrosScalarWhereWithAggregatesInput | Prisma.LogrosScalarWhereWithAggregatesInput[];
    ID_Logro?: Prisma.IntWithAggregatesFilter<"Logros"> | number;
    Nombre?: Prisma.StringWithAggregatesFilter<"Logros"> | string;
    Puntaje?: Prisma.IntWithAggregatesFilter<"Logros"> | number;
    Completado?: Prisma.BoolWithAggregatesFilter<"Logros"> | boolean;
    ID_Usuario?: Prisma.IntWithAggregatesFilter<"Logros"> | number;
};
export type LogrosCreateInput = {
    Nombre: string;
    Puntaje: number;
    Completado?: boolean;
    usuario: Prisma.UsuarioCreateNestedOneWithoutLogrosInput;
};
export type LogrosUncheckedCreateInput = {
    ID_Logro?: number;
    Nombre: string;
    Puntaje: number;
    Completado?: boolean;
    ID_Usuario: number;
};
export type LogrosUpdateInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Puntaje?: Prisma.IntFieldUpdateOperationsInput | number;
    Completado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutLogrosNestedInput;
};
export type LogrosUncheckedUpdateInput = {
    ID_Logro?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Puntaje?: Prisma.IntFieldUpdateOperationsInput | number;
    Completado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ID_Usuario?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LogrosCreateManyInput = {
    ID_Logro?: number;
    Nombre: string;
    Puntaje: number;
    Completado?: boolean;
    ID_Usuario: number;
};
export type LogrosUpdateManyMutationInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Puntaje?: Prisma.IntFieldUpdateOperationsInput | number;
    Completado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LogrosUncheckedUpdateManyInput = {
    ID_Logro?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Puntaje?: Prisma.IntFieldUpdateOperationsInput | number;
    Completado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ID_Usuario?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LogrosListRelationFilter = {
    every?: Prisma.LogrosWhereInput;
    some?: Prisma.LogrosWhereInput;
    none?: Prisma.LogrosWhereInput;
};
export type LogrosOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LogrosCountOrderByAggregateInput = {
    ID_Logro?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Puntaje?: Prisma.SortOrder;
    Completado?: Prisma.SortOrder;
    ID_Usuario?: Prisma.SortOrder;
};
export type LogrosAvgOrderByAggregateInput = {
    ID_Logro?: Prisma.SortOrder;
    Puntaje?: Prisma.SortOrder;
    ID_Usuario?: Prisma.SortOrder;
};
export type LogrosMaxOrderByAggregateInput = {
    ID_Logro?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Puntaje?: Prisma.SortOrder;
    Completado?: Prisma.SortOrder;
    ID_Usuario?: Prisma.SortOrder;
};
export type LogrosMinOrderByAggregateInput = {
    ID_Logro?: Prisma.SortOrder;
    Nombre?: Prisma.SortOrder;
    Puntaje?: Prisma.SortOrder;
    Completado?: Prisma.SortOrder;
    ID_Usuario?: Prisma.SortOrder;
};
export type LogrosSumOrderByAggregateInput = {
    ID_Logro?: Prisma.SortOrder;
    Puntaje?: Prisma.SortOrder;
    ID_Usuario?: Prisma.SortOrder;
};
export type LogrosCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.LogrosCreateWithoutUsuarioInput, Prisma.LogrosUncheckedCreateWithoutUsuarioInput> | Prisma.LogrosCreateWithoutUsuarioInput[] | Prisma.LogrosUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.LogrosCreateOrConnectWithoutUsuarioInput | Prisma.LogrosCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.LogrosCreateManyUsuarioInputEnvelope;
    connect?: Prisma.LogrosWhereUniqueInput | Prisma.LogrosWhereUniqueInput[];
};
export type LogrosUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.LogrosCreateWithoutUsuarioInput, Prisma.LogrosUncheckedCreateWithoutUsuarioInput> | Prisma.LogrosCreateWithoutUsuarioInput[] | Prisma.LogrosUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.LogrosCreateOrConnectWithoutUsuarioInput | Prisma.LogrosCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.LogrosCreateManyUsuarioInputEnvelope;
    connect?: Prisma.LogrosWhereUniqueInput | Prisma.LogrosWhereUniqueInput[];
};
export type LogrosUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.LogrosCreateWithoutUsuarioInput, Prisma.LogrosUncheckedCreateWithoutUsuarioInput> | Prisma.LogrosCreateWithoutUsuarioInput[] | Prisma.LogrosUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.LogrosCreateOrConnectWithoutUsuarioInput | Prisma.LogrosCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.LogrosUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.LogrosUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.LogrosCreateManyUsuarioInputEnvelope;
    set?: Prisma.LogrosWhereUniqueInput | Prisma.LogrosWhereUniqueInput[];
    disconnect?: Prisma.LogrosWhereUniqueInput | Prisma.LogrosWhereUniqueInput[];
    delete?: Prisma.LogrosWhereUniqueInput | Prisma.LogrosWhereUniqueInput[];
    connect?: Prisma.LogrosWhereUniqueInput | Prisma.LogrosWhereUniqueInput[];
    update?: Prisma.LogrosUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.LogrosUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.LogrosUpdateManyWithWhereWithoutUsuarioInput | Prisma.LogrosUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.LogrosScalarWhereInput | Prisma.LogrosScalarWhereInput[];
};
export type LogrosUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.LogrosCreateWithoutUsuarioInput, Prisma.LogrosUncheckedCreateWithoutUsuarioInput> | Prisma.LogrosCreateWithoutUsuarioInput[] | Prisma.LogrosUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.LogrosCreateOrConnectWithoutUsuarioInput | Prisma.LogrosCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.LogrosUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.LogrosUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.LogrosCreateManyUsuarioInputEnvelope;
    set?: Prisma.LogrosWhereUniqueInput | Prisma.LogrosWhereUniqueInput[];
    disconnect?: Prisma.LogrosWhereUniqueInput | Prisma.LogrosWhereUniqueInput[];
    delete?: Prisma.LogrosWhereUniqueInput | Prisma.LogrosWhereUniqueInput[];
    connect?: Prisma.LogrosWhereUniqueInput | Prisma.LogrosWhereUniqueInput[];
    update?: Prisma.LogrosUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.LogrosUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.LogrosUpdateManyWithWhereWithoutUsuarioInput | Prisma.LogrosUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.LogrosScalarWhereInput | Prisma.LogrosScalarWhereInput[];
};
export type LogrosCreateWithoutUsuarioInput = {
    Nombre: string;
    Puntaje: number;
    Completado?: boolean;
};
export type LogrosUncheckedCreateWithoutUsuarioInput = {
    ID_Logro?: number;
    Nombre: string;
    Puntaje: number;
    Completado?: boolean;
};
export type LogrosCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.LogrosWhereUniqueInput;
    create: Prisma.XOR<Prisma.LogrosCreateWithoutUsuarioInput, Prisma.LogrosUncheckedCreateWithoutUsuarioInput>;
};
export type LogrosCreateManyUsuarioInputEnvelope = {
    data: Prisma.LogrosCreateManyUsuarioInput | Prisma.LogrosCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type LogrosUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.LogrosWhereUniqueInput;
    update: Prisma.XOR<Prisma.LogrosUpdateWithoutUsuarioInput, Prisma.LogrosUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.LogrosCreateWithoutUsuarioInput, Prisma.LogrosUncheckedCreateWithoutUsuarioInput>;
};
export type LogrosUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.LogrosWhereUniqueInput;
    data: Prisma.XOR<Prisma.LogrosUpdateWithoutUsuarioInput, Prisma.LogrosUncheckedUpdateWithoutUsuarioInput>;
};
export type LogrosUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.LogrosScalarWhereInput;
    data: Prisma.XOR<Prisma.LogrosUpdateManyMutationInput, Prisma.LogrosUncheckedUpdateManyWithoutUsuarioInput>;
};
export type LogrosScalarWhereInput = {
    AND?: Prisma.LogrosScalarWhereInput | Prisma.LogrosScalarWhereInput[];
    OR?: Prisma.LogrosScalarWhereInput[];
    NOT?: Prisma.LogrosScalarWhereInput | Prisma.LogrosScalarWhereInput[];
    ID_Logro?: Prisma.IntFilter<"Logros"> | number;
    Nombre?: Prisma.StringFilter<"Logros"> | string;
    Puntaje?: Prisma.IntFilter<"Logros"> | number;
    Completado?: Prisma.BoolFilter<"Logros"> | boolean;
    ID_Usuario?: Prisma.IntFilter<"Logros"> | number;
};
export type LogrosCreateManyUsuarioInput = {
    ID_Logro?: number;
    Nombre: string;
    Puntaje: number;
    Completado?: boolean;
};
export type LogrosUpdateWithoutUsuarioInput = {
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Puntaje?: Prisma.IntFieldUpdateOperationsInput | number;
    Completado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LogrosUncheckedUpdateWithoutUsuarioInput = {
    ID_Logro?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Puntaje?: Prisma.IntFieldUpdateOperationsInput | number;
    Completado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LogrosUncheckedUpdateManyWithoutUsuarioInput = {
    ID_Logro?: Prisma.IntFieldUpdateOperationsInput | number;
    Nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    Puntaje?: Prisma.IntFieldUpdateOperationsInput | number;
    Completado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LogrosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Logro?: boolean;
    Nombre?: boolean;
    Puntaje?: boolean;
    Completado?: boolean;
    ID_Usuario?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["logros"]>;
export type LogrosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Logro?: boolean;
    Nombre?: boolean;
    Puntaje?: boolean;
    Completado?: boolean;
    ID_Usuario?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["logros"]>;
export type LogrosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Logro?: boolean;
    Nombre?: boolean;
    Puntaje?: boolean;
    Completado?: boolean;
    ID_Usuario?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["logros"]>;
export type LogrosSelectScalar = {
    ID_Logro?: boolean;
    Nombre?: boolean;
    Puntaje?: boolean;
    Completado?: boolean;
    ID_Usuario?: boolean;
};
export type LogrosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID_Logro" | "Nombre" | "Puntaje" | "Completado" | "ID_Usuario", ExtArgs["result"]["logros"]>;
export type LogrosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type LogrosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type LogrosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $LogrosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Logros";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID_Logro: number;
        Nombre: string;
        Puntaje: number;
        Completado: boolean;
        ID_Usuario: number;
    }, ExtArgs["result"]["logros"]>;
    composites: {};
};
export type LogrosGetPayload<S extends boolean | null | undefined | LogrosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LogrosPayload, S>;
export type LogrosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LogrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LogrosCountAggregateInputType | true;
};
export interface LogrosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Logros'];
        meta: {
            name: 'Logros';
        };
    };
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
    findUnique<T extends LogrosFindUniqueArgs>(args: Prisma.SelectSubset<T, LogrosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LogrosClient<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends LogrosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LogrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LogrosClient<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends LogrosFindFirstArgs>(args?: Prisma.SelectSubset<T, LogrosFindFirstArgs<ExtArgs>>): Prisma.Prisma__LogrosClient<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends LogrosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LogrosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LogrosClient<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends LogrosFindManyArgs>(args?: Prisma.SelectSubset<T, LogrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends LogrosCreateArgs>(args: Prisma.SelectSubset<T, LogrosCreateArgs<ExtArgs>>): Prisma.Prisma__LogrosClient<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends LogrosCreateManyArgs>(args?: Prisma.SelectSubset<T, LogrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    createManyAndReturn<T extends LogrosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LogrosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends LogrosDeleteArgs>(args: Prisma.SelectSubset<T, LogrosDeleteArgs<ExtArgs>>): Prisma.Prisma__LogrosClient<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends LogrosUpdateArgs>(args: Prisma.SelectSubset<T, LogrosUpdateArgs<ExtArgs>>): Prisma.Prisma__LogrosClient<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends LogrosDeleteManyArgs>(args?: Prisma.SelectSubset<T, LogrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends LogrosUpdateManyArgs>(args: Prisma.SelectSubset<T, LogrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateManyAndReturn<T extends LogrosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LogrosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends LogrosUpsertArgs>(args: Prisma.SelectSubset<T, LogrosUpsertArgs<ExtArgs>>): Prisma.Prisma__LogrosClient<runtime.Types.Result.GetResult<Prisma.$LogrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends LogrosCountArgs>(args?: Prisma.Subset<T, LogrosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LogrosCountAggregateOutputType> : number>;
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
    aggregate<T extends LogrosAggregateArgs>(args: Prisma.Subset<T, LogrosAggregateArgs>): Prisma.PrismaPromise<GetLogrosAggregateType<T>>;
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
    groupBy<T extends LogrosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LogrosGroupByArgs['orderBy'];
    } : {
        orderBy?: LogrosGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LogrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__LogrosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Logros model
 */
export interface LogrosFieldRefs {
    readonly ID_Logro: Prisma.FieldRef<"Logros", 'Int'>;
    readonly Nombre: Prisma.FieldRef<"Logros", 'String'>;
    readonly Puntaje: Prisma.FieldRef<"Logros", 'Int'>;
    readonly Completado: Prisma.FieldRef<"Logros", 'Boolean'>;
    readonly ID_Usuario: Prisma.FieldRef<"Logros", 'Int'>;
}
/**
 * Logros findUnique
 */
export type LogrosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosInclude<ExtArgs> | null;
    /**
     * Filter, which Logros to fetch.
     */
    where: Prisma.LogrosWhereUniqueInput;
};
/**
 * Logros findUniqueOrThrow
 */
export type LogrosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosInclude<ExtArgs> | null;
    /**
     * Filter, which Logros to fetch.
     */
    where: Prisma.LogrosWhereUniqueInput;
};
/**
 * Logros findFirst
 */
export type LogrosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosInclude<ExtArgs> | null;
    /**
     * Filter, which Logros to fetch.
     */
    where?: Prisma.LogrosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Logros to fetch.
     */
    orderBy?: Prisma.LogrosOrderByWithRelationInput | Prisma.LogrosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Logros.
     */
    cursor?: Prisma.LogrosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Logros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Logros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Logros.
     */
    distinct?: Prisma.LogrosScalarFieldEnum | Prisma.LogrosScalarFieldEnum[];
};
/**
 * Logros findFirstOrThrow
 */
export type LogrosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosInclude<ExtArgs> | null;
    /**
     * Filter, which Logros to fetch.
     */
    where?: Prisma.LogrosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Logros to fetch.
     */
    orderBy?: Prisma.LogrosOrderByWithRelationInput | Prisma.LogrosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Logros.
     */
    cursor?: Prisma.LogrosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Logros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Logros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Logros.
     */
    distinct?: Prisma.LogrosScalarFieldEnum | Prisma.LogrosScalarFieldEnum[];
};
/**
 * Logros findMany
 */
export type LogrosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosInclude<ExtArgs> | null;
    /**
     * Filter, which Logros to fetch.
     */
    where?: Prisma.LogrosWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Logros to fetch.
     */
    orderBy?: Prisma.LogrosOrderByWithRelationInput | Prisma.LogrosOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Logros.
     */
    cursor?: Prisma.LogrosWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Logros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Logros.
     */
    skip?: number;
    distinct?: Prisma.LogrosScalarFieldEnum | Prisma.LogrosScalarFieldEnum[];
};
/**
 * Logros create
 */
export type LogrosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosInclude<ExtArgs> | null;
    /**
     * The data needed to create a Logros.
     */
    data: Prisma.XOR<Prisma.LogrosCreateInput, Prisma.LogrosUncheckedCreateInput>;
};
/**
 * Logros createMany
 */
export type LogrosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logros.
     */
    data: Prisma.LogrosCreateManyInput | Prisma.LogrosCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Logros createManyAndReturn
 */
export type LogrosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * The data used to create many Logros.
     */
    data: Prisma.LogrosCreateManyInput | Prisma.LogrosCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Logros update
 */
export type LogrosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosInclude<ExtArgs> | null;
    /**
     * The data needed to update a Logros.
     */
    data: Prisma.XOR<Prisma.LogrosUpdateInput, Prisma.LogrosUncheckedUpdateInput>;
    /**
     * Choose, which Logros to update.
     */
    where: Prisma.LogrosWhereUniqueInput;
};
/**
 * Logros updateMany
 */
export type LogrosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Logros.
     */
    data: Prisma.XOR<Prisma.LogrosUpdateManyMutationInput, Prisma.LogrosUncheckedUpdateManyInput>;
    /**
     * Filter which Logros to update
     */
    where?: Prisma.LogrosWhereInput;
    /**
     * Limit how many Logros to update.
     */
    limit?: number;
};
/**
 * Logros updateManyAndReturn
 */
export type LogrosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * The data used to update Logros.
     */
    data: Prisma.XOR<Prisma.LogrosUpdateManyMutationInput, Prisma.LogrosUncheckedUpdateManyInput>;
    /**
     * Filter which Logros to update
     */
    where?: Prisma.LogrosWhereInput;
    /**
     * Limit how many Logros to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Logros upsert
 */
export type LogrosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosInclude<ExtArgs> | null;
    /**
     * The filter to search for the Logros to update in case it exists.
     */
    where: Prisma.LogrosWhereUniqueInput;
    /**
     * In case the Logros found by the `where` argument doesn't exist, create a new Logros with this data.
     */
    create: Prisma.XOR<Prisma.LogrosCreateInput, Prisma.LogrosUncheckedCreateInput>;
    /**
     * In case the Logros was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LogrosUpdateInput, Prisma.LogrosUncheckedUpdateInput>;
};
/**
 * Logros delete
 */
export type LogrosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosInclude<ExtArgs> | null;
    /**
     * Filter which Logros to delete.
     */
    where: Prisma.LogrosWhereUniqueInput;
};
/**
 * Logros deleteMany
 */
export type LogrosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Logros to delete
     */
    where?: Prisma.LogrosWhereInput;
    /**
     * Limit how many Logros to delete.
     */
    limit?: number;
};
/**
 * Logros without action
 */
export type LogrosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Logros
     */
    select?: Prisma.LogrosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Logros
     */
    omit?: Prisma.LogrosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LogrosInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Logros.d.ts.map