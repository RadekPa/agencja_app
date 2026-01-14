import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateManyDictCurrenciesInputObjectSchema as tblAgreementsCreateManyDictCurrenciesInputObjectSchema } from './tblAgreementsCreateManyDictCurrenciesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgreementsCreateManyDictCurrenciesInputObjectSchema), z.lazy(() => tblAgreementsCreateManyDictCurrenciesInputObjectSchema).array()])
}).strict();
export const tblAgreementsCreateManyDictCurrenciesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgreementsCreateManyDictCurrenciesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateManyDictCurrenciesInputEnvelope>;
export const tblAgreementsCreateManyDictCurrenciesInputEnvelopeObjectZodSchema = makeSchema();
