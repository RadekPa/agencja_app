import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyTypeID: z.literal(true).optional(),
  AgrRightID: z.literal(true).optional(),
  RoyTypeDesc: z.literal(true).optional()
}).strict();
export const DictRoyTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyTypeMinAggregateInputType>;
export const DictRoyTypeMinAggregateInputObjectZodSchema = makeSchema();
