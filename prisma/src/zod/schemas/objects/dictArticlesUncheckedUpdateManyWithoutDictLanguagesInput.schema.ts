import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Article: z.union([z.string().max(10), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictArticlesUncheckedUpdateManyWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.dictArticlesUncheckedUpdateManyWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUncheckedUpdateManyWithoutDictLanguagesInput>;
export const dictArticlesUncheckedUpdateManyWithoutDictLanguagesInputObjectZodSchema = makeSchema();
