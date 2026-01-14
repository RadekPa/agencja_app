import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubID: z.literal(true).optional()
}).strict();
export const TblPubISBNAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblPubISBNAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPubISBNAvgAggregateInputType>;
export const TblPubISBNAvgAggregateInputObjectZodSchema = makeSchema();
