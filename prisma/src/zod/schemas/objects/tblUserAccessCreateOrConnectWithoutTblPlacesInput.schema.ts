import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './tblUserAccessWhereUniqueInput.schema';
import { tblUserAccessCreateWithoutTblPlacesInputObjectSchema as tblUserAccessCreateWithoutTblPlacesInputObjectSchema } from './tblUserAccessCreateWithoutTblPlacesInput.schema';
import { tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema as tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema } from './tblUserAccessUncheckedCreateWithoutTblPlacesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblUserAccessCreateWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema)])
}).strict();
export const tblUserAccessCreateOrConnectWithoutTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessCreateOrConnectWithoutTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessCreateOrConnectWithoutTblPlacesInput>;
export const tblUserAccessCreateOrConnectWithoutTblPlacesInputObjectZodSchema = makeSchema();
