import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsCreateWithoutTblCustomersInputObjectSchema as tblCustContactsCreateWithoutTblCustomersInputObjectSchema } from './tblCustContactsCreateWithoutTblCustomersInput.schema';
import { tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutTblCustomersInput.schema';
import { tblCustContactsCreateOrConnectWithoutTblCustomersInputObjectSchema as tblCustContactsCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblCustContactsCreateOrConnectWithoutTblCustomersInput.schema';
import { tblCustContactsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblCustContactsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblCustContactsUpsertWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblCustContactsCreateManyTblCustomersInputEnvelopeObjectSchema as tblCustContactsCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblCustContactsCreateManyTblCustomersInputEnvelope.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblCustContactsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblCustContactsUpdateWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblCustContactsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema as tblCustContactsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema } from './tblCustContactsUpdateManyWithWhereWithoutTblCustomersInput.schema';
import { tblCustContactsScalarWhereInputObjectSchema as tblCustContactsScalarWhereInputObjectSchema } from './tblCustContactsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustContactsCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblCustContactsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustContactsCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblCustContactsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblCustContactsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => tblCustContactsUpdateManyWithWhereWithoutTblCustomersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblCustContactsScalarWhereInputObjectSchema), z.lazy(() => tblCustContactsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblCustContactsUpdateManyWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.tblCustContactsUpdateManyWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUpdateManyWithoutTblCustomersNestedInput>;
export const tblCustContactsUpdateManyWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
