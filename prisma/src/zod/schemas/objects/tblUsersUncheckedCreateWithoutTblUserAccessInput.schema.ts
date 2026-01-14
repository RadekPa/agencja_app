import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersUncheckedCreateNestedManyWithoutTblUsersInputObjectSchema as tblCustUsersUncheckedCreateNestedManyWithoutTblUsersInputObjectSchema } from './tblCustUsersUncheckedCreateNestedManyWithoutTblUsersInput.schema';
import { tblUserParamsUncheckedCreateNestedManyWithoutTblUsersInputObjectSchema as tblUserParamsUncheckedCreateNestedManyWithoutTblUsersInputObjectSchema } from './tblUserParamsUncheckedCreateNestedManyWithoutTblUsersInput.schema'

const makeSchema = () => z.object({
  Login: z.string(),
  FirstName: z.string(),
  MiddleName: z.string().optional().nullable(),
  LastName: z.string(),
  CompanyPosition: z.string().optional().nullable(),
  Birthday: z.coerce.date().optional().nullable(),
  Status: z.string(),
  Initials: z.string().optional().nullable(),
  Phone: z.string().optional().nullable(),
  MobilePhone: z.string().optional().nullable(),
  Email: z.string().optional().nullable(),
  Sex: z.string().optional().nullable(),
  Street: z.string().optional().nullable(),
  ZipCode: z.string().optional().nullable(),
  City: z.string().optional().nullable(),
  Country: z.string().optional().nullable(),
  Remarks: z.string().optional().nullable(),
  UserMod: z.string().optional().nullable(),
  DateMod: z.coerce.date().optional().nullable(),
  Nameday: z.coerce.date().optional().nullable(),
  PersonID: z.number().int().optional().nullable(),
  tblCustUsers: z.lazy(() => tblCustUsersUncheckedCreateNestedManyWithoutTblUsersInputObjectSchema).optional(),
  tblUserParams: z.lazy(() => tblUserParamsUncheckedCreateNestedManyWithoutTblUsersInputObjectSchema).optional()
}).strict();
export const tblUsersUncheckedCreateWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblUsersUncheckedCreateWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersUncheckedCreateWithoutTblUserAccessInput>;
export const tblUsersUncheckedCreateWithoutTblUserAccessInputObjectZodSchema = makeSchema();
