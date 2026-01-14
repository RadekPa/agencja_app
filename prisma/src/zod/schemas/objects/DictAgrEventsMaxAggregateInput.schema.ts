import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrEventCode: z.literal(true).optional(),
  AgrEventDesc: z.literal(true).optional(),
  Status: z.literal(true).optional()
}).strict();
export const DictAgrEventsMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictAgrEventsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAgrEventsMaxAggregateInputType>;
export const DictAgrEventsMaxAggregateInputObjectZodSchema = makeSchema();
