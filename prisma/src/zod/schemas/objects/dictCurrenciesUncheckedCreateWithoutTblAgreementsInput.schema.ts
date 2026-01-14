import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CurrID: z.string(),
  CurrDesc: z.string()
}).strict();
export const dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCurrenciesUncheckedCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCurrenciesUncheckedCreateWithoutTblAgreementsInput>;
export const dictCurrenciesUncheckedCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
