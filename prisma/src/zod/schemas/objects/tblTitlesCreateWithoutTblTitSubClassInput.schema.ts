import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateNestedManyWithoutTblTitlesInputObjectSchema as tblAgreementsCreateNestedManyWithoutTblTitlesInputObjectSchema } from './tblAgreementsCreateNestedManyWithoutTblTitlesInput.schema';
import { tblSubmissionsCreateNestedManyWithoutTblTitlesInputObjectSchema as tblSubmissionsCreateNestedManyWithoutTblTitlesInputObjectSchema } from './tblSubmissionsCreateNestedManyWithoutTblTitlesInput.schema';
import { tblTitAuthorsCreateNestedManyWithoutTblTitlesInputObjectSchema as tblTitAuthorsCreateNestedManyWithoutTblTitlesInputObjectSchema } from './tblTitAuthorsCreateNestedManyWithoutTblTitlesInput.schema';
import { tblTitAuxCreateNestedOneWithoutTblTitlesInputObjectSchema as tblTitAuxCreateNestedOneWithoutTblTitlesInputObjectSchema } from './tblTitAuxCreateNestedOneWithoutTblTitlesInput.schema';
import { tblTitEventsCreateNestedManyWithoutTblTitlesInputObjectSchema as tblTitEventsCreateNestedManyWithoutTblTitlesInputObjectSchema } from './tblTitEventsCreateNestedManyWithoutTblTitlesInput.schema';
import { dictLanguagesCreateNestedOneWithoutTblTitlesInputObjectSchema as dictLanguagesCreateNestedOneWithoutTblTitlesInputObjectSchema } from './dictLanguagesCreateNestedOneWithoutTblTitlesInput.schema';
import { tblCustomersCreateNestedOneWithoutTblTitlesInputObjectSchema as tblCustomersCreateNestedOneWithoutTblTitlesInputObjectSchema } from './tblCustomersCreateNestedOneWithoutTblTitlesInput.schema';
import { dictTitMainClassCreateNestedOneWithoutTblTitlesInputObjectSchema as dictTitMainClassCreateNestedOneWithoutTblTitlesInputObjectSchema } from './dictTitMainClassCreateNestedOneWithoutTblTitlesInput.schema';
import { dictCoverFormatCreateNestedOneWithoutTblTitlesInputObjectSchema as dictCoverFormatCreateNestedOneWithoutTblTitlesInputObjectSchema } from './dictCoverFormatCreateNestedOneWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  PropID: z.number().int().optional().nullable(),
  Proprietor: z.string().max(1).optional().nullable(),
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
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblTitAuthors: z.lazy(() => tblTitAuthorsCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  tblTitAux: z.lazy(() => tblTitAuxCreateNestedOneWithoutTblTitlesInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsCreateNestedManyWithoutTblTitlesInputObjectSchema).optional(),
  dictLanguages: z.lazy(() => dictLanguagesCreateNestedOneWithoutTblTitlesInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedOneWithoutTblTitlesInputObjectSchema).optional(),
  dictTitMainClass: z.lazy(() => dictTitMainClassCreateNestedOneWithoutTblTitlesInputObjectSchema).optional(),
  dictCoverFormat: z.lazy(() => dictCoverFormatCreateNestedOneWithoutTblTitlesInputObjectSchema).optional()
}).strict();
export const tblTitlesCreateWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateWithoutTblTitSubClassInput>;
export const tblTitlesCreateWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
