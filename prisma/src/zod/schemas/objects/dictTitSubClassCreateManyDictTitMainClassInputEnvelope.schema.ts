import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassCreateManyDictTitMainClassInputObjectSchema as dictTitSubClassCreateManyDictTitMainClassInputObjectSchema } from './dictTitSubClassCreateManyDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => dictTitSubClassCreateManyDictTitMainClassInputObjectSchema), z.lazy(() => dictTitSubClassCreateManyDictTitMainClassInputObjectSchema).array()])
}).strict();
export const dictTitSubClassCreateManyDictTitMainClassInputEnvelopeObjectSchema: z.ZodType<Prisma.dictTitSubClassCreateManyDictTitMainClassInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassCreateManyDictTitMainClassInputEnvelope>;
export const dictTitSubClassCreateManyDictTitMainClassInputEnvelopeObjectZodSchema = makeSchema();
