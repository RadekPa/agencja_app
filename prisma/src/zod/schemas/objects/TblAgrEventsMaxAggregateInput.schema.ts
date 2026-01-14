import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrEventID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  AgrEventCode: z.literal(true).optional(),
  EventDate: z.literal(true).optional(),
  NoOfCopies: z.literal(true).optional(),
  EndDate: z.literal(true).optional(),
  DateMod: z.literal(true).optional(),
  UserMod: z.literal(true).optional()
}).strict();
export const TblAgrEventsMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblAgrEventsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblAgrEventsMaxAggregateInputType>;
export const TblAgrEventsMaxAggregateInputObjectZodSchema = makeSchema();
