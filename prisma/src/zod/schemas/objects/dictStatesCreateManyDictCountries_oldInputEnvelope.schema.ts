import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesCreateManyDictCountries_oldInputObjectSchema as dictStatesCreateManyDictCountries_oldInputObjectSchema } from './dictStatesCreateManyDictCountries_oldInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => dictStatesCreateManyDictCountries_oldInputObjectSchema), z.lazy(() => dictStatesCreateManyDictCountries_oldInputObjectSchema).array()])
}).strict();
export const dictStatesCreateManyDictCountries_oldInputEnvelopeObjectSchema: z.ZodType<Prisma.dictStatesCreateManyDictCountries_oldInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCreateManyDictCountries_oldInputEnvelope>;
export const dictStatesCreateManyDictCountries_oldInputEnvelopeObjectZodSchema = makeSchema();
