import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTypeId: z.literal(true).optional(),
  AdvTypeDesc: z.literal(true).optional(),
  AdvTypeDescPL: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictAdvTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvTypeCountAggregateInputType>;
export const DictAdvTypeCountAggregateInputObjectZodSchema = makeSchema();
