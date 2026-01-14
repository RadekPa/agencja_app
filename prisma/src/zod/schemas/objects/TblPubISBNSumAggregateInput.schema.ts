import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubID: z.literal(true).optional()
}).strict();
export const TblPubISBNSumAggregateInputObjectSchema: z.ZodType<Prisma.TblPubISBNSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPubISBNSumAggregateInputType>;
export const TblPubISBNSumAggregateInputObjectZodSchema = makeSchema();
