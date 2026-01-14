import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateManyDictCopyTypeInputObjectSchema as tblTitEventsCreateManyDictCopyTypeInputObjectSchema } from './tblTitEventsCreateManyDictCopyTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitEventsCreateManyDictCopyTypeInputObjectSchema), z.lazy(() => tblTitEventsCreateManyDictCopyTypeInputObjectSchema).array()])
}).strict();
export const tblTitEventsCreateManyDictCopyTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitEventsCreateManyDictCopyTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsCreateManyDictCopyTypeInputEnvelope>;
export const tblTitEventsCreateManyDictCopyTypeInputEnvelopeObjectZodSchema = makeSchema();
