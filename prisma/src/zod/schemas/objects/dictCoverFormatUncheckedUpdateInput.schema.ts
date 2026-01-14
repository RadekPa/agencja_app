import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictCoverFormatNestedInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictCoverFormatNestedInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictCoverFormatNestedInput.schema'

const makeSchema = () => z.object({
  CoverFormatID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CoverFormatDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictCoverFormatNestedInputObjectSchema).optional()
}).strict();
export const dictCoverFormatUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictCoverFormatUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatUncheckedUpdateInput>;
export const dictCoverFormatUncheckedUpdateInputObjectZodSchema = makeSchema();
