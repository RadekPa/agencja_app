import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubID: z.literal(true).optional(),
  PubISBN1: z.literal(true).optional(),
  PubISBN2: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblPubISBNCountAggregateInputObjectSchema: z.ZodType<Prisma.TblPubISBNCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPubISBNCountAggregateInputType>;
export const TblPubISBNCountAggregateInputObjectZodSchema = makeSchema();
