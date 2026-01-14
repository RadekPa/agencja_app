import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RightFormID: z.literal(true).optional(),
  RightFormDesc: z.literal(true).optional(),
  RightFormPL: z.literal(true).optional(),
  RightFormAbbPL: z.literal(true).optional(),
  RightFormAbbEN: z.literal(true).optional()
}).strict();
export const DictRightsFormMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictRightsFormMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRightsFormMaxAggregateInputType>;
export const DictRightsFormMaxAggregateInputObjectZodSchema = makeSchema();
