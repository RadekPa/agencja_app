import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RightFormID: z.literal(true).optional()
}).strict();
export const DictRightsFormSumAggregateInputObjectSchema: z.ZodType<Prisma.DictRightsFormSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRightsFormSumAggregateInputType>;
export const DictRightsFormSumAggregateInputObjectZodSchema = makeSchema();
