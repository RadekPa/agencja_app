import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PersonID: z.literal(true).optional(),
  Login: z.literal(true).optional(),
  DateBegin: z.literal(true).optional(),
  DateEnd: z.literal(true).optional()
}).strict();
export const TblPersonLoginMinAggregateInputObjectSchema: z.ZodType<Prisma.TblPersonLoginMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPersonLoginMinAggregateInputType>;
export const TblPersonLoginMinAggregateInputObjectZodSchema = makeSchema();
