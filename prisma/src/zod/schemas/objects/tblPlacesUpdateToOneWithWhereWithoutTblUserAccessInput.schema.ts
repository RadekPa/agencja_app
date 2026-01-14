import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesWhereInputObjectSchema as tblPlacesWhereInputObjectSchema } from './tblPlacesWhereInput.schema';
import { tblPlacesUpdateWithoutTblUserAccessInputObjectSchema as tblPlacesUpdateWithoutTblUserAccessInputObjectSchema } from './tblPlacesUpdateWithoutTblUserAccessInput.schema';
import { tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectSchema as tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectSchema } from './tblPlacesUncheckedUpdateWithoutTblUserAccessInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPlacesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblPlacesUpdateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectSchema)])
}).strict();
export const tblPlacesUpdateToOneWithWhereWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblPlacesUpdateToOneWithWhereWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUpdateToOneWithWhereWithoutTblUserAccessInput>;
export const tblPlacesUpdateToOneWithWhereWithoutTblUserAccessInputObjectZodSchema = makeSchema();
