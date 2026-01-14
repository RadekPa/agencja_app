import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.literal(true).optional(),
  Name: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictXRateExcelNamesCountAggregateInputObjectSchema: z.ZodType<Prisma.DictXRateExcelNamesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictXRateExcelNamesCountAggregateInputType>;
export const DictXRateExcelNamesCountAggregateInputObjectZodSchema = makeSchema();
