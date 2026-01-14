import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Article: z.union([z.string().max(10), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangAbb: z.union([z.string().max(3), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictArticlesUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictArticlesUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesUncheckedUpdateManyInput>;
export const dictArticlesUncheckedUpdateManyInputObjectZodSchema = makeSchema();
