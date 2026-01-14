import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustUsersFindManySchema as tblCustUsersFindManySchema } from '../findManytblCustUsers.schema';
import { tblUserAccessFindManySchema as tblUserAccessFindManySchema } from '../findManytblUserAccess.schema';
import { tblUserParamsFindManySchema as tblUserParamsFindManySchema } from '../findManytblUserParams.schema';
import { TblUsersCountOutputTypeArgsObjectSchema as TblUsersCountOutputTypeArgsObjectSchema } from './TblUsersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tblCustUsers: z.union([z.boolean(), z.lazy(() => tblCustUsersFindManySchema)]).optional(),
  tblUserAccess: z.union([z.boolean(), z.lazy(() => tblUserAccessFindManySchema)]).optional(),
  tblUserParams: z.union([z.boolean(), z.lazy(() => tblUserParamsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblUsersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblUsersIncludeObjectSchema: z.ZodType<Prisma.tblUsersInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblUsersInclude>;
export const tblUsersIncludeObjectZodSchema = makeSchema();
