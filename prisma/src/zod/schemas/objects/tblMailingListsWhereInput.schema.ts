import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DictTitMainClassScalarRelationFilterObjectSchema as DictTitMainClassScalarRelationFilterObjectSchema } from './DictTitMainClassScalarRelationFilter.schema';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema';
import { DictTitSubClassScalarRelationFilterObjectSchema as DictTitSubClassScalarRelationFilterObjectSchema } from './DictTitSubClassScalarRelationFilter.schema';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './dictTitSubClassWhereInput.schema';
import { TblCustomersScalarRelationFilterObjectSchema as TblCustomersScalarRelationFilterObjectSchema } from './TblCustomersScalarRelationFilter.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const tblmailinglistswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblMailingListsWhereInputObjectSchema), z.lazy(() => tblMailingListsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblMailingListsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblMailingListsWhereInputObjectSchema), z.lazy(() => tblMailingListsWhereInputObjectSchema).array()]).optional(),
  ClassCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(10)]).optional(),
  SubClassCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(5)]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  dictTitMainClass: z.union([z.lazy(() => DictTitMainClassScalarRelationFilterObjectSchema), z.lazy(() => dictTitMainClassWhereInputObjectSchema)]).optional(),
  dictTitSubClass: z.union([z.lazy(() => DictTitSubClassScalarRelationFilterObjectSchema), z.lazy(() => dictTitSubClassWhereInputObjectSchema)]).optional(),
  tblCustomers: z.union([z.lazy(() => TblCustomersScalarRelationFilterObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional()
}).strict();
export const tblMailingListsWhereInputObjectSchema: z.ZodType<Prisma.tblMailingListsWhereInput> = tblmailinglistswhereinputSchema as unknown as z.ZodType<Prisma.tblMailingListsWhereInput>;
export const tblMailingListsWhereInputObjectZodSchema = tblmailinglistswhereinputSchema;
