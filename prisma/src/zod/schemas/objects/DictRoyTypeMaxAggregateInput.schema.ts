import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyTypeID: z.literal(true).optional(),
  AgrRightID: z.literal(true).optional(),
  RoyTypeDesc: z.literal(true).optional()
}).strict();
export const DictRoyTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyTypeMaxAggregateInputType>;
export const DictRoyTypeMaxAggregateInputObjectZodSchema = makeSchema();
