import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrEventCode: z.literal(true).optional()
}).strict();
export const DictAgrEventsSumAggregateInputObjectSchema: z.ZodType<Prisma.DictAgrEventsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAgrEventsSumAggregateInputType>;
export const DictAgrEventsSumAggregateInputObjectZodSchema = makeSchema();
