import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitEventID: z.literal(true).optional(),
  CopyTypeID: z.literal(true).optional(),
  EventCode: z.literal(true).optional(),
  TitleID: z.literal(true).optional(),
  EventDate: z.literal(true).optional(),
  NoOfCopies: z.literal(true).optional(),
  EndDate: z.literal(true).optional()
}).strict();
export const TblTitEventsMinAggregateInputObjectSchema: z.ZodType<Prisma.TblTitEventsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitEventsMinAggregateInputType>;
export const TblTitEventsMinAggregateInputObjectZodSchema = makeSchema();
