import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int(),
  Login: z.string().max(30)
}).strict();
export const tblCustUsersUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblCustUsersUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersUncheckedCreateInput>;
export const tblCustUsersUncheckedCreateInputObjectZodSchema = makeSchema();
