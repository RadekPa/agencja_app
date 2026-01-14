import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatTypeID: z.literal(true).optional(),
  MatTypeDesc: z.literal(true).optional(),
  MatTypeDescPL: z.literal(true).optional()
}).strict();
export const DictMatTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.DictMatTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictMatTypeMinAggregateInputType>;
export const DictMatTypeMinAggregateInputObjectZodSchema = makeSchema();
