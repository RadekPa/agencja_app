import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Invoice_Nr: z.literal(true).optional(),
  Title: z.literal(true).optional(),
  ISBN: z.literal(true).optional()
}).strict();
export const TblPdoxInvMatMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblPdoxInvMatMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPdoxInvMatMaxAggregateInputType>;
export const TblPdoxInvMatMaxAggregateInputObjectZodSchema = makeSchema();
