import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ChatStreamer
 *
 */
export type ChatStreamerModel = runtime.Types.Result.DefaultSelection<Prisma.$ChatStreamerPayload>;
export type AggregateChatStreamer = {
    _count: ChatStreamerCountAggregateOutputType | null;
    _avg: ChatStreamerAvgAggregateOutputType | null;
    _sum: ChatStreamerSumAggregateOutputType | null;
    _min: ChatStreamerMinAggregateOutputType | null;
    _max: ChatStreamerMaxAggregateOutputType | null;
};
export type ChatStreamerAvgAggregateOutputType = {
    ID_Streamer: number | null;
    ID_Viewer: number | null;
    NivelViewer: number | null;
};
export type ChatStreamerSumAggregateOutputType = {
    ID_Streamer: number | null;
    ID_Viewer: number | null;
    NivelViewer: number | null;
};
export type ChatStreamerMinAggregateOutputType = {
    ID_Streamer: number | null;
    ID_Viewer: number | null;
    NivelViewer: number | null;
    Habilitado: boolean | null;
    Viendo: boolean | null;
};
export type ChatStreamerMaxAggregateOutputType = {
    ID_Streamer: number | null;
    ID_Viewer: number | null;
    NivelViewer: number | null;
    Habilitado: boolean | null;
    Viendo: boolean | null;
};
export type ChatStreamerCountAggregateOutputType = {
    ID_Streamer: number;
    ID_Viewer: number;
    NivelViewer: number;
    Habilitado: number;
    Viendo: number;
    _all: number;
};
export type ChatStreamerAvgAggregateInputType = {
    ID_Streamer?: true;
    ID_Viewer?: true;
    NivelViewer?: true;
};
export type ChatStreamerSumAggregateInputType = {
    ID_Streamer?: true;
    ID_Viewer?: true;
    NivelViewer?: true;
};
export type ChatStreamerMinAggregateInputType = {
    ID_Streamer?: true;
    ID_Viewer?: true;
    NivelViewer?: true;
    Habilitado?: true;
    Viendo?: true;
};
export type ChatStreamerMaxAggregateInputType = {
    ID_Streamer?: true;
    ID_Viewer?: true;
    NivelViewer?: true;
    Habilitado?: true;
    Viendo?: true;
};
export type ChatStreamerCountAggregateInputType = {
    ID_Streamer?: true;
    ID_Viewer?: true;
    NivelViewer?: true;
    Habilitado?: true;
    Viendo?: true;
    _all?: true;
};
export type ChatStreamerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ChatStreamer to aggregate.
     */
    where?: Prisma.ChatStreamerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatStreamers to fetch.
     */
    orderBy?: Prisma.ChatStreamerOrderByWithRelationInput | Prisma.ChatStreamerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ChatStreamerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatStreamers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatStreamers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ChatStreamers
    **/
    _count?: true | ChatStreamerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ChatStreamerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ChatStreamerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ChatStreamerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ChatStreamerMaxAggregateInputType;
};
export type GetChatStreamerAggregateType<T extends ChatStreamerAggregateArgs> = {
    [P in keyof T & keyof AggregateChatStreamer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChatStreamer[P]> : Prisma.GetScalarType<T[P], AggregateChatStreamer[P]>;
};
export type ChatStreamerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatStreamerWhereInput;
    orderBy?: Prisma.ChatStreamerOrderByWithAggregationInput | Prisma.ChatStreamerOrderByWithAggregationInput[];
    by: Prisma.ChatStreamerScalarFieldEnum[] | Prisma.ChatStreamerScalarFieldEnum;
    having?: Prisma.ChatStreamerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChatStreamerCountAggregateInputType | true;
    _avg?: ChatStreamerAvgAggregateInputType;
    _sum?: ChatStreamerSumAggregateInputType;
    _min?: ChatStreamerMinAggregateInputType;
    _max?: ChatStreamerMaxAggregateInputType;
};
export type ChatStreamerGroupByOutputType = {
    ID_Streamer: number;
    ID_Viewer: number;
    NivelViewer: number;
    Habilitado: boolean;
    Viendo: boolean;
    _count: ChatStreamerCountAggregateOutputType | null;
    _avg: ChatStreamerAvgAggregateOutputType | null;
    _sum: ChatStreamerSumAggregateOutputType | null;
    _min: ChatStreamerMinAggregateOutputType | null;
    _max: ChatStreamerMaxAggregateOutputType | null;
};
type GetChatStreamerGroupByPayload<T extends ChatStreamerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChatStreamerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChatStreamerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChatStreamerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChatStreamerGroupByOutputType[P]>;
}>>;
export type ChatStreamerWhereInput = {
    AND?: Prisma.ChatStreamerWhereInput | Prisma.ChatStreamerWhereInput[];
    OR?: Prisma.ChatStreamerWhereInput[];
    NOT?: Prisma.ChatStreamerWhereInput | Prisma.ChatStreamerWhereInput[];
    ID_Streamer?: Prisma.IntFilter<"ChatStreamer"> | number;
    ID_Viewer?: Prisma.IntFilter<"ChatStreamer"> | number;
    NivelViewer?: Prisma.IntFilter<"ChatStreamer"> | number;
    Habilitado?: Prisma.BoolFilter<"ChatStreamer"> | boolean;
    Viendo?: Prisma.BoolFilter<"ChatStreamer"> | boolean;
    streamerC?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    viewerC?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type ChatStreamerOrderByWithRelationInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
    NivelViewer?: Prisma.SortOrder;
    Habilitado?: Prisma.SortOrder;
    Viendo?: Prisma.SortOrder;
    streamerC?: Prisma.UsuarioOrderByWithRelationInput;
    viewerC?: Prisma.UsuarioOrderByWithRelationInput;
};
export type ChatStreamerWhereUniqueInput = Prisma.AtLeast<{
    ID_Streamer_ID_Viewer?: Prisma.ChatStreamerID_StreamerID_ViewerCompoundUniqueInput;
    AND?: Prisma.ChatStreamerWhereInput | Prisma.ChatStreamerWhereInput[];
    OR?: Prisma.ChatStreamerWhereInput[];
    NOT?: Prisma.ChatStreamerWhereInput | Prisma.ChatStreamerWhereInput[];
    ID_Streamer?: Prisma.IntFilter<"ChatStreamer"> | number;
    ID_Viewer?: Prisma.IntFilter<"ChatStreamer"> | number;
    NivelViewer?: Prisma.IntFilter<"ChatStreamer"> | number;
    Habilitado?: Prisma.BoolFilter<"ChatStreamer"> | boolean;
    Viendo?: Prisma.BoolFilter<"ChatStreamer"> | boolean;
    streamerC?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    viewerC?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "ID_Streamer_ID_Viewer">;
export type ChatStreamerOrderByWithAggregationInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
    NivelViewer?: Prisma.SortOrder;
    Habilitado?: Prisma.SortOrder;
    Viendo?: Prisma.SortOrder;
    _count?: Prisma.ChatStreamerCountOrderByAggregateInput;
    _avg?: Prisma.ChatStreamerAvgOrderByAggregateInput;
    _max?: Prisma.ChatStreamerMaxOrderByAggregateInput;
    _min?: Prisma.ChatStreamerMinOrderByAggregateInput;
    _sum?: Prisma.ChatStreamerSumOrderByAggregateInput;
};
export type ChatStreamerScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChatStreamerScalarWhereWithAggregatesInput | Prisma.ChatStreamerScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChatStreamerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChatStreamerScalarWhereWithAggregatesInput | Prisma.ChatStreamerScalarWhereWithAggregatesInput[];
    ID_Streamer?: Prisma.IntWithAggregatesFilter<"ChatStreamer"> | number;
    ID_Viewer?: Prisma.IntWithAggregatesFilter<"ChatStreamer"> | number;
    NivelViewer?: Prisma.IntWithAggregatesFilter<"ChatStreamer"> | number;
    Habilitado?: Prisma.BoolWithAggregatesFilter<"ChatStreamer"> | boolean;
    Viendo?: Prisma.BoolWithAggregatesFilter<"ChatStreamer"> | boolean;
};
export type ChatStreamerCreateInput = {
    NivelViewer?: number;
    Habilitado?: boolean;
    Viendo: boolean;
    streamerC: Prisma.UsuarioCreateNestedOneWithoutStreamerCHatInput;
    viewerC: Prisma.UsuarioCreateNestedOneWithoutViewerEnChatInput;
};
export type ChatStreamerUncheckedCreateInput = {
    ID_Streamer: number;
    ID_Viewer: number;
    NivelViewer?: number;
    Habilitado?: boolean;
    Viendo: boolean;
};
export type ChatStreamerUpdateInput = {
    NivelViewer?: Prisma.IntFieldUpdateOperationsInput | number;
    Habilitado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Viendo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamerC?: Prisma.UsuarioUpdateOneRequiredWithoutStreamerCHatNestedInput;
    viewerC?: Prisma.UsuarioUpdateOneRequiredWithoutViewerEnChatNestedInput;
};
export type ChatStreamerUncheckedUpdateInput = {
    ID_Streamer?: Prisma.IntFieldUpdateOperationsInput | number;
    ID_Viewer?: Prisma.IntFieldUpdateOperationsInput | number;
    NivelViewer?: Prisma.IntFieldUpdateOperationsInput | number;
    Habilitado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Viendo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChatStreamerCreateManyInput = {
    ID_Streamer: number;
    ID_Viewer: number;
    NivelViewer?: number;
    Habilitado?: boolean;
    Viendo: boolean;
};
export type ChatStreamerUpdateManyMutationInput = {
    NivelViewer?: Prisma.IntFieldUpdateOperationsInput | number;
    Habilitado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Viendo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChatStreamerUncheckedUpdateManyInput = {
    ID_Streamer?: Prisma.IntFieldUpdateOperationsInput | number;
    ID_Viewer?: Prisma.IntFieldUpdateOperationsInput | number;
    NivelViewer?: Prisma.IntFieldUpdateOperationsInput | number;
    Habilitado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Viendo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChatStreamerListRelationFilter = {
    every?: Prisma.ChatStreamerWhereInput;
    some?: Prisma.ChatStreamerWhereInput;
    none?: Prisma.ChatStreamerWhereInput;
};
export type ChatStreamerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChatStreamerID_StreamerID_ViewerCompoundUniqueInput = {
    ID_Streamer: number;
    ID_Viewer: number;
};
export type ChatStreamerCountOrderByAggregateInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
    NivelViewer?: Prisma.SortOrder;
    Habilitado?: Prisma.SortOrder;
    Viendo?: Prisma.SortOrder;
};
export type ChatStreamerAvgOrderByAggregateInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
    NivelViewer?: Prisma.SortOrder;
};
export type ChatStreamerMaxOrderByAggregateInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
    NivelViewer?: Prisma.SortOrder;
    Habilitado?: Prisma.SortOrder;
    Viendo?: Prisma.SortOrder;
};
export type ChatStreamerMinOrderByAggregateInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
    NivelViewer?: Prisma.SortOrder;
    Habilitado?: Prisma.SortOrder;
    Viendo?: Prisma.SortOrder;
};
export type ChatStreamerSumOrderByAggregateInput = {
    ID_Streamer?: Prisma.SortOrder;
    ID_Viewer?: Prisma.SortOrder;
    NivelViewer?: Prisma.SortOrder;
};
export type ChatStreamerCreateNestedManyWithoutStreamerCInput = {
    create?: Prisma.XOR<Prisma.ChatStreamerCreateWithoutStreamerCInput, Prisma.ChatStreamerUncheckedCreateWithoutStreamerCInput> | Prisma.ChatStreamerCreateWithoutStreamerCInput[] | Prisma.ChatStreamerUncheckedCreateWithoutStreamerCInput[];
    connectOrCreate?: Prisma.ChatStreamerCreateOrConnectWithoutStreamerCInput | Prisma.ChatStreamerCreateOrConnectWithoutStreamerCInput[];
    createMany?: Prisma.ChatStreamerCreateManyStreamerCInputEnvelope;
    connect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
};
export type ChatStreamerCreateNestedManyWithoutViewerCInput = {
    create?: Prisma.XOR<Prisma.ChatStreamerCreateWithoutViewerCInput, Prisma.ChatStreamerUncheckedCreateWithoutViewerCInput> | Prisma.ChatStreamerCreateWithoutViewerCInput[] | Prisma.ChatStreamerUncheckedCreateWithoutViewerCInput[];
    connectOrCreate?: Prisma.ChatStreamerCreateOrConnectWithoutViewerCInput | Prisma.ChatStreamerCreateOrConnectWithoutViewerCInput[];
    createMany?: Prisma.ChatStreamerCreateManyViewerCInputEnvelope;
    connect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
};
export type ChatStreamerUncheckedCreateNestedManyWithoutStreamerCInput = {
    create?: Prisma.XOR<Prisma.ChatStreamerCreateWithoutStreamerCInput, Prisma.ChatStreamerUncheckedCreateWithoutStreamerCInput> | Prisma.ChatStreamerCreateWithoutStreamerCInput[] | Prisma.ChatStreamerUncheckedCreateWithoutStreamerCInput[];
    connectOrCreate?: Prisma.ChatStreamerCreateOrConnectWithoutStreamerCInput | Prisma.ChatStreamerCreateOrConnectWithoutStreamerCInput[];
    createMany?: Prisma.ChatStreamerCreateManyStreamerCInputEnvelope;
    connect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
};
export type ChatStreamerUncheckedCreateNestedManyWithoutViewerCInput = {
    create?: Prisma.XOR<Prisma.ChatStreamerCreateWithoutViewerCInput, Prisma.ChatStreamerUncheckedCreateWithoutViewerCInput> | Prisma.ChatStreamerCreateWithoutViewerCInput[] | Prisma.ChatStreamerUncheckedCreateWithoutViewerCInput[];
    connectOrCreate?: Prisma.ChatStreamerCreateOrConnectWithoutViewerCInput | Prisma.ChatStreamerCreateOrConnectWithoutViewerCInput[];
    createMany?: Prisma.ChatStreamerCreateManyViewerCInputEnvelope;
    connect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
};
export type ChatStreamerUpdateManyWithoutStreamerCNestedInput = {
    create?: Prisma.XOR<Prisma.ChatStreamerCreateWithoutStreamerCInput, Prisma.ChatStreamerUncheckedCreateWithoutStreamerCInput> | Prisma.ChatStreamerCreateWithoutStreamerCInput[] | Prisma.ChatStreamerUncheckedCreateWithoutStreamerCInput[];
    connectOrCreate?: Prisma.ChatStreamerCreateOrConnectWithoutStreamerCInput | Prisma.ChatStreamerCreateOrConnectWithoutStreamerCInput[];
    upsert?: Prisma.ChatStreamerUpsertWithWhereUniqueWithoutStreamerCInput | Prisma.ChatStreamerUpsertWithWhereUniqueWithoutStreamerCInput[];
    createMany?: Prisma.ChatStreamerCreateManyStreamerCInputEnvelope;
    set?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    disconnect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    delete?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    connect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    update?: Prisma.ChatStreamerUpdateWithWhereUniqueWithoutStreamerCInput | Prisma.ChatStreamerUpdateWithWhereUniqueWithoutStreamerCInput[];
    updateMany?: Prisma.ChatStreamerUpdateManyWithWhereWithoutStreamerCInput | Prisma.ChatStreamerUpdateManyWithWhereWithoutStreamerCInput[];
    deleteMany?: Prisma.ChatStreamerScalarWhereInput | Prisma.ChatStreamerScalarWhereInput[];
};
export type ChatStreamerUpdateManyWithoutViewerCNestedInput = {
    create?: Prisma.XOR<Prisma.ChatStreamerCreateWithoutViewerCInput, Prisma.ChatStreamerUncheckedCreateWithoutViewerCInput> | Prisma.ChatStreamerCreateWithoutViewerCInput[] | Prisma.ChatStreamerUncheckedCreateWithoutViewerCInput[];
    connectOrCreate?: Prisma.ChatStreamerCreateOrConnectWithoutViewerCInput | Prisma.ChatStreamerCreateOrConnectWithoutViewerCInput[];
    upsert?: Prisma.ChatStreamerUpsertWithWhereUniqueWithoutViewerCInput | Prisma.ChatStreamerUpsertWithWhereUniqueWithoutViewerCInput[];
    createMany?: Prisma.ChatStreamerCreateManyViewerCInputEnvelope;
    set?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    disconnect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    delete?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    connect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    update?: Prisma.ChatStreamerUpdateWithWhereUniqueWithoutViewerCInput | Prisma.ChatStreamerUpdateWithWhereUniqueWithoutViewerCInput[];
    updateMany?: Prisma.ChatStreamerUpdateManyWithWhereWithoutViewerCInput | Prisma.ChatStreamerUpdateManyWithWhereWithoutViewerCInput[];
    deleteMany?: Prisma.ChatStreamerScalarWhereInput | Prisma.ChatStreamerScalarWhereInput[];
};
export type ChatStreamerUncheckedUpdateManyWithoutStreamerCNestedInput = {
    create?: Prisma.XOR<Prisma.ChatStreamerCreateWithoutStreamerCInput, Prisma.ChatStreamerUncheckedCreateWithoutStreamerCInput> | Prisma.ChatStreamerCreateWithoutStreamerCInput[] | Prisma.ChatStreamerUncheckedCreateWithoutStreamerCInput[];
    connectOrCreate?: Prisma.ChatStreamerCreateOrConnectWithoutStreamerCInput | Prisma.ChatStreamerCreateOrConnectWithoutStreamerCInput[];
    upsert?: Prisma.ChatStreamerUpsertWithWhereUniqueWithoutStreamerCInput | Prisma.ChatStreamerUpsertWithWhereUniqueWithoutStreamerCInput[];
    createMany?: Prisma.ChatStreamerCreateManyStreamerCInputEnvelope;
    set?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    disconnect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    delete?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    connect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    update?: Prisma.ChatStreamerUpdateWithWhereUniqueWithoutStreamerCInput | Prisma.ChatStreamerUpdateWithWhereUniqueWithoutStreamerCInput[];
    updateMany?: Prisma.ChatStreamerUpdateManyWithWhereWithoutStreamerCInput | Prisma.ChatStreamerUpdateManyWithWhereWithoutStreamerCInput[];
    deleteMany?: Prisma.ChatStreamerScalarWhereInput | Prisma.ChatStreamerScalarWhereInput[];
};
export type ChatStreamerUncheckedUpdateManyWithoutViewerCNestedInput = {
    create?: Prisma.XOR<Prisma.ChatStreamerCreateWithoutViewerCInput, Prisma.ChatStreamerUncheckedCreateWithoutViewerCInput> | Prisma.ChatStreamerCreateWithoutViewerCInput[] | Prisma.ChatStreamerUncheckedCreateWithoutViewerCInput[];
    connectOrCreate?: Prisma.ChatStreamerCreateOrConnectWithoutViewerCInput | Prisma.ChatStreamerCreateOrConnectWithoutViewerCInput[];
    upsert?: Prisma.ChatStreamerUpsertWithWhereUniqueWithoutViewerCInput | Prisma.ChatStreamerUpsertWithWhereUniqueWithoutViewerCInput[];
    createMany?: Prisma.ChatStreamerCreateManyViewerCInputEnvelope;
    set?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    disconnect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    delete?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    connect?: Prisma.ChatStreamerWhereUniqueInput | Prisma.ChatStreamerWhereUniqueInput[];
    update?: Prisma.ChatStreamerUpdateWithWhereUniqueWithoutViewerCInput | Prisma.ChatStreamerUpdateWithWhereUniqueWithoutViewerCInput[];
    updateMany?: Prisma.ChatStreamerUpdateManyWithWhereWithoutViewerCInput | Prisma.ChatStreamerUpdateManyWithWhereWithoutViewerCInput[];
    deleteMany?: Prisma.ChatStreamerScalarWhereInput | Prisma.ChatStreamerScalarWhereInput[];
};
export type ChatStreamerCreateWithoutStreamerCInput = {
    NivelViewer?: number;
    Habilitado?: boolean;
    Viendo: boolean;
    viewerC: Prisma.UsuarioCreateNestedOneWithoutViewerEnChatInput;
};
export type ChatStreamerUncheckedCreateWithoutStreamerCInput = {
    ID_Viewer: number;
    NivelViewer?: number;
    Habilitado?: boolean;
    Viendo: boolean;
};
export type ChatStreamerCreateOrConnectWithoutStreamerCInput = {
    where: Prisma.ChatStreamerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatStreamerCreateWithoutStreamerCInput, Prisma.ChatStreamerUncheckedCreateWithoutStreamerCInput>;
};
export type ChatStreamerCreateManyStreamerCInputEnvelope = {
    data: Prisma.ChatStreamerCreateManyStreamerCInput | Prisma.ChatStreamerCreateManyStreamerCInput[];
    skipDuplicates?: boolean;
};
export type ChatStreamerCreateWithoutViewerCInput = {
    NivelViewer?: number;
    Habilitado?: boolean;
    Viendo: boolean;
    streamerC: Prisma.UsuarioCreateNestedOneWithoutStreamerCHatInput;
};
export type ChatStreamerUncheckedCreateWithoutViewerCInput = {
    ID_Streamer: number;
    NivelViewer?: number;
    Habilitado?: boolean;
    Viendo: boolean;
};
export type ChatStreamerCreateOrConnectWithoutViewerCInput = {
    where: Prisma.ChatStreamerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatStreamerCreateWithoutViewerCInput, Prisma.ChatStreamerUncheckedCreateWithoutViewerCInput>;
};
export type ChatStreamerCreateManyViewerCInputEnvelope = {
    data: Prisma.ChatStreamerCreateManyViewerCInput | Prisma.ChatStreamerCreateManyViewerCInput[];
    skipDuplicates?: boolean;
};
export type ChatStreamerUpsertWithWhereUniqueWithoutStreamerCInput = {
    where: Prisma.ChatStreamerWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChatStreamerUpdateWithoutStreamerCInput, Prisma.ChatStreamerUncheckedUpdateWithoutStreamerCInput>;
    create: Prisma.XOR<Prisma.ChatStreamerCreateWithoutStreamerCInput, Prisma.ChatStreamerUncheckedCreateWithoutStreamerCInput>;
};
export type ChatStreamerUpdateWithWhereUniqueWithoutStreamerCInput = {
    where: Prisma.ChatStreamerWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChatStreamerUpdateWithoutStreamerCInput, Prisma.ChatStreamerUncheckedUpdateWithoutStreamerCInput>;
};
export type ChatStreamerUpdateManyWithWhereWithoutStreamerCInput = {
    where: Prisma.ChatStreamerScalarWhereInput;
    data: Prisma.XOR<Prisma.ChatStreamerUpdateManyMutationInput, Prisma.ChatStreamerUncheckedUpdateManyWithoutStreamerCInput>;
};
export type ChatStreamerScalarWhereInput = {
    AND?: Prisma.ChatStreamerScalarWhereInput | Prisma.ChatStreamerScalarWhereInput[];
    OR?: Prisma.ChatStreamerScalarWhereInput[];
    NOT?: Prisma.ChatStreamerScalarWhereInput | Prisma.ChatStreamerScalarWhereInput[];
    ID_Streamer?: Prisma.IntFilter<"ChatStreamer"> | number;
    ID_Viewer?: Prisma.IntFilter<"ChatStreamer"> | number;
    NivelViewer?: Prisma.IntFilter<"ChatStreamer"> | number;
    Habilitado?: Prisma.BoolFilter<"ChatStreamer"> | boolean;
    Viendo?: Prisma.BoolFilter<"ChatStreamer"> | boolean;
};
export type ChatStreamerUpsertWithWhereUniqueWithoutViewerCInput = {
    where: Prisma.ChatStreamerWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChatStreamerUpdateWithoutViewerCInput, Prisma.ChatStreamerUncheckedUpdateWithoutViewerCInput>;
    create: Prisma.XOR<Prisma.ChatStreamerCreateWithoutViewerCInput, Prisma.ChatStreamerUncheckedCreateWithoutViewerCInput>;
};
export type ChatStreamerUpdateWithWhereUniqueWithoutViewerCInput = {
    where: Prisma.ChatStreamerWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChatStreamerUpdateWithoutViewerCInput, Prisma.ChatStreamerUncheckedUpdateWithoutViewerCInput>;
};
export type ChatStreamerUpdateManyWithWhereWithoutViewerCInput = {
    where: Prisma.ChatStreamerScalarWhereInput;
    data: Prisma.XOR<Prisma.ChatStreamerUpdateManyMutationInput, Prisma.ChatStreamerUncheckedUpdateManyWithoutViewerCInput>;
};
export type ChatStreamerCreateManyStreamerCInput = {
    ID_Viewer: number;
    NivelViewer?: number;
    Habilitado?: boolean;
    Viendo: boolean;
};
export type ChatStreamerCreateManyViewerCInput = {
    ID_Streamer: number;
    NivelViewer?: number;
    Habilitado?: boolean;
    Viendo: boolean;
};
export type ChatStreamerUpdateWithoutStreamerCInput = {
    NivelViewer?: Prisma.IntFieldUpdateOperationsInput | number;
    Habilitado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Viendo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    viewerC?: Prisma.UsuarioUpdateOneRequiredWithoutViewerEnChatNestedInput;
};
export type ChatStreamerUncheckedUpdateWithoutStreamerCInput = {
    ID_Viewer?: Prisma.IntFieldUpdateOperationsInput | number;
    NivelViewer?: Prisma.IntFieldUpdateOperationsInput | number;
    Habilitado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Viendo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChatStreamerUncheckedUpdateManyWithoutStreamerCInput = {
    ID_Viewer?: Prisma.IntFieldUpdateOperationsInput | number;
    NivelViewer?: Prisma.IntFieldUpdateOperationsInput | number;
    Habilitado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Viendo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChatStreamerUpdateWithoutViewerCInput = {
    NivelViewer?: Prisma.IntFieldUpdateOperationsInput | number;
    Habilitado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Viendo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    streamerC?: Prisma.UsuarioUpdateOneRequiredWithoutStreamerCHatNestedInput;
};
export type ChatStreamerUncheckedUpdateWithoutViewerCInput = {
    ID_Streamer?: Prisma.IntFieldUpdateOperationsInput | number;
    NivelViewer?: Prisma.IntFieldUpdateOperationsInput | number;
    Habilitado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Viendo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChatStreamerUncheckedUpdateManyWithoutViewerCInput = {
    ID_Streamer?: Prisma.IntFieldUpdateOperationsInput | number;
    NivelViewer?: Prisma.IntFieldUpdateOperationsInput | number;
    Habilitado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Viendo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChatStreamerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Streamer?: boolean;
    ID_Viewer?: boolean;
    NivelViewer?: boolean;
    Habilitado?: boolean;
    Viendo?: boolean;
    streamerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatStreamer"]>;
export type ChatStreamerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Streamer?: boolean;
    ID_Viewer?: boolean;
    NivelViewer?: boolean;
    Habilitado?: boolean;
    Viendo?: boolean;
    streamerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatStreamer"]>;
export type ChatStreamerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    ID_Streamer?: boolean;
    ID_Viewer?: boolean;
    NivelViewer?: boolean;
    Habilitado?: boolean;
    Viendo?: boolean;
    streamerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatStreamer"]>;
export type ChatStreamerSelectScalar = {
    ID_Streamer?: boolean;
    ID_Viewer?: boolean;
    NivelViewer?: boolean;
    Habilitado?: boolean;
    Viendo?: boolean;
};
export type ChatStreamerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"ID_Streamer" | "ID_Viewer" | "NivelViewer" | "Habilitado" | "Viendo", ExtArgs["result"]["chatStreamer"]>;
export type ChatStreamerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    streamerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type ChatStreamerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    streamerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type ChatStreamerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    streamerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    viewerC?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $ChatStreamerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChatStreamer";
    objects: {
        streamerC: Prisma.$UsuarioPayload<ExtArgs>;
        viewerC: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        ID_Streamer: number;
        ID_Viewer: number;
        NivelViewer: number;
        Habilitado: boolean;
        Viendo: boolean;
    }, ExtArgs["result"]["chatStreamer"]>;
    composites: {};
};
export type ChatStreamerGetPayload<S extends boolean | null | undefined | ChatStreamerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload, S>;
export type ChatStreamerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChatStreamerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChatStreamerCountAggregateInputType | true;
};
export interface ChatStreamerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChatStreamer'];
        meta: {
            name: 'ChatStreamer';
        };
    };
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
    findUnique<T extends ChatStreamerFindUniqueArgs>(args: Prisma.SelectSubset<T, ChatStreamerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChatStreamerClient<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findUniqueOrThrow<T extends ChatStreamerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChatStreamerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatStreamerClient<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findFirst<T extends ChatStreamerFindFirstArgs>(args?: Prisma.SelectSubset<T, ChatStreamerFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChatStreamerClient<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
    findFirstOrThrow<T extends ChatStreamerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChatStreamerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatStreamerClient<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    findMany<T extends ChatStreamerFindManyArgs>(args?: Prisma.SelectSubset<T, ChatStreamerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
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
    create<T extends ChatStreamerCreateArgs>(args: Prisma.SelectSubset<T, ChatStreamerCreateArgs<ExtArgs>>): Prisma.Prisma__ChatStreamerClient<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    createMany<T extends ChatStreamerCreateManyArgs>(args?: Prisma.SelectSubset<T, ChatStreamerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    createManyAndReturn<T extends ChatStreamerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChatStreamerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
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
    delete<T extends ChatStreamerDeleteArgs>(args: Prisma.SelectSubset<T, ChatStreamerDeleteArgs<ExtArgs>>): Prisma.Prisma__ChatStreamerClient<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    update<T extends ChatStreamerUpdateArgs>(args: Prisma.SelectSubset<T, ChatStreamerUpdateArgs<ExtArgs>>): Prisma.Prisma__ChatStreamerClient<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    deleteMany<T extends ChatStreamerDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChatStreamerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateMany<T extends ChatStreamerUpdateManyArgs>(args: Prisma.SelectSubset<T, ChatStreamerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
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
    updateManyAndReturn<T extends ChatStreamerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChatStreamerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
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
    upsert<T extends ChatStreamerUpsertArgs>(args: Prisma.SelectSubset<T, ChatStreamerUpsertArgs<ExtArgs>>): Prisma.Prisma__ChatStreamerClient<runtime.Types.Result.GetResult<Prisma.$ChatStreamerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
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
    count<T extends ChatStreamerCountArgs>(args?: Prisma.Subset<T, ChatStreamerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChatStreamerCountAggregateOutputType> : number>;
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
    aggregate<T extends ChatStreamerAggregateArgs>(args: Prisma.Subset<T, ChatStreamerAggregateArgs>): Prisma.PrismaPromise<GetChatStreamerAggregateType<T>>;
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
    groupBy<T extends ChatStreamerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChatStreamerGroupByArgs['orderBy'];
    } : {
        orderBy?: ChatStreamerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChatStreamerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatStreamerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
export interface Prisma__ChatStreamerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    streamerC<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    viewerC<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ChatStreamer model
 */
export interface ChatStreamerFieldRefs {
    readonly ID_Streamer: Prisma.FieldRef<"ChatStreamer", 'Int'>;
    readonly ID_Viewer: Prisma.FieldRef<"ChatStreamer", 'Int'>;
    readonly NivelViewer: Prisma.FieldRef<"ChatStreamer", 'Int'>;
    readonly Habilitado: Prisma.FieldRef<"ChatStreamer", 'Boolean'>;
    readonly Viendo: Prisma.FieldRef<"ChatStreamer", 'Boolean'>;
}
/**
 * ChatStreamer findUnique
 */
export type ChatStreamerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerInclude<ExtArgs> | null;
    /**
     * Filter, which ChatStreamer to fetch.
     */
    where: Prisma.ChatStreamerWhereUniqueInput;
};
/**
 * ChatStreamer findUniqueOrThrow
 */
export type ChatStreamerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerInclude<ExtArgs> | null;
    /**
     * Filter, which ChatStreamer to fetch.
     */
    where: Prisma.ChatStreamerWhereUniqueInput;
};
/**
 * ChatStreamer findFirst
 */
export type ChatStreamerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerInclude<ExtArgs> | null;
    /**
     * Filter, which ChatStreamer to fetch.
     */
    where?: Prisma.ChatStreamerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatStreamers to fetch.
     */
    orderBy?: Prisma.ChatStreamerOrderByWithRelationInput | Prisma.ChatStreamerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChatStreamers.
     */
    cursor?: Prisma.ChatStreamerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatStreamers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatStreamers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChatStreamers.
     */
    distinct?: Prisma.ChatStreamerScalarFieldEnum | Prisma.ChatStreamerScalarFieldEnum[];
};
/**
 * ChatStreamer findFirstOrThrow
 */
export type ChatStreamerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerInclude<ExtArgs> | null;
    /**
     * Filter, which ChatStreamer to fetch.
     */
    where?: Prisma.ChatStreamerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatStreamers to fetch.
     */
    orderBy?: Prisma.ChatStreamerOrderByWithRelationInput | Prisma.ChatStreamerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ChatStreamers.
     */
    cursor?: Prisma.ChatStreamerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatStreamers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatStreamers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ChatStreamers.
     */
    distinct?: Prisma.ChatStreamerScalarFieldEnum | Prisma.ChatStreamerScalarFieldEnum[];
};
/**
 * ChatStreamer findMany
 */
export type ChatStreamerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerInclude<ExtArgs> | null;
    /**
     * Filter, which ChatStreamers to fetch.
     */
    where?: Prisma.ChatStreamerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ChatStreamers to fetch.
     */
    orderBy?: Prisma.ChatStreamerOrderByWithRelationInput | Prisma.ChatStreamerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ChatStreamers.
     */
    cursor?: Prisma.ChatStreamerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ChatStreamers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ChatStreamers.
     */
    skip?: number;
    distinct?: Prisma.ChatStreamerScalarFieldEnum | Prisma.ChatStreamerScalarFieldEnum[];
};
/**
 * ChatStreamer create
 */
export type ChatStreamerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerInclude<ExtArgs> | null;
    /**
     * The data needed to create a ChatStreamer.
     */
    data: Prisma.XOR<Prisma.ChatStreamerCreateInput, Prisma.ChatStreamerUncheckedCreateInput>;
};
/**
 * ChatStreamer createMany
 */
export type ChatStreamerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatStreamers.
     */
    data: Prisma.ChatStreamerCreateManyInput | Prisma.ChatStreamerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ChatStreamer createManyAndReturn
 */
export type ChatStreamerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * The data used to create many ChatStreamers.
     */
    data: Prisma.ChatStreamerCreateManyInput | Prisma.ChatStreamerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ChatStreamer update
 */
export type ChatStreamerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerInclude<ExtArgs> | null;
    /**
     * The data needed to update a ChatStreamer.
     */
    data: Prisma.XOR<Prisma.ChatStreamerUpdateInput, Prisma.ChatStreamerUncheckedUpdateInput>;
    /**
     * Choose, which ChatStreamer to update.
     */
    where: Prisma.ChatStreamerWhereUniqueInput;
};
/**
 * ChatStreamer updateMany
 */
export type ChatStreamerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatStreamers.
     */
    data: Prisma.XOR<Prisma.ChatStreamerUpdateManyMutationInput, Prisma.ChatStreamerUncheckedUpdateManyInput>;
    /**
     * Filter which ChatStreamers to update
     */
    where?: Prisma.ChatStreamerWhereInput;
    /**
     * Limit how many ChatStreamers to update.
     */
    limit?: number;
};
/**
 * ChatStreamer updateManyAndReturn
 */
export type ChatStreamerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * The data used to update ChatStreamers.
     */
    data: Prisma.XOR<Prisma.ChatStreamerUpdateManyMutationInput, Prisma.ChatStreamerUncheckedUpdateManyInput>;
    /**
     * Filter which ChatStreamers to update
     */
    where?: Prisma.ChatStreamerWhereInput;
    /**
     * Limit how many ChatStreamers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ChatStreamer upsert
 */
export type ChatStreamerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerInclude<ExtArgs> | null;
    /**
     * The filter to search for the ChatStreamer to update in case it exists.
     */
    where: Prisma.ChatStreamerWhereUniqueInput;
    /**
     * In case the ChatStreamer found by the `where` argument doesn't exist, create a new ChatStreamer with this data.
     */
    create: Prisma.XOR<Prisma.ChatStreamerCreateInput, Prisma.ChatStreamerUncheckedCreateInput>;
    /**
     * In case the ChatStreamer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ChatStreamerUpdateInput, Prisma.ChatStreamerUncheckedUpdateInput>;
};
/**
 * ChatStreamer delete
 */
export type ChatStreamerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerInclude<ExtArgs> | null;
    /**
     * Filter which ChatStreamer to delete.
     */
    where: Prisma.ChatStreamerWhereUniqueInput;
};
/**
 * ChatStreamer deleteMany
 */
export type ChatStreamerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ChatStreamers to delete
     */
    where?: Prisma.ChatStreamerWhereInput;
    /**
     * Limit how many ChatStreamers to delete.
     */
    limit?: number;
};
/**
 * ChatStreamer without action
 */
export type ChatStreamerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatStreamer
     */
    select?: Prisma.ChatStreamerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ChatStreamer
     */
    omit?: Prisma.ChatStreamerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChatStreamerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ChatStreamer.d.ts.map