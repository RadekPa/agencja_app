import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './tblPubISBNWhereUniqueInput.schema';
import { tblPubISBNUpdateWithoutTblPublishersInputObjectSchema as tblPubISBNUpdateWithoutTblPublishersInputObjectSchema } from './tblPubISBNUpdateWithoutTblPublishersInput.schema';
import { tblPubISBNUncheckedUpdateWithoutTblPublishersInputObjectSchema as tblPubISBNUncheckedUpdateWithoutTblPublishersInputObjectSchema } from './tblPubISBNUncheckedUpdateWithoutTblPublishersInput.schema';
import { tblPubISBNCreateWithoutTblPublishersInputObjectSchema as tblPubISBNCreateWithoutTblPublishersInputObjectSchema } from './tblPubISBNCreateWithoutTblPublishersInput.schema';
import { tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema as tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema } from './tblPubISBNUncheckedCreateWithoutTblPublishersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblPubISBNUpdateWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNUncheckedUpdateWithoutTblPublishersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblPubISBNCreateWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema)])
}).strict();
export const tblPubISBNUpsertWithWhereUniqueWithoutTblPublishersInputObjectSchema: z.ZodType<Prisma.tblPubISBNUpsertWithWhereUniqueWithoutTblPublishersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNUpsertWithWhereUniqueWithoutTblPublishersInput>;
export const tblPubISBNUpsertWithWhereUniqueWithoutTblPublishersInputObjectZodSchema = makeSchema();
