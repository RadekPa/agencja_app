import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CoverFormatID: z.literal(true).optional()
}).strict();
export const DictCoverFormatAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictCoverFormatAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCoverFormatAvgAggregateInputType>;
export const DictCoverFormatAvgAggregateInputObjectZodSchema = makeSchema();
