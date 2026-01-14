import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNCreateWithoutTblPublishersInputObjectSchema as tblPubISBNCreateWithoutTblPublishersInputObjectSchema } from './tblPubISBNCreateWithoutTblPublishersInput.schema';
import { tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema as tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema } from './tblPubISBNUncheckedCreateWithoutTblPublishersInput.schema';
import { tblPubISBNCreateOrConnectWithoutTblPublishersInputObjectSchema as tblPubISBNCreateOrConnectWithoutTblPublishersInputObjectSchema } from './tblPubISBNCreateOrConnectWithoutTblPublishersInput.schema';
import { tblPubISBNCreateManyTblPublishersInputEnvelopeObjectSchema as tblPubISBNCreateManyTblPublishersInputEnvelopeObjectSchema } from './tblPubISBNCreateManyTblPublishersInputEnvelope.schema';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './tblPubISBNWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblPubISBNCreateWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNCreateWithoutTblPublishersInputObjectSchema).array(), z.lazy(() => tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblPubISBNCreateOrConnectWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNCreateOrConnectWithoutTblPublishersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblPubISBNCreateManyTblPublishersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema), z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblPubISBNCreateNestedManyWithoutTblPublishersInputObjectSchema: z.ZodType<Prisma.tblPubISBNCreateNestedManyWithoutTblPublishersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNCreateNestedManyWithoutTblPublishersInput>;
export const tblPubISBNCreateNestedManyWithoutTblPublishersInputObjectZodSchema = makeSchema();
