import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrDate: z.coerce.date(),
  CurrID: z.string().max(3),
  XRate: z.number()
}).strict();
export const dictXRatesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictXRatesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictXRatesUncheckedCreateInput>;
export const dictXRatesUncheckedCreateInputObjectZodSchema = makeSchema();
