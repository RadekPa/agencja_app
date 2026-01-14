import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessCreateNestedManyWithoutTblPlacesInputObjectSchema as tblUserAccessCreateNestedManyWithoutTblPlacesInputObjectSchema } from './tblUserAccessCreateNestedManyWithoutTblPlacesInput.schema'

const makeSchema = () => z.object({
  PlaceDesc: z.string().max(50),
  tblUserAccess: z.lazy(() => tblUserAccessCreateNestedManyWithoutTblPlacesInputObjectSchema).optional()
}).strict();
export const tblPlacesCreateInputObjectSchema: z.ZodType<Prisma.tblPlacesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesCreateInput>;
export const tblPlacesCreateInputObjectZodSchema = makeSchema();
