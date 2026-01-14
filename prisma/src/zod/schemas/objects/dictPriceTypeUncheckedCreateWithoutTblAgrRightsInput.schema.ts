import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PriceTypeID: z.number().int(),
  PriceTypeDesc: z.string().optional().nullable(),
  PriceTypePL: z.string().optional().nullable()
}).strict();
export const dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictPriceTypeUncheckedCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeUncheckedCreateWithoutTblAgrRightsInput>;
export const dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
