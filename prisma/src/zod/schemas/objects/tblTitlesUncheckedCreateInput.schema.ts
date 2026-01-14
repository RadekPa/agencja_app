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
  CustID: z.number().int().optional().nullable(),
  PropID: z.number().int().optional().nullable(),
  Proprietor: z.string().max(1).optional().nullable(),
  LangAbb: z.string().max(3).optional().nullable(),
  ClassCode: z.string().max(10).optional().nullable(),
  CoverFormatID: z.number().int().optional().nullable(),
  Title: z.string().max(150),
  ISBN1: z.string().max(5).optional().nullable(),
  ISBN2: z.string().max(7).optional().nullable(),
  ISBN3: z.string().max(6).optional().nullable(),
  ISBN4: z.string().max(1).optional().nullable(),
  SeriesIID: z.number().int().optional().nullable(),
  Edition: z.number().int().optional().nullable(),
  DateOfReceipt: z.coerce.date().optional().nullable(),
  NoOfPages: z.number().int().optional().nullable(),
  CopyrightYear: z.string().max(4).optional().nullable(),
  CopyrightOwner: z.string().max(1).optional().nullable(),
  CopyrightOwnerDesc: z.string().max(150).optional().nullable(),
  KeyWords: z.string().max(250).optional().nullable(),
  TitleVolume: z.number().int().optional().nullable(),
  NoOfTitleVolumes: z.number().int().optional().nullable(),
  Hit: z.boolean().optional().nullable(),
  Junk: z.boolean().optional().nullable(),
  CD: z.boolean().optional().nullable(),
  Collection: z.boolean().optional().nullable(),
  Remarks: z.string().max(1000).optional().nullable(),
  UserMod: z.string().max(30).optional(),
  DateMod: z.coerce.date().optional(),
  ISBN: z.string().max(20).optional().nullable(),
  PubID: z.number().int().optional().nullable(),
  ProprietorDesc: z.string().max(200).optional().nullable(),
  ISBN0: z.string().max(3).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblTitAuthors: z.lazy(() => tblTitAuthorsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblTitAux: z.lazy(() => tblTitAuxUncheckedCreateNestedOneWithoutTblTitlesInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUncheckedCreateNestedManyWithoutTblTitlesInputObjectSchema).optional()
}).strict();
export const tblTitlesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblTitlesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUncheckedCreateInput>;
export const tblTitlesUncheckedCreateInputObjectZodSchema = makeSchema();
