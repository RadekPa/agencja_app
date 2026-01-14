import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './tblPubISBNWhereUniqueInput.schema';
import { tblPubISBNCreateWithoutTblPublishersInputObjectSchema as tblPubISBNCreateWithoutTblPublishersInputObjectSchema } from './tblPubISBNCreateWithoutTblPublishersInput.schema';
import { tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema as tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema } from './tblPubISBNUncheckedCreateWithoutTblPublishersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPubISBNWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblPubISBNCreateWithoutTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema)])
}).strict();
export const tblPubISBNCreateOrConnectWithoutTblPublishersInputObjectSchema: z.ZodType<Prisma.tblPubISBNCreateOrConnectWithoutTblPublishersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNCreateOrConnectWithoutTblPublishersInput>;
export const tblPubISBNCreateOrConnectWithoutTblPublishersInputObjectZodSchema = makeSchema();
