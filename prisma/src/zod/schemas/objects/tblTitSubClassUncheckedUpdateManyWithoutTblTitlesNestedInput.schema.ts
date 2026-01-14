import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassCreateWithoutTblTitlesInputObjectSchema as tblTitSubClassCreateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassCreateWithoutTblTitlesInput.schema';
import { tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUncheckedCreateWithoutTblTitlesInput.schema';
import { tblTitSubClassCreateOrConnectWithoutTblTitlesInputObjectSchema as tblTitSubClassCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblTitSubClassCreateOrConnectWithoutTblTitlesInput.schema';
import { tblTitSubClassUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema as tblTitSubClassUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUpsertWithWhereUniqueWithoutTblTitlesInput.schema';
import { tblTitSubClassCreateManyTblTitlesInputEnvelopeObjectSchema as tblTitSubClassCreateManyTblTitlesInputEnvelopeObjectSchema } from './tblTitSubClassCreateManyTblTitlesInputEnvelope.schema';
import { tblTitSubClassWhereUniqueInputObjectSchema as tblTitSubClassWhereUniqueInputObjectSchema } from './tblTitSubClassWhereUniqueInput.schema';
import { tblTitSubClassUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema as tblTitSubClassUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUpdateWithWhereUniqueWithoutTblTitlesInput.schema';
import { tblTitSubClassUpdateManyWithWhereWithoutTblTitlesInputObjectSchema as tblTitSubClassUpdateManyWithWhereWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUpdateManyWithWhereWithoutTblTitlesInput.schema';
import { tblTitSubClassScalarWhereInputObjectSchema as tblTitSubClassScalarWhereInputObjectSchema } from './tblTitSubClassScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitSubClassCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassCreateWithoutTblTitlesInputObjectSchema).array(), z.lazy(() => tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassUncheckedCreateWithoutTblTitlesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitSubClassCreateOrConnectWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassCreateOrConnectWithoutTblTitlesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitSubClassUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitSubClassCreateManyTblTitlesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema), z.lazy(() => tblTitSubClassWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitSubClassUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitSubClassUpdateManyWithWhereWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassUpdateManyWithWhereWithoutTblTitlesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema), z.lazy(() => tblTitSubClassScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitSubClassUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema: z.ZodType<Prisma.tblTitSubClassUncheckedUpdateManyWithoutTblTitlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassUncheckedUpdateManyWithoutTblTitlesNestedInput>;
export const tblTitSubClassUncheckedUpdateManyWithoutTblTitlesNestedInputObjectZodSchema = makeSchema();
