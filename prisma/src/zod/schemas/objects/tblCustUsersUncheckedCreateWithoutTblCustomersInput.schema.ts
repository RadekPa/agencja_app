import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.string()
}).strict();
export const tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblCustUsersUncheckedCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUncheckedCreateWithoutTblCustomersInput>;
export const tblCustUsersUncheckedCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
