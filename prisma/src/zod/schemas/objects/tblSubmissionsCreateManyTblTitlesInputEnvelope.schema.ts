import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateManyTblTitlesInputObjectSchema as tblSubmissionsCreateManyTblTitlesInputObjectSchema } from './tblSubmissionsCreateManyTblTitlesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblSubmissionsCreateManyTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsCreateManyTblTitlesInputObjectSchema).array()])
}).strict();
export const tblSubmissionsCreateManyTblTitlesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblSubmissionsCreateManyTblTitlesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsCreateManyTblTitlesInputEnvelope>;
export const tblSubmissionsCreateManyTblTitlesInputEnvelopeObjectZodSchema = makeSchema();
