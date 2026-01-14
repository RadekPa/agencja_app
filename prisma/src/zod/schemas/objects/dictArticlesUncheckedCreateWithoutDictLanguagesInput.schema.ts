import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Article: z.string()
}).strict();
export const dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.dictArticlesUncheckedCreateWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUncheckedCreateWithoutDictLanguagesInput>;
export const dictArticlesUncheckedCreateWithoutDictLanguagesInputObjectZodSchema = makeSchema();
