import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutDictStatesInputObjectSchema as tblCustomersCreateWithoutDictStatesInputObjectSchema } from './tblCustomersCreateWithoutDictStatesInput.schema';
import { tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema as tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutDictStatesInput.schema';
import { tblCustomersCreateOrConnectWithoutDictStatesInputObjectSchema as tblCustomersCreateOrConnectWithoutDictStatesInputObjectSchema } from './tblCustomersCreateOrConnectWithoutDictStatesInput.schema';
import { tblCustomersUpsertWithWhereUniqueWithoutDictStatesInputObjectSchema as tblCustomersUpsertWithWhereUniqueWithoutDictStatesInputObjectSchema } from './tblCustomersUpsertWithWhereUniqueWithoutDictStatesInput.schema';
import { tblCustomersCreateManyDictStatesInputEnvelopeObjectSchema as tblCustomersCreateManyDictStatesInputEnvelopeObjectSchema } from './tblCustomersCreateManyDictStatesInputEnvelope.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateWithWhereUniqueWithoutDictStatesInputObjectSchema as tblCustomersUpdateWithWhereUniqueWithoutDictStatesInputObjectSchema } from './tblCustomersUpdateWithWhereUniqueWithoutDictStatesInput.schema';
import { tblCustomersUpdateManyWithWhereWithoutDictStatesInputObjectSchema as tblCustomersUpdateManyWithWhereWithoutDictStatesInputObjectSchema } from './tblCustomersUpdateManyWithWhereWithoutDictStatesInput.schema';
import { tblCustomersScalarWhereInputObjectSchema as tblCustomersScalarWhereInputObjectSchema } from './tblCustomersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersCreateWithoutDictStatesInputObjectSchema).array(), z.lazy(() => tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutDictStatesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustomersCreateOrConnectWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersCreateOrConnectWithoutDictStatesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblCustomersUpsertWithWhereUniqueWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersUpsertWithWhereUniqueWithoutDictStatesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustomersCreateManyDictStatesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblCustomersWhereUniqueInputObjectSchema), z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblCustomersWhereUniqueInputObjectSchema), z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblCustomersWhereUniqueInputObjectSchema), z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblCustomersWhereUniqueInputObjectSchema), z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateWithWhereUniqueWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersUpdateWithWhereUniqueWithoutDictStatesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblCustomersUpdateManyWithWhereWithoutDictStatesInputObjectSchema), z.lazy(() => tblCustomersUpdateManyWithWhereWithoutDictStatesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblCustomersScalarWhereInputObjectSchema), z.lazy(() => tblCustomersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblCustomersUpdateManyWithoutDictStatesNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateManyWithoutDictStatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateManyWithoutDictStatesNestedInput>;
export const tblCustomersUpdateManyWithoutDictStatesNestedInputObjectZodSchema = makeSchema();
