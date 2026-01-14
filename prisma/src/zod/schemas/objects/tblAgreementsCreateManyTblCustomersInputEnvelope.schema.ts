import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateManyTblCustomersInputObjectSchema as tblAgreementsCreateManyTblCustomersInputObjectSchema } from './tblAgreementsCreateManyTblCustomersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgreementsCreateManyTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsCreateManyTblCustomersInputObjectSchema).array()])
}).strict();
export const tblAgreementsCreateManyTblCustomersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgreementsCreateManyTblCustomersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateManyTblCustomersInputEnvelope>;
export const tblAgreementsCreateManyTblCustomersInputEnvelopeObjectZodSchema = makeSchema();
