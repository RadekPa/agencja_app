import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubISBN1: z.string().max(5),
  PubISBN2: z.string().max(7)
}).strict();
export const tblPubISBNCreateManyTblPublishersInputObjectSchema: z.ZodType<Prisma.tblPubISBNCreateManyTblPublishersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNCreateManyTblPublishersInput>;
export const tblPubISBNCreateManyTblPublishersInputObjectZodSchema = makeSchema();
