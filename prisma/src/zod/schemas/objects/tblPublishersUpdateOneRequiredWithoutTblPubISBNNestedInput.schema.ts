import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPublishersCreateWithoutTblPubISBNInputObjectSchema as tblPublishersCreateWithoutTblPubISBNInputObjectSchema } from './tblPublishersCreateWithoutTblPubISBNInput.schema';
import { tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema as tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema } from './tblPublishersUncheckedCreateWithoutTblPubISBNInput.schema';
import { tblPublishersCreateOrConnectWithoutTblPubISBNInputObjectSchema as tblPublishersCreateOrConnectWithoutTblPubISBNInputObjectSchema } from './tblPublishersCreateOrConnectWithoutTblPubISBNInput.schema';
import { tblPublishersUpsertWithoutTblPubISBNInputObjectSchema as tblPublishersUpsertWithoutTblPubISBNInputObjectSchema } from './tblPublishersUpsertWithoutTblPubISBNInput.schema';
import { tblPublishersWhereUniqueInputObjectSchema as tblPublishersWhereUniqueInputObjectSchema } from './tblPublishersWhereUniqueInput.schema';
import { tblPublishersUpdateToOneWithWhereWithoutTblPubISBNInputObjectSchema as tblPublishersUpdateToOneWithWhereWithoutTblPubISBNInputObjectSchema } from './tblPublishersUpdateToOneWithWhereWithoutTblPubISBNInput.schema';
import { tblPublishersUpdateWithoutTblPubISBNInputObjectSchema as tblPublishersUpdateWithoutTblPubISBNInputObjectSchema } from './tblPublishersUpdateWithoutTblPubISBNInput.schema';
import { tblPublishersUncheckedUpdateWithoutTblPubISBNInputObjectSchema as tblPublishersUncheckedUpdateWithoutTblPubISBNInputObjectSchema } from './tblPublishersUncheckedUpdateWithoutTblPubISBNInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblPublishersCreateWithoutTblPubISBNInputObjectSchema), z.lazy(() => tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblPublishersCreateOrConnectWithoutTblPubISBNInputObjectSchema).optional(),
  upsert: z.lazy(() => tblPublishersUpsertWithoutTblPubISBNInputObjectSchema).optional(),
  connect: z.lazy(() => tblPublishersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblPublishersUpdateToOneWithWhereWithoutTblPubISBNInputObjectSchema), z.lazy(() => tblPublishersUpdateWithoutTblPubISBNInputObjectSchema), z.lazy(() => tblPublishersUncheckedUpdateWithoutTblPubISBNInputObjectSchema)]).optional()
}).strict();
export const tblPublishersUpdateOneRequiredWithoutTblPubISBNNestedInputObjectSchema: z.ZodType<Prisma.tblPublishersUpdateOneRequiredWithoutTblPubISBNNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersUpdateOneRequiredWithoutTblPubISBNNestedInput>;
export const tblPublishersUpdateOneRequiredWithoutTblPubISBNNestedInputObjectZodSchema = makeSchema();
