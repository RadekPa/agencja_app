import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PriceTypeID: z.number().int(),
  PriceTypeDesc: z.string().max(50).optional().nullable(),
  PriceTypePL: z.string().max(50).optional().nullable()
}).strict();
export const dictPriceTypeCreateManyInputObjectSchema: z.ZodType<Prisma.dictPriceTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeCreateManyInput>;
export const dictPriceTypeCreateManyInputObjectZodSchema = makeSchema();
