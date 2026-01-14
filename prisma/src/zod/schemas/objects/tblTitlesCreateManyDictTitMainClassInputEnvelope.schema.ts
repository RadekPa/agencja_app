import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateManyDictTitMainClassInputObjectSchema as tblTitlesCreateManyDictTitMainClassInputObjectSchema } from './tblTitlesCreateManyDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitlesCreateManyDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesCreateManyDictTitMainClassInputObjectSchema).array()])
}).strict();
export const tblTitlesCreateManyDictTitMainClassInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitlesCreateManyDictTitMainClassInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateManyDictTitMainClassInputEnvelope>;
export const tblTitlesCreateManyDictTitMainClassInputEnvelopeObjectZodSchema = makeSchema();
