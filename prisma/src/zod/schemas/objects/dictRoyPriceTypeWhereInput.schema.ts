import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblAgrRightsListRelationFilterObjectSchema as TblAgrRightsListRelationFilterObjectSchema } from './TblAgrRightsListRelationFilter.schema'

const dictroypricetypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema), z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema), z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema).array()]).optional(),
  RoyPriceTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  RoyPriceTypeDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  RoyPriceTypePL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  tblAgrRights: z.lazy(() => TblAgrRightsListRelationFilterObjectSchema).optional()
}).strict();
export const dictRoyPriceTypeWhereInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeWhereInput> = dictroypricetypewhereinputSchema as unknown as z.ZodType<Prisma.dictRoyPriceTypeWhereInput>;
export const dictRoyPriceTypeWhereInputObjectZodSchema = dictroypricetypewhereinputSchema;
