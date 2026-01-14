import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsCreateManyDictEventsInputObjectSchema as tblSubmEventsCreateManyDictEventsInputObjectSchema } from './tblSubmEventsCreateManyDictEventsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblSubmEventsCreateManyDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsCreateManyDictEventsInputObjectSchema).array()])
}).strict();
export const tblSubmEventsCreateManyDictEventsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblSubmEventsCreateManyDictEventsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsCreateManyDictEventsInputEnvelope>;
export const tblSubmEventsCreateManyDictEventsInputEnvelopeObjectZodSchema = makeSchema();
