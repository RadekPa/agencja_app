import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.string().max(3),
  CurrDesc: z.string().max(50)
}).strict();
export const dictCurrenciesCreateManyInputObjectSchema: z.ZodType<Prisma.dictCurrenciesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesCreateManyInput>;
export const dictCurrenciesCreateManyInputObjectZodSchema = makeSchema();
