import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Name: z.string().max(30),
  Value: z.string().max(300)
}).strict();
export const tblUserParamsCreateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserParamsCreateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsCreateWithoutTblUsersInput>;
export const tblUserParamsCreateWithoutTblUsersInputObjectZodSchema = makeSchema();
