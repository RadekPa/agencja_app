import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int()
}).strict();
export const tblCustUsersUncheckedCreateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUncheckedCreateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUncheckedCreateWithoutTblUsersInput>;
export const tblCustUsersUncheckedCreateWithoutTblUsersInputObjectZodSchema = makeSchema();
