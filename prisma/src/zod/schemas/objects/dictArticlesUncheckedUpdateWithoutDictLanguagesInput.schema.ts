import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Article: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictArticlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.dictArticlesUncheckedUpdateWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUncheckedUpdateWithoutDictLanguagesInput>;
export const dictArticlesUncheckedUpdateWithoutDictLanguagesInputObjectZodSchema = makeSchema();
