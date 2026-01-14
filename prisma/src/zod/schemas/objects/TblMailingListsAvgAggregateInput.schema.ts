import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional()
}).strict();
export const TblMailingListsAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblMailingListsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMailingListsAvgAggregateInputType>;
export const TblMailingListsAvgAggregateInputObjectZodSchema = makeSchema();
