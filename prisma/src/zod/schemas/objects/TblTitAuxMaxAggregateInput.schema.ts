import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.literal(true).optional(),
  CopyrightLine: z.literal(true).optional()
}).strict();
export const TblTitAuxMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblTitAuxMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitAuxMaxAggregateInputType>;
export const TblTitAuxMaxAggregateInputObjectZodSchema = makeSchema();
