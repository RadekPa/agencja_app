import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesCreateNestedManyWithoutDictCountries_oldInputObjectSchema as dictStatesCreateNestedManyWithoutDictCountries_oldInputObjectSchema } from './dictStatesCreateNestedManyWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  CountryDesc: z.string().max(150),
  CountryPL: z.string().max(150).optional().nullable(),
  Tax: z.number().optional().nullable(),
  Code: z.string().max(10).optional().nullable(),
  EU: z.string().max(1).optional().nullable(),
  dictStates: z.lazy(() => dictStatesCreateNestedManyWithoutDictCountries_oldInputObjectSchema).optional()
}).strict();
export const dictCountries_oldCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictCountries_oldCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldCreateWithoutTblAgreementsInput>;
export const dictCountries_oldCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
