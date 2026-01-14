import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeNestedInputObjectSchema as tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeNestedInputObjectSchema } from './tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeNestedInput.schema'

const makeSchema = () => z.object({
  CopyTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CopyType: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblTitEvents: z.lazy(() => tblTitEventsUncheckedUpdateManyWithoutDictCopyTypeNestedInputObjectSchema).optional()
}).strict();
export const dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInput>;
export const dictCopyTypeUncheckedUpdateWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
