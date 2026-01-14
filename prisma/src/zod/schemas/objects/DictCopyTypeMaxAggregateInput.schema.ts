import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CopyTypeID: z.literal(true).optional(),
  CopyType: z.literal(true).optional()
}).strict();
export const DictCopyTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictCopyTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCopyTypeMaxAggregateInputType>;
export const DictCopyTypeMaxAggregateInputObjectZodSchema = makeSchema();
