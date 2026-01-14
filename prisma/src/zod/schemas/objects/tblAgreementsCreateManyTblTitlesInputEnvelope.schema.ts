import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateManyTblTitlesInputObjectSchema as tblAgreementsCreateManyTblTitlesInputObjectSchema } from './tblAgreementsCreateManyTblTitlesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgreementsCreateManyTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsCreateManyTblTitlesInputObjectSchema).array()])
}).strict();
export const tblAgreementsCreateManyTblTitlesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgreementsCreateManyTblTitlesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateManyTblTitlesInputEnvelope>;
export const tblAgreementsCreateManyTblTitlesInputEnvelopeObjectZodSchema = makeSchema();
