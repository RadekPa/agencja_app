import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { dictLanguagesUpdateOneWithoutDictArticlesNestedInputObjectSchema as dictLanguagesUpdateOneWithoutDictArticlesNestedInputObjectSchema } from './dictLanguagesUpdateOneWithoutDictArticlesNestedInput.schema'

const makeSchema = () => z.object({
  Article: z.union([z.string().max(10), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dictLanguages: z.lazy(() => dictLanguagesUpdateOneWithoutDictArticlesNestedInputObjectSchema).optional()
}).strict();
export const dictArticlesUpdateInputObjectSchema: z.ZodType<Prisma.dictArticlesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUpdateInput>;
export const dictArticlesUpdateInputObjectZodSchema = makeSchema();
