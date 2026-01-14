import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ExcludeReasonID: z.literal(true).optional(),
  ExcludeReasonCode: z.literal(true).optional(),
  ExcludeReasonDesc: z.literal(true).optional()
}).strict();
export const DictMissRoyExcludeReasonMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictMissRoyExcludeReasonMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictMissRoyExcludeReasonMaxAggregateInputType>;
export const DictMissRoyExcludeReasonMaxAggregateInputObjectZodSchema = makeSchema();
