import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CopyTypeID: z.literal(true).optional(),
  CopyType: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictCopyTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.DictCopyTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCopyTypeCountAggregateInputType>;
export const DictCopyTypeCountAggregateInputObjectZodSchema = makeSchema();
