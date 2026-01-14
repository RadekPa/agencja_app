import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Name: z.literal(true).optional(),
  FileName: z.literal(true).optional()
}).strict();
export const DictAgrTemplatesMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictAgrTemplatesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAgrTemplatesMaxAggregateInputType>;
export const DictAgrTemplatesMaxAggregateInputObjectZodSchema = makeSchema();
