import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.literal(true).optional()
}).strict();
export const TblTitAuxSumAggregateInputObjectSchema: z.ZodType<Prisma.TblTitAuxSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitAuxSumAggregateInputType>;
export const TblTitAuxSumAggregateInputObjectZodSchema = makeSchema();
