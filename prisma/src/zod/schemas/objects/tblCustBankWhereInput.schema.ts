import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblCustomersScalarRelationFilterObjectSchema as TblCustomersScalarRelationFilterObjectSchema } from './TblCustomersScalarRelationFilter.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const tblcustbankwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustBankWhereInputObjectSchema), z.lazy(() => tblCustBankWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustBankWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustBankWhereInputObjectSchema), z.lazy(() => tblCustBankWhereInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  BankName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(150)]).optional(),
  BankAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  AccountNo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  RoutingNo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  AccountName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  tblCustomers: z.union([z.lazy(() => TblCustomersScalarRelationFilterObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional()
}).strict();
export const tblCustBankWhereInputObjectSchema: z.ZodType<Prisma.tblCustBankWhereInput> = tblcustbankwhereinputSchema as unknown as z.ZodType<Prisma.tblCustBankWhereInput>;
export const tblCustBankWhereInputObjectZodSchema = tblcustbankwhereinputSchema;
