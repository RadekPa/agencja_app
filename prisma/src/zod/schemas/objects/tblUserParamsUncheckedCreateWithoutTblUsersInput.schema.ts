import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Name: z.string(),
  Value: z.string()
}).strict();
export const tblUserParamsUncheckedCreateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserParamsUncheckedCreateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsUncheckedCreateWithoutTblUsersInput>;
export const tblUserParamsUncheckedCreateWithoutTblUsersInputObjectZodSchema = makeSchema();
