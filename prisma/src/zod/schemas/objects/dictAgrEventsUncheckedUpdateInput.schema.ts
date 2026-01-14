import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsNestedInputObjectSchema as tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsNestedInputObjectSchema } from './tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsNestedInput.schema'

const makeSchema = () => z.object({
  AgrEventCode: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  AgrEventDesc: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Status: z.union([z.string().max(1), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgrEvents: z.lazy(() => tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsNestedInputObjectSchema).optional()
}).strict();
export const dictAgrEventsUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictAgrEventsUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsUncheckedUpdateInput>;
export const dictAgrEventsUncheckedUpdateInputObjectZodSchema = makeSchema();
