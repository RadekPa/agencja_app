import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitSubClassCreateManyDictTitSubClassInputObjectSchema as tblTitSubClassCreateManyDictTitSubClassInputObjectSchema } from './tblTitSubClassCreateManyDictTitSubClassInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tblTitSubClassCreateManyDictTitSubClassInputObjectSchema), z.lazy(() => tblTitSubClassCreateManyDictTitSubClassInputObjectSchema).array()])
}).strict();
export const tblTitSubClassCreateManyDictTitSubClassInputEnvelopeObjectSchema: z.ZodType<Prisma.tblTitSubClassCreateManyDictTitSubClassInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tblTitSubClassCreateManyDictTitSubClassInputEnvelope>;
export const tblTitSubClassCreateManyDictTitSubClassInputEnvelopeObjectZodSchema = makeSchema();
