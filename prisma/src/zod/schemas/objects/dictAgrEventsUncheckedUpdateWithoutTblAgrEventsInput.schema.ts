import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  AgrEventCode: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  AgrEventDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  Status: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInput>;
export const dictAgrEventsUncheckedUpdateWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
