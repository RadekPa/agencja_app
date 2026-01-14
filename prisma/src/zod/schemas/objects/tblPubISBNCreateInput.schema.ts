import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPublishersCreateNestedOneWithoutTblPubISBNInputObjectSchema as tblPublishersCreateNestedOneWithoutTblPubISBNInputObjectSchema } from './tblPublishersCreateNestedOneWithoutTblPubISBNInput.schema'

const makeSchema = () => z.object({
  PubISBN1: z.string().max(5),
  PubISBN2: z.string().max(7),
  tblPublishers: z.lazy(() => tblPublishersCreateNestedOneWithoutTblPubISBNInputObjectSchema)
}).strict();
export const tblPubISBNCreateInputObjectSchema: z.ZodType<Prisma.tblPubISBNCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNCreateInput>;
export const tblPubISBNCreateInputObjectZodSchema = makeSchema();
