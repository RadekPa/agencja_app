import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  CoverFormatDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictCoverFormatUpdateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictCoverFormatUpdateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatUpdateWithoutTblTitlesInput>;
export const dictCoverFormatUpdateWithoutTblTitlesInputObjectZodSchema = makeSchema();
