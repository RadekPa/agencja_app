import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblAgrRightsListRelationFilterObjectSchema as TblAgrRightsListRelationFilterObjectSchema } from './TblAgrRightsListRelationFilter.schema'

const dictroyaccountintervalwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema), z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema), z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema).array()]).optional(),
  RoyAccountIntervalID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  RoyAccountIntervalDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  IntervalAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(8)]).optional().nullable(),
  tblAgrRights: z.lazy(() => TblAgrRightsListRelationFilterObjectSchema).optional()
}).strict();
export const dictRoyAccountIntervalWhereInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalWhereInput> = dictroyaccountintervalwhereinputSchema as unknown as z.ZodType<Prisma.dictRoyAccountIntervalWhereInput>;
export const dictRoyAccountIntervalWhereInputObjectZodSchema = dictroyaccountintervalwhereinputSchema;
