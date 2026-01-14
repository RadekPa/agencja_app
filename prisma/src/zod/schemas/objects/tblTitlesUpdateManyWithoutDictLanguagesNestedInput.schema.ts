import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutDictLanguagesInputObjectSchema as tblTitlesCreateWithoutDictLanguagesInputObjectSchema } from './tblTitlesCreateWithoutDictLanguagesInput.schema';
import { tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictLanguagesInput.schema';
import { tblTitlesCreateOrConnectWithoutDictLanguagesInputObjectSchema as tblTitlesCreateOrConnectWithoutDictLanguagesInputObjectSchema } from './tblTitlesCreateOrConnectWithoutDictLanguagesInput.schema';
import { tblTitlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema as tblTitlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema } from './tblTitlesUpsertWithWhereUniqueWithoutDictLanguagesInput.schema';
import { tblTitlesCreateManyDictLanguagesInputEnvelopeObjectSchema as tblTitlesCreateManyDictLanguagesInputEnvelopeObjectSchema } from './tblTitlesCreateManyDictLanguagesInputEnvelope.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema as tblTitlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema } from './tblTitlesUpdateWithWhereUniqueWithoutDictLanguagesInput.schema';
import { tblTitlesUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema as tblTitlesUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema } from './tblTitlesUpdateManyWithWhereWithoutDictLanguagesInput.schema';
import { tblTitlesScalarWhereInputObjectSchema as tblTitlesScalarWhereInputObjectSchema } from './tblTitlesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesCreateWithoutDictLanguagesInputObjectSchema).array(), z.lazy(() => tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitlesCreateOrConnectWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesCreateOrConnectWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitlesCreateManyDictLanguagesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitlesUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitlesScalarWhereInputObjectSchema), z.lazy(() => tblTitlesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitlesUpdateManyWithoutDictLanguagesNestedInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateManyWithoutDictLanguagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateManyWithoutDictLanguagesNestedInput>;
export const tblTitlesUpdateManyWithoutDictLanguagesNestedInputObjectZodSchema = makeSchema();
