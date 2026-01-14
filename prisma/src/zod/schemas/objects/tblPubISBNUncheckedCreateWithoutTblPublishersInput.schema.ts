import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubISBN1: z.string(),
  PubISBN2: z.string()
}).strict();
export const tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectSchema: z.ZodType<Prisma.tblPubISBNUncheckedCreateWithoutTblPublishersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNUncheckedCreateWithoutTblPublishersInput>;
export const tblPubISBNUncheckedCreateWithoutTblPublishersInputObjectZodSchema = makeSchema();
