import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesCreateWithoutTblUserAccessInputObjectSchema as tblPlacesCreateWithoutTblUserAccessInputObjectSchema } from './tblPlacesCreateWithoutTblUserAccessInput.schema';
import { tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema as tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema } from './tblPlacesUncheckedCreateWithoutTblUserAccessInput.schema';
import { tblPlacesCreateOrConnectWithoutTblUserAccessInputObjectSchema as tblPlacesCreateOrConnectWithoutTblUserAccessInputObjectSchema } from './tblPlacesCreateOrConnectWithoutTblUserAccessInput.schema';
import { tblPlacesUpsertWithoutTblUserAccessInputObjectSchema as tblPlacesUpsertWithoutTblUserAccessInputObjectSchema } from './tblPlacesUpsertWithoutTblUserAccessInput.schema';
import { tblPlacesWhereUniqueInputObjectSchema as tblPlacesWhereUniqueInputObjectSchema } from './tblPlacesWhereUniqueInput.schema';
import { tblPlacesUpdateToOneWithWhereWithoutTblUserAccessInputObjectSchema as tblPlacesUpdateToOneWithWhereWithoutTblUserAccessInputObjectSchema } from './tblPlacesUpdateToOneWithWhereWithoutTblUserAccessInput.schema';
import { tblPlacesUpdateWithoutTblUserAccessInputObjectSchema as tblPlacesUpdateWithoutTblUserAccessInputObjectSchema } from './tblPlacesUpdateWithoutTblUserAccessInput.schema';
import { tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectSchema as tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectSchema } from './tblPlacesUncheckedUpdateWithoutTblUserAccessInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblPlacesCreateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblPlacesCreateOrConnectWithoutTblUserAccessInputObjectSchema).optional(),
  upsert: z.lazy(() => tblPlacesUpsertWithoutTblUserAccessInputObjectSchema).optional(),
  connect: z.lazy(() => tblPlacesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblPlacesUpdateToOneWithWhereWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblPlacesUpdateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblPlacesUncheckedUpdateWithoutTblUserAccessInputObjectSchema)]).optional()
}).strict();
export const tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInputObjectSchema: z.ZodType<Prisma.tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInput>;
export const tblPlacesUpdateOneRequiredWithoutTblUserAccessNestedInputObjectZodSchema = makeSchema();
