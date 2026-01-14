import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.number().int(),
  Login: z.string().max(30)
}).strict();
export const tblCustUsersCreateManyInputObjectSchema: z.ZodType<Prisma.tblCustUsersCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustUsersCreateManyInput>;
export const tblCustUsersCreateManyInputObjectZodSchema = makeSchema();
