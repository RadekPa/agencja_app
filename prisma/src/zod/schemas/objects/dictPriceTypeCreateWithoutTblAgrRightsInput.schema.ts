import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PriceTypeID: z.number().int(),
  PriceTypeDesc: z.string().max(50).optional().nullable(),
  PriceTypePL: z.string().max(50).optional().nullable()
}).strict();
export const dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictPriceTypeCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeCreateWithoutTblAgrRightsInput>;
export const dictPriceTypeCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
