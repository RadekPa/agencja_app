import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesCreateManyDictCustTypesInputObjectSchema as tblCustTypesCreateManyDictCustTypesInputObjectSchema } from './tblCustTypesCreateManyDictCustTypesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblCustTypesCreateManyDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesCreateManyDictCustTypesInputObjectSchema).array()])
}).strict();
export const tblCustTypesCreateManyDictCustTypesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblCustTypesCreateManyDictCustTypesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateManyDictCustTypesInputEnvelope>;
export const tblCustTypesCreateManyDictCustTypesInputEnvelopeObjectZodSchema = makeSchema();
