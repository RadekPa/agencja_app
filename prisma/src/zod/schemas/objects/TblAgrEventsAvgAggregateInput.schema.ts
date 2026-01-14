import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrEventID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  AgrEventCode: z.literal(true).optional(),
  NoOfCopies: z.literal(true).optional()
}).strict();
export const TblAgrEventsAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblAgrEventsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblAgrEventsAvgAggregateInputType>;
export const TblAgrEventsAvgAggregateInputObjectZodSchema = makeSchema();
