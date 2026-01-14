import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateManyTblCustomersInputObjectSchema as tblTitlesCreateManyTblCustomersInputObjectSchema } from './tblTitlesCreateManyTblCustomersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitlesCreateManyTblCustomersInputObjectSchema), z.lazy(() => tblTitlesCreateManyTblCustomersInputObjectSchema).array()])
}).strict();
export const tblTitlesCreateManyTblCustomersInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitlesCreateManyTblCustomersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateManyTblCustomersInputEnvelope>;
export const tblTitlesCreateManyTblCustomersInputEnvelopeObjectZodSchema = makeSchema();
