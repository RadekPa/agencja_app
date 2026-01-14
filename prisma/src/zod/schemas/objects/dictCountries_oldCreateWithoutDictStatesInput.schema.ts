import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateNestedManyWithoutDictCountries_oldInputObjectSchema as tblAgreementsCreateNestedManyWithoutDictCountries_oldInputObjectSchema } from './tblAgreementsCreateNestedManyWithoutDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  CountryDesc: z.string().max(150),
  CountryPL: z.string().max(150).optional().nullable(),
  Tax: z.number().optional().nullable(),
  Code: z.string().max(10).optional().nullable(),
  EU: z.string().max(1).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedManyWithoutDictCountries_oldInputObjectSchema).optional()
}).strict();
export const dictCountries_oldCreateWithoutDictStatesInputObjectSchema: z.ZodType<Prisma.dictCountries_oldCreateWithoutDictStatesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldCreateWithoutDictStatesInput>;
export const dictCountries_oldCreateWithoutDictStatesInputObjectZodSchema = makeSchema();
