import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesCreateWithoutTblCustomersInputObjectSchema as tblCustTypesCreateWithoutTblCustomersInputObjectSchema } from './tblCustTypesCreateWithoutTblCustomersInput.schema';
import { tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustTypesUncheckedCreateWithoutTblCustomersInput.schema';
import { tblCustTypesCreateOrConnectWithoutTblCustomersInputObjectSchema as tblCustTypesCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblCustTypesCreateOrConnectWithoutTblCustomersInput.schema';
import { tblCustTypesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblCustTypesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblCustTypesUpsertWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblCustTypesCreateManyTblCustomersInputEnvelopeObjectSchema as tblCustTypesCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblCustTypesCreateManyTblCustomersInputEnvelope.schema';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './tblCustTypesWhereUniqueInput.schema';
import { tblCustTypesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblCustTypesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblCustTypesUpdateWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblCustTypesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema as tblCustTypesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema } from './tblCustTypesUpdateManyWithWhereWithoutTblCustomersInput.schema';
import { tblCustTypesScalarWhereInputObjectSchema as tblCustTypesScalarWhereInputObjectSchema } from './tblCustTypesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustTypesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustTypesCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblCustTypesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustTypesCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema), z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema), z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema), z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema), z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblCustTypesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblCustTypesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustTypesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblCustTypesScalarWhereInputObjectSchema), z.lazy(() => tblCustTypesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblCustTypesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.tblCustTypesUncheckedUpdateManyWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUncheckedUpdateManyWithoutTblCustomersNestedInput>;
export const tblCustTypesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
