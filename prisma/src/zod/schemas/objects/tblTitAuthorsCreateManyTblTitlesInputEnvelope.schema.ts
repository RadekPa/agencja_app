import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitAuthorsCreateManyTblTitlesInputObjectSchema as tblTitAuthorsCreateManyTblTitlesInputObjectSchema } from './tblTitAuthorsCreateManyTblTitlesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitAuthorsCreateManyTblTitlesInputObjectSchema), z.lazy(() => tblTitAuthorsCreateManyTblTitlesInputObjectSchema).array()])
}).strict();
export const tblTitAuthorsCreateManyTblTitlesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitAuthorsCreateManyTblTitlesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsCreateManyTblTitlesInputEnvelope>;
export const tblTitAuthorsCreateManyTblTitlesInputEnvelopeObjectZodSchema = makeSchema();
