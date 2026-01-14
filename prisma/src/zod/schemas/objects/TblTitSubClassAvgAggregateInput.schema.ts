import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.literal(true).optional()
}).strict();
export const TblTitSubClassAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblTitSubClassAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitSubClassAvgAggregateInputType>;
export const TblTitSubClassAvgAggregateInputObjectZodSchema = makeSchema();
