import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  PropID: SortOrderSchema.optional(),
  Proprietor: SortOrderSchema.optional(),
  LangAbb: SortOrderSchema.optional(),
  ClassCode: SortOrderSchema.optional(),
  CoverFormatID: SortOrderSchema.optional(),
  Title: SortOrderSchema.optional(),
  ISBN1: SortOrderSchema.optional(),
  ISBN2: SortOrderSchema.optional(),
  ISBN3: SortOrderSchema.optional(),
  ISBN4: SortOrderSchema.optional(),
  SeriesIID: SortOrderSchema.optional(),
  Edition: SortOrderSchema.optional(),
  DateOfReceipt: SortOrderSchema.optional(),
  NoOfPages: SortOrderSchema.optional(),
  CopyrightYear: SortOrderSchema.optional(),
  CopyrightOwner: SortOrderSchema.optional(),
  CopyrightOwnerDesc: SortOrderSchema.optional(),
  KeyWords: SortOrderSchema.optional(),
  TitleVolume: SortOrderSchema.optional(),
  NoOfTitleVolumes: SortOrderSchema.optional(),
  Hit: SortOrderSchema.optional(),
  Junk: SortOrderSchema.optional(),
  CD: SortOrderSchema.optional(),
  Collection: SortOrderSchema.optional(),
  Remarks: SortOrderSchema.optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  ISBN: SortOrderSchema.optional(),
  PubID: SortOrderSchema.optional(),
  ProprietorDesc: SortOrderSchema.optional(),
  ISBN0: SortOrderSchema.optional()
}).strict();
export const tblTitlesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitlesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesMaxOrderByAggregateInput>;
export const tblTitlesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
