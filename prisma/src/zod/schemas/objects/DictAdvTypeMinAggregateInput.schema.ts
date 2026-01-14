import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTypeId: z.literal(true).optional(),
  AdvTypeDesc: z.literal(true).optional(),
  AdvTypeDescPL: z.literal(true).optional()
}).strict();
export const DictAdvTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvTypeMinAggregateInputType>;
export const DictAdvTypeMinAggregateInputObjectZodSchema = makeSchema();
