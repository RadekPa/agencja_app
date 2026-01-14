import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalCreateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalWhereUniqueInputObjectSchema as dictRoyAccountIntervalWhereUniqueInputObjectSchema } from './dictRoyAccountIntervalWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  connect: z.lazy(() => dictRoyAccountIntervalWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInput>;
export const dictRoyAccountIntervalCreateNestedOneWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
