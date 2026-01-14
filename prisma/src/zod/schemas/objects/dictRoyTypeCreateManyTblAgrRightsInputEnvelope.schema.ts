import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeCreateManyTblAgrRightsInputObjectSchema as dictRoyTypeCreateManyTblAgrRightsInputObjectSchema } from './dictRoyTypeCreateManyTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => dictRoyTypeCreateManyTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeCreateManyTblAgrRightsInputObjectSchema).array()])
}).strict();
export const dictRoyTypeCreateManyTblAgrRightsInputEnvelopeObjectSchema: z.ZodType<Prisma.dictRoyTypeCreateManyTblAgrRightsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeCreateManyTblAgrRightsInputEnvelope>;
export const dictRoyTypeCreateManyTblAgrRightsInputEnvelopeObjectZodSchema = makeSchema();
