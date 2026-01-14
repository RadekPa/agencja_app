import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DictCustTypesScalarRelationFilterObjectSchema as DictCustTypesScalarRelationFilterObjectSchema } from './DictCustTypesScalarRelationFilter.schema';
import { dictCustTypesWhereInputObjectSchema as dictCustTypesWhereInputObjectSchema } from './dictCustTypesWhereInput.schema';
import { TblCustomersScalarRelationFilterObjectSchema as TblCustomersScalarRelationFilterObjectSchema } from './TblCustomersScalarRelationFilter.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const tblcusttypeswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustTypesWhereInputObjectSchema), z.lazy(() => tblCustTypesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustTypesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustTypesWhereInputObjectSchema), z.lazy(() => tblCustTypesWhereInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  dictCustTypes: z.union([z.lazy(() => DictCustTypesScalarRelationFilterObjectSchema), z.lazy(() => dictCustTypesWhereInputObjectSchema)]).optional(),
  tblCustomers: z.union([z.lazy(() => TblCustomersScalarRelationFilterObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional()
}).strict();
export const tblCustTypesWhereInputObjectSchema: z.ZodType<Prisma.tblCustTypesWhereInput> = tblcusttypeswhereinputSchema as unknown as z.ZodType<Prisma.tblCustTypesWhereInput>;
export const tblCustTypesWhereInputObjectZodSchema = tblcusttypeswhereinputSchema;
