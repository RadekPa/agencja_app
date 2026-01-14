import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateManyDictRightsFormInputObjectSchema as tblAgrRightsCreateManyDictRightsFormInputObjectSchema } from './tblAgrRightsCreateManyDictRightsFormInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgrRightsCreateManyDictRightsFormInputObjectSchema), z.lazy(() => tblAgrRightsCreateManyDictRightsFormInputObjectSchema).array()])
}).strict();
export const tblAgrRightsCreateManyDictRightsFormInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateManyDictRightsFormInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateManyDictRightsFormInputEnvelope>;
export const tblAgrRightsCreateManyDictRightsFormInputEnvelopeObjectZodSchema = makeSchema();
