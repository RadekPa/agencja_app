import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblTitEventsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema as tblTitEventsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema } from './tblTitEventsUpdateManyWithoutDictCopyTypeNestedInput.schema'

const makeSchema = () => z.object({
  CopyType: z.union([z.string().max(30), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblTitEvents: z.lazy(() => tblTitEventsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema).optional()
}).strict();
export const dictCopyTypeUpdateWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUpdateWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUpdateWithoutTblSubmissionsInput>;
export const dictCopyTypeUpdateWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
