import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassCreateWithoutDictTitSubClassInput.schema';
import { tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUncheckedCreateWithoutDictTitSubClassInput.schema';
import { tblTitSubClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema as tblTitSubClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassCreateOrConnectWithoutDictTitSubClassInput.schema';
import { tblTitSubClassUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUpsertWithWhereUniqueWithoutDictTitSubClassInput.schema';
import { tblTitSubClassCreateManyDictTitSubClassInputEnvelopeObjectSchema as tblTitSubClassCreateManyDictTitSubClassInputEnvelopeObjectSchema } from './tblTitSubClassCreateManyDictTitSubClassInputEnvelope.schema';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './tblTitSubClassWhereUniqueInput.schema';
import { tblTitSubClassUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUpdateWithWhereUniqueWithoutDictTitSubClassInput.schema';
import { tblTitSubClassUpdateManyWithWhereWithoutDictTitSubClassInputObjectSchema as tblTitSubClassUpdateManyWithWhereWithoutDictTitSubClassInputObjectSchema } from './tblTitSubClassUpdateManyWithWhereWithoutDictTitSubClassInput.schema';
import { tblTitSubClassScalarWhereInputObjectSchema as tblTitSubClassScalarWhereInputObjectSchema } from './tblTitSubClassScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassCreateWithoutDictTitSubClassInputObjectSchema).array(), z.lazy(() => tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedCreateWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitSubClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassCreateOrConnectWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitSubClassUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassUpsertWithWhereUniqueWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitSubClassCreateManyDictTitSubClassInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitSubClassUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassUpdateWithWhereUniqueWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitSubClassUpdateManyWithWhereWithoutDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassUpdateManyWithWhereWithoutDictTitSubClassInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema), z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInput>;
export const tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectZodSchema = makeSchema();
