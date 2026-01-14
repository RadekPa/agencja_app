import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesCreateWithoutTblUserAccessInputObjectSchema as tblPlacesCreateWithoutTblUserAccessInputObjectSchema } from './tblPlacesCreateWithoutTblUserAccessInput.schema';
import { tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema as tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema } from './tblPlacesUncheckedCreateWithoutTblUserAccessInput.schema';
import { tblPlacesCreateOrConnectWithoutTblUserAccessInputObjectSchema as tblPlacesCreateOrConnectWithoutTblUserAccessInputObjectSchema } from './tblPlacesCreateOrConnectWithoutTblUserAccessInput.schema';
import { tblPlacesWhereUniqueInputObjectSchema as tblPlacesWhereUniqueInputObjectSchema } from './tblPlacesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblPlacesCreateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblPlacesCreateOrConnectWithoutTblUserAccessInputObjectSchema).optional(),
  connect: z.lazy(() => tblPlacesWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblPlacesCreateNestedOneWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblPlacesCreateNestedOneWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesCreateNestedOneWithoutTblUserAccessInput>;
export const tblPlacesCreateNestedOneWithoutTblUserAccessInputObjectZodSchema = makeSchema();
