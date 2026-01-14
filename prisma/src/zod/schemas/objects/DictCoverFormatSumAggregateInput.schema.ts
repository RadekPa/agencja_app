import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CoverFormatID: z.literal(true).optional()
}).strict();
export const DictCoverFormatSumAggregateInputObjectSchema: z.ZodType<Prisma.DictCoverFormatSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCoverFormatSumAggregateInputType>;
export const DictCoverFormatSumAggregateInputObjectZodSchema = makeSchema();
