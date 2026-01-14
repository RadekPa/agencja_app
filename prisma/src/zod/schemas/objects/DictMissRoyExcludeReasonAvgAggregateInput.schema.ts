import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.literal(true).optional()
}).strict();
export const DictMissRoyExcludeReasonAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictMissRoyExcludeReasonAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictMissRoyExcludeReasonAvgAggregateInputType>;
export const DictMissRoyExcludeReasonAvgAggregateInputObjectZodSchema = makeSchema();
