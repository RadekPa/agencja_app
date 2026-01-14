import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { tblAgreementsUpdateManyWithoutTblTitlesNestedInputObjectSchema as tblAgreementsUpdateManyWithoutTblTitlesNestedInputObjectSchema } from './tblAgreementsUpdateManyWithoutTblTitlesNestedInput.schema';
import { tblSubmissionsUpdateManyWithoutTblTitlesNestedInputObjectSchema as tblSubmissionsUpdateManyWithoutTblTitlesNestedInputObjectSchema } from './tblSubmissionsUpdateManyWithoutTblTitlesNestedInput.schema';
import { tblTitAuthorsUpdateManyWithoutTblTitlesNestedInputObjectSchema as tblTitAuthorsUpdateManyWithoutTblTitlesNestedInputObjectSchema } from './tblTitAuthorsUpdateManyWithoutTblTitlesNestedInput.schema';
import { tblTitAuxUpdateOneWithoutTblTitlesNestedInputObjectSchema as tblTitAuxUpdateOneWithoutTblTitlesNestedInputObjectSchema } from './tblTitAuxUpdateOneWithoutTblTitlesNestedInput.schema';
import { dictLanguagesUpdateOneWithoutTblTitlesNestedInputObjectSchema as dictLanguagesUpdateOneWithoutTblTitlesNestedInputObjectSchema } from './dictLanguagesUpdateOneWithoutTblTitlesNestedInput.schema';
import { tblCustomersUpdateOneWithoutTblTitlesNestedInputObjectSchema as tblCustomersUpdateOneWithoutTblTitlesNestedInputObjectSchema } from './tblCustomersUpdateOneWithoutTblTitlesNestedInput.schema';
import { dictTitMainClassUpdateOneWithoutTblTitlesNestedInputObjectSchema as dictTitMainClassUpdateOneWithoutTblTitlesNestedInputObjectSchema } from './dictTitMainClassUpdateOneWithoutTblTitlesNestedInput.schema';
import { dictCoverFormatUpdateOneWithoutTblTitlesNestedInputObjectSchema as dictCoverFormatUpdateOneWithoutTblTitlesNestedInputObjectSchema } from './dictCoverFormatUpdateOneWithoutTblTitlesNestedInput.schema';
import { tblTitSubClassUpdateManyWithoutTblTitlesNestedInputObjectSchema as tblTitSubClassUpdateManyWithoutTblTitlesNestedInputObjectSchema } from './tblTitSubClassUpdateManyWithoutTblTitlesNestedInput.schema'

const makeSchema = () => z.object({
  PropID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Proprietor: z.union([z.string().max(1), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Title: z.union([z.string().max(150), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ISBN1: z.union([z.string().max(5), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ISBN2: z.union([z.string().max(7), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ISBN3: z.union([z.string().max(6), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ISBN4: z.union([z.string().max(1), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SeriesIID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Edition: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DateOfReceipt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  NoOfPages: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CopyrightYear: z.union([z.string().max(4), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CopyrightOwner: z.union([z.string().max(1), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CopyrightOwnerDesc: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  KeyWords: z.union([z.string().max(250), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  TitleVolume: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  NoOfTitleVolumes: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Hit: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Junk: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  CD: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Collection: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Remarks: z.union([z.string().max(1000), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  UserMod: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  DateMod: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  ISBN: z.union([z.string().max(20), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PubID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ProprietorDesc: z.union([z.string().max(200), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ISBN0: z.union([z.string().max(3), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUpdateManyWithoutTblTitlesNestedInputObjectSchema).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsUpdateManyWithoutTblTitlesNestedInputObjectSchema).optional(),
  tblTitAuthors: z.lazy(() => tblTitAuthorsUpdateManyWithoutTblTitlesNestedInputObjectSchema).optional(),
  tblTitAux: z.lazy(() => tblTitAuxUpdateOneWithoutTblTitlesNestedInputObjectSchema).optional(),
  dictLanguages: z.lazy(() => dictLanguagesUpdateOneWithoutTblTitlesNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneWithoutTblTitlesNestedInputObjectSchema).optional(),
  dictTitMainClass: z.lazy(() => dictTitMainClassUpdateOneWithoutTblTitlesNestedInputObjectSchema).optional(),
  dictCoverFormat: z.lazy(() => dictCoverFormatUpdateOneWithoutTblTitlesNestedInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUpdateManyWithoutTblTitlesNestedInputObjectSchema).optional()
}).strict();
export const tblTitlesUpdateWithoutTblTitEventsInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateWithoutTblTitEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateWithoutTblTitEventsInput>;
export const tblTitlesUpdateWithoutTblTitEventsInputObjectZodSchema = makeSchema();
