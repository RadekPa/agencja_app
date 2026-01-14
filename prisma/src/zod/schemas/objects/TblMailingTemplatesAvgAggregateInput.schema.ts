import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TempID: z.literal(true).optional()
}).strict();
export const TblMailingTemplatesAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblMailingTemplatesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMailingTemplatesAvgAggregateInputType>;
export const TblMailingTemplatesAvgAggregateInputObjectZodSchema = makeSchema();
