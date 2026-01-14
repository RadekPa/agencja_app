import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateWithoutTblCustomersInputObjectSchema as tblSubmissionsCreateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsCreateWithoutTblCustomersInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblCustomersInput.schema';
import { tblSubmissionsCreateOrConnectWithoutTblCustomersInputObjectSchema as tblSubmissionsCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblSubmissionsCreateOrConnectWithoutTblCustomersInput.schema';
import { tblSubmissionsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblSubmissionsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUpsertWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblSubmissionsCreateManyTblCustomersInputEnvelopeObjectSchema as tblSubmissionsCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblSubmissionsCreateManyTblCustomersInputEnvelope.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblSubmissionsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUpdateWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblSubmissionsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema as tblSubmissionsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema } from './tblSubmissionsUpdateManyWithWhereWithoutTblCustomersInput.schema';
import { tblSubmissionsScalarWhereInputObjectSchema as tblSubmissionsScalarWhereInputObjectSchema } from './tblSubmissionsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmissionsCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblSubmissionsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmissionsCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblSubmissionsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblSubmissionsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSubmissionsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema), z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmissionsUpdateManyWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateManyWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateManyWithoutTblCustomersNestedInput>;
export const tblSubmissionsUpdateManyWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
