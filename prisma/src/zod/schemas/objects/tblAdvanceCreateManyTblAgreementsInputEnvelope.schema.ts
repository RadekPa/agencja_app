import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAdvanceCreateManyTblAgreementsInputObjectSchema as tblAdvanceCreateManyTblAgreementsInputObjectSchema } from './tblAdvanceCreateManyTblAgreementsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAdvanceCreateManyTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceCreateManyTblAgreementsInputObjectSchema).array()])
}).strict();
export const tblAdvanceCreateManyTblAgreementsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAdvanceCreateManyTblAgreementsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceCreateManyTblAgreementsInputEnvelope>;
export const tblAdvanceCreateManyTblAgreementsInputEnvelopeObjectZodSchema = makeSchema();
