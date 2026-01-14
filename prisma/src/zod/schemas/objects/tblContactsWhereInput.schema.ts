import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { TblCustContactsListRelationFilterObjectSchema as TblCustContactsListRelationFilterObjectSchema } from './TblCustContactsListRelationFilter.schema'

const tblcontactswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblContactsWhereInputObjectSchema), z.lazy(() => tblContactsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblContactsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblContactsWhereInputObjectSchema), z.lazy(() => tblContactsWhereInputObjectSchema).array()]).optional(),
  ContactID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  PhoneNumber: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  FirstName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  MiddleName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  LastName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Informal: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Fax: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  Email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  DateMod: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  ContactPosition: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Accountant: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  tblCustContacts: z.lazy(() => TblCustContactsListRelationFilterObjectSchema).optional()
}).strict();
export const tblContactsWhereInputObjectSchema: z.ZodType<Prisma.tblContactsWhereInput> = tblcontactswhereinputSchema as unknown as z.ZodType<Prisma.tblContactsWhereInput>;
export const tblContactsWhereInputObjectZodSchema = tblcontactswhereinputSchema;
