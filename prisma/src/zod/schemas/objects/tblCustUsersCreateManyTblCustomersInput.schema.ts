import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string().max(30)
}).strict();
export const tblCustUsersCreateManyTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersCreateManyTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateManyTblCustomersInput>;
export const tblCustUsersCreateManyTblCustomersInputObjectZodSchema = makeSchema();
