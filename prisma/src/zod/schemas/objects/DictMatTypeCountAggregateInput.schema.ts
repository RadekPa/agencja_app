import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  MatTypeID: z.literal(true).optional(),
  MatTypeDesc: z.literal(true).optional(),
  MatTypeDescPL: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictMatTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.DictMatTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictMatTypeCountAggregateInputType>;
export const DictMatTypeCountAggregateInputObjectZodSchema = makeSchema();
