import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblSubmissionsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema as tblSubmissionsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema } from './tblSubmissionsUpdateManyWithoutDictCopyTypeNestedInput.schema'

const makeSchema = () => z.object({
  CopyType: z.union([z.string().max(30), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblSubmissions: z.lazy(() => tblSubmissionsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema).optional()
}).strict();
export const dictCopyTypeUpdateWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUpdateWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUpdateWithoutTblTitEventsInput>;
export const dictCopyTypeUpdateWithoutTblTitEventsInputObjectZodSchema = makeSchema();
