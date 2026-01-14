import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema as tblAgreementsUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsUncheckedCreateNestedManyWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  CountryID: z.number().int().optional(),
  CountryDesc: z.string(),
  CountryPL: z.string().optional().nullable(),
  Tax: z.number().optional().nullable(),
  Code: z.string().optional().nullable(),
  EU: z.string().optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedCreateNestedManyWithoutDictCountries_oldInputObjectSchema).optional()
}).strict();
export const dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.dictCountries_oldUncheckedCreateWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldUncheckedCreateWithoutDictStatesInput>;
export const dictCountries_oldUncheckedCreateWithoutDictStatesInputObjectZodSchema = makeSchema();
