import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateManyDictCoverFormatInputObjectSchema as tblTitlesCreateManyDictCoverFormatInputObjectSchema } from './tblTitlesCreateManyDictCoverFormatInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitlesCreateManyDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesCreateManyDictCoverFormatInputObjectSchema).array()])
}).strict();
export const tblTitlesCreateManyDictCoverFormatInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitlesCreateManyDictCoverFormatInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateManyDictCoverFormatInputEnvelope>;
export const tblTitlesCreateManyDictCoverFormatInputEnvelopeObjectZodSchema = makeSchema();
