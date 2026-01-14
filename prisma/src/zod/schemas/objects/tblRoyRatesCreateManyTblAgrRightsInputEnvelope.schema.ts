import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblRoyRatesCreateManyTblAgrRightsInputObjectSchema as tblRoyRatesCreateManyTblAgrRightsInputObjectSchema } from './tblRoyRatesCreateManyTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblRoyRatesCreateManyTblAgrRightsInputObjectSchema), z.lazy(() => tblRoyRatesCreateManyTblAgrRightsInputObjectSchema).array()])
}).strict();
export const tblRoyRatesCreateManyTblAgrRightsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblRoyRatesCreateManyTblAgrRightsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesCreateManyTblAgrRightsInputEnvelope>;
export const tblRoyRatesCreateManyTblAgrRightsInputEnvelopeObjectZodSchema = makeSchema();
