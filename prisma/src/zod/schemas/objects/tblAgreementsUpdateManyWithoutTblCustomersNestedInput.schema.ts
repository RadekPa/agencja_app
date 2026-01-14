import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblCustomersInputObjectSchema as tblAgreementsCreateWithoutTblCustomersInputObjectSchema } from './tblAgreementsCreateWithoutTblCustomersInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblCustomersInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblCustomersInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblCustomersInput.schema';
import { tblAgreementsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblAgreementsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblAgreementsUpsertWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblAgreementsCreateManyTblCustomersInputEnvelopeObjectSchema as tblAgreementsCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblAgreementsCreateManyTblCustomersInputEnvelope.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblAgreementsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblAgreementsUpdateWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblAgreementsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema as tblAgreementsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema } from './tblAgreementsUpdateManyWithWhereWithoutTblCustomersInput.schema';
import { tblAgreementsScalarWhereInputObjectSchema as tblAgreementsScalarWhereInputObjectSchema } from './tblAgreementsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgreementsCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgreementsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgreementsCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema), z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgreementsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgreementsScalarWhereInputObjectSchema), z.lazy(() => tblAgreementsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgreementsUpdateManyWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateManyWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateManyWithoutTblCustomersNestedInput>;
export const tblAgreementsUpdateManyWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
