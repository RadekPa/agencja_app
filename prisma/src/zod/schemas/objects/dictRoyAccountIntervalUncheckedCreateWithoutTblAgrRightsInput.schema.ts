import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyAccountIntervalID: z.number().int(),
  RoyAccountIntervalDesc: z.string(),
  IntervalAbb: z.string().optional().nullable()
}).strict();
export const dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInput>;
export const dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
