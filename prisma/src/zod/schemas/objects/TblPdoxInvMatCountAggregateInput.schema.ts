import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Invoice_Nr: z.literal(true).optional(),
  Title: z.literal(true).optional(),
  ISBN: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblPdoxInvMatCountAggregateInputObjectSchema: z.ZodType<Prisma.TblPdoxInvMatCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPdoxInvMatCountAggregateInputType>;
export const TblPdoxInvMatCountAggregateInputObjectZodSchema = makeSchema();
