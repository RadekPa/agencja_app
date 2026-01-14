import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateManyDictEventsInputObjectSchema as tblTitEventsCreateManyDictEventsInputObjectSchema } from './tblTitEventsCreateManyDictEventsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitEventsCreateManyDictEventsInputObjectSchema), z.lazy(() => tblTitEventsCreateManyDictEventsInputObjectSchema).array()])
}).strict();
export const tblTitEventsCreateManyDictEventsInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitEventsCreateManyDictEventsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsCreateManyDictEventsInputEnvelope>;
export const tblTitEventsCreateManyDictEventsInputEnvelopeObjectZodSchema = makeSchema();
