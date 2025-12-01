import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Suscripcion
 *
 */
export type SuscripcionModel = runtime.Types.Result.DefaultSelection<Prisma.$SuscripcionPayload>;
export type AggregateSuscripcion = {
    _count: SuscripcionCountAggregateOutputType | null;
    _avg: SuscripcionAvgAggregateOutputType | null;
    _sum: SuscripcionSumAggregateOutputType | null;
    _min: SuscripcionMinAggregateOutputType | null;
    _max: SuscripcionMaxAggregateOutputType | null;
};
export type SuscripcionAvgAggregateOutputType = {
    ID_Streamer: number | null;
    ID_Viewer: number | null;
};
export type SuscripcionSumAggregateOutputType = {
    ID_Streamer: number | null;
    ID_Viewer: number | null;
};
export type SuscripcionMinAggregateOutputType = {
    ID_Streamer: number | null;
    ID_Viewer: number | null;
};
export type SuscripcionMaxAggregateOutputType = {
    ID_Streamer: number | null;
    ID_Viewer: number | null;
};
export type SuscripcionCountAggregateOutputType = {
    ID_Streamer: number;
    ID_Viewer: number;
    _all: number;
};
export type SuscripcionAvgAggregateInputType = {
    ID_Streamer?: true;
    ID_Viewer?: true;
};
export type SuscripcionSumAggregateInputType = {
    ID_Streamer?: true;
    ID_Viewer?: true;
};
export type SuscripcionMinAggregateInputType = {
    ID_Streamer?: true;
    ID_Viewer?: true;
};
export type SuscripcionMaxAggregateInputType = {
    ID_Streamer?: true;
    ID_Viewer?: true;
};
export type SuscripcionCountAggregateInputType = {
    ID_Streamer?: true;
    ID_Viewer?: true;
    _all?: true;
};
export type SuscripcionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Suscripcion to aggregate.
     */
    where?: Prisma.SuscripcionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suscripcions to fetch.
     */
    orderBy?: Prisma.SuscripcionOrderByWithRelationInput | Prisma.SuscripcionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SuscripcionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suscripcions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suscripcions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Suscripcions
    **/
    _count?: true | SuscripcionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SuscripcionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SuscripcionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SuscripcionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SuscripcionMaxAggregateInputType;
};
export type GetSuscripcionAggregateType<T extends SuscripcionAggregateArgs> = {
    [P in keyof T & keyof AggregateSuscripcion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSuscripcion[P]> : Prisma.GetScalarType<T[P], AggregateSuscripcion[P]>;
};
export type SuscripcionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SuscripcionWhereInput;
    orderBy?: Prisma.SuscripcionOrderByWithAggregationInput | Prisma.SuscripcionOrderByWithAggregationInput[];
    by: Prisma.SuscripcionScalarFieldEnum[] | Prisma.SuscripcionScalarFieldEnum;
    having?: Prisma.SuscripcionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SuscripcionCountAggregateInputType | true;
    _avg?: SuscripcionAvgAggregateInputType;
    _sum?: SuscripcionSumAggregateInputType;
    _min?: SuscripcionMinAggregateInputType;
    _max?: SuscripcionMaxAggregateInputType;
};
export type SuscripcionGroupByOutputType = {
    ID_Streamer: number;
    ID_Viewer: number;
    _count: SuscripcionCountAggregateOutputType | null;
    _avg: SuscripcionAvgAggregateOutputType | null;
    _sum: SuscripcionSumAggregateOutputType | null;
    _min: SuscripcionMinAggregateOutputType | null;
    _max: SuscripcionMaxAggregateOutputType | null;
};
type GetSuscripcionGroupByPayload<T extends SuscripcionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SuscripcionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SuscripcionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SuscripcionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SuscripcionGroupByOutputType[P]>;
}>>;
export type SuscripcionWhereInput = {
    AND?: Prisma.SuscripcionWhereInput | Prisma.SuscripcionWhereInput[];
    OR?: Prisma.SuscripcionWhereInput[];
    NOT?: Prisma.SuscripcionWhereInput | Prisma.SuscripcionWhereInput[];
    ID_Streamer?: Prisma.IntFilter<"Suscripcion"> | number;
    ID_Viewer?: Prisma.IntFilter<"Suscripcion"> | number;
    streamer?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    viewer?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type SuscripcionOrderByWithRelationInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
    streamer?: Prisma.UsuarioOrderByWithRelationInput;
    viewer?: Prisma.UsuarioOrderByWithRelationInput;
};
export type SuscripcionWhereUniqueInput = Prisma.AtLeast<{
    ID_Streamer_ID_Viewer?: Prisma.SuscripcionID_StreamerID_ViewerCompoundUniqueInput;
    AND?: Prisma.SuscripcionWhereInput | Prisma.SuscripcionWhereInput[];
    OR?: Prisma.SuscripcionWhereInput[];
    NOT?: Prisma.SuscripcionWhereInput | Prisma.SuscripcionWhereInput[];
    ID_Streamer?: Prisma.IntFilter<"Suscripcion"> | number;
    ID_Viewer?: Prisma.IntFilter<"Suscripcion"> | number;
    streamer?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    viewer?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "ID_Streamer_ID_Viewer">;
export type SuscripcionOrderByWithAggregationInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
    _count?: Prisma.SuscripcionCountOrderByAggregateInput;
    _avg?: Prisma.SuscripcionAvgOrderByAggregateInput;
    _max?: Prisma.SuscripcionMaxOrderByAggregateInput;
    _min?: Prisma.SuscripcionMinOrderByAggregateInput;
    _sum?: Prisma.SuscripcionSumOrderByAggregateInput;
};
export type SuscripcionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SuscripcionScalarWhereWithAggregatesInput | Prisma.SuscripcionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SuscripcionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SuscripcionScalarWhereWithAggregatesInput | Prisma.SuscripcionScalarWhereWithAggregatesInput[];
    ID_Streamer?: Prisma.IntWithAggregatesFilter<"Suscripcion"> | number;
    ID_Viewer?: Prisma.IntWithAggregatesFilter<"Suscripcion"> | number;
};
export type SuscripcionCreateInput = {
    streamer: Prisma.UsuarioCreateNestedOneWithoutStreamerSuscripcionesInput;
    viewer: Prisma.UsuarioCreateNestedOneWithoutViewerSuscripcionesInput;
};
export type SuscripcionUncheckedCreateInput = {
    ID_Streamer: number;
    ID_Viewer: number;
};
export type SuscripcionUpdateInput = {
    streamer?: Prisma.UsuarioUpdateOneRequiredWithoutStreamerSuscripcionesNestedInput;
    viewer?: Prisma.UsuarioUpdateOneRequiredWithoutViewerSuscripcionesNestedInput;
};
export type SuscripcionUncheckedUpdateInput = {
    ID_Streamer?: Prisma.IntFieldUpdateOperationsInput | number;
    ID_Viewer?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuscripcionCreateManyInput = {
    ID_Streamer: number;
    ID_Viewer: number;
};
export type SuscripcionUpdateManyMutationInput = {};
export type SuscripcionUncheckedUpdateManyInput = {
    ID_Streamer?: Prisma.IntFieldUpdateOperationsInput | number;
    ID_Viewer?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuscripcionListRelationFilter = {
    every?: Prisma.SuscripcionWhereInput;
    some?: Prisma.SuscripcionWhereInput;
    none?: Prisma.SuscripcionWhereInput;
};
export type SuscripcionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SuscripcionID_StreamerID_ViewerCompoundUniqueInput = {
    ID_Streamer: number;
    ID_Viewer: number;
};
export type SuscripcionCountOrderByAggregateInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
};
export type SuscripcionAvgOrderByAggregateInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
};
export type SuscripcionMaxOrderByAggregateInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
};
export type SuscripcionMinOrderByAggregateInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
};
export type SuscripcionSumOrderByAggregateInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
};
export type SuscripcionCreateNestedManyWithoutStreamerInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutStreamerInput, Prisma.SuscripcionUncheckedCreateWithoutStreamerInput> | Prisma.SuscripcionCreateWithoutStreamerInput[] | Prisma.SuscripcionUncheckedCreateWithoutStreamerInput[];
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutStreamerInput | Prisma.SuscripcionCreateOrConnectWithoutStreamerInput[];
    createMany?: Prisma.SuscripcionCreateManyStreamerInputEnvelope;
    connect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
};
export type SuscripcionCreateNestedManyWithoutViewerInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutViewerInput, Prisma.SuscripcionUncheckedCreateWithoutViewerInput> | Prisma.SuscripcionCreateWithoutViewerInput[] | Prisma.SuscripcionUncheckedCreateWithoutViewerInput[];
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutViewerInput | Prisma.SuscripcionCreateOrConnectWithoutViewerInput[];
    createMany?: Prisma.SuscripcionCreateManyViewerInputEnvelope;
    connect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
};
export type SuscripcionUncheckedCreateNestedManyWithoutStreamerInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutStreamerInput, Prisma.SuscripcionUncheckedCreateWithoutStreamerInput> | Prisma.SuscripcionCreateWithoutStreamerInput[] | Prisma.SuscripcionUncheckedCreateWithoutStreamerInput[];
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutStreamerInput | Prisma.SuscripcionCreateOrConnectWithoutStreamerInput[];
    createMany?: Prisma.SuscripcionCreateManyStreamerInputEnvelope;
    connect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
};
export type SuscripcionUncheckedCreateNestedManyWithoutViewerInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutViewerInput, Prisma.SuscripcionUncheckedCreateWithoutViewerInput> | Prisma.SuscripcionCreateWithoutViewerInput[] | Prisma.SuscripcionUncheckedCreateWithoutViewerInput[];
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutViewerInput | Prisma.SuscripcionCreateOrConnectWithoutViewerInput[];
    createMany?: Prisma.SuscripcionCreateManyViewerInputEnvelope;
    connect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
};
export type SuscripcionUpdateManyWithoutStreamerNestedInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutStreamerInput, Prisma.SuscripcionUncheckedCreateWithoutStreamerInput> | Prisma.SuscripcionCreateWithoutStreamerInput[] | Prisma.SuscripcionUncheckedCreateWithoutStreamerInput[];
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutStreamerInput | Prisma.SuscripcionCreateOrConnectWithoutStreamerInput[];
    upsert?: Prisma.SuscripcionUpsertWithWhereUniqueWithoutStreamerInput | Prisma.SuscripcionUpsertWithWhereUniqueWithoutStreamerInput[];
    createMany?: Prisma.SuscripcionCreateManyStreamerInputEnvelope;
    set?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    disconnect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    delete?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    connect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    update?: Prisma.SuscripcionUpdateWithWhereUniqueWithoutStreamerInput | Prisma.SuscripcionUpdateWithWhereUniqueWithoutStreamerInput[];
    updateMany?: Prisma.SuscripcionUpdateManyWithWhereWithoutStreamerInput | Prisma.SuscripcionUpdateManyWithWhereWithoutStreamerInput[];
    deleteMany?: Prisma.SuscripcionScalarWhereInput | Prisma.SuscripcionScalarWhereInput[];
};
export type SuscripcionUpdateManyWithoutViewerNestedInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutViewerInput, Prisma.SuscripcionUncheckedCreateWithoutViewerInput> | Prisma.SuscripcionCreateWithoutViewerInput[] | Prisma.SuscripcionUncheckedCreateWithoutViewerInput[];
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutViewerInput | Prisma.SuscripcionCreateOrConnectWithoutViewerInput[];
    upsert?: Prisma.SuscripcionUpsertWithWhereUniqueWithoutViewerInput | Prisma.SuscripcionUpsertWithWhereUniqueWithoutViewerInput[];
    createMany?: Prisma.SuscripcionCreateManyViewerInputEnvelope;
    set?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    disconnect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    delete?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    connect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    update?: Prisma.SuscripcionUpdateWithWhereUniqueWithoutViewerInput | Prisma.SuscripcionUpdateWithWhereUniqueWithoutViewerInput[];
    updateMany?: Prisma.SuscripcionUpdateManyWithWhereWithoutViewerInput | Prisma.SuscripcionUpdateManyWithWhereWithoutViewerInput[];
    deleteMany?: Prisma.SuscripcionScalarWhereInput | Prisma.SuscripcionScalarWhereInput[];
};
export type SuscripcionUncheckedUpdateManyWithoutStreamerNestedInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutStreamerInput, Prisma.SuscripcionUncheckedCreateWithoutStreamerInput> | Prisma.SuscripcionCreateWithoutStreamerInput[] | Prisma.SuscripcionUncheckedCreateWithoutStreamerInput[];
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutStreamerInput | Prisma.SuscripcionCreateOrConnectWithoutStreamerInput[];
    upsert?: Prisma.SuscripcionUpsertWithWhereUniqueWithoutStreamerInput | Prisma.SuscripcionUpsertWithWhereUniqueWithoutStreamerInput[];
    createMany?: Prisma.SuscripcionCreateManyStreamerInputEnvelope;
    set?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    disconnect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    delete?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    connect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    update?: Prisma.SuscripcionUpdateWithWhereUniqueWithoutStreamerInput | Prisma.SuscripcionUpdateWithWhereUniqueWithoutStreamerInput[];
    updateMany?: Prisma.SuscripcionUpdateManyWithWhereWithoutStreamerInput | Prisma.SuscripcionUpdateManyWithWhereWithoutStreamerInput[];
    deleteMany?: Prisma.SuscripcionScalarWhereInput | Prisma.SuscripcionScalarWhereInput[];
};
export type SuscripcionUncheckedUpdateManyWithoutViewerNestedInput = {
    create?: Prisma.XOR<Prisma.SuscripcionCreateWithoutViewerInput, Prisma.SuscripcionUncheckedCreateWithoutViewerInput> | Prisma.SuscripcionCreateWithoutViewerInput[] | Prisma.SuscripcionUncheckedCreateWithoutViewerInput[];
    connectOrCreate?: Prisma.SuscripcionCreateOrConnectWithoutViewerInput | Prisma.SuscripcionCreateOrConnectWithoutViewerInput[];
    upsert?: Prisma.SuscripcionUpsertWithWhereUniqueWithoutViewerInput | Prisma.SuscripcionUpsertWithWhereUniqueWithoutViewerInput[];
    createMany?: Prisma.SuscripcionCreateManyViewerInputEnvelope;
    set?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    disconnect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    delete?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    connect?: Prisma.SuscripcionWhereUniqueInput | Prisma.SuscripcionWhereUniqueInput[];
    update?: Prisma.SuscripcionUpdateWithWhereUniqueWithoutViewerInput | Prisma.SuscripcionUpdateWithWhereUniqueWithoutViewerInput[];
    updateMany?: Prisma.SuscripcionUpdateManyWithWhereWithoutViewerInput | Prisma.SuscripcionUpdateManyWithWhereWithoutViewerInput[];
    deleteMany?: Prisma.SuscripcionScalarWhereInput | Prisma.SuscripcionScalarWhereInput[];
};
export type SuscripcionCreateWithoutStreamerInput = {
    viewer: Prisma.UsuarioCreateNestedOneWithoutViewerSuscripcionesInput;
};
export type SuscripcionUncheckedCreateWithoutStreamerInput = {
    ID_Viewer: number;
};
export type SuscripcionCreateOrConnectWithoutStreamerInput = {
    where: Prisma.SuscripcionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuscripcionCreateWithoutStreamerInput, Prisma.SuscripcionUncheckedCreateWithoutStreamerInput>;
};
export type SuscripcionCreateManyStreamerInputEnvelope = {
    data: Prisma.SuscripcionCreateManyStreamerInput | Prisma.SuscripcionCreateManyStreamerInput[];
    skipDuplicates?: boolean;
};
export type SuscripcionCreateWithoutViewerInput = {
    streamer: Prisma.UsuarioCreateNestedOneWithoutStreamerSuscripcionesInput;
};
export type SuscripcionUncheckedCreateWithoutViewerInput = {
    ID_Streamer: number;
};
export type SuscripcionCreateOrConnectWithoutViewerInput = {
    where: Prisma.SuscripcionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SuscripcionCreateWithoutViewerInput, Prisma.SuscripcionUncheckedCreateWithoutViewerInput>;
};
export type SuscripcionCreateManyViewerInputEnvelope = {
    data: Prisma.SuscripcionCreateManyViewerInput | Prisma.SuscripcionCreateManyViewerInput[];
    skipDuplicates?: boolean;
};
export type SuscripcionUpsertWithWhereUniqueWithoutStreamerInput = {
    where: Prisma.SuscripcionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SuscripcionUpdateWithoutStreamerInput, Prisma.SuscripcionUncheckedUpdateWithoutStreamerInput>;
    create: Prisma.XOR<Prisma.SuscripcionCreateWithoutStreamerInput, Prisma.SuscripcionUncheckedCreateWithoutStreamerInput>;
};
export type SuscripcionUpdateWithWhereUniqueWithoutStreamerInput = {
    where: Prisma.SuscripcionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SuscripcionUpdateWithoutStreamerInput, Prisma.SuscripcionUncheckedUpdateWithoutStreamerInput>;
};
export type SuscripcionUpdateManyWithWhereWithoutStreamerInput = {
    where: Prisma.SuscripcionScalarWhereInput;
    data: Prisma.XOR<Prisma.SuscripcionUpdateManyMutationInput, Prisma.SuscripcionUncheckedUpdateManyWithoutStreamerInput>;
};
export type SuscripcionScalarWhereInput = {
    AND?: Prisma.SuscripcionScalarWhereInput | Prisma.SuscripcionScalarWhereInput[];
    OR?: Prisma.SuscripcionScalarWhereInput[];
    NOT?: Prisma.SuscripcionScalarWhereInput | Prisma.SuscripcionScalarWhereInput[];
    ID_Streamer?: Prisma.IntFilter<"Suscripcion"> | number;
    ID_Viewer?: Prisma.IntFilter<"Suscripcion"> | number;
};
export type SuscripcionUpsertWithWhereUniqueWithoutViewerInput = {
    where: Prisma.SuscripcionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SuscripcionUpdateWithoutViewerInput, Prisma.SuscripcionUncheckedUpdateWithoutViewerInput>;
    create: Prisma.XOR<Prisma.SuscripcionCreateWithoutViewerInput, Prisma.SuscripcionUncheckedCreateWithoutViewerInput>;
};
export type SuscripcionUpdateWithWhereUniqueWithoutViewerInput = {
    where: Prisma.SuscripcionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SuscripcionUpdateWithoutViewerInput, Prisma.SuscripcionUncheckedUpdateWithoutViewerInput>;
};
export type SuscripcionUpdateManyWithWhereWithoutViewerInput = {
    where: Prisma.SuscripcionScalarWhereInput;
    data: Prisma.XOR<Prisma.SuscripcionUpdateManyMutationInput, Prisma.SuscripcionUncheckedUpdateManyWithoutViewerInput>;
};
export type SuscripcionCreateManyStreamerInput = {
    ID_Viewer: number;
};
export type SuscripcionCreateManyViewerInput = {
    ID_Streamer: number;
};
export type SuscripcionUpdateWithoutStreamerInput = {
    viewer?: Prisma.UsuarioUpdateOneRequiredWithoutViewerSuscripcionesNestedInput;
};
export type SuscripcionUncheckedUpdateWithoutStreamerInput = {
    ID_Viewer?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuscripcionUncheckedUpdateManyWithoutStreamerInput = {
    ID_Viewer?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuscripcionUpdateWithoutViewerInput = {
    streamer?: Prisma.UsuarioUpdateOneRequiredWithoutStreamerSuscripcionesNestedInput;
};
export type SuscripcionUncheckedUpdateWithoutViewerInput = {
    ID_Streamer?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuscripcionUncheckedUpdateManyWithoutViewerInput = {
    ID_Streamer?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SuscripcionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Streamer?: boolean;
    ID_Viewer?: boolean;
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suscripcion"]>;
export type SuscripcionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Streamer?: boolean;
    ID_Viewer?: boolean;
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suscripcion"]>;
export type SuscripcionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Streamer?: boolean;
    ID_Viewer?: boolean;
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["suscripcion"]>;
export type SuscripcionSelectScalar = {
    ID_Streamer?: boolean;
    ID_Viewer?: boolean;
};
export type SuscripcionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID_Streamer" | "ID_Viewer", ExtArgs["result"]["suscripcion"]>;
export type SuscripcionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type SuscripcionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type SuscripcionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    streamer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewer?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $SuscripcionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Suscripcion";
    objects: {
        streamer: Prisma.$UsuarioPayload<ExtArgs>;
        viewer: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID_Streamer: number;
        ID_Viewer: number;
    }, ExtArgs["result"]["suscripcion"]>;
    composites: {};
};
export type SuscripcionGetPayload<S extends boolean | null | undefined | SuscripcionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload, S>;
export type SuscripcionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SuscripcionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SuscripcionCountAggregateInputType | true;
};
export interface SuscripcionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Suscripcion'];
        meta: {
            name: 'Suscripcion';
        };
    };
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
    findUnique<T extends SuscripcionFindUniqueArgs>(args: Prisma.SelectSubset<T, SuscripcionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends SuscripcionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SuscripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends SuscripcionFindFirstArgs>(args?: Prisma.SelectSubset<T, SuscripcionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends SuscripcionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SuscripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends SuscripcionFindManyArgs>(args?: Prisma.SelectSubset<T, SuscripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends SuscripcionCreateArgs>(args: Prisma.SelectSubset<T, SuscripcionCreateArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends SuscripcionCreateManyArgs>(args?: Prisma.SelectSubset<T, SuscripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    createManyAndReturn<T extends SuscripcionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SuscripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends SuscripcionDeleteArgs>(args: Prisma.SelectSubset<T, SuscripcionDeleteArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends SuscripcionUpdateArgs>(args: Prisma.SelectSubset<T, SuscripcionUpdateArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends SuscripcionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SuscripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends SuscripcionUpdateManyArgs>(args: Prisma.SelectSubset<T, SuscripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateManyAndReturn<T extends SuscripcionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SuscripcionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends SuscripcionUpsertArgs>(args: Prisma.SelectSubset<T, SuscripcionUpsertArgs<ExtArgs>>): Prisma.Prisma__SuscripcionClient<runtime.Types.Result.GetResult<Prisma.$SuscripcionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends SuscripcionCountArgs>(args?: Prisma.Subset<T, SuscripcionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SuscripcionCountAggregateOutputType> : number>;
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
    aggregate<T extends SuscripcionAggregateArgs>(args: Prisma.Subset<T, SuscripcionAggregateArgs>): Prisma.PrismaPromise<GetSuscripcionAggregateType<T>>;
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
    groupBy<T extends SuscripcionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SuscripcionGroupByArgs['orderBy'];
    } : {
        orderBy?: SuscripcionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SuscripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuscripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__SuscripcionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    streamer<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    viewer<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Suscripcion model
 */
export interface SuscripcionFieldRefs {
    readonly ID_Streamer: Prisma.FieldRef<"Suscripcion", 'Int'>;
    readonly ID_Viewer: Prisma.FieldRef<"Suscripcion", 'Int'>;
}
/**
 * Suscripcion findUnique
 */
export type SuscripcionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    /**
     * Filter, which Suscripcion to fetch.
     */
    where: Prisma.SuscripcionWhereUniqueInput;
};
/**
 * Suscripcion findUniqueOrThrow
 */
export type SuscripcionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    /**
     * Filter, which Suscripcion to fetch.
     */
    where: Prisma.SuscripcionWhereUniqueInput;
};
/**
 * Suscripcion findFirst
 */
export type SuscripcionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    /**
     * Filter, which Suscripcion to fetch.
     */
    where?: Prisma.SuscripcionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suscripcions to fetch.
     */
    orderBy?: Prisma.SuscripcionOrderByWithRelationInput | Prisma.SuscripcionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Suscripcions.
     */
    cursor?: Prisma.SuscripcionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suscripcions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suscripcions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Suscripcions.
     */
    distinct?: Prisma.SuscripcionScalarFieldEnum | Prisma.SuscripcionScalarFieldEnum[];
};
/**
 * Suscripcion findFirstOrThrow
 */
export type SuscripcionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    /**
     * Filter, which Suscripcion to fetch.
     */
    where?: Prisma.SuscripcionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suscripcions to fetch.
     */
    orderBy?: Prisma.SuscripcionOrderByWithRelationInput | Prisma.SuscripcionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Suscripcions.
     */
    cursor?: Prisma.SuscripcionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suscripcions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suscripcions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Suscripcions.
     */
    distinct?: Prisma.SuscripcionScalarFieldEnum | Prisma.SuscripcionScalarFieldEnum[];
};
/**
 * Suscripcion findMany
 */
export type SuscripcionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    /**
     * Filter, which Suscripcions to fetch.
     */
    where?: Prisma.SuscripcionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suscripcions to fetch.
     */
    orderBy?: Prisma.SuscripcionOrderByWithRelationInput | Prisma.SuscripcionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Suscripcions.
     */
    cursor?: Prisma.SuscripcionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suscripcions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suscripcions.
     */
    skip?: number;
    distinct?: Prisma.SuscripcionScalarFieldEnum | Prisma.SuscripcionScalarFieldEnum[];
};
/**
 * Suscripcion create
 */
export type SuscripcionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    /**
     * The data needed to create a Suscripcion.
     */
    data: Prisma.XOR<Prisma.SuscripcionCreateInput, Prisma.SuscripcionUncheckedCreateInput>;
};
/**
 * Suscripcion createMany
 */
export type SuscripcionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suscripcions.
     */
    data: Prisma.SuscripcionCreateManyInput | Prisma.SuscripcionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Suscripcion createManyAndReturn
 */
export type SuscripcionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * The data used to create many Suscripcions.
     */
    data: Prisma.SuscripcionCreateManyInput | Prisma.SuscripcionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Suscripcion update
 */
export type SuscripcionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    /**
     * The data needed to update a Suscripcion.
     */
    data: Prisma.XOR<Prisma.SuscripcionUpdateInput, Prisma.SuscripcionUncheckedUpdateInput>;
    /**
     * Choose, which Suscripcion to update.
     */
    where: Prisma.SuscripcionWhereUniqueInput;
};
/**
 * Suscripcion updateMany
 */
export type SuscripcionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Suscripcions.
     */
    data: Prisma.XOR<Prisma.SuscripcionUpdateManyMutationInput, Prisma.SuscripcionUncheckedUpdateManyInput>;
    /**
     * Filter which Suscripcions to update
     */
    where?: Prisma.SuscripcionWhereInput;
    /**
     * Limit how many Suscripcions to update.
     */
    limit?: number;
};
/**
 * Suscripcion updateManyAndReturn
 */
export type SuscripcionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * The data used to update Suscripcions.
     */
    data: Prisma.XOR<Prisma.SuscripcionUpdateManyMutationInput, Prisma.SuscripcionUncheckedUpdateManyInput>;
    /**
     * Filter which Suscripcions to update
     */
    where?: Prisma.SuscripcionWhereInput;
    /**
     * Limit how many Suscripcions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Suscripcion upsert
 */
export type SuscripcionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    /**
     * The filter to search for the Suscripcion to update in case it exists.
     */
    where: Prisma.SuscripcionWhereUniqueInput;
    /**
     * In case the Suscripcion found by the `where` argument doesn't exist, create a new Suscripcion with this data.
     */
    create: Prisma.XOR<Prisma.SuscripcionCreateInput, Prisma.SuscripcionUncheckedCreateInput>;
    /**
     * In case the Suscripcion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SuscripcionUpdateInput, Prisma.SuscripcionUncheckedUpdateInput>;
};
/**
 * Suscripcion delete
 */
export type SuscripcionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
    /**
     * Filter which Suscripcion to delete.
     */
    where: Prisma.SuscripcionWhereUniqueInput;
};
/**
 * Suscripcion deleteMany
 */
export type SuscripcionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Suscripcions to delete
     */
    where?: Prisma.SuscripcionWhereInput;
    /**
     * Limit how many Suscripcions to delete.
     */
    limit?: number;
};
/**
 * Suscripcion without action
 */
export type SuscripcionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suscripcion
     */
    select?: Prisma.SuscripcionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Suscripcion
     */
    omit?: Prisma.SuscripcionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SuscripcionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Suscripcion.d.ts.map