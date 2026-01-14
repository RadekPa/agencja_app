import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.literal(true).optional(),
  Name: z.literal(true).optional()
}).strict();
export const DictXRateExcelNamesMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictXRateExcelNamesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictXRateExcelNamesMaxAggregateInputType>;
export const DictXRateExcelNamesMaxAggregateInputObjectZodSchema = makeSchema();
