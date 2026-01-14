import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNCreateWithoutTblPublishersInputObjectSchema as tblPubISBNCreateWithoutTblPublishersInputObjectSchema } from './tblPubISBNCreateWithoutTblPublishersInput.schema';
import { tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema as tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema } from './tblPubISBNUncheckedCreateWithoutTblPublishersInput.schema';
import { tblPubISBNCreateOrConnectWithoutTblPublishersInputObjectSchema as tblPubISBNCreateOrConnectWithoutTblPublishersInputObjectSchema } from './tblPubISBNCreateOrConnectWithoutTblPublishersInput.schema';
import { tblPubISBNUpsertWithWhereUniqueWithoutTblPublishersInputObjectSchema as tblPubISBNUpsertWithWhereUniqueWithoutTblPublishersInputObjectSchema } from './tblPubISBNUpsertWithWhereUniqueWithoutTblPublishersInput.schema';
import { tblPubISBNCreateManyTblPublishersInputEnvelopeObjectSchema as tblPubISBNCreateManyTblPublishersInputEnvelopeObjectSchema } from './tblPubISBNCreateManyTblPublishersInputEnvelope.schema';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './tblPubISBNWhereUniqueInput.schema';
import { tblPubISBNUpdateWithWhereUniqueWithoutTblPublishersInputObjectSchema as tblPubISBNUpdateWithWhereUniqueWithoutTblPublishersInputObjectSchema } from './tblPubISBNUpdateWithWhereUniqueWithoutTblPublishersInput.schema';
import { tblPubISBNUpdateManyWithWhereWithoutTblPublishersInputObjectSchema as tblPubISBNUpdateManyWithWhereWithoutTblPublishersInputObjectSchema } from './tblPubISBNUpdateManyWithWhereWithoutTblPublishersInput.schema';
import { tblPubISBNScalarWhereInputObjectSchema as tblPubISBNScalarWhereInputObjectSchema } from './tblPubISBNScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblPubISBNCreateWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNCreateWithoutTblPublishersInputObjectSchema).array(), z.lazy(() => tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblPubISBNCreateOrConnectWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNCreateOrConnectWithoutTblPublishersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblPubISBNUpsertWithWhereUniqueWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNUpsertWithWhereUniqueWithoutTblPublishersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblPubISBNCreateManyTblPublishersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema), z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema), z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema), z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema), z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblPubISBNUpdateWithWhereUniqueWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNUpdateWithWhereUniqueWithoutTblPublishersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblPubISBNUpdateManyWithWhereWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNUpdateManyWithWhereWithoutTblPublishersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblPubISBNScalarWhereInputObjectSchema), z.lazy(() => tblPubISBNScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblPubISBNUpdateManyWithoutTblPublishersNestedInputObjectSchema: z.ZodType<Prisma.tblPubISBNUpdateManyWithoutTblPublishersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNUpdateManyWithoutTblPublishersNestedInput>;
export const tblPubISBNUpdateManyWithoutTblPublishersNestedInputObjectZodSchema = makeSchema();
