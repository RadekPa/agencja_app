import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DictCountries_oldNullableScalarRelationFilterObjectSchema as DictCountries_oldNullableScalarRelationFilterObjectSchema } from './DictCountries_oldNullableScalarRelationFilter.schema';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './dictCountries_oldWhereInput.schema';
import { TblCustomersListRelationFilterObjectSchema as TblCustomersListRelationFilterObjectSchema } from './TblCustomersListRelationFilter.schema'

const dictstateswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictStatesWhereInputObjectSchema), z.lazy(() => dictStatesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictStatesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictStatesWhereInputObjectSchema), z.lazy(() => dictStatesWhereInputObjectSchema).array()]).optional(),
  StateID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CountryID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  StateAbb: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(2)]).optional(),
  StateName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  dictCountries_old: z.union([z.lazy(() => DictCountries_oldNullableScalarRelationFilterObjectSchema), z.lazy(() => dictCountries_oldWhereInputObjectSchema)]).optional(),
  tblCustomers: z.lazy(() => TblCustomersListRelationFilterObjectSchema).optional()
}).strict();
export const dictStatesWhereInputObjectSchema: z.ZodType<Prisma.dictStatesWhereInput> = dictstateswhereinputSchema as unknown as z.ZodType<Prisma.dictStatesWhereInput>;
export const dictStatesWhereInputObjectZodSchema = dictstateswhereinputSchema;
