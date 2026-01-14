import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersCreateNestedOneWithoutTblUserParamsInputObjectSchema as tblUsersCreateNestedOneWithoutTblUserParamsInputObjectSchema } from './tblUsersCreateNestedOneWithoutTblUserParamsInput.schema'

const makeSchema = () => z.object({
  Name: z.string().max(30),
  Value: z.string().max(300),
  tblUsers: z.lazy(() => tblUsersCreateNestedOneWithoutTblUserParamsInputObjectSchema)
}).strict();
export const tblUserParamsCreateInputObjectSchema: z.ZodType<Prisma.tblUserParamsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsCreateInput>;
export const tblUserParamsCreateInputObjectZodSchema = makeSchema();
