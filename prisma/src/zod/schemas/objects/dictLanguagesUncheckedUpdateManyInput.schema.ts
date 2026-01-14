import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangPL: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictLanguagesUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictLanguagesUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUncheckedUpdateManyInput>;
export const dictLanguagesUncheckedUpdateManyInputObjectZodSchema = makeSchema();
