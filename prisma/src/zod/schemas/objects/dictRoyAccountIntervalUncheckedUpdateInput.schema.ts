import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutDictRoyAccountIntervalNestedInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutDictRoyAccountIntervalNestedInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutDictRoyAccountIntervalNestedInput.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  RoyAccountIntervalDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  IntervalAbb: z.union([z.string().max(8), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutDictRoyAccountIntervalNestedInputObjectSchema).optional()
}).strict();
export const dictRoyAccountIntervalUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalUncheckedUpdateInput>;
export const dictRoyAccountIntervalUncheckedUpdateInputObjectZodSchema = makeSchema();
