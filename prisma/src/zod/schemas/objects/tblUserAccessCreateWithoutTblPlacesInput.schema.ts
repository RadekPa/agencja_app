import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUsersCreateNestedOneWithoutTblUserAccessInputObjectSchema as tblUsersCreateNestedOneWithoutTblUserAccessInputObjectSchema } from './tblUsersCreateNestedOneWithoutTblUserAccessInput.schema'

const makeSchema = () => z.object({
  tblUsers: z.lazy(() => tblUsersCreateNestedOneWithoutTblUserAccessInputObjectSchema)
}).strict();
export const tblUserAccessCreateWithoutTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessCreateWithoutTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateWithoutTblPlacesInput>;
export const tblUserAccessCreateWithoutTblPlacesInputObjectZodSchema = makeSchema();
