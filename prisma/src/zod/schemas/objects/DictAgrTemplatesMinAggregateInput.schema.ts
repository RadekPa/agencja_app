import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Name: z.literal(true).optional(),
  FileName: z.literal(true).optional()
}).strict();
export const DictAgrTemplatesMinAggregateInputObjectSchema: z.ZodType<Prisma.DictAgrTemplatesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAgrTemplatesMinAggregateInputType>;
export const DictAgrTemplatesMinAggregateInputObjectZodSchema = makeSchema();
