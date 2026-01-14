import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessCreateWithoutTblPlacesInputObjectSchema as tblUserAccessCreateWithoutTblPlacesInputObjectSchema } from './tblUserAccessCreateWithoutTblPlacesInput.schema';
import { tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema as tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema } from './tblUserAccessUncheckedCreateWithoutTblPlacesInput.schema';
import { tblUserAccessCreateOrConnectWithoutTblPlacesInputObjectSchema as tblUserAccessCreateOrConnectWithoutTblPlacesInputObjectSchema } from './tblUserAccessCreateOrConnectWithoutTblPlacesInput.schema';
import { tblUserAccessCreateManyTblPlacesInputEnvelopeObjectSchema as tblUserAccessCreateManyTblPlacesInputEnvelopeObjectSchema } from './tblUserAccessCreateManyTblPlacesInputEnvelope.schema';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './tblUserAccessWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUserAccessCreateWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessCreateWithoutTblPlacesInputObjectSchema).array(), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblUserAccessCreateOrConnectWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessCreateOrConnectWithoutTblPlacesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblUserAccessCreateManyTblPlacesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema), z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblUserAccessUncheckedCreateNestedManyWithoutTblPlacesInputObjectSchema: z.ZodType<Prisma.tblUserAccessUncheckedCreateNestedManyWithoutTblPlacesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUncheckedCreateNestedManyWithoutTblPlacesInput>;
export const tblUserAccessUncheckedCreateNestedManyWithoutTblPlacesInputObjectZodSchema = makeSchema();
