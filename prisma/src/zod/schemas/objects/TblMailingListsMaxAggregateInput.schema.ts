import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClassCode: z.literal(true).optional(),
  SubClassCode: z.literal(true).optional(),
  CustID: z.literal(true).optional()
}).strict();
export const TblMailingListsMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblMailingListsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMailingListsMaxAggregateInputType>;
export const TblMailingListsMaxAggregateInputObjectZodSchema = makeSchema();
