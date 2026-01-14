import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNPubIDPubISBN1PubISBN2CompoundUniqueInputObjectSchema as tblPubISBNPubIDPubISBN1PubISBN2CompoundUniqueInputObjectSchema } from './tblPubISBNPubIDPubISBN1PubISBN2CompoundUniqueInput.schema'

const makeSchema = () => z.object({
  PubID_PubISBN1_PubISBN2: z.lazy(() => tblPubISBNPubIDPubISBN1PubISBN2CompoundUniqueInputObjectSchema).optional()
}).strict();
export const tblPubISBNWhereUniqueInputObjectSchema: z.ZodType<Prisma.tblPubISBNWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNWhereUniqueInput>;
export const tblPubISBNWhereUniqueInputObjectZodSchema = makeSchema();
