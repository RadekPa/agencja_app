import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateManyDictLanguagesInputObjectSchema as tblAgreementsCreateManyDictLanguagesInputObjectSchema } from './tblAgreementsCreateManyDictLanguagesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgreementsCreateManyDictLanguagesInputObjectSchema), z.lazy(() => tblAgreementsCreateManyDictLanguagesInputObjectSchema).array()])
}).strict();
export const tblAgreementsCreateManyDictLanguagesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgreementsCreateManyDictLanguagesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateManyDictLanguagesInputEnvelope>;
export const tblAgreementsCreateManyDictLanguagesInputEnvelopeObjectZodSchema = makeSchema();
