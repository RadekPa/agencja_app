import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitEventsCreateManyTblTitlesInputObjectSchema as tblTitEventsCreateManyTblTitlesInputObjectSchema } from './tblTitEventsCreateManyTblTitlesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitEventsCreateManyTblTitlesInputObjectSchema), z.lazy(() => tblTitEventsCreateManyTblTitlesInputObjectSchema).array()])
}).strict();
export const tblTitEventsCreateManyTblTitlesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitEventsCreateManyTblTitlesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitEventsCreateManyTblTitlesInputEnvelope>;
export const tblTitEventsCreateManyTblTitlesInputEnvelopeObjectZodSchema = makeSchema();
