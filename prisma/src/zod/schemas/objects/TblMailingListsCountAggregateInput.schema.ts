import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.literal(true).optional(),
  SubClassCode: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblMailingListsCountAggregateInputObjectSchema: z.ZodType<Prisma.TblMailingListsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMailingListsCountAggregateInputType>;
export const TblMailingListsCountAggregateInputObjectZodSchema = makeSchema();
