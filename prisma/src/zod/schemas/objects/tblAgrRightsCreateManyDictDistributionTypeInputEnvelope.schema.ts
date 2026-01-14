import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateManyDictDistributionTypeInputObjectSchema as tblAgrRightsCreateManyDictDistributionTypeInputObjectSchema } from './tblAgrRightsCreateManyDictDistributionTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgrRightsCreateManyDictDistributionTypeInputObjectSchema), z.lazy(() => tblAgrRightsCreateManyDictDistributionTypeInputObjectSchema).array()])
}).strict();
export const tblAgrRightsCreateManyDictDistributionTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateManyDictDistributionTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateManyDictDistributionTypeInputEnvelope>;
export const tblAgrRightsCreateManyDictDistributionTypeInputEnvelopeObjectZodSchema = makeSchema();
