import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema as dictStatesUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema } from './dictStatesUncheckedCreateNestedManyWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  CountryID: z.number().int().optional(),
  CountryDesc: z.string(),
  CountryPL: z.string().optional().nullable(),
  Tax: z.number().optional().nullable(),
  Code: z.string().optional().nullable(),
  EU: z.string().optional().nullable(),
  dictStates: z.lazy(() => dictStatesUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema).optional()
}).strict();
export const dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUncheckedCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUncheckedCreateWithoutTblAgreementsInput>;
export const dictCountries_oldUncheckedCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
