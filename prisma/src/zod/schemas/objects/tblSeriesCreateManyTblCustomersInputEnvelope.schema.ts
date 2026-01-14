import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSeriesCreateManyTblCustomersInputObjectSchema as tblSeriesCreateManyTblCustomersInputObjectSchema } from './tblSeriesCreateManyTblCustomersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblSeriesCreateManyTblCustomersInputObjectSchema), z.lazy(() => tblSeriesCreateManyTblCustomersInputObjectSchema).array()])
}).strict();
export const tblSeriesCreateManyTblCustomersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblSeriesCreateManyTblCustomersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesCreateManyTblCustomersInputEnvelope>;
export const tblSeriesCreateManyTblCustomersInputEnvelopeObjectZodSchema = makeSchema();
