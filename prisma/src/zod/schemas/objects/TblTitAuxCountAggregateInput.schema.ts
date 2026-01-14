import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.literal(true).optional(),
  CopyrightLine: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblTitAuxCountAggregateInputObjectSchema: z.ZodType<Prisma.TblTitAuxCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitAuxCountAggregateInputType>;
export const TblTitAuxCountAggregateInputObjectZodSchema = makeSchema();
