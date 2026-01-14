import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutDictLanguagesInputObjectSchema as tblCustomersCreateWithoutDictLanguagesInputObjectSchema } from './tblCustomersCreateWithoutDictLanguagesInput.schema';
import { tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutDictLanguagesInput.schema';
import { tblCustomersCreateOrConnectWithoutDictLanguagesInputObjectSchema as tblCustomersCreateOrConnectWithoutDictLanguagesInputObjectSchema } from './tblCustomersCreateOrConnectWithoutDictLanguagesInput.schema';
import { tblCustomersUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema as tblCustomersUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema } from './tblCustomersUpsertWithWhereUniqueWithoutDictLanguagesInput.schema';
import { tblCustomersCreateManyDictLanguagesInputEnvelopeObjectSchema as tblCustomersCreateManyDictLanguagesInputEnvelopeObjectSchema } from './tblCustomersCreateManyDictLanguagesInputEnvelope.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema as tblCustomersUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema } from './tblCustomersUpdateWithWhereUniqueWithoutDictLanguagesInput.schema';
import { tblCustomersUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema as tblCustomersUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema } from './tblCustomersUpdateManyWithWhereWithoutDictLanguagesInput.schema';
import { tblCustomersScalarWhereInputObjectSchema as tblCustomersScalarWhereInputObjectSchema } from './tblCustomersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersCreateWithoutDictLanguagesInputObjectSchema).array(), z.lazy(() => tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustomersCreateOrConnectWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersCreateOrConnectWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblCustomersUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustomersCreateManyDictLanguagesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblCustomersWhereUniqueInputObjectSchema), z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblCustomersWhereUniqueInputObjectSchema), z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblCustomersWhereUniqueInputObjectSchema), z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblCustomersWhereUniqueInputObjectSchema), z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblCustomersUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblCustomersScalarWhereInputObjectSchema), z.lazy(() => tblCustomersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblCustomersUpdateManyWithoutDictLanguagesNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateManyWithoutDictLanguagesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateManyWithoutDictLanguagesNestedInput>;
export const tblCustomersUpdateManyWithoutDictLanguagesNestedInputObjectZodSchema = makeSchema();
