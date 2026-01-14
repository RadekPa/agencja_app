import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateManyDictCountries_oldInputObjectSchema as tblAgreementsCreateManyDictCountries_oldInputObjectSchema } from './tblAgreementsCreateManyDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgreementsCreateManyDictCountries_oldInputObjectSchema), z.lazy(() => tblAgreementsCreateManyDictCountries_oldInputObjectSchema).array()])
}).strict();
export const tblAgreementsCreateManyDictCountries_oldInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgreementsCreateManyDictCountries_oldInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateManyDictCountries_oldInputEnvelope>;
export const tblAgreementsCreateManyDictCountries_oldInputEnvelopeObjectZodSchema = makeSchema();
