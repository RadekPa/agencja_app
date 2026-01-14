import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyPriceTypeID: z.number().int().optional()
}).strict();
export const dictRoyPriceTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeWhereUniqueInput>;
export const dictRoyPriceTypeWhereUniqueInputObjectZodSchema = makeSchema();
