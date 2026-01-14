import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrEventCode: z.literal(true).optional()
}).strict();
export const DictAgrEventsAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictAgrEventsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAgrEventsAvgAggregateInputType>;
export const DictAgrEventsAvgAggregateInputObjectZodSchema = makeSchema();
