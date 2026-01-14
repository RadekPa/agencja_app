import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CoverFormatID: z.literal(true).optional(),
  CoverFormatDesc: z.literal(true).optional()
}).strict();
export const DictCoverFormatMinAggregateInputObjectSchema: z.ZodType<Prisma.DictCoverFormatMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCoverFormatMinAggregateInputType>;
export const DictCoverFormatMinAggregateInputObjectZodSchema = makeSchema();
