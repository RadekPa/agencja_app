import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutDictCoverFormatInputObjectSchema as tblTitlesCreateWithoutDictCoverFormatInputObjectSchema } from './tblTitlesCreateWithoutDictCoverFormatInput.schema';
import { tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema as tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictCoverFormatInput.schema';
import { tblTitlesCreateOrConnectWithoutDictCoverFormatInputObjectSchema as tblTitlesCreateOrConnectWithoutDictCoverFormatInputObjectSchema } from './tblTitlesCreateOrConnectWithoutDictCoverFormatInput.schema';
import { tblTitlesUpsertWithWhereUniqueWithoutDictCoverFormatInputObjectSchema as tblTitlesUpsertWithWhereUniqueWithoutDictCoverFormatInputObjectSchema } from './tblTitlesUpsertWithWhereUniqueWithoutDictCoverFormatInput.schema';
import { tblTitlesCreateManyDictCoverFormatInputEnvelopeObjectSchema as tblTitlesCreateManyDictCoverFormatInputEnvelopeObjectSchema } from './tblTitlesCreateManyDictCoverFormatInputEnvelope.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithWhereUniqueWithoutDictCoverFormatInputObjectSchema as tblTitlesUpdateWithWhereUniqueWithoutDictCoverFormatInputObjectSchema } from './tblTitlesUpdateWithWhereUniqueWithoutDictCoverFormatInput.schema';
import { tblTitlesUpdateManyWithWhereWithoutDictCoverFormatInputObjectSchema as tblTitlesUpdateManyWithWhereWithoutDictCoverFormatInputObjectSchema } from './tblTitlesUpdateManyWithWhereWithoutDictCoverFormatInput.schema';
import { tblTitlesScalarWhereInputObjectSchema as tblTitlesScalarWhereInputObjectSchema } from './tblTitlesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesCreateWithoutDictCoverFormatInputObjectSchema).array(), z.lazy(() => tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitlesCreateOrConnectWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesCreateOrConnectWithoutDictCoverFormatInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitlesUpsertWithWhereUniqueWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesUpsertWithWhereUniqueWithoutDictCoverFormatInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitlesCreateManyDictCoverFormatInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitlesUpdateWithWhereUniqueWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesUpdateWithWhereUniqueWithoutDictCoverFormatInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitlesUpdateManyWithWhereWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesUpdateManyWithWhereWithoutDictCoverFormatInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitlesScalarWhereInputObjectSchema), z.lazy(() => tblTitlesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitlesUpdateManyWithoutDictCoverFormatNestedInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateManyWithoutDictCoverFormatNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateManyWithoutDictCoverFormatNestedInput>;
export const tblTitlesUpdateManyWithoutDictCoverFormatNestedInputObjectZodSchema = makeSchema();
