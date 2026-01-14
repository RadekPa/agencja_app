import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.string().max(3).optional()
}).strict();
export const dictCurrenciesWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictCurrenciesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesWhereUniqueInput>;
export const dictCurrenciesWhereUniqueInputObjectZodSchema = makeSchema();
