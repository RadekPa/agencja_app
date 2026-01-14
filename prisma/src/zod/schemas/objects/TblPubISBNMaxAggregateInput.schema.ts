import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubID: z.literal(true).optional(),
  PubISBN1: z.literal(true).optional(),
  PubISBN2: z.literal(true).optional()
}).strict();
export const TblPubISBNMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblPubISBNMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPubISBNMaxAggregateInputType>;
export const TblPubISBNMaxAggregateInputObjectZodSchema = makeSchema();
