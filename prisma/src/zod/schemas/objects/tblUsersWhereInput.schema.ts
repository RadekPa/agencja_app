import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { TblCustUsersListRelationFilterObjectSchema as TblCustUsersListRelationFilterObjectSchema } from './TblCustUsersListRelationFilter.schema';
import { TblUserAccessListRelationFilterObjectSchema as TblUserAccessListRelationFilterObjectSchema } from './TblUserAccessListRelationFilter.schema';
import { TblUserParamsListRelationFilterObjectSchema as TblUserParamsListRelationFilterObjectSchema } from './TblUserParamsListRelationFilter.schema'

const tbluserswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblUsersWhereInputObjectSchema), z.lazy(() => tblUsersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblUsersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblUsersWhereInputObjectSchema), z.lazy(() => tblUsersWhereInputObjectSchema).array()]).optional(),
  Login: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  FirstName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  MiddleName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  LastName: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  CompanyPosition: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Birthday: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  Status: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(1)]).optional(),
  Initials: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  Phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  MobilePhone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  Email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Sex: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  Street: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  ZipCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  City: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  Country: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(500)]).optional().nullable(),
  UserMod: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  DateMod: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  Nameday: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  PersonID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  tblCustUsers: z.lazy(() => TblCustUsersListRelationFilterObjectSchema).optional(),
  tblUserAccess: z.lazy(() => TblUserAccessListRelationFilterObjectSchema).optional(),
  tblUserParams: z.lazy(() => TblUserParamsListRelationFilterObjectSchema).optional()
}).strict();
export const tblUsersWhereInputObjectSchema: z.ZodType<Prisma.tblUsersWhereInput> = tbluserswhereinputSchema as unknown as z.ZodType<Prisma.tblUsersWhereInput>;
export const tblUsersWhereInputObjectZodSchema = tbluserswhereinputSchema;
