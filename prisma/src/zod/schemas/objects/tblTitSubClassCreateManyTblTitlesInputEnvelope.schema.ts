import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassCreateManyTblTitlesInputObjectSchema as tblTitSubClassCreateManyTblTitlesInputObjectSchema } from './tblTitSubClassCreateManyTblTitlesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitSubClassCreateManyTblTitlesInputObjectSchema), z.lazy(() => tblTitSubClassCreateManyTblTitlesInputObjectSchema).array()])
}).strict();
export const tblTitSubClassCreateManyTblTitlesInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateManyTblTitlesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateManyTblTitlesInputEnvelope>;
export const tblTitSubClassCreateManyTblTitlesInputEnvelopeObjectZodSchema = makeSchema();
