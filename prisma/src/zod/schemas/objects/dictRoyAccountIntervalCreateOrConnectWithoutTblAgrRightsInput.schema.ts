import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyAccountIntervalWhereUniqueInputObjectSchema as dictRoyAccountIntervalWhereUniqueInputObjectSchema } from './dictRoyAccountIntervalWhereUniqueInput.schema';
import { dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalCreateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRoyAccountIntervalWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInput>;
export const dictRoyAccountIntervalCreateOrConnectWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
