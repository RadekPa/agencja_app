import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tblCustUsers: z.boolean().optional(),
  tblUserAccess: z.boolean().optional(),
  tblUserParams: z.boolean().optional()
}).strict();
export const TblUsersCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TblUsersCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TblUsersCountOutputTypeSelect>;
export const TblUsersCountOutputTypeSelectObjectZodSchema = makeSchema();
