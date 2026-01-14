import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { TblCustomersScalarRelationFilterObjectSchema as TblCustomersScalarRelationFilterObjectSchema } from './TblCustomersScalarRelationFilter.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { TblContactsScalarRelationFilterObjectSchema as TblContactsScalarRelationFilterObjectSchema } from './TblContactsScalarRelationFilter.schema';
import { tblContactsWhereInputObjectSchema as tblContactsWhereInputObjectSchema } from './tblContactsWhereInput.schema'

const tblcustcontactswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustContactsWhereInputObjectSchema), z.lazy(() => tblCustContactsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustContactsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustContactsWhereInputObjectSchema), z.lazy(() => tblCustContactsWhereInputObjectSchema).array()]).optional(),
  ContactID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  DefaultContact: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  TypeOfContact: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  CellPhone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  Fax: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  Email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  IsSameAsClient: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  tblCustomers: z.union([z.lazy(() => TblCustomersScalarRelationFilterObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  tblContacts: z.union([z.lazy(() => TblContactsScalarRelationFilterObjectSchema), z.lazy(() => tblContactsWhereInputObjectSchema)]).optional()
}).strict();
export const tblCustContactsWhereInputObjectSchema: z.ZodType<Prisma.tblCustContactsWhereInput> = tblcustcontactswhereinputSchema as unknown as z.ZodType<Prisma.tblCustContactsWhereInput>;
export const tblCustContactsWhereInputObjectZodSchema = tblcustcontactswhereinputSchema;
