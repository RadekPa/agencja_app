import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DictStatesListRelationFilterObjectSchema as DictStatesListRelationFilterObjectSchema } from './DictStatesListRelationFilter.schema';
import { TblAgreementsListRelationFilterObjectSchema as TblAgreementsListRelationFilterObjectSchema } from './TblAgreementsListRelationFilter.schema'

const dictcountries_oldwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCountries_oldWhereInputObjectSchema), z.lazy(() => dictCountries_oldWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCountries_oldWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCountries_oldWhereInputObjectSchema), z.lazy(() => dictCountries_oldWhereInputObjectSchema).array()]).optional(),
  CountryID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CountryDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(150)]).optional(),
  CountryPL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  Tax: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Code: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  EU: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  dictStates: z.lazy(() => DictStatesListRelationFilterObjectSchema).optional(),
  tblAgreements: z.lazy(() => TblAgreementsListRelationFilterObjectSchema).optional()
}).strict();
export const dictCountries_oldWhereInputObjectSchema: z.ZodType<Prisma.dictCountries_oldWhereInput> = dictcountries_oldwhereinputSchema as unknown as z.ZodType<Prisma.dictCountries_oldWhereInput>;
export const dictCountries_oldWhereInputObjectZodSchema = dictcountries_oldwhereinputSchema;
