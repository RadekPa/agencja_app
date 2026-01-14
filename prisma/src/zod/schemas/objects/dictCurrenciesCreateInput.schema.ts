import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateNestedManyWithoutDictCurrenciesInputObjectSchema as tblAgreementsCreateNestedManyWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsCreateNestedManyWithoutDictCurrenciesInput.schema'

const makeSchema = () => z.object({
  CurrID: z.string().max(3),
  CurrDesc: z.string().max(50),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedManyWithoutDictCurrenciesInputObjectSchema).optional()
}).strict();
export const dictCurrenciesCreateInputObjectSchema: z.ZodType<Prisma.dictCurrenciesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesCreateInput>;
export const dictCurrenciesCreateInputObjectZodSchema = makeSchema();
