import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblClients_obsoleteCreateManyDictRepModesInputObjectSchema as tblClients_obsoleteCreateManyDictRepModesInputObjectSchema } from './tblClients_obsoleteCreateManyDictRepModesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblClients_obsoleteCreateManyDictRepModesInputObjectSchema), z.lazy(() => tblClients_obsoleteCreateManyDictRepModesInputObjectSchema).array()])
}).strict();
export const tblClients_obsoleteCreateManyDictRepModesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblClients_obsoleteCreateManyDictRepModesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteCreateManyDictRepModesInputEnvelope>;
export const tblClients_obsoleteCreateManyDictRepModesInputEnvelopeObjectZodSchema = makeSchema();
