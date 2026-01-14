import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblCustTypesListRelationFilterObjectSchema as TblCustTypesListRelationFilterObjectSchema } from './TblCustTypesListRelationFilter.schema'

const dictcusttypeswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCustTypesWhereInputObjectSchema), z.lazy(() => dictCustTypesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCustTypesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCustTypesWhereInputObjectSchema), z.lazy(() => dictCustTypesWhereInputObjectSchema).array()]).optional(),
  CustTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustTypeName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  CustTypeDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  tblCustTypes: z.lazy(() => TblCustTypesListRelationFilterObjectSchema).optional()
}).strict();
export const dictCustTypesWhereInputObjectSchema: z.ZodType<Prisma.dictCustTypesWhereInput> = dictcusttypeswhereinputSchema as unknown as z.ZodType<Prisma.dictCustTypesWhereInput>;
export const dictCustTypesWhereInputObjectZodSchema = dictcusttypeswhereinputSchema;
