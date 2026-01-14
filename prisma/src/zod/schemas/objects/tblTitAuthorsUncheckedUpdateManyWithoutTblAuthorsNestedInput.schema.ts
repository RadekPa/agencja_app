import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsCreateWithoutTblAuthorsInput.schema';
import { tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUncheckedCreateWithoutTblAuthorsInput.schema';
import { tblTitAuthorsCreateOrConnectWithoutTblAuthorsInputObjectSchema as tblTitAuthorsCreateOrConnectWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsCreateOrConnectWithoutTblAuthorsInput.schema';
import { tblTitAuthorsUpsertWithWhereUniqueWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUpsertWithWhereUniqueWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUpsertWithWhereUniqueWithoutTblAuthorsInput.schema';
import { tblTitAuthorsCreateManyTblAuthorsInputEnvelopeObjectSchema as tblTitAuthorsCreateManyTblAuthorsInputEnvelopeObjectSchema } from './tblTitAuthorsCreateManyTblAuthorsInputEnvelope.schema';
import { tblTitAuthorsWhereUniqueInputObjectSchema as tblTitAuthorsWhereUniqueInputObjectSchema } from './tblTitAuthorsWhereUniqueInput.schema';
import { tblTitAuthorsUpdateWithWhereUniqueWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUpdateWithWhereUniqueWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUpdateWithWhereUniqueWithoutTblAuthorsInput.schema';
import { tblTitAuthorsUpdateManyWithWhereWithoutTblAuthorsInputObjectSchema as tblTitAuthorsUpdateManyWithWhereWithoutTblAuthorsInputObjectSchema } from './tblTitAuthorsUpdateManyWithWhereWithoutTblAuthorsInput.schema';
import { tblTitAuthorsScalarWhereInputObjectSchema as tblTitAuthorsScalarWhereInputObjectSchema } from './tblTitAuthorsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsCreateWithoutTblAuthorsInputObjectSchema).array(), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsUncheckedCreateWithoutTblAuthorsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitAuthorsCreateOrConnectWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsCreateOrConnectWithoutTblAuthorsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblTitAuthorsUpsertWithWhereUniqueWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsUpsertWithWhereUniqueWithoutTblAuthorsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitAuthorsCreateManyTblAuthorsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema), z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema), z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema), z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema), z.lazy(() => tblTitAuthorsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblTitAuthorsUpdateWithWhereUniqueWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsUpdateWithWhereUniqueWithoutTblAuthorsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblTitAuthorsUpdateManyWithWhereWithoutTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsUpdateManyWithWhereWithoutTblAuthorsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema), z.lazy(() => tblTitAuthorsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsNestedInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsNestedInput>;
export const tblTitAuthorsUncheckedUpdateManyWithoutTblAuthorsNestedInputObjectZodSchema = makeSchema();
