import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RightFormID: z.literal(true).optional()
}).strict();
export const DictRightsFormAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictRightsFormAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRightsFormAvgAggregateInputType>;
export const DictRightsFormAvgAggregateInputObjectZodSchema = makeSchema();
