import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyaltyCreateManyTblAgreementsInputObjectSchema as tblRoyaltyCreateManyTblAgreementsInputObjectSchema } from './tblRoyaltyCreateManyTblAgreementsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblRoyaltyCreateManyTblAgreementsInputObjectSchema), z.lazy(() => tblRoyaltyCreateManyTblAgreementsInputObjectSchema).array()])
}).strict();
export const tblRoyaltyCreateManyTblAgreementsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblRoyaltyCreateManyTblAgreementsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyaltyCreateManyTblAgreementsInputEnvelope>;
export const tblRoyaltyCreateManyTblAgreementsInputEnvelopeObjectZodSchema = makeSchema();
