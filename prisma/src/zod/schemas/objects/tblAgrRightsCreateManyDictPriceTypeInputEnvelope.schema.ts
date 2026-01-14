import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateManyDictPriceTypeInputObjectSchema as tblAgrRightsCreateManyDictPriceTypeInputObjectSchema } from './tblAgrRightsCreateManyDictPriceTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgrRightsCreateManyDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateManyDictPriceTypeInputObjectSchema).array()])
}).strict();
export const tblAgrRightsCreateManyDictPriceTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateManyDictPriceTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateManyDictPriceTypeInputEnvelope>;
export const tblAgrRightsCreateManyDictPriceTypeInputEnvelopeObjectZodSchema = makeSchema();
