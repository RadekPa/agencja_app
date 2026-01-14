import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblAgrRightsListRelationFilterObjectSchema as TblAgrRightsListRelationFilterObjectSchema } from './TblAgrRightsListRelationFilter.schema'

const dictpricetypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictPriceTypeWhereInputObjectSchema), z.lazy(() => dictPriceTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictPriceTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictPriceTypeWhereInputObjectSchema), z.lazy(() => dictPriceTypeWhereInputObjectSchema).array()]).optional(),
  PriceTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  PriceTypeDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  PriceTypePL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  tblAgrRights: z.lazy(() => TblAgrRightsListRelationFilterObjectSchema).optional()
}).strict();
export const dictPriceTypeWhereInputObjectSchema: z.ZodType<Prisma.dictPriceTypeWhereInput> = dictpricetypewhereinputSchema as unknown as z.ZodType<Prisma.dictPriceTypeWhereInput>;
export const dictPriceTypeWhereInputObjectZodSchema = dictpricetypewhereinputSchema;
