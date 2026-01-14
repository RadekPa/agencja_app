import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.literal(true).optional()
}).strict();
export const TblTitAuxAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblTitAuxAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitAuxAvgAggregateInputType>;
export const TblTitAuxAvgAggregateInputObjectZodSchema = makeSchema();
