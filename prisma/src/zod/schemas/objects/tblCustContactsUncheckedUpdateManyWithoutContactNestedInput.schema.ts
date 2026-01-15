import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsCreateWithoutContactInputObjectSchema as tblCustContactsCreateWithoutContactInputObjectSchema } from './tblCustContactsCreateWithoutContactInput.schema';
import { tblCustContactsUncheckedCreateWithoutContactInputObjectSchema as tblCustContactsUncheckedCreateWithoutContactInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutContactInput.schema';
import { tblCustContactsCreateOrConnectWithoutContactInputObjectSchema as tblCustContactsCreateOrConnectWithoutContactInputObjectSchema } from './tblCustContactsCreateOrConnectWithoutContactInput.schema';
import { tblCustContactsUpsertWithWhereUniqueWithoutContactInputObjectSchema as tblCustContactsUpsertWithWhereUniqueWithoutContactInputObjectSchema } from './tblCustContactsUpsertWithWhereUniqueWithoutContactInput.schema';
import { tblCustContactsCreateManyContactInputEnvelopeObjectSchema as tblCustContactsCreateManyContactInputEnvelopeObjectSchema } from './tblCustContactsCreateManyContactInputEnvelope.schema';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsUpdateWithWhereUniqueWithoutContactInputObjectSchema as tblCustContactsUpdateWithWhereUniqueWithoutContactInputObjectSchema } from './tblCustContactsUpdateWithWhereUniqueWithoutContactInput.schema';
import { tblCustContactsUpdateManyWithWhereWithoutContactInputObjectSchema as tblCustContactsUpdateManyWithWhereWithoutContactInputObjectSchema } from './tblCustContactsUpdateManyWithWhereWithoutContactInput.schema';
import { tblCustContactsScalarWhereInputObjectSchema as tblCustContactsScalarWhereInputObjectSchema } from './tblCustContactsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsCreateWithoutContactInputObjectSchema).array(), z.lazy(() => tblCustContactsUncheckedCreateWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutContactInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustContactsCreateOrConnectWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsCreateOrConnectWithoutContactInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblCustContactsUpsertWithWhereUniqueWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsUpsertWithWhereUniqueWithoutContactInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustContactsCreateManyContactInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema), z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblCustContactsUpdateWithWhereUniqueWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsUpdateWithWhereUniqueWithoutContactInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblCustContactsUpdateManyWithWhereWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsUpdateManyWithWhereWithoutContactInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblCustContactsScalarWhereInputObjectSchema), z.lazy(() => tblCustContactsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblCustContactsUncheckedUpdateManyWithoutContactNestedInputObjectSchema: z.ZodType<Prisma.tblCustContactsUncheckedUpdateManyWithoutContactNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsUncheckedUpdateManyWithoutContactNestedInput>;
export const tblCustContactsUncheckedUpdateManyWithoutContactNestedInputObjectZodSchema = makeSchema();
