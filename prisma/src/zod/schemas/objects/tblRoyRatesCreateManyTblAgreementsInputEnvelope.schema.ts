import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesCreateManyTblAgreementsInputObjectSchema as tblRoyRatesCreateManyTblAgreementsInputObjectSchema } from './tblRoyRatesCreateManyTblAgreementsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblRoyRatesCreateManyTblAgreementsInputObjectSchema), z.lazy(() => tblRoyRatesCreateManyTblAgreementsInputObjectSchema).array()])
}).strict();
export const tblRoyRatesCreateManyTblAgreementsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblRoyRatesCreateManyTblAgreementsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesCreateManyTblAgreementsInputEnvelope>;
export const tblRoyRatesCreateManyTblAgreementsInputEnvelopeObjectZodSchema = makeSchema();
