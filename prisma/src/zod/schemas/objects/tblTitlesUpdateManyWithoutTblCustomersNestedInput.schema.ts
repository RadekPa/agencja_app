import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblCustomersInputObjectSchema as tblTitlesCreateWithoutTblCustomersInputObjectSchema } from './tblTitlesCreateWithoutTblCustomersInput.schema';
import { tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblCustomersInput.schema';
import { tblTitlesCreateOrConnectWithoutTblCustomersInputObjectSchema as tblTitlesCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblCustomersInput.schema';
import { tblTitlesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblTitlesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblTitlesUpsertWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblTitlesCreateManyTblCustomersInputEnvelopeObjectSchema as tblTitlesCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblTitlesCreateManyTblCustomersInputEnvelope.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblTitlesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblTitlesUpdateWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblTitlesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema as tblTitlesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema } from './tblTitlesUpdateManyWithWhereWithoutTblCustomersInput.schema';
import { tblTitlesScalarWhereInputObjectSchema as tblTitlesScalarWhereInputObjectSchema } from './tblTitlesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitlesCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitlesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitlesCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitlesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitlesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitlesScalarWhereInputObjectSchema), z.lazy(() => tblTitlesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitlesUpdateManyWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateManyWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateManyWithoutTblCustomersNestedInput>;
export const tblTitlesUpdateManyWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
