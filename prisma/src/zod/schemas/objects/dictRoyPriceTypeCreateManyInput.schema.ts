import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyPriceTypeID: z.number().int(),
  RoyPriceTypeDesc: z.string().max(50),
  RoyPriceTypePL: z.string().max(50).optional().nullable()
}).strict();
export const dictRoyPriceTypeCreateManyInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeCreateManyInput>;
export const dictRoyPriceTypeCreateManyInputObjectZodSchema = makeSchema();
