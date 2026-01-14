import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const tblcustbankscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustBankScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblCustBankScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustBankScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustBankScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblCustBankScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  BankName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(150)]).optional(),
  BankAddress: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  AccountNo: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  RoutingNo: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  AccountName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(250)]).optional().nullable()
}).strict();
export const tblCustBankScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblCustBankScalarWhereWithAggregatesInput> = tblcustbankscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblCustBankScalarWhereWithAggregatesInput>;
export const tblCustBankScalarWhereWithAggregatesInputObjectZodSchema = tblcustbankscalarwherewithaggregatesinputSchema;
