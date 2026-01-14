import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyPriceTypeID: z.number().int(),
  RoyPriceTypeDesc: z.string(),
  RoyPriceTypePL: z.string().optional().nullable()
}).strict();
export const dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInput>;
export const dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
