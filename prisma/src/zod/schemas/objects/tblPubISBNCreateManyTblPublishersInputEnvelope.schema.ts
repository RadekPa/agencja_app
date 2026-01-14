import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubISBNCreateManyTblPublishersInputObjectSchema as tblPubISBNCreateManyTblPublishersInputObjectSchema } from './tblPubISBNCreateManyTblPublishersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblPubISBNCreateManyTblPublishersInputObjectSchema), z.lazy(() => tblPubISBNCreateManyTblPublishersInputObjectSchema).array()])
}).strict();
export const tblPubISBNCreateManyTblPublishersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblPubISBNCreateManyTblPublishersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNCreateManyTblPublishersInputEnvelope>;
export const tblPubISBNCreateManyTblPublishersInputEnvelopeObjectZodSchema = makeSchema();
