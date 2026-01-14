import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Name: z.string().max(30),
  Value: z.string().max(300)
}).strict();
export const tblUserParamsCreateManyTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserParamsCreateManyTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsCreateManyTblUsersInput>;
export const tblUserParamsCreateManyTblUsersInputObjectZodSchema = makeSchema();
