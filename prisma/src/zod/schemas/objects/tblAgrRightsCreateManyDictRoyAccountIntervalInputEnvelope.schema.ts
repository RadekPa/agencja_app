import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateManyDictRoyAccountIntervalInputObjectSchema as tblAgrRightsCreateManyDictRoyAccountIntervalInputObjectSchema } from './tblAgrRightsCreateManyDictRoyAccountIntervalInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgrRightsCreateManyDictRoyAccountIntervalInputObjectSchema), z.lazy(() => tblAgrRightsCreateManyDictRoyAccountIntervalInputObjectSchema).array()])
}).strict();
export const tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelope>;
export const tblAgrRightsCreateManyDictRoyAccountIntervalInputEnvelopeObjectZodSchema = makeSchema();
