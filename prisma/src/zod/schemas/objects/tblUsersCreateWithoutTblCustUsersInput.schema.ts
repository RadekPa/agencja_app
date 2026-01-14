import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessCreateNestedManyWithoutTblUsersInputObjectSchema as tblUserAccessCreateNestedManyWithoutTblUsersInputObjectSchema } from './tblUserAccessCreateNestedManyWithoutTblUsersInput.schema';
import { tblUserParamsCreateNestedManyWithoutTblUsersInputObjectSchema as tblUserParamsCreateNestedManyWithoutTblUsersInputObjectSchema } from './tblUserParamsCreateNestedManyWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  Login: z.string().max(30),
  FirstName: z.string().max(50),
  MiddleName: z.string().max(50).optional().nullable(),
  LastName: z.string().max(50),
  CompanyPosition: z.string().max(50).optional().nullable(),
  Birthday: z.coerce.date().optional().nullable(),
  Status: z.string().max(1),
  Initials: z.string().max(10).optional().nullable(),
  Phone: z.string().max(20).optional().nullable(),
  MobilePhone: z.string().max(20).optional().nullable(),
  Email: z.string().max(50).optional().nullable(),
  Sex: z.string().max(1).optional().nullable(),
  Street: z.string().max(50).optional().nullable(),
  ZipCode: z.string().max(10).optional().nullable(),
  City: z.string().max(30).optional().nullable(),
  Country: z.string().max(20).optional().nullable(),
  Remarks: z.string().max(500).optional().nullable(),
  UserMod: z.string().max(30).optional().nullable(),
  DateMod: z.coerce.date().optional().nullable(),
  Nameday: z.coerce.date().optional().nullable(),
  PersonID: z.number().int().optional().nullable(),
  tblUserAccess: z.lazy(() => tblUserAccessCreateNestedManyWithoutTblUsersInputObjectSchema).optional(),
  tblUserParams: z.lazy(() => tblUserParamsCreateNestedManyWithoutTblUsersInputObjectSchema).optional()
}).strict();
export const tblUsersCreateWithoutTblCustUsersInputObjectSchema: z.ZodType<Prisma.tblUsersCreateWithoutTblCustUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersCreateWithoutTblCustUsersInput>;
export const tblUsersCreateWithoutTblCustUsersInputObjectZodSchema = makeSchema();
