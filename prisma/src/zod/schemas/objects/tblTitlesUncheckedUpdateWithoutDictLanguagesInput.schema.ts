import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutTblTitlesNestedInput.schema';
import { tblSubmissionsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema as tblSubmissionsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema } from './tblSubmissionsUncheckedUpdateManyWithoutTblTitlesNestedInput.schema';
import { tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema as tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema } from './tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesNestedInput.schema';
import { tblTitAuxUncheckedUpdateOneWithoutTblTitlesNestedInputObjectSchema as tblTitAuxUncheckedUpdateOneWithoutTblTitlesNestedInputObjectSchema } from './tblTitAuxUncheckedUpdateOneWithoutTblTitlesNestedInput.schema';
import { tblTitEventsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema as tblTitEventsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema } from './tblTitEventsUncheckedUpdateManyWithoutTblTitlesNestedInput.schema';
import { tblTitSubClassUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema as tblTitSubClassUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema } from './tblTitSubClassUncheckedUpdateManyWithoutTblTitlesNestedInput.schema'

const makeSchema = () => z.object({
  TitleID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CustID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PropID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Proprietor: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ClassCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CoverFormatID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ISBN1: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ISBN2: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ISBN3: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ISBN4: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SeriesIID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Edition: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DateOfReceipt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  NoOfPages: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CopyrightYear: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CopyrightOwner: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CopyrightOwnerDesc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  KeyWords: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  TitleVolume: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  NoOfTitleVolumes: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Hit: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Junk: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CD: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Collection: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Remarks: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  UserMod: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  DateMod: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ISBN: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PubID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ProprietorDesc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ISBN0: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema).optional(),
  tblTitAuthors: z.lazy(() => tblTitAuthorsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema).optional(),
  tblTitAux: z.lazy(() => tblTitAuxUncheckedUpdateOneWithoutTblTitlesNestedInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUncheckedUpdateManyWithoutTblTitlesNestedInputObjectSchema).optional()
}).strict();
export const tblTitlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblTitlesUncheckedUpdateWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUncheckedUpdateWithoutDictLanguagesInput>;
export const tblTitlesUncheckedUpdateWithoutDictLanguagesInputObjectZodSchema = makeSchema();
