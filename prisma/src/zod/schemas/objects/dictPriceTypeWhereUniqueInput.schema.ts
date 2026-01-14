import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PriceTypeID: z.number().int().optional()
}).strict();
export const dictPriceTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictPriceTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeWhereUniqueInput>;
export const dictPriceTypeWhereUniqueInputObjectZodSchema = makeSchema();
