import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyAccountIntervalID: z.number().int(),
  RoyAccountIntervalDesc: z.string().max(50),
  IntervalAbb: z.string().max(8).optional().nullable()
}).strict();
export const dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalCreateWithoutTblAgrRightsInput>;
export const dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
