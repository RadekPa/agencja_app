import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateManyDictRoyPriceTypeInputObjectSchema as tblAgrRightsCreateManyDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsCreateManyDictRoyPriceTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgrRightsCreateManyDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateManyDictRoyPriceTypeInputObjectSchema).array()])
}).strict();
export const tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelope>;
export const tblAgrRightsCreateManyDictRoyPriceTypeInputEnvelopeObjectZodSchema = makeSchema();
