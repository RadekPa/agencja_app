import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateManyDictCopyTypeInputObjectSchema as tblSubmissionsCreateManyDictCopyTypeInputObjectSchema } from './tblSubmissionsCreateManyDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblSubmissionsCreateManyDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsCreateManyDictCopyTypeInputObjectSchema).array()])
}).strict();
export const tblSubmissionsCreateManyDictCopyTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateManyDictCopyTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateManyDictCopyTypeInputEnvelope>;
export const tblSubmissionsCreateManyDictCopyTypeInputEnvelopeObjectZodSchema = makeSchema();
