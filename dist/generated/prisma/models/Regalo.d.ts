import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Regalo
 *
 */
export type RegaloModel = runtime.Types.Result.DefaultSelection<Prisma.$RegaloPayload>;
export type AggregateRegalo = {
    _count: RegaloCountAggregateOutputType | null;
    _avg: RegaloAvgAggregateOutputType | null;
    _sum: RegaloSumAggregateOutputType | null;
    _min: RegaloMinAggregateOutputType | null;
    _max: RegaloMaxAggregateOutputType | null;
};
export type RegaloAvgAggregateOutputType = {
    ID_Regalo: number | null;
    PrecioRegalo: number | null;
    ID_Streamer: number | null;
};
export type RegaloSumAggregateOutputType = {
    ID_Regalo: number | null;
    PrecioRegalo: number | null;
    ID_Streamer: number | null;
};
export type RegaloMinAggregateOutputType = {
    ID_Regalo: number | null;
    NombreRegalo: string | null;
    PrecioRegalo: number | null;
    DescripcionRegalo: string | null;
    icono: string | null;
    ID_Streamer: number | null;
};
export type RegaloMaxAggregateOutputType = {
    ID_Regalo: number | null;
    NombreRegalo: string | null;
    PrecioRegalo: number | null;
    DescripcionRegalo: string | null;
    icono: string | null;
    ID_Streamer: number | null;
};
export type RegaloCountAggregateOutputType = {
    ID_Regalo: number;
    NombreRegalo: number;
    PrecioRegalo: number;
    DescripcionRegalo: number;
    icono: number;
    ID_Streamer: number;
    _all: number;
};
export type RegaloAvgAggregateInputType = {
    ID_Regalo?: true;
    PrecioRegalo?: true;
    ID_Streamer?: true;
};
export type RegaloSumAggregateInputType = {
    ID_Regalo?: true;
    PrecioRegalo?: true;
    ID_Streamer?: true;
};
export type RegaloMinAggregateInputType = {
    ID_Regalo?: true;
    NombreRegalo?: true;
    PrecioRegalo?: true;
    DescripcionRegalo?: true;
    icono?: true;
    ID_Streamer?: true;
};
export type RegaloMaxAggregateInputType = {
    ID_Regalo?: true;
    NombreRegalo?: true;
    PrecioRegalo?: true;
    DescripcionRegalo?: true;
    icono?: true;
    ID_Streamer?: true;
};
export type RegaloCountAggregateInputType = {
    ID_Regalo?: true;
    NombreRegalo?: true;
    PrecioRegalo?: true;
    DescripcionRegalo?: true;
    icono?: true;
    ID_Streamer?: true;
    _all?: true;
};
export type RegaloAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Regalo to aggregate.
     */
    where?: Prisma.RegaloWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Regalos to fetch.
     */
    orderBy?: Prisma.RegaloOrderByWithRelationInput | Prisma.RegaloOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RegaloWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Regalos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Regalos
    **/
    _count?: true | RegaloCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RegaloAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RegaloSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RegaloMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RegaloMaxAggregateInputType;
};
export type GetRegaloAggregateType<T extends RegaloAggregateArgs> = {
    [P in keyof T & keyof AggregateRegalo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegalo[P]> : Prisma.GetScalarType<T[P], AggregateRegalo[P]>;
};
export type RegaloGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegaloWhereInput;
    orderBy?: Prisma.RegaloOrderByWithAggregationInput | Prisma.RegaloOrderByWithAggregationInput[];
    by: Prisma.RegaloScalarFieldEnum[] | Prisma.RegaloScalarFieldEnum;
    having?: Prisma.RegaloScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegaloCountAggregateInputType | true;
    _avg?: RegaloAvgAggregateInputType;
    _sum?: RegaloSumAggregateInputType;
    _min?: RegaloMinAggregateInputType;
    _max?: RegaloMaxAggregateInputType;
};
export type RegaloGroupByOutputType = {
    ID_Regalo: number;
    NombreRegalo: string;
    PrecioRegalo: number;
    DescripcionRegalo: string;
    icono: string;
    ID_Streamer: number;
    _count: RegaloCountAggregateOutputType | null;
    _avg: RegaloAvgAggregateOutputType | null;
    _sum: RegaloSumAggregateOutputType | null;
    _min: RegaloMinAggregateOutputType | null;
    _max: RegaloMaxAggregateOutputType | null;
};
type GetRegaloGroupByPayload<T extends RegaloGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegaloGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegaloGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegaloGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegaloGroupByOutputType[P]>;
}>>;
export type RegaloWhereInput = {
    AND?: Prisma.RegaloWhereInput | Prisma.RegaloWhereInput[];
    OR?: Prisma.RegaloWhereInput[];
    NOT?: Prisma.RegaloWhereInput | Prisma.RegaloWhereInput[];
    ID_Regalo?: Prisma.IntFilter<"Regalo"> | number;
    NombreRegalo?: Prisma.StringFilter<"Regalo"> | string;
    PrecioRegalo?: Prisma.IntFilter<"Regalo"> | number;
    DescripcionRegalo?: Prisma.StringFilter<"Regalo"> | string;
    icono?: Prisma.StringFilter<"Regalo"> | string;
    ID_Streamer?: Prisma.IntFilter<"Regalo"> | number;
    streamer?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type RegaloOrderByWithRelationInput = {
    ID_Regalo?: Prisma.SortOrder;
    NombreRegalo?: Prisma.SortOrder;
    PrecioRegalo?: Prisma.SortOrder;
    DescripcionRegalo?: Prisma.SortOrder;
    icono?: Prisma.SortOrder;
    ID_Streamer?: Prisma.SortOrder;
    streamer?: Prisma.UsuarioOrderByWithRelationInput;
};
export type RegaloWhereUniqueInput = Prisma.AtLeast<{
    ID_Regalo?: number;
    AND?: Prisma.RegaloWhereInput | Prisma.RegaloWhereInput[];
    OR?: Prisma.RegaloWhereInput[];
    NOT?: Prisma.RegaloWhereInput | Prisma.RegaloWhereInput[];
    NombreRegalo?: Prisma.StringFilter<"Regalo"> | string;
    PrecioRegalo?: Prisma.IntFilter<"Regalo"> | number;
    DescripcionRegalo?: Prisma.StringFilter<"Regalo"> | string;
    icono?: Prisma.StringFilter<"Regalo"> | string;
    ID_Streamer?: Prisma.IntFilter<"Regalo"> | number;
    streamer?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "ID_Regalo">;
export type RegaloOrderByWithAggregationInput = {
    ID_Regalo?: Prisma.SortOrder;
    NombreRegalo?: Prisma.SortOrder;
    PrecioRegalo?: Prisma.SortOrder;
    DescripcionRegalo?: Prisma.SortOrder;
    icono?: Prisma.SortOrder;
    ID_Streamer?: Prisma.SortOrder;
    _count?: Prisma.RegaloCountOrderByAggregateInput;
    _avg?: Prisma.RegaloAvgOrderByAggregateInput;
    _max?: Prisma.RegaloMaxOrderByAggregateInput;
    _min?: Prisma.RegaloMinOrderByAggregateInput;
    _sum?: Prisma.RegaloSumOrderByAggregateInput;
};
export type RegaloScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegaloScalarWhereWithAggregatesInput | Prisma.RegaloScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegaloScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegaloScalarWhereWithAggregatesInput | Prisma.RegaloScalarWhereWithAggregatesInput[];
    ID_Regalo?: Prisma.IntWithAggregatesFilter<"Regalo"> | number;
    NombreRegalo?: Prisma.StringWithAggregatesFilter<"Regalo"> | string;
    PrecioRegalo?: Prisma.IntWithAggregatesFilter<"Regalo"> | number;
    DescripcionRegalo?: Prisma.StringWithAggregatesFilter<"Regalo"> | string;
    icono?: Prisma.StringWithAggregatesFilter<"Regalo"> | string;
    ID_Streamer?: Prisma.IntWithAggregatesFilter<"Regalo"> | number;
};
export type RegaloCreateInput = {
    NombreRegalo: string;
    PrecioRegalo: number;
    DescripcionRegalo: string;
    icono: string;
    streamer: Prisma.UsuarioCreateNestedOneWithoutRegalosInput;
};
export type RegaloUncheckedCreateInput = {
    ID_Regalo?: number;
    NombreRegalo: string;
    PrecioRegalo: number;
    DescripcionRegalo: string;
    icono: string;
    ID_Streamer: number;
};
export type RegaloUpdateInput = {
    NombreRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    PrecioRegalo?: Prisma.IntFieldUpdateOperationsInput | number;
    DescripcionRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    icono?: Prisma.StringFieldUpdateOperationsInput | string;
    streamer?: Prisma.UsuarioUpdateOneRequiredWithoutRegalosNestedInput;
};
export type RegaloUncheckedUpdateInput = {
    ID_Regalo?: Prisma.IntFieldUpdateOperationsInput | number;
    NombreRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    PrecioRegalo?: Prisma.IntFieldUpdateOperationsInput | number;
    DescripcionRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    icono?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_Streamer?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RegaloCreateManyInput = {
    ID_Regalo?: number;
    NombreRegalo: string;
    PrecioRegalo: number;
    DescripcionRegalo: string;
    icono: string;
    ID_Streamer: number;
};
export type RegaloUpdateManyMutationInput = {
    NombreRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    PrecioRegalo?: Prisma.IntFieldUpdateOperationsInput | number;
    DescripcionRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    icono?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegaloUncheckedUpdateManyInput = {
    ID_Regalo?: Prisma.IntFieldUpdateOperationsInput | number;
    NombreRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    PrecioRegalo?: Prisma.IntFieldUpdateOperationsInput | number;
    DescripcionRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    icono?: Prisma.StringFieldUpdateOperationsInput | string;
    ID_Streamer?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type RegaloListRelationFilter = {
    every?: Prisma.RegaloWhereInput;
    some?: Prisma.RegaloWhereInput;
    none?: Prisma.RegaloWhereInput;
};
export type RegaloOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegaloCountOrderByAggregateInput = {
    ID_Regalo?: Prisma.SortOrder;
    NombreRegalo?: Prisma.SortOrder;
    PrecioRegalo?: Prisma.SortOrder;
    DescripcionRegalo?: Prisma.SortOrder;
    icono?: Prisma.SortOrder;
    ID_Streamer?: Prisma.SortOrder;
};
export type RegaloAvgOrderByAggregateInput = {
    ID_Regalo?: Prisma.SortOrder;
    PrecioRegalo?: Prisma.SortOrder;
    ID_Streamer?: Prisma.SortOrder;
};
export type RegaloMaxOrderByAggregateInput = {
    ID_Regalo?: Prisma.SortOrder;
    NombreRegalo?: Prisma.SortOrder;
    PrecioRegalo?: Prisma.SortOrder;
    DescripcionRegalo?: Prisma.SortOrder;
    icono?: Prisma.SortOrder;
    ID_Streamer?: Prisma.SortOrder;
};
export type RegaloMinOrderByAggregateInput = {
    ID_Regalo?: Prisma.SortOrder;
    NombreRegalo?: Prisma.SortOrder;
    PrecioRegalo?: Prisma.SortOrder;
    DescripcionRegalo?: Prisma.SortOrder;
    icono?: Prisma.SortOrder;
    ID_Streamer?: Prisma.SortOrder;
};
export type RegaloSumOrderByAggregateInput = {
    ID_Regalo?: Prisma.SortOrder;
    PrecioRegalo?: Prisma.SortOrder;
    ID_Streamer?: Prisma.SortOrder;
};
export type RegaloCreateNestedManyWithoutStreamerInput = {
    create?: Prisma.XOR<Prisma.RegaloCreateWithoutStreamerInput, Prisma.RegaloUncheckedCreateWithoutStreamerInput> | Prisma.RegaloCreateWithoutStreamerInput[] | Prisma.RegaloUncheckedCreateWithoutStreamerInput[];
    connectOrCreate?: Prisma.RegaloCreateOrConnectWithoutStreamerInput | Prisma.RegaloCreateOrConnectWithoutStreamerInput[];
    createMany?: Prisma.RegaloCreateManyStreamerInputEnvelope;
    connect?: Prisma.RegaloWhereUniqueInput | Prisma.RegaloWhereUniqueInput[];
};
export type RegaloUncheckedCreateNestedManyWithoutStreamerInput = {
    create?: Prisma.XOR<Prisma.RegaloCreateWithoutStreamerInput, Prisma.RegaloUncheckedCreateWithoutStreamerInput> | Prisma.RegaloCreateWithoutStreamerInput[] | Prisma.RegaloUncheckedCreateWithoutStreamerInput[];
    connectOrCreate?: Prisma.RegaloCreateOrConnectWithoutStreamerInput | Prisma.RegaloCreateOrConnectWithoutStreamerInput[];
    createMany?: Prisma.RegaloCreateManyStreamerInputEnvelope;
    connect?: Prisma.RegaloWhereUniqueInput | Prisma.RegaloWhereUniqueInput[];
};
export type RegaloUpdateManyWithoutStreamerNestedInput = {
    create?: Prisma.XOR<Prisma.RegaloCreateWithoutStreamerInput, Prisma.RegaloUncheckedCreateWithoutStreamerInput> | Prisma.RegaloCreateWithoutStreamerInput[] | Prisma.RegaloUncheckedCreateWithoutStreamerInput[];
    connectOrCreate?: Prisma.RegaloCreateOrConnectWithoutStreamerInput | Prisma.RegaloCreateOrConnectWithoutStreamerInput[];
    upsert?: Prisma.RegaloUpsertWithWhereUniqueWithoutStreamerInput | Prisma.RegaloUpsertWithWhereUniqueWithoutStreamerInput[];
    createMany?: Prisma.RegaloCreateManyStreamerInputEnvelope;
    set?: Prisma.RegaloWhereUniqueInput | Prisma.RegaloWhereUniqueInput[];
    disconnect?: Prisma.RegaloWhereUniqueInput | Prisma.RegaloWhereUniqueInput[];
    delete?: Prisma.RegaloWhereUniqueInput | Prisma.RegaloWhereUniqueInput[];
    connect?: Prisma.RegaloWhereUniqueInput | Prisma.RegaloWhereUniqueInput[];
    update?: Prisma.RegaloUpdateWithWhereUniqueWithoutStreamerInput | Prisma.RegaloUpdateWithWhereUniqueWithoutStreamerInput[];
    updateMany?: Prisma.RegaloUpdateManyWithWhereWithoutStreamerInput | Prisma.RegaloUpdateManyWithWhereWithoutStreamerInput[];
    deleteMany?: Prisma.RegaloScalarWhereInput | Prisma.RegaloScalarWhereInput[];
};
export type RegaloUncheckedUpdateManyWithoutStreamerNestedInput = {
    create?: Prisma.XOR<Prisma.RegaloCreateWithoutStreamerInput, Prisma.RegaloUncheckedCreateWithoutStreamerInput> | Prisma.RegaloCreateWithoutStreamerInput[] | Prisma.RegaloUncheckedCreateWithoutStreamerInput[];
    connectOrCreate?: Prisma.RegaloCreateOrConnectWithoutStreamerInput | Prisma.RegaloCreateOrConnectWithoutStreamerInput[];
    upsert?: Prisma.RegaloUpsertWithWhereUniqueWithoutStreamerInput | Prisma.RegaloUpsertWithWhereUniqueWithoutStreamerInput[];
    createMany?: Prisma.RegaloCreateManyStreamerInputEnvelope;
    set?: Prisma.RegaloWhereUniqueInput | Prisma.RegaloWhereUniqueInput[];
    disconnect?: Prisma.RegaloWhereUniqueInput | Prisma.RegaloWhereUniqueInput[];
    delete?: Prisma.RegaloWhereUniqueInput | Prisma.RegaloWhereUniqueInput[];
    connect?: Prisma.RegaloWhereUniqueInput | Prisma.RegaloWhereUniqueInput[];
    update?: Prisma.RegaloUpdateWithWhereUniqueWithoutStreamerInput | Prisma.RegaloUpdateWithWhereUniqueWithoutStreamerInput[];
    updateMany?: Prisma.RegaloUpdateManyWithWhereWithoutStreamerInput | Prisma.RegaloUpdateManyWithWhereWithoutStreamerInput[];
    deleteMany?: Prisma.RegaloScalarWhereInput | Prisma.RegaloScalarWhereInput[];
};
export type RegaloCreateWithoutStreamerInput = {
    NombreRegalo: string;
    PrecioRegalo: number;
    DescripcionRegalo: string;
    icono: string;
};
export type RegaloUncheckedCreateWithoutStreamerInput = {
    ID_Regalo?: number;
    NombreRegalo: string;
    PrecioRegalo: number;
    DescripcionRegalo: string;
    icono: string;
};
export type RegaloCreateOrConnectWithoutStreamerInput = {
    where: Prisma.RegaloWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegaloCreateWithoutStreamerInput, Prisma.RegaloUncheckedCreateWithoutStreamerInput>;
};
export type RegaloCreateManyStreamerInputEnvelope = {
    data: Prisma.RegaloCreateManyStreamerInput | Prisma.RegaloCreateManyStreamerInput[];
    skipDuplicates?: boolean;
};
export type RegaloUpsertWithWhereUniqueWithoutStreamerInput = {
    where: Prisma.RegaloWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegaloUpdateWithoutStreamerInput, Prisma.RegaloUncheckedUpdateWithoutStreamerInput>;
    create: Prisma.XOR<Prisma.RegaloCreateWithoutStreamerInput, Prisma.RegaloUncheckedCreateWithoutStreamerInput>;
};
export type RegaloUpdateWithWhereUniqueWithoutStreamerInput = {
    where: Prisma.RegaloWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegaloUpdateWithoutStreamerInput, Prisma.RegaloUncheckedUpdateWithoutStreamerInput>;
};
export type RegaloUpdateManyWithWhereWithoutStreamerInput = {
    where: Prisma.RegaloScalarWhereInput;
    data: Prisma.XOR<Prisma.RegaloUpdateManyMutationInput, Prisma.RegaloUncheckedUpdateManyWithoutStreamerInput>;
};
export type RegaloScalarWhereInput = {
    AND?: Prisma.RegaloScalarWhereInput | Prisma.RegaloScalarWhereInput[];
    OR?: Prisma.RegaloScalarWhereInput[];
    NOT?: Prisma.RegaloScalarWhereInput | Prisma.RegaloScalarWhereInput[];
    ID_Regalo?: Prisma.IntFilter<"Regalo"> | number;
    NombreRegalo?: Prisma.StringFilter<"Regalo"> | string;
    PrecioRegalo?: Prisma.IntFilter<"Regalo"> | number;
    DescripcionRegalo?: Prisma.StringFilter<"Regalo"> | string;
    icono?: Prisma.StringFilter<"Regalo"> | string;
    ID_Streamer?: Prisma.IntFilter<"Regalo"> | number;
};
export type RegaloCreateManyStreamerInput = {
    ID_Regalo?: number;
    NombreRegalo: string;
    PrecioRegalo: number;
    DescripcionRegalo: string;
    icono: string;
};
export type RegaloUpdateWithoutStreamerInput = {
    NombreRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    PrecioRegalo?: Prisma.IntFieldUpdateOperationsInput | number;
    DescripcionRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    icono?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegaloUncheckedUpdateWithoutStreamerInput = {
    ID_Regalo?: Prisma.IntFieldUpdateOperationsInput | number;
    NombreRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    PrecioRegalo?: Prisma.IntFieldUpdateOperationsInput | number;
    DescripcionRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    icono?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegaloUncheckedUpdateManyWithoutStreamerInput = {
    ID_Regalo?: Prisma.IntFieldUpdateOperationsInput | number;
    NombreRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    PrecioRegalo?: Prisma.IntFieldUpdateOperationsInput | number;
    DescripcionRegalo?: Prisma.StringFieldUpdateOperationsInput | string;
    icono?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegaloSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Regalo?: boolean;
    NombreRegalo?: boolean;
    PrecioRegalo?: boolean;
    DescripcionRegalo?: boolean;
    icono?: boolean;
    ID_Streamer?: boolean;
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regalo"]>;
export type RegaloSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Regalo?: boolean;
    NombreRegalo?: boolean;
    PrecioRegalo?: boolean;
    DescripcionRegalo?: boolean;
    icono?: boolean;
    ID_Streamer?: boolean;
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regalo"]>;
export type RegaloSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Regalo?: boolean;
    NombreRegalo?: boolean;
    PrecioRegalo?: boolean;
    DescripcionRegalo?: boolean;
    icono?: boolean;
    ID_Streamer?: boolean;
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regalo"]>;
export type RegaloSelectScalar = {
    ID_Regalo?: boolean;
    NombreRegalo?: boolean;
    PrecioRegalo?: boolean;
    DescripcionRegalo?: boolean;
    icono?: boolean;
    ID_Streamer?: boolean;
};
export type RegaloOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID_Regalo" | "NombreRegalo" | "PrecioRegalo" | "DescripcionRegalo" | "icono" | "ID_Streamer", ExtArgs["result"]["regalo"]>;
export type RegaloInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type RegaloIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type RegaloIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $RegaloPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Regalo";
    objects: {
        streamer: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID_Regalo: number;
        NombreRegalo: string;
        PrecioRegalo: number;
        DescripcionRegalo: string;
        icono: string;
        ID_Streamer: number;
    }, ExtArgs["result"]["regalo"]>;
    composites: {};
};
export type RegaloGetPayload<S extends boolean | null | undefined | RegaloDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegaloPayload, S>;
export type RegaloCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegaloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegaloCountAggregateInputType | true;
};
export interface RegaloDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Regalo'];
        meta: {
            name: 'Regalo';
        };
    };
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
    findUnique<T extends RegaloFindUniqueArgs>(args: Prisma.SelectSubset<T, RegaloFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegaloClient<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends RegaloFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegaloFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegaloClient<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends RegaloFindFirstArgs>(args?: Prisma.SelectSubset<T, RegaloFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegaloClient<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends RegaloFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegaloFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegaloClient<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends RegaloFindManyArgs>(args?: Prisma.SelectSubset<T, RegaloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends RegaloCreateArgs>(args: Prisma.SelectSubset<T, RegaloCreateArgs<ExtArgs>>): Prisma.Prisma__RegaloClient<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends RegaloCreateManyArgs>(args?: Prisma.SelectSubset<T, RegaloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    createManyAndReturn<T extends RegaloCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegaloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends RegaloDeleteArgs>(args: Prisma.SelectSubset<T, RegaloDeleteArgs<ExtArgs>>): Prisma.Prisma__RegaloClient<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends RegaloUpdateArgs>(args: Prisma.SelectSubset<T, RegaloUpdateArgs<ExtArgs>>): Prisma.Prisma__RegaloClient<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends RegaloDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegaloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends RegaloUpdateManyArgs>(args: Prisma.SelectSubset<T, RegaloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateManyAndReturn<T extends RegaloUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegaloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends RegaloUpsertArgs>(args: Prisma.SelectSubset<T, RegaloUpsertArgs<ExtArgs>>): Prisma.Prisma__RegaloClient<runtime.Types.Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends RegaloCountArgs>(args?: Prisma.Subset<T, RegaloCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegaloCountAggregateOutputType> : number>;
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
    aggregate<T extends RegaloAggregateArgs>(args: Prisma.Subset<T, RegaloAggregateArgs>): Prisma.PrismaPromise<GetRegaloAggregateType<T>>;
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
    groupBy<T extends RegaloGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegaloGroupByArgs['orderBy'];
    } : {
        orderBy?: RegaloGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegaloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegaloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__RegaloClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    streamer<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Regalo model
 */
export interface RegaloFieldRefs {
    readonly ID_Regalo: Prisma.FieldRef<"Regalo", 'Int'>;
    readonly NombreRegalo: Prisma.FieldRef<"Regalo", 'String'>;
    readonly PrecioRegalo: Prisma.FieldRef<"Regalo", 'Int'>;
    readonly DescripcionRegalo: Prisma.FieldRef<"Regalo", 'String'>;
    readonly icono: Prisma.FieldRef<"Regalo", 'String'>;
    readonly ID_Streamer: Prisma.FieldRef<"Regalo", 'Int'>;
}
/**
 * Regalo findUnique
 */
export type RegaloFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloInclude<ExtArgs> | null;
    /**
     * Filter, which Regalo to fetch.
     */
    where: Prisma.RegaloWhereUniqueInput;
};
/**
 * Regalo findUniqueOrThrow
 */
export type RegaloFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloInclude<ExtArgs> | null;
    /**
     * Filter, which Regalo to fetch.
     */
    where: Prisma.RegaloWhereUniqueInput;
};
/**
 * Regalo findFirst
 */
export type RegaloFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloInclude<ExtArgs> | null;
    /**
     * Filter, which Regalo to fetch.
     */
    where?: Prisma.RegaloWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Regalos to fetch.
     */
    orderBy?: Prisma.RegaloOrderByWithRelationInput | Prisma.RegaloOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Regalos.
     */
    cursor?: Prisma.RegaloWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Regalos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Regalos.
     */
    distinct?: Prisma.RegaloScalarFieldEnum | Prisma.RegaloScalarFieldEnum[];
};
/**
 * Regalo findFirstOrThrow
 */
export type RegaloFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloInclude<ExtArgs> | null;
    /**
     * Filter, which Regalo to fetch.
     */
    where?: Prisma.RegaloWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Regalos to fetch.
     */
    orderBy?: Prisma.RegaloOrderByWithRelationInput | Prisma.RegaloOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Regalos.
     */
    cursor?: Prisma.RegaloWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Regalos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Regalos.
     */
    distinct?: Prisma.RegaloScalarFieldEnum | Prisma.RegaloScalarFieldEnum[];
};
/**
 * Regalo findMany
 */
export type RegaloFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloInclude<ExtArgs> | null;
    /**
     * Filter, which Regalos to fetch.
     */
    where?: Prisma.RegaloWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Regalos to fetch.
     */
    orderBy?: Prisma.RegaloOrderByWithRelationInput | Prisma.RegaloOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Regalos.
     */
    cursor?: Prisma.RegaloWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Regalos.
     */
    skip?: number;
    distinct?: Prisma.RegaloScalarFieldEnum | Prisma.RegaloScalarFieldEnum[];
};
/**
 * Regalo create
 */
export type RegaloCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloInclude<ExtArgs> | null;
    /**
     * The data needed to create a Regalo.
     */
    data: Prisma.XOR<Prisma.RegaloCreateInput, Prisma.RegaloUncheckedCreateInput>;
};
/**
 * Regalo createMany
 */
export type RegaloCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regalos.
     */
    data: Prisma.RegaloCreateManyInput | Prisma.RegaloCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Regalo createManyAndReturn
 */
export type RegaloCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * The data used to create many Regalos.
     */
    data: Prisma.RegaloCreateManyInput | Prisma.RegaloCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Regalo update
 */
export type RegaloUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloInclude<ExtArgs> | null;
    /**
     * The data needed to update a Regalo.
     */
    data: Prisma.XOR<Prisma.RegaloUpdateInput, Prisma.RegaloUncheckedUpdateInput>;
    /**
     * Choose, which Regalo to update.
     */
    where: Prisma.RegaloWhereUniqueInput;
};
/**
 * Regalo updateMany
 */
export type RegaloUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Regalos.
     */
    data: Prisma.XOR<Prisma.RegaloUpdateManyMutationInput, Prisma.RegaloUncheckedUpdateManyInput>;
    /**
     * Filter which Regalos to update
     */
    where?: Prisma.RegaloWhereInput;
    /**
     * Limit how many Regalos to update.
     */
    limit?: number;
};
/**
 * Regalo updateManyAndReturn
 */
export type RegaloUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * The data used to update Regalos.
     */
    data: Prisma.XOR<Prisma.RegaloUpdateManyMutationInput, Prisma.RegaloUncheckedUpdateManyInput>;
    /**
     * Filter which Regalos to update
     */
    where?: Prisma.RegaloWhereInput;
    /**
     * Limit how many Regalos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Regalo upsert
 */
export type RegaloUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloInclude<ExtArgs> | null;
    /**
     * The filter to search for the Regalo to update in case it exists.
     */
    where: Prisma.RegaloWhereUniqueInput;
    /**
     * In case the Regalo found by the `where` argument doesn't exist, create a new Regalo with this data.
     */
    create: Prisma.XOR<Prisma.RegaloCreateInput, Prisma.RegaloUncheckedCreateInput>;
    /**
     * In case the Regalo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RegaloUpdateInput, Prisma.RegaloUncheckedUpdateInput>;
};
/**
 * Regalo delete
 */
export type RegaloDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloInclude<ExtArgs> | null;
    /**
     * Filter which Regalo to delete.
     */
    where: Prisma.RegaloWhereUniqueInput;
};
/**
 * Regalo deleteMany
 */
export type RegaloDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Regalos to delete
     */
    where?: Prisma.RegaloWhereInput;
    /**
     * Limit how many Regalos to delete.
     */
    limit?: number;
};
/**
 * Regalo without action
 */
export type RegaloDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: Prisma.RegaloSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Regalo
     */
    omit?: Prisma.RegaloOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RegaloInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Regalo.d.ts.map