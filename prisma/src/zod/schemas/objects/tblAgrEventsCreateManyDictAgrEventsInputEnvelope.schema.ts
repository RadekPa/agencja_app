import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsCreateManyDictAgrEventsInputObjectSchema as tblAgrEventsCreateManyDictAgrEventsInputObjectSchema } from './tblAgrEventsCreateManyDictAgrEventsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblAgrEventsCreateManyDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsCreateManyDictAgrEventsInputObjectSchema).array()])
}).strict();
export const tblAgrEventsCreateManyDictAgrEventsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblAgrEventsCreateManyDictAgrEventsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsCreateManyDictAgrEventsInputEnvelope>;
export const tblAgrEventsCreateManyDictAgrEventsInputEnvelopeObjectZodSchema = makeSchema();
