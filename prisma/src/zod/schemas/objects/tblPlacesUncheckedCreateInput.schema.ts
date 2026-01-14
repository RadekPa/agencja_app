import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessUncheckedCreateNestedManyWithoutTblPlacesInputObjectSchema as tblUserAccessUncheckedCreateNestedManyWithoutTblPlacesInputObjectSchema } from './tblUserAccessUncheckedCreateNestedManyWithoutTblPlacesInput.schema'

const makeSchema = () => z.object({
  PlaceID: z.number().int().optional(),
  PlaceDesc: z.string().max(50),
  tblUserAccess: z.lazy(() => tblUserAccessUncheckedCreateNestedManyWithoutTblPlacesInputObjectSchema).optional()
}).strict();
export const tblPlacesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblPlacesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUncheckedCreateInput>;
export const tblPlacesUncheckedCreateInputObjectZodSchema = makeSchema();
