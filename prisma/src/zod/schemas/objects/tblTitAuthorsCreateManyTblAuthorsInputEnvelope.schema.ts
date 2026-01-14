import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsCreateManyTblAuthorsInputObjectSchema as tblTitAuthorsCreateManyTblAuthorsInputObjectSchema } from './tblTitAuthorsCreateManyTblAuthorsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitAuthorsCreateManyTblAuthorsInputObjectSchema), z.lazy(() => tblTitAuthorsCreateManyTblAuthorsInputObjectSchema).array()])
}).strict();
export const tblTitAuthorsCreateManyTblAuthorsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitAuthorsCreateManyTblAuthorsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateManyTblAuthorsInputEnvelope>;
export const tblTitAuthorsCreateManyTblAuthorsInputEnvelopeObjectZodSchema = makeSchema();
