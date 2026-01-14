import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateWithoutTblTitlesInputObjectSchema as tblTitEventsCreateWithoutTblTitlesInputObjectSchema } from './tblTitEventsCreateWithoutTblTitlesInput.schema';
import { tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitEventsUncheckedCreateWithoutTblTitlesInput.schema';
import { tblTitEventsCreateOrConnectWithoutTblTitlesInputObjectSchema as tblTitEventsCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblTitEventsCreateOrConnectWithoutTblTitlesInput.schema';
import { tblTitEventsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema as tblTitEventsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema } from './tblTitEventsUpsertWithWhereUniqueWithoutTblTitlesInput.schema';
import { tblTitEventsCreateManyTblTitlesInputEnvelopeObjectSchema as tblTitEventsCreateManyTblTitlesInputEnvelopeObjectSchema } from './tblTitEventsCreateManyTblTitlesInputEnvelope.schema';
import { tblTitEventsWhereUniqueInputObjectSchema as tblTitEventsWhereUniqueInputObjectSchema } from './tblTitEventsWhereUniqueInput.schema';
import { tblTitEventsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema as tblTitEventsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema } from './tblTitEventsUpdateWithWhereUniqueWithoutTblTitlesInput.schema';
import { tblTitEventsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema as tblTitEventsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema } from './tblTitEventsUpdateManyWithWhereWithoutTblTitlesInput.schema';
import { tblTitEventsScalarWhereInputObjectSchema as tblTitEventsScalarWhereInputObjectSchema } from './tblTitEventsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitEventsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsCreateWithoutTblTitlesInputObjectSchema).array(), z.lazy(() => tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsUncheckedCreateWithoutTblTitlesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitEventsCreateOrConnectWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsCreateOrConnectWithoutTblTitlesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitEventsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitEventsCreateManyTblTitlesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema), z.lazy(() => tblTitEventsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitEventsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitEventsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitEventsScalarWhereInputObjectSchema), z.lazy(() => tblTitEventsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitEventsUpdateManyWithoutTblTitlesNestedInputObjectSchema: z.ZodType<Prisma.tblTitEventsUpdateManyWithoutTblTitlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsUpdateManyWithoutTblTitlesNestedInput>;
export const tblTitEventsUpdateManyWithoutTblTitlesNestedInputObjectZodSchema = makeSchema();
