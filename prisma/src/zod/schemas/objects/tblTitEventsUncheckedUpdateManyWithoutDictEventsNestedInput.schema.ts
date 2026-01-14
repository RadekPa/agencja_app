import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateWithoutDictEventsInputObjectSchema as tblTitEventsCreateWithoutDictEventsInputObjectSchema } from './tblTitEventsCreateWithoutDictEventsInput.schema';
import { tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema as tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutDictEventsInput.schema';
import { tblTitEventsCreateOrConnectWithoutDictEventsInputObjectSchema as tblTitEventsCreateOrConnectWithoutDictEventsInputObjectSchema } from './tblTitEventsCreateOrConnectWithoutDictEventsInput.schema';
import { tblTitEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectSchema as tblTitEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectSchema } from './tblTitEventsUpsertWithWhereUniqueWithoutDictEventsInput.schema';
import { tblTitEventsCreateManyDictEventsInputEnvelopeObjectSchema as tblTitEventsCreateManyDictEventsInputEnvelopeObjectSchema } from './tblTitEventsCreateManyDictEventsInputEnvelope.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectSchema as tblTitEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectSchema } from './tblTitEventsUpdateWithWhereUniqueWithoutDictEventsInput.schema';
import { tblTitEventsUpdateManyWithWhereWithoutDictEventsInputObjectSchema as tblTitEventsUpdateManyWithWhereWithoutDictEventsInputObjectSchema } from './tblTitEventsUpdateManyWithWhereWithoutDictEventsInput.schema';
import { tblTitEventsScalarWhereInputObjectSchema as tblTitEventsScalarWhereInputObjectSchema } from './tblTitEventsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsCreateWithoutDictEventsInputObjectSchema).array(), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictEventsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitEventsCreateOrConnectWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsCreateOrConnectWithoutDictEventsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitEventsCreateManyDictEventsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitEventsUpdateManyWithWhereWithoutDictEventsInputObjectSchema), z.lazy(() => tblTitEventsUpdateManyWithWhereWithoutDictEventsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitEventsScalarWhereInputObjectSchema), z.lazy(() => tblTitEventsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectSchema: z.ZodType<Prisma.tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInput>;
export const tblTitEventsUncheckedUpdateManyWithoutDictEventsNestedInputObjectZodSchema = makeSchema();
