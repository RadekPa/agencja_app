import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TempID: z.literal(true).optional()
}).strict();
export const TblMailingTemplatesSumAggregateInputObjectSchema: z.ZodType<Prisma.TblMailingTemplatesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblMailingTemplatesSumAggregateInputType>;
export const TblMailingTemplatesSumAggregateInputObjectZodSchema = makeSchema();
