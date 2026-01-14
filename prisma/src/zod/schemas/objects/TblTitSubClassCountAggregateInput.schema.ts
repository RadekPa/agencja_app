import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.literal(true).optional(),
  TitleID: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblTitSubClassCountAggregateInputObjectSchema: z.ZodType<Prisma.TblTitSubClassCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitSubClassCountAggregateInputType>;
export const TblTitSubClassCountAggregateInputObjectZodSchema = makeSchema();
