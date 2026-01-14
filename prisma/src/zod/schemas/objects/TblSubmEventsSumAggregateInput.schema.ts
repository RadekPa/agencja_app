import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmEventID: z.literal(true).optional(),
  SubmID: z.literal(true).optional(),
  EventCode: z.literal(true).optional(),
  NoOfCopies: z.literal(true).optional()
}).strict();
export const TblSubmEventsSumAggregateInputObjectSchema: z.ZodType<Prisma.TblSubmEventsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblSubmEventsSumAggregateInputType>;
export const TblSubmEventsSumAggregateInputObjectZodSchema = makeSchema();
