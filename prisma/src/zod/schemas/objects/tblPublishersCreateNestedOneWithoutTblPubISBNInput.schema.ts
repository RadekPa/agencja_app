import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPublishersCreateWithoutTblPubISBNInputObjectSchema as tblPublishersCreateWithoutTblPubISBNInputObjectSchema } from './tblPublishersCreateWithoutTblPubISBNInput.schema';
import { tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema as tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema } from './tblPublishersUncheckedCreateWithoutTblPubISBNInput.schema';
import { tblPublishersCreateOrConnectWithoutTblPubISBNInputObjectSchema as tblPublishersCreateOrConnectWithoutTblPubISBNInputObjectSchema } from './tblPublishersCreateOrConnectWithoutTblPubISBNInput.schema';
import { tblPublishersWhereUniqueInputObjectSchema as tblPublishersWhereUniqueInputObjectSchema } from './tblPublishersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblPublishersCreateWithoutTblPubISBNInputObjectSchema), z.lazy(() => tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblPublishersCreateOrConnectWithoutTblPubISBNInputObjectSchema).optional(),
  connect: z.lazy(() => tblPublishersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblPublishersCreateNestedOneWithoutTblPubISBNInputObjectSchema: z.ZodType<Prisma.tblPublishersCreateNestedOneWithoutTblPubISBNInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersCreateNestedOneWithoutTblPubISBNInput>;
export const tblPublishersCreateNestedOneWithoutTblPubISBNInputObjectZodSchema = makeSchema();
