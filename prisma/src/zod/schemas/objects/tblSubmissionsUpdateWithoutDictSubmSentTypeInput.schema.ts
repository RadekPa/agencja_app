import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblSubmEventsUpdateManyWithoutTblSubmissionsNestedInputObjectSchema as tblSubmEventsUpdateManyWithoutTblSubmissionsNestedInputObjectSchema } from './tblSubmEventsUpdateManyWithoutTblSubmissionsNestedInput.schema';
import { tblTitlesUpdateOneWithoutTblSubmissionsNestedInputObjectSchema as tblTitlesUpdateOneWithoutTblSubmissionsNestedInputObjectSchema } from './tblTitlesUpdateOneWithoutTblSubmissionsNestedInput.schema';
import { tblCustomersUpdateOneWithoutTblSubmissionsNestedInputObjectSchema as tblCustomersUpdateOneWithoutTblSubmissionsNestedInputObjectSchema } from './tblCustomersUpdateOneWithoutTblSubmissionsNestedInput.schema';
import { dictCopyTypeUpdateOneWithoutTblSubmissionsNestedInputObjectSchema as dictCopyTypeUpdateOneWithoutTblSubmissionsNestedInputObjectSchema } from './dictCopyTypeUpdateOneWithoutTblSubmissionsNestedInput.schema'

const makeSchema = () => z.object({
  Exclusive: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SubmDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  SentDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  EndDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ReturnDate: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  NoOfCopies: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  TrackingNo: z.union([z.string().max(30), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  UserMod: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  DateMod: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Status: z.union([z.string().max(1), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SubmNr: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Remarks: z.union([z.string().max(1000), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ContactID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblSubmEvents: z.lazy(() => tblSubmEventsUpdateManyWithoutTblSubmissionsNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUpdateOneWithoutTblSubmissionsNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneWithoutTblSubmissionsNestedInputObjectSchema).optional(),
  dictCopyType: z.lazy(() => dictCopyTypeUpdateOneWithoutTblSubmissionsNestedInputObjectSchema).optional()
}).strict();
export const tblSubmissionsUpdateWithoutDictSubmSentTypeInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateWithoutDictSubmSentTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateWithoutDictSubmSentTypeInput>;
export const tblSubmissionsUpdateWithoutDictSubmSentTypeInputObjectZodSchema = makeSchema();
