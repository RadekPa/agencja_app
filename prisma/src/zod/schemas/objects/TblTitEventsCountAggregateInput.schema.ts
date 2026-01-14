import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitEventID: z.literal(true).optional(),
  CopyTypeID: z.literal(true).optional(),
  EventCode: z.literal(true).optional(),
  TitleID: z.literal(true).optional(),
  EventDate: z.literal(true).optional(),
  NoOfCopies: z.literal(true).optional(),
  EndDate: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblTitEventsCountAggregateInputObjectSchema: z.ZodType<Prisma.TblTitEventsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitEventsCountAggregateInputType>;
export const TblTitEventsCountAggregateInputObjectZodSchema = makeSchema();
