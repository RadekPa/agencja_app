import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CopyTypeID: z.literal(true).optional(),
  CopyType: z.literal(true).optional()
}).strict();
export const DictCopyTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.DictCopyTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCopyTypeMinAggregateInputType>;
export const DictCopyTypeMinAggregateInputObjectZodSchema = makeSchema();
