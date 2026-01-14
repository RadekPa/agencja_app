import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPublishersWhereInputObjectSchema as tblPublishersWhereInputObjectSchema } from './tblPublishersWhereInput.schema';
import { tblPublishersUpdateWithoutTblPubISBNInputObjectSchema as tblPublishersUpdateWithoutTblPubISBNInputObjectSchema } from './tblPublishersUpdateWithoutTblPubISBNInput.schema';
import { tblPublishersUncheckedUpdateWithoutTblPubISBNInputObjectSchema as tblPublishersUncheckedUpdateWithoutTblPubISBNInputObjectSchema } from './tblPublishersUncheckedUpdateWithoutTblPubISBNInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPublishersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblPublishersUpdateWithoutTblPubISBNInputObjectSchema), z.lazy(() => tblPublishersUncheckedUpdateWithoutTblPubISBNInputObjectSchema)])
}).strict();
export const tblPublishersUpdateToOneWithWhereWithoutTblPubISBNInputObjectSchema: z.ZodType<Prisma.tblPublishersUpdateToOneWithWhereWithoutTblPubISBNInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersUpdateToOneWithWhereWithoutTblPubISBNInput>;
export const tblPublishersUpdateToOneWithWhereWithoutTblPubISBNInputObjectZodSchema = makeSchema();
