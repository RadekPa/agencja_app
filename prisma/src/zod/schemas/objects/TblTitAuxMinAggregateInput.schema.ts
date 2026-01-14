import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.literal(true).optional(),
  CopyrightLine: z.literal(true).optional()
}).strict();
export const TblTitAuxMinAggregateInputObjectSchema: z.ZodType<Prisma.TblTitAuxMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitAuxMinAggregateInputType>;
export const TblTitAuxMinAggregateInputObjectZodSchema = makeSchema();
