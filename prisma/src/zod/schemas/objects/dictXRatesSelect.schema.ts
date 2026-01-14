import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrDate: z.boolean().optional(),
  CurrID: z.boolean().optional(),
  XRate: z.boolean().optional()
}).strict();
export const dictXRatesSelectObjectSchema: z.ZodType<Prisma.dictXRatesSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesSelect>;
export const dictXRatesSelectObjectZodSchema = makeSchema();
