import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema as tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsCreateWithoutDictCopyTypeInput.schema';
import { tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema as tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutDictCopyTypeInput.schema';
import { tblTitEventsCreateOrConnectWithoutDictCopyTypeInputObjectSchema as tblTitEventsCreateOrConnectWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsCreateOrConnectWithoutDictCopyTypeInput.schema';
import { tblTitEventsUpsertWithWhereUniqueWithoutDictCopyTypeInputObjectSchema as tblTitEventsUpsertWithWhereUniqueWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUpsertWithWhereUniqueWithoutDictCopyTypeInput.schema';
import { tblTitEventsCreateManyDictCopyTypeInputEnvelopeObjectSchema as tblTitEventsCreateManyDictCopyTypeInputEnvelopeObjectSchema } from './tblTitEventsCreateManyDictCopyTypeInputEnvelope.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectSchema as tblTitEventsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUpdateWithWhereUniqueWithoutDictCopyTypeInput.schema';
import { tblTitEventsUpdateManyWithWhereWithoutDictCopyTypeInputObjectSchema as tblTitEventsUpdateManyWithWhereWithoutDictCopyTypeInputObjectSchema } from './tblTitEventsUpdateManyWithWhereWithoutDictCopyTypeInput.schema';
import { tblTitEventsScalarWhereInputObjectSchema as tblTitEventsScalarWhereInputObjectSchema } from './tblTitEventsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsCreateWithoutDictCopyTypeInputObjectSchema).array(), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitEventsCreateOrConnectWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsCreateOrConnectWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitEventsUpsertWithWhereUniqueWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsUpsertWithWhereUniqueWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitEventsCreateManyDictCopyTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitEventsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitEventsUpdateManyWithWhereWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsUpdateManyWithWhereWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitEventsScalarWhereInputObjectSchema), z.lazy(() => tblTitEventsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeNestedInputObjectSchema: z.ZodType<Prisma.tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeNestedInput>;
export const tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeNestedInputObjectZodSchema = makeSchema();
