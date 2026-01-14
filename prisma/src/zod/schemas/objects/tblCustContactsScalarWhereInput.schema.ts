import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'

const tblcustcontactsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustContactsScalarWhereInputObjectSchema), z.lazy(() => tblCustContactsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustContactsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustContactsScalarWhereInputObjectSchema), z.lazy(() => tblCustContactsScalarWhereInputObjectSchema).array()]).optional(),
  ContactID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  DefaultContact: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  TypeOfContact: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  CellPhone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Fax: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  IsSameAsClient: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const tblCustContactsScalarWhereInputObjectSchema: z.ZodType<Prisma.tblCustContactsScalarWhereInput> = tblcustcontactsscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblCustContactsScalarWhereInput>;
export const tblCustContactsScalarWhereInputObjectZodSchema = tblcustcontactsscalarwhereinputSchema;
