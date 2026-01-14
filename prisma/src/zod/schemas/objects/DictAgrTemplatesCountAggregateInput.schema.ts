import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Name: z.literal(true).optional(),
  FileName: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictAgrTemplatesCountAggregateInputObjectSchema: z.ZodType<Prisma.DictAgrTemplatesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAgrTemplatesCountAggregateInputType>;
export const DictAgrTemplatesCountAggregateInputObjectZodSchema = makeSchema();
