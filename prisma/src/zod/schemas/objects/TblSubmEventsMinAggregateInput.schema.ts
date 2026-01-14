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
export const TblSubmEventsMinAggregateInputObjectSchema: z.ZodType<Prisma.TblSubmEventsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblSubmEventsMinAggregateInputType>;
export const TblSubmEventsMinAggregateInputObjectZodSchema = makeSchema();
