import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.literal(true).optional(),
  Name: z.literal(true).optional()
}).strict();
export const DictXRateExcelNamesMinAggregateInputObjectSchema: z.ZodType<Prisma.DictXRateExcelNamesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictXRateExcelNamesMinAggregateInputType>;
export const DictXRateExcelNamesMinAggregateInputObjectZodSchema = makeSchema();
