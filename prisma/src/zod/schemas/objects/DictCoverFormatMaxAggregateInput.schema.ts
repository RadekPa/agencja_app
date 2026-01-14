import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CoverFormatID: z.literal(true).optional(),
  CoverFormatDesc: z.literal(true).optional()
}).strict();
export const DictCoverFormatMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictCoverFormatMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCoverFormatMaxAggregateInputType>;
export const DictCoverFormatMaxAggregateInputObjectZodSchema = makeSchema();
