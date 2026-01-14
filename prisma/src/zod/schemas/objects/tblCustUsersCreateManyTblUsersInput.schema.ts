import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int()
}).strict();
export const tblCustUsersCreateManyTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersCreateManyTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateManyTblUsersInput>;
export const tblCustUsersCreateManyTblUsersInputObjectZodSchema = makeSchema();
