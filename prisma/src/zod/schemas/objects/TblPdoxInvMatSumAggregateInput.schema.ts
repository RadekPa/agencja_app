import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Invoice_Nr: z.literal(true).optional()
}).strict();
export const TblPdoxInvMatSumAggregateInputObjectSchema: z.ZodType<Prisma.TblPdoxInvMatSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPdoxInvMatSumAggregateInputType>;
export const TblPdoxInvMatSumAggregateInputObjectZodSchema = makeSchema();
