import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesCreateNestedManyWithoutDictCountries_oldInputObjectSchema as dictStatesCreateNestedManyWithoutDictCountries_oldInputObjectSchema } from './dictStatesCreateNestedManyWithoutDictCountries_oldInput.schema';
import { tblAgreementsCreateNestedManyWithoutDictCountries_oldInputObjectSchema as tblAgreementsCreateNestedManyWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsCreateNestedManyWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  CountryDesc: z.string().max(150),
  CountryPL: z.string().max(150).optional().nullable(),
  Tax: z.number().optional().nullable(),
  Code: z.string().max(10).optional().nullable(),
  EU: z.string().max(1).optional().nullable(),
  dictStates: z.lazy(() => dictStatesCreateNestedManyWithoutDictCountries_oldInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedManyWithoutDictCountries_oldInputObjectSchema).optional()
}).strict();
export const dictCountries_oldCreateInputObjectSchema: z.ZodType<Prisma.dictCountries_oldCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldCreateInput>;
export const dictCountries_oldCreateInputObjectZodSchema = makeSchema();
