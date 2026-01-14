import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateManyDictSubmSentTypeInputObjectSchema as tblSubmissionsCreateManyDictSubmSentTypeInputObjectSchema } from './tblSubmissionsCreateManyDictSubmSentTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblSubmissionsCreateManyDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsCreateManyDictSubmSentTypeInputObjectSchema).array()])
}).strict();
export const tblSubmissionsCreateManyDictSubmSentTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateManyDictSubmSentTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateManyDictSubmSentTypeInputEnvelope>;
export const tblSubmissionsCreateManyDictSubmSentTypeInputEnvelopeObjectZodSchema = makeSchema();
