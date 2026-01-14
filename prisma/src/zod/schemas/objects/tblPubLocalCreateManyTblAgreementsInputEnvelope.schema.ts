import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubLocalCreateManyTblAgreementsInputObjectSchema as tblPubLocalCreateManyTblAgreementsInputObjectSchema } from './tblPubLocalCreateManyTblAgreementsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblPubLocalCreateManyTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalCreateManyTblAgreementsInputObjectSchema).array()])
}).strict();
export const tblPubLocalCreateManyTblAgreementsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblPubLocalCreateManyTblAgreementsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalCreateManyTblAgreementsInputEnvelope>;
export const tblPubLocalCreateManyTblAgreementsInputEnvelopeObjectZodSchema = makeSchema();
