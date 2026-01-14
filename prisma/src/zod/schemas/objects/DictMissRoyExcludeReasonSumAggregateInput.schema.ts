import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.literal(true).optional()
}).strict();
export const DictMissRoyExcludeReasonSumAggregateInputObjectSchema: z.ZodType<Prisma.DictMissRoyExcludeReasonSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictMissRoyExcludeReasonSumAggregateInputType>;
export const DictMissRoyExcludeReasonSumAggregateInputObjectZodSchema = makeSchema();
