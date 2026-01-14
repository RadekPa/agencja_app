import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPublishersWhereUniqueInputObjectSchema as tblPublishersWhereUniqueInputObjectSchema } from './tblPublishersWhereUniqueInput.schema';
import { tblPublishersCreateWithoutTblPubISBNInputObjectSchema as tblPublishersCreateWithoutTblPubISBNInputObjectSchema } from './tblPublishersCreateWithoutTblPubISBNInput.schema';
import { tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema as tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema } from './tblPublishersUncheckedCreateWithoutTblPubISBNInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPublishersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblPublishersCreateWithoutTblPubISBNInputObjectSchema), z.lazy(() => tblPublishersUncheckedCreateWithoutTblPubISBNInputObjectSchema)])
}).strict();
export const tblPublishersCreateOrConnectWithoutTblPubISBNInputObjectSchema: z.ZodType<Prisma.tblPublishersCreateOrConnectWithoutTblPubISBNInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersCreateOrConnectWithoutTblPubISBNInput>;
export const tblPublishersCreateOrConnectWithoutTblPubISBNInputObjectZodSchema = makeSchema();
