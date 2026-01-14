import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmEventID: z.literal(true).optional(),
  SubmID: z.literal(true).optional(),
  EventCode: z.literal(true).optional(),
  EventDate: z.literal(true).optional(),
  NoOfCopies: z.literal(true).optional(),
  EndDate: z.literal(true).optional()
}).strict();
export const TblSubmEventsMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblSubmEventsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblSubmEventsMaxAggregateInputType>;
export const TblSubmEventsMaxAggregateInputObjectZodSchema = makeSchema();
