import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesScalarWhereInputObjectSchema as dictArticlesScalarWhereInputObjectSchema } from './dictArticlesScalarWhereInput.schema';
import { dictArticlesUpdateManyMutationInputObjectSchema as dictArticlesUpdateManyMutationInputObjectSchema } from './dictArticlesUpdateManyMutationInput.schema';
import { dictArticlesUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema as dictArticlesUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema } from './dictArticlesUncheckedUpdateManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictArticlesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => dictArticlesUpdateManyMutationInputObjectSchema), z.lazy(() => dictArticlesUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const dictArticlesUpdateManyWithWhereWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.dictArticlesUpdateManyWithWhereWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUpdateManyWithWhereWithoutDictLanguagesInput>;
export const dictArticlesUpdateManyWithWhereWithoutDictLanguagesInputObjectZodSchema = makeSchema();
