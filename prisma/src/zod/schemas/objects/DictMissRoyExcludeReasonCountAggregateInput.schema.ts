import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.literal(true).optional(),
  ExcludeReasonCode: z.literal(true).optional(),
  ExcludeReasonDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictMissRoyExcludeReasonCountAggregateInputObjectSchema: z.ZodType<Prisma.DictMissRoyExcludeReasonCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictMissRoyExcludeReasonCountAggregateInputType>;
export const DictMissRoyExcludeReasonCountAggregateInputObjectZodSchema = makeSchema();
