import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional()
}).strict();
export const TblMailingListsSumAggregateInputObjectSchema: z.ZodType<Prisma.TblMailingListsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMailingListsSumAggregateInputType>;
export const TblMailingListsSumAggregateInputObjectZodSchema = makeSchema();
