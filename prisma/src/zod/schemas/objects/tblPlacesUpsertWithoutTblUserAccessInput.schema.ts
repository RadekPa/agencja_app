import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesUpdateWithoutTblUserAccessInputObjectSchema as tblPlacesUpdateWithoutTblUserAccessInputObjectSchema } from './tblPlacesUpdateWithoutTblUserAccessInput.schema';
import { tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectSchema as tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectSchema } from './tblPlacesUncheckedUpdateWithoutTblUserAccessInput.schema';
import { tblPlacesCreateWithoutTblUserAccessInputObjectSchema as tblPlacesCreateWithoutTblUserAccessInputObjectSchema } from './tblPlacesCreateWithoutTblUserAccessInput.schema';
import { tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema as tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema } from './tblPlacesUncheckedCreateWithoutTblUserAccessInput.schema';
import { tblPlacesWhereInputObjectSchema as tblPlacesWhereInputObjectSchema } from './tblPlacesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblPlacesUpdateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectSchema)]),
  create: z.union([z.lazy(() => tblPlacesCreateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema)]),
  where: z.lazy(() => tblPlacesWhereInputObjectSchema).optional()
}).strict();
export const tblPlacesUpsertWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblPlacesUpsertWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUpsertWithoutTblUserAccessInput>;
export const tblPlacesUpsertWithoutTblUserAccessInputObjectZodSchema = makeSchema();
