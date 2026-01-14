import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteCreateWithoutDictRepModesInput.schema';
import { tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUncheckedCreateWithoutDictRepModesInput.schema';
import { tblClients_obsoleteCreateOrConnectWithoutDictRepModesInputObjectSchema as tblClients_obsoleteCreateOrConnectWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteCreateOrConnectWithoutDictRepModesInput.schema';
import { tblClients_obsoleteUpsertWithWhereUniqueWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUpsertWithWhereUniqueWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUpsertWithWhereUniqueWithoutDictRepModesInput.schema';
import { tblClients_obsoleteCreateManyDictRepModesInputEnvelopeObjectSchema as tblClients_obsoleteCreateManyDictRepModesInputEnvelopeObjectSchema } from './tblClients_obsoleteCreateManyDictRepModesInputEnvelope.schema';
import { tblClients_obsoleteWhereUniqueInputObjectSchema as tblClients_obsoleteWhereUniqueInputObjectSchema } from './tblClients_obsoleteWhereUniqueInput.schema';
import { tblClients_obsoleteUpdateWithWhereUniqueWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUpdateWithWhereUniqueWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUpdateWithWhereUniqueWithoutDictRepModesInput.schema';
import { tblClients_obsoleteUpdateManyWithWhereWithoutDictRepModesInputObjectSchema as tblClients_obsoleteUpdateManyWithWhereWithoutDictRepModesInputObjectSchema } from './tblClients_obsoleteUpdateManyWithWhereWithoutDictRepModesInput.schema';
import { tblClients_obsoleteScalarWhereInputObjectSchema as tblClients_obsoleteScalarWhereInputObjectSchema } from './tblClients_obsoleteScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteCreateWithoutDictRepModesInputObjectSchema).array(), z.lazy(() => tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteUncheckedCreateWithoutDictRepModesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblClients_obsoleteCreateOrConnectWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteCreateOrConnectWithoutDictRepModesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblClients_obsoleteUpsertWithWhereUniqueWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteUpsertWithWhereUniqueWithoutDictRepModesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblClients_obsoleteCreateManyDictRepModesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema), z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema), z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema), z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema), z.lazy(() => tblClients_obsoleteWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblClients_obsoleteUpdateWithWhereUniqueWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteUpdateWithWhereUniqueWithoutDictRepModesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblClients_obsoleteUpdateManyWithWhereWithoutDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteUpdateManyWithWhereWithoutDictRepModesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblClients_obsoleteScalarWhereInputObjectSchema), z.lazy(() => tblClients_obsoleteScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblClients_obsoleteUpdateManyWithoutDictRepModesNestedInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUpdateManyWithoutDictRepModesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpdateManyWithoutDictRepModesNestedInput>;
export const tblClients_obsoleteUpdateManyWithoutDictRepModesNestedInputObjectZodSchema = makeSchema();
