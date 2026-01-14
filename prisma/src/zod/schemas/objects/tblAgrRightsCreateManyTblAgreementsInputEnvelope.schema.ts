import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateManyTblAgreementsInputObjectSchema as tblAgrRightsCreateManyTblAgreementsInputObjectSchema } from './tblAgrRightsCreateManyTblAgreementsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgrRightsCreateManyTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsCreateManyTblAgreementsInputObjectSchema).array()])
}).strict();
export const tblAgrRightsCreateManyTblAgreementsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateManyTblAgreementsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateManyTblAgreementsInputEnvelope>;
export const tblAgrRightsCreateManyTblAgreementsInputEnvelopeObjectZodSchema = makeSchema();
