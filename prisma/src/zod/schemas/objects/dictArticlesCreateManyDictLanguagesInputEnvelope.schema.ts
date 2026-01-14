import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesCreateManyDictLanguagesInputObjectSchema as dictArticlesCreateManyDictLanguagesInputObjectSchema } from './dictArticlesCreateManyDictLanguagesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => dictArticlesCreateManyDictLanguagesInputObjectSchema), z.lazy(() => dictArticlesCreateManyDictLanguagesInputObjectSchema).array()])
}).strict();
export const dictArticlesCreateManyDictLanguagesInputEnvelopeObjectSchema: z.ZodType<Prisma.dictArticlesCreateManyDictLanguagesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesCreateManyDictLanguagesInputEnvelope>;
export const dictArticlesCreateManyDictLanguagesInputEnvelopeObjectZodSchema = makeSchema();
