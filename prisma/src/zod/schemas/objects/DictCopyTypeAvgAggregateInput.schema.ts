import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CopyTypeID: z.literal(true).optional()
}).strict();
export const DictCopyTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictCopyTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCopyTypeAvgAggregateInputType>;
export const DictCopyTypeAvgAggregateInputObjectZodSchema = makeSchema();
