import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsCreateManyTblAgreementsInputObjectSchema as tblAgrEventsCreateManyTblAgreementsInputObjectSchema } from './tblAgrEventsCreateManyTblAgreementsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgrEventsCreateManyTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsCreateManyTblAgreementsInputObjectSchema).array()])
}).strict();
export const tblAgrEventsCreateManyTblAgreementsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgrEventsCreateManyTblAgreementsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsCreateManyTblAgreementsInputEnvelope>;
export const tblAgrEventsCreateManyTblAgreementsInputEnvelopeObjectZodSchema = makeSchema();
