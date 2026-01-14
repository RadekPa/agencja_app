import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Invoice_Nr: z.literal(true).optional(),
  Title: z.literal(true).optional(),
  ISBN: z.literal(true).optional()
}).strict();
export const TblPdoxInvMatMinAggregateInputObjectSchema: z.ZodType<Prisma.TblPdoxInvMatMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPdoxInvMatMinAggregateInputType>;
export const TblPdoxInvMatMinAggregateInputObjectZodSchema = makeSchema();
