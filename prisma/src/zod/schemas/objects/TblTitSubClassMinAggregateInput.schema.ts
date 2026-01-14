import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubClassCode: z.literal(true).optional(),
  TitleID: z.literal(true).optional()
}).strict();
export const TblTitSubClassMinAggregateInputObjectSchema: z.ZodType<Prisma.TblTitSubClassMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitSubClassMinAggregateInputType>;
export const TblTitSubClassMinAggregateInputObjectZodSchema = makeSchema();
