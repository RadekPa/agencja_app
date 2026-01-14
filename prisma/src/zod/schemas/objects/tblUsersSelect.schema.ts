import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersFindManySchema as tblCustUsersFindManySchema } from '../findManytblCustUsers.schema';
import { tblUserAccessFindManySchema as tblUserAccessFindManySchema } from '../findManytblUserAccess.schema';
import { tblUserParamsFindManySchema as tblUserParamsFindManySchema } from '../findManytblUserParams.schema';
import { TblUsersCountOutputTypeArgsObjectSchema as TblUsersCountOutputTypeArgsObjectSchema } from './TblUsersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Login: z.boolean().optional(),
  FirstName: z.boolean().optional(),
  MiddleName: z.boolean().optional(),
  LastName: z.boolean().optional(),
  CompanyPosition: z.boolean().optional(),
  Birthday: z.boolean().optional(),
  Status: z.boolean().optional(),
  Initials: z.boolean().optional(),
  Phone: z.boolean().optional(),
  MobilePhone: z.boolean().optional(),
  Email: z.boolean().optional(),
  Sex: z.boolean().optional(),
  Street: z.boolean().optional(),
  ZipCode: z.boolean().optional(),
  City: z.boolean().optional(),
  Country: z.boolean().optional(),
  Remarks: z.boolean().optional(),
  UserMod: z.boolean().optional(),
  DateMod: z.boolean().optional(),
  Nameday: z.boolean().optional(),
  PersonID: z.boolean().optional(),
  tblCustUsers: z.union([z.boolean(), z.lazy(() => tblCustUsersFindManySchema)]).optional(),
  tblUserAccess: z.union([z.boolean(), z.lazy(() => tblUserAccessFindManySchema)]).optional(),
  tblUserParams: z.union([z.boolean(), z.lazy(() => tblUserParamsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblUsersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblUsersSelectObjectSchema: z.ZodType<Prisma.tblUsersSelect> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersSelect>;
export const tblUsersSelectObjectZodSchema = makeSchema();
