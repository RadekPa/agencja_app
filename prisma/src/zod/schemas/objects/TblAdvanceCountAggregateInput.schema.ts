import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvID: z.literal(true).optional(),
  Inst: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  AdvTermId: z.literal(true).optional(),
  AdvTypeId: z.literal(true).optional(),
  Amount: z.literal(true).optional(),
  AdvTermDate: z.literal(true).optional(),
  RoyID: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblAdvanceCountAggregateInputObjectSchema: z.ZodType<Prisma.TblAdvanceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblAdvanceCountAggregateInputType>;
export const TblAdvanceCountAggregateInputObjectZodSchema = makeSchema();
