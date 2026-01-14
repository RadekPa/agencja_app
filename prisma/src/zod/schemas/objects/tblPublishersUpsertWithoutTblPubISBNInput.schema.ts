import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPublishersUpdateWithoutTblPubISBNInputObjectSchema as tblPublishersUpdateWithoutTblPubISBNInputObjectSchema } from './tblPublishersUpdateWithoutTblPubISBNInput.schema';
import { tblPublishersUncheckedUpdateWithoutTblPubISBNInputObjectSchema as tblPublishersUncheckedUpdateWithoutTblPubISBNInputObjectSchema } from './tblPublishersUncheckedUpdateWithoutTblPubISBNInput.schema';
import { tblPublishersCreateWithoutTblPubISBNInputObjectSchema as tblPublishersCreateWithoutTblPubISBNInputObjectSchema } from './tblPublishersCreateWithoutTblPubISBNInput.schema';
import { tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema as tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema } from './tblPublishersUncheckedCreateWithoutTblPubISBNInput.schema';
import { tblPublishersWhereInputObjectSchema as tblPublishersWhereInputObjectSchema } from './tblPublishersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblPublishersUpdateWithoutTblPubISBNInputObjectSchema), z.lazy(() => tblPublishersUncheckedUpdateWithoutTblPubISBNInputObjectSchema)]),
  create: z.union([z.lazy(() => tblPublishersCreateWithoutTblPubISBNInputObjectSchema), z.lazy(() => tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema)]),
  where: z.lazy(() => tblPublishersWhereInputObjectSchema).optional()
}).strict();
export const tblPublishersUpsertWithoutTblPubISBNInputObjectSchema: z.ZodType<Prisma.tblPublishersUpsertWithoutTblPubISBNInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersUpsertWithoutTblPubISBNInput>;
export const tblPublishersUpsertWithoutTblPubISBNInputObjectZodSchema = makeSchema();
