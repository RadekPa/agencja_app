import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeNestedInputObjectSchema as tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeNestedInputObjectSchema } from './tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeNestedInput.schema'

const makeSchema = () => z.object({
  CopyTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CopyType: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblSubmissions: z.lazy(() => tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeNestedInputObjectSchema).optional()
}).strict();
export const dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUncheckedUpdateWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUncheckedUpdateWithoutTblTitEventsInput>;
export const dictCopyTypeUncheckedUpdateWithoutTblTitEventsInputObjectZodSchema = makeSchema();
