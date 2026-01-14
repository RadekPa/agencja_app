import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblAgreements: z.boolean().optional()
}).strict();
export const DictCurrenciesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DictCurrenciesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DictCurrenciesCountOutputTypeSelect>;
export const DictCurrenciesCountOutputTypeSelectObjectZodSchema = makeSchema();
