import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPlacesWhereUniqueInputObjectSchema as tblPlacesWhereUniqueInputObjectSchema } from './tblPlacesWhereUniqueInput.schema';
import { tblPlacesCreateWithoutTblUserAccessInputObjectSchema as tblPlacesCreateWithoutTblUserAccessInputObjectSchema } from './tblPlacesCreateWithoutTblUserAccessInput.schema';
import { tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema as tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema } from './tblPlacesUncheckedCreateWithoutTblUserAccessInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPlacesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblPlacesCreateWithoutTblUserAccessInputObjectSchema), z.lazy(() => tblPlacesUncheckedCreateWithoutTblUserAccessInputObjectSchema)])
}).strict();
export const tblPlacesCreateOrConnectWithoutTblUserAccessInputObjectSchema: z.ZodType<Prisma.tblPlacesCreateOrConnectWithoutTblUserAccessInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesCreateOrConnectWithoutTblUserAccessInput>;
export const tblPlacesCreateOrConnectWithoutTblUserAccessInputObjectZodSchema = makeSchema();
