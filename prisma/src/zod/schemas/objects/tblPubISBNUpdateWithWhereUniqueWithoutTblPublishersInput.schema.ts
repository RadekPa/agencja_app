import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './tblPubISBNWhereUniqueInput.schema';
import { tblPubISBNUpdateWithoutTblPublishersInputObjectSchema as tblPubISBNUpdateWithoutTblPublishersInputObjectSchema } from './tblPubISBNUpdateWithoutTblPublishersInput.schema';
import { tblPubISBNUncheckedUpdateWithoutTblPublishersInputObjectSchema as tblPubISBNUncheckedUpdateWithoutTblPublishersInputObjectSchema } from './tblPubISBNUncheckedUpdateWithoutTblPublishersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblPubISBNUpdateWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNUncheckedUpdateWithoutTblPublishersInputObjectSchema)])
}).strict();
export const tblPubISBNUpdateWithWhereUniqueWithoutTblPublishersInputObjectSchema: z.ZodType<Prisma.tblPubISBNUpdateWithWhereUniqueWithoutTblPublishersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNUpdateWithWhereUniqueWithoutTblPublishersInput>;
export const tblPubISBNUpdateWithWhereUniqueWithoutTblPublishersInputObjectZodSchema = makeSchema();
