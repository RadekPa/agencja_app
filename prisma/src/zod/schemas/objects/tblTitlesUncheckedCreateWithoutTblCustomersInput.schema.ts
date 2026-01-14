import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema as tblAgreementsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema } from './tblAgreementsUncheckedCreateNestedManyWithoutTblTitlesInput.schema';
import { tblSubmissionsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema as tblSubmissionsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUncheckedCreateNestedManyWithoutTblTitlesInput.schema';
import { tblTitAuthorsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema as tblTitAuthorsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsUncheckedCreateNestedManyWithoutTblTitlesInput.schema';
import { tblTitAuxUncheckedCreateNestedOneWithoutTblTitlesInputObjectSchema as tblTitAuxUncheckedCreateNestedOneWithoutTblTitlesInputObjectSchema } from './tblTitAuxUncheckedCreateNestedOneWithoutTblTitlesInput.schema';
import { tblTitEventsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema as tblTitEventsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema } from './tblTitEventsUncheckedCreateNestedManyWithoutTblTitlesInput.schema';
import { tblTitSubClassUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema as tblTitSubClassUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema } from './tblTitSubClassUncheckedCreateNestedManyWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  TitleID: z.number().int().optional(),
  PropID: z.number().int().optional().nullable(),
  Proprietor: z.string().optional().nullable(),
  LangAbb: z.string().optional().nullable(),
  ClassCode: z.string().optional().nullable(),
  CoverFormatID: z.number().int().optional().nullable(),
  Title: z.string(),
  ISBN1: z.string().optional().nullable(),
  ISBN2: z.string().optional().nullable(),
  ISBN3: z.string().optional().nullable(),
  ISBN4: z.string().optional().nullable(),
  SeriesIID: z.number().int().optional().nullable(),
  Edition: z.number().int().optional().nullable(),
  DateOfReceipt: z.coerce.date().optional().nullable(),
  NoOfPages: z.number().int().optional().nullable(),
  CopyrightYear: z.string().optional().nullable(),
  CopyrightOwner: z.string().optional().nullable(),
  CopyrightOwnerDesc: z.string().optional().nullable(),
  KeyWords: z.string().optional().nullable(),
  TitleVolume: z.number().int().optional().nullable(),
  NoOfTitleVolumes: z.number().int().optional().nullable(),
  Hit: z.boolean().optional().nullable(),
  Junk: z.boolean().optional().nullable(),
  CD: z.boolean().optional().nullable(),
  Collection: z.boolean().optional().nullable(),
  Remarks: z.string().optional().nullable(),
  UserMod: z.string().optional(),
  DateMod: z.coerce.date().optional(),
  ISBN: z.string().optional().nullable(),
  PubID: z.number().int().optional().nullable(),
  ProprietorDesc: z.string().optional().nullable(),
  ISBN0: z.string().optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblTitAuthors: z.lazy(() => tblTitAuthorsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblTitAux: z.lazy(() => tblTitAuxUncheckedCreateNestedOneWithoutTblTitlesInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema).optional()
}).strict();
export const tblTitlesUncheckedCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblTitlesUncheckedCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUncheckedCreateWithoutTblCustomersInput>;
export const tblTitlesUncheckedCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
