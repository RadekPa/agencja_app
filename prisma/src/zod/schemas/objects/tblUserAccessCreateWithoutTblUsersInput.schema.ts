import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesCreateNestedOneWithoutTblUserAccessInputObjectSchema as tblPlacesCreateNestedOneWithoutTblUserAccessInputObjectSchema } from './tblPlacesCreateNestedOneWithoutTblUserAccessInput.schema'

const makeSchema = () => z.object({
  tblPlaces: z.lazy(() => tblPlacesCreateNestedOneWithoutTblUserAccessInputObjectSchema)
}).strict();
export const tblUserAccessCreateWithoutTblUsersInputObjectSchema: z.ZodType<Prisma.tblUserAccessCreateWithoutTblUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateWithoutTblUsersInput>;
export const tblUserAccessCreateWithoutTblUsersInputObjectZodSchema = makeSchema();
