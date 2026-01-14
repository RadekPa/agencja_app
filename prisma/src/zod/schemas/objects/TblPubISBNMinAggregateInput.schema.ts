import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubID: z.literal(true).optional(),
  PubISBN1: z.literal(true).optional(),
  PubISBN2: z.literal(true).optional()
}).strict();
export const TblPubISBNMinAggregateInputObjectSchema: z.ZodType<Prisma.TblPubISBNMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPubISBNMinAggregateInputType>;
export const TblPubISBNMinAggregateInputObjectZodSchema = makeSchema();
