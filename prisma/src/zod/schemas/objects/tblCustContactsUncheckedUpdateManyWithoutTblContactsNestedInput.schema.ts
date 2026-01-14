import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsCreateWithoutTblContactsInputObjectSchema as tblCustContactsCreateWithoutTblContactsInputObjectSchema } from './tblCustContactsCreateWithoutTblContactsInput.schema';
import { tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema as tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutTblContactsInput.schema';
import { tblCustContactsCreateOrConnectWithoutTblContactsInputObjectSchema as tblCustContactsCreateOrConnectWithoutTblContactsInputObjectSchema } from './tblCustContactsCreateOrConnectWithoutTblContactsInput.schema';
import { tblCustContactsUpsertWithWhereUniqueWithoutTblContactsInputObjectSchema as tblCustContactsUpsertWithWhereUniqueWithoutTblContactsInputObjectSchema } from './tblCustContactsUpsertWithWhereUniqueWithoutTblContactsInput.schema';
import { tblCustContactsCreateManyTblContactsInputEnvelopeObjectSchema as tblCustContactsCreateManyTblContactsInputEnvelopeObjectSchema } from './tblCustContactsCreateManyTblContactsInputEnvelope.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsUpdateWithWhereUniqueWithoutTblContactsInputObjectSchema as tblCustContactsUpdateWithWhereUniqueWithoutTblContactsInputObjectSchema } from './tblCustContactsUpdateWithWhereUniqueWithoutTblContactsInput.schema';
import { tblCustContactsUpdateManyWithWhereWithoutTblContactsInputObjectSchema as tblCustContactsUpdateManyWithWhereWithoutTblContactsInputObjectSchema } from './tblCustContactsUpdateManyWithWhereWithoutTblContactsInput.schema';
import { tblCustContactsScalarWhereInputObjectSchema as tblCustContactsScalarWhereInputObjectSchema } from './tblCustContactsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsCreateWithoutTblContactsInputObjectSchema).array(), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblContactsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustContactsCreateOrConnectWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsCreateOrConnectWithoutTblContactsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblCustContactsUpsertWithWhereUniqueWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsUpsertWithWhereUniqueWithoutTblContactsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustContactsCreateManyTblContactsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblCustContactsUpdateWithWhereUniqueWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsUpdateWithWhereUniqueWithoutTblContactsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblCustContactsUpdateManyWithWhereWithoutTblContactsInputObjectSchema), z.lazy(() => tblCustContactsUpdateManyWithWhereWithoutTblContactsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblCustContactsScalarWhereInputObjectSchema), z.lazy(() => tblCustContactsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblCustContactsUncheckedUpdateManyWithoutTblContactsNestedInputObjectSchema: z.ZodType<Prisma.tblCustContactsUncheckedUpdateManyWithoutTblContactsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUncheckedUpdateManyWithoutTblContactsNestedInput>;
export const tblCustContactsUncheckedUpdateManyWithoutTblContactsNestedInputObjectZodSchema = makeSchema();
