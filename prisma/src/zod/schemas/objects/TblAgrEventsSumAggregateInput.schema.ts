import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrEventID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  AgrEventCode: z.literal(true).optional(),
  NoOfCopies: z.literal(true).optional()
}).strict();
export const TblAgrEventsSumAggregateInputObjectSchema: z.ZodType<Prisma.TblAgrEventsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblAgrEventsSumAggregateInputType>;
export const TblAgrEventsSumAggregateInputObjectZodSchema = makeSchema();
