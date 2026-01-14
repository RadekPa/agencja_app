import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalCreateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalUpsertWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUpsertWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUpsertWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalWhereInputObjectSchema as dictRoyAccountIntervalWhereInputObjectSchema } from './dictRoyAccountIntervalWhereInput.schema';
import { dictRoyAccountIntervalWhereUniqueInputObjectSchema as dictRoyAccountIntervalWhereUniqueInputObjectSchema } from './dictRoyAccountIntervalWhereUniqueInput.schema';
import { dictRoyAccountIntervalUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUpdateToOneWithWhereWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictRoyAccountIntervalUpsertWithoutTblAgrRightsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictRoyAccountIntervalWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictRoyAccountIntervalUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyAccountIntervalUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]).optional()
}).strict();
export const dictRoyAccountIntervalUpdateOneWithoutTblAgrRightsNestedInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalUpdateOneWithoutTblAgrRightsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalUpdateOneWithoutTblAgrRightsNestedInput>;
export const dictRoyAccountIntervalUpdateOneWithoutTblAgrRightsNestedInputObjectZodSchema = makeSchema();
