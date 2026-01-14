import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema as tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsCreateWithoutTblTitlesInput.schema';
import { tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUncheckedCreateWithoutTblTitlesInput.schema';
import { tblTitAuthorsCreateOrConnectWithoutTblTitlesInputObjectSchema as tblTitAuthorsCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsCreateOrConnectWithoutTblTitlesInput.schema';
import { tblTitAuthorsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema as tblTitAuthorsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUpsertWithWhereUniqueWithoutTblTitlesInput.schema';
import { tblTitAuthorsCreateManyTblTitlesInputEnvelopeObjectSchema as tblTitAuthorsCreateManyTblTitlesInputEnvelopeObjectSchema } from './tblTitAuthorsCreateManyTblTitlesInputEnvelope.schema';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './tblTitAuthorsWhereUniqueInput.schema';
import { tblTitAuthorsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema as tblTitAuthorsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUpdateWithWhereUniqueWithoutTblTitlesInput.schema';
import { tblTitAuthorsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema as tblTitAuthorsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUpdateManyWithWhereWithoutTblTitlesInput.schema';
import { tblTitAuthorsScalarWhereInputObjectSchema as tblTitAuthorsScalarWhereInputObjectSchema } from './tblTitAuthorsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsCreateWithoutTblTitlesInputObjectSchema).array(), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblTitlesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitAuthorsCreateOrConnectWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsCreateOrConnectWithoutTblTitlesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitAuthorsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitAuthorsCreateManyTblTitlesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema), z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema), z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema), z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema), z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitAuthorsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitAuthorsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema), z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesNestedInput>;
export const tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectZodSchema = makeSchema();
