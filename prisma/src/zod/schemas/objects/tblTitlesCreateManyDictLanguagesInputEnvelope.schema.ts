import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateManyDictLanguagesInputObjectSchema as tblTitlesCreateManyDictLanguagesInputObjectSchema } from './tblTitlesCreateManyDictLanguagesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitlesCreateManyDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesCreateManyDictLanguagesInputObjectSchema).array()])
}).strict();
export const tblTitlesCreateManyDictLanguagesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitlesCreateManyDictLanguagesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateManyDictLanguagesInputEnvelope>;
export const tblTitlesCreateManyDictLanguagesInputEnvelopeObjectZodSchema = makeSchema();
