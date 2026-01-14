import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTypeId: z.literal(true).optional()
}).strict();
export const DictAdvTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvTypeSumAggregateInputType>;
export const DictAdvTypeSumAggregateInputObjectZodSchema = makeSchema();
