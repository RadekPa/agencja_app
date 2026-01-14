import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Invoice_Nr: z.literal(true).optional()
}).strict();
export const TblPdoxInvMatAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblPdoxInvMatAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPdoxInvMatAvgAggregateInputType>;
export const TblPdoxInvMatAvgAggregateInputObjectZodSchema = makeSchema();
