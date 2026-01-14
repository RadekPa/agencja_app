import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesCreateNestedOneWithoutTblUserAccessInputObjectSchema as tblPlacesCreateNestedOneWithoutTblUserAccessInputObjectSchema } from './tblPlacesCreateNestedOneWithoutTblUserAccessInput.schema';
import { tblUsersCreateNestedOneWithoutTblUserAccessInputObjectSchema as tblUsersCreateNestedOneWithoutTblUserAccessInputObjectSchema } from './tblUsersCreateNestedOneWithoutTblUserAccessInput.schema'

const makeSchema = () => z.object({
  tblPlaces: z.lazy(() => tblPlacesCreateNestedOneWithoutTblUserAccessInputObjectSchema),
  tblUsers: z.lazy(() => tblUsersCreateNestedOneWithoutTblUserAccessInputObjectSchema)
}).strict();
export const tblUserAccessCreateInputObjectSchema: z.ZodType<Prisma.tblUserAccessCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateInput>;
export const tblUserAccessCreateInputObjectZodSchema = makeSchema();
