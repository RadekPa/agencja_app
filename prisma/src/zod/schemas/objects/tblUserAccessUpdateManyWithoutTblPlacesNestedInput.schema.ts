import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblUserAccessCreateWithoutTblPlacesInputObjectSchema as tblUserAccessCreateWithoutTblPlacesInputObjectSchema } from './tblUserAccessCreateWithoutTblPlacesInput.schema';
import { tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema as tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema } from './tblUserAccessUncheckedCreateWithoutTblPlacesInput.schema';
import { tblUserAccessCreateOrConnectWithoutTblPlacesInputObjectSchema as tblUserAccessCreateOrConnectWithoutTblPlacesInputObjectSchema } from './tblUserAccessCreateOrConnectWithoutTblPlacesInput.schema';
import { tblUserAccessUpsertWithWhereUniqueWithoutTblPlacesInputObjectSchema as tblUserAccessUpsertWithWhereUniqueWithoutTblPlacesInputObjectSchema } from './tblUserAccessUpsertWithWhereUniqueWithoutTblPlacesInput.schema';
import { tblUserAccessCreateManyTblPlacesInputEnvelopeObjectSchema as tblUserAccessCreateManyTblPlacesInputEnvelopeObjectSchema } from './tblUserAccessCreateManyTblPlacesInputEnvelope.schema';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './tblUserAccessWhereUniqueInput.schema';
import { tblUserAccessUpdateWithWhereUniqueWithoutTblPlacesInputObjectSchema as tblUserAccessUpdateWithWhereUniqueWithoutTblPlacesInputObjectSchema } from './tblUserAccessUpdateWithWhereUniqueWithoutTblPlacesInput.schema';
import { tblUserAccessUpdateManyWithWhereWithoutTblPlacesInputObjectSchema as tblUserAccessUpdateManyWithWhereWithoutTblPlacesInputObjectSchema } from './tblUserAccessUpdateManyWithWhereWithoutTblPlacesInput.schema';
import { tblUserAccessScalarWhereInputObjectSchema as tblUserAccessScalarWhereInputObjectSchema } from './tblUserAccessScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblUserAccessCreateWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessCreateWithoutTblPlacesInputObjectSchema).array(), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessUncheckedCreateWithoutTblPlacesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblUserAccessCreateOrConnectWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessCreateOrConnectWithoutTblPlacesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblUserAccessUpsertWithWhereUniqueWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessUpsertWithWhereUniqueWithoutTblPlacesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblUserAccessCreateManyTblPlacesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema), z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema), z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema), z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema), z.lazy(() => tblUserAccessWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblUserAccessUpdateWithWhereUniqueWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessUpdateWithWhereUniqueWithoutTblPlacesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblUserAccessUpdateManyWithWhereWithoutTblPlacesInputObjectSchema), z.lazy(() => tblUserAccessUpdateManyWithWhereWithoutTblPlacesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblUserAccessScalarWhereInputObjectSchema), z.lazy(() => tblUserAccessScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblUserAccessUpdateManyWithoutTblPlacesNestedInputObjectSchema: z.ZodType<Prisma.tblUserAccessUpdateManyWithoutTblPlacesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessUpdateManyWithoutTblPlacesNestedInput>;
export const tblUserAccessUpdateManyWithoutTblPlacesNestedInputObjectZodSchema = makeSchema();
