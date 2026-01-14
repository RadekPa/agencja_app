import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsCreateManyTblSubmissionsInputObjectSchema as tblSubmEventsCreateManyTblSubmissionsInputObjectSchema } from './tblSubmEventsCreateManyTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblSubmEventsCreateManyTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsCreateManyTblSubmissionsInputObjectSchema).array()])
}).strict();
export const tblSubmEventsCreateManyTblSubmissionsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblSubmEventsCreateManyTblSubmissionsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsCreateManyTblSubmissionsInputEnvelope>;
export const tblSubmEventsCreateManyTblSubmissionsInputEnvelopeObjectZodSchema = makeSchema();
