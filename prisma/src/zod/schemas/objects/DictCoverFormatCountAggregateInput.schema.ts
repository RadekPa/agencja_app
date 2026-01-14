import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CoverFormatID: z.literal(true).optional(),
  CoverFormatDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictCoverFormatCountAggregateInputObjectSchema: z.ZodType<Prisma.DictCoverFormatCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCoverFormatCountAggregateInputType>;
export const DictCoverFormatCountAggregateInputObjectZodSchema = makeSchema();
