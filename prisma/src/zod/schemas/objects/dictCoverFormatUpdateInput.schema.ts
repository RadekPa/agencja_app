import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblTitlesUpdateManyWithoutDictCoverFormatNestedInputObjectSchema as tblTitlesUpdateManyWithoutDictCoverFormatNestedInputObjectSchema } from './tblTitlesUpdateManyWithoutDictCoverFormatNestedInput.schema'

const makeSchema = () => z.object({
  CoverFormatDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblTitles: z.lazy(() => tblTitlesUpdateManyWithoutDictCoverFormatNestedInputObjectSchema).optional()
}).strict();
export const dictCoverFormatUpdateInputObjectSchema: z.ZodType<Prisma.dictCoverFormatUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatUpdateInput>;
export const dictCoverFormatUpdateInputObjectZodSchema = makeSchema();
