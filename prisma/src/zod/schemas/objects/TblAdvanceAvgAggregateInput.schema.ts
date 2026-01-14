import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvID: z.literal(true).optional(),
  Inst: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  AdvTermId: z.literal(true).optional(),
  AdvTypeId: z.literal(true).optional(),
  Amount: z.literal(true).optional(),
  RoyID: z.literal(true).optional()
}).strict();
export const TblAdvanceAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblAdvanceAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblAdvanceAvgAggregateInputType>;
export const TblAdvanceAvgAggregateInputObjectZodSchema = makeSchema();
