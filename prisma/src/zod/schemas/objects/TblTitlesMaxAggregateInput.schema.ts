import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  PropID: z.literal(true).optional(),
  Proprietor: z.literal(true).optional(),
  LangAbb: z.literal(true).optional(),
  ClassCode: z.literal(true).optional(),
  CoverFormatID: z.literal(true).optional(),
  Title: z.literal(true).optional(),
  ISBN1: z.literal(true).optional(),
  ISBN2: z.literal(true).optional(),
  ISBN3: z.literal(true).optional(),
  ISBN4: z.literal(true).optional(),
  SeriesIID: z.literal(true).optional(),
  Edition: z.literal(true).optional(),
  DateOfReceipt: z.literal(true).optional(),
  NoOfPages: z.literal(true).optional(),
  CopyrightYear: z.literal(true).optional(),
  CopyrightOwner: z.literal(true).optional(),
  CopyrightOwnerDesc: z.literal(true).optional(),
  KeyWords: z.literal(true).optional(),
  TitleVolume: z.literal(true).optional(),
  NoOfTitleVolumes: z.literal(true).optional(),
  Hit: z.literal(true).optional(),
  Junk: z.literal(true).optional(),
  CD: z.literal(true).optional(),
  Collection: z.literal(true).optional(),
  Remarks: z.literal(true).optional(),
  UserMod: z.literal(true).optional(),
  DateMod: z.literal(true).optional(),
  ISBN: z.literal(true).optional(),
  PubID: z.literal(true).optional(),
  ProprietorDesc: z.literal(true).optional(),
  ISBN0: z.literal(true).optional()
}).strict();
export const TblTitlesMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblTitlesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitlesMaxAggregateInputType>;
export const TblTitlesMaxAggregateInputObjectZodSchema = makeSchema();
