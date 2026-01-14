import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubISBN1: z.string().max(5),
  PubISBN2: z.string().max(7)
}).strict();
export const tblPubISBNCreateWithoutTblPublishersInputObjectSchema: z.ZodType<Prisma.tblPubISBNCreateWithoutTblPublishersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNCreateWithoutTblPublishersInput>;
export const tblPubISBNCreateWithoutTblPublishersInputObjectZodSchema = makeSchema();
