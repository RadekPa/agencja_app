import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblSubmissionsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema as tblSubmissionsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema } from './tblSubmissionsUpdateManyWithoutDictCopyTypeNestedInput.schema';
import { tblTitEventsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema as tblTitEventsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema } from './tblTitEventsUpdateManyWithoutDictCopyTypeNestedInput.schema'

const makeSchema = () => z.object({
  CopyType: z.union([z.string().max(30), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblSubmissions: z.lazy(() => tblSubmissionsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsUpdateManyWithoutDictCopyTypeNestedInputObjectSchema).optional()
}).strict();
export const dictCopyTypeUpdateInputObjectSchema: z.ZodType<Prisma.dictCopyTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeUpdateInput>;
export const dictCopyTypeUpdateInputObjectZodSchema = makeSchema();
