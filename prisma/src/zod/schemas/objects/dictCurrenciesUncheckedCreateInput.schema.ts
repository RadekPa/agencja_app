import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsUncheckedCreateNestedManyWithoutDictCurrenciesInputObjectSchema as tblAgreementsUncheckedCreateNestedManyWithoutDictCurrenciesInputObjectSchema } from './tblAgreementsUncheckedCreateNestedManyWithoutDictCurrenciesInput.schema'

const makeSchema = () => z.object({
  CurrID: z.string().max(3),
  CurrDesc: z.string().max(50),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedCreateNestedManyWithoutDictCurrenciesInputObjectSchema).optional()
}).strict();
export const dictCurrenciesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictCurrenciesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesUncheckedCreateInput>;
export const dictCurrenciesUncheckedCreateInputObjectZodSchema = makeSchema();
