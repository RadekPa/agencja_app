import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema as dictStatesUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema } from './dictStatesUncheckedCreateNestedManyWithoutDictCountries_oldInput.schema';
import { tblAgreementsUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema as tblAgreementsUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUncheckedCreateNestedManyWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  CountryID: z.number().int().optional(),
  CountryDesc: z.string().max(150),
  CountryPL: z.string().max(150).optional().nullable(),
  Tax: z.number().optional().nullable(),
  Code: z.string().max(10).optional().nullable(),
  EU: z.string().max(1).optional().nullable(),
  dictStates: z.lazy(() => dictStatesUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema).optional()
}).strict();
export const dictCountries_oldUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUncheckedCreateInput>;
export const dictCountries_oldUncheckedCreateInputObjectZodSchema = makeSchema();
