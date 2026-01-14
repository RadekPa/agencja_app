import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgreementsOrderByRelationAggregateInputObjectSchema as tblAgreementsOrderByRelationAggregateInputObjectSchema } from './tblAgreementsOrderByRelationAggregateInput.schema';
import { tblSubmissionsOrderByRelationAggregateInputObjectSchema as tblSubmissionsOrderByRelationAggregateInputObjectSchema } from './tblSubmissionsOrderByRelationAggregateInput.schema';
import { tblTitAuthorsOrderByRelationAggregateInputObjectSchema as tblTitAuthorsOrderByRelationAggregateInputObjectSchema } from './tblTitAuthorsOrderByRelationAggregateInput.schema';
import { tblTitAuxOrderByWithRelationInputObjectSchema as tblTitAuxOrderByWithRelationInputObjectSchema } from './tblTitAuxOrderByWithRelationInput.schema';
import { tblTitEventsOrderByRelationAggregateInputObjectSchema as tblTitEventsOrderByRelationAggregateInputObjectSchema } from './tblTitEventsOrderByRelationAggregateInput.schema';
import { dictLanguagesOrderByWithRelationInputObjectSchema as dictLanguagesOrderByWithRelationInputObjectSchema } from './dictLanguagesOrderByWithRelationInput.schema';
import { tblCustomersOrderByWithRelationInputObjectSchema as tblCustomersOrderByWithRelationInputObjectSchema } from './tblCustomersOrderByWithRelationInput.schema';
import { dictTitMainClassOrderByWithRelationInputObjectSchema as dictTitMainClassOrderByWithRelationInputObjectSchema } from './dictTitMainClassOrderByWithRelationInput.schema';
import { dictCoverFormatOrderByWithRelationInputObjectSchema as dictCoverFormatOrderByWithRelationInputObjectSchema } from './dictCoverFormatOrderByWithRelationInput.schema';
import { tblTitSubClassOrderByRelationAggregateInputObjectSchema as tblTitSubClassOrderByRelationAggregateInputObjectSchema } from './tblTitSubClassOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional(),
  CustID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PropID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Proprietor: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  LangAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ClassCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CoverFormatID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Title: SortOrderSchema.optional(),
  ISBN1: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN3: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN4: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SeriesIID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Edition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateOfReceipt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NoOfPages: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopyrightYear: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopyrightOwner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CopyrightOwnerDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  KeyWords: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TitleVolume: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  NoOfTitleVolumes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Hit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Junk: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  CD: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Collection: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  UserMod: SortOrderSchema.optional(),
  DateMod: SortOrderSchema.optional(),
  ISBN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PubID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ProprietorDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ISBN0: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByRelationAggregateInputObjectSchema).optional(),
  tblSubmissions: z.lazy(() => tblSubmissionsOrderByRelationAggregateInputObjectSchema).optional(),
  tblTitAuthors: z.lazy(() => tblTitAuthorsOrderByRelationAggregateInputObjectSchema).optional(),
  tblTitAux: z.lazy(() => tblTitAuxOrderByWithRelationInputObjectSchema).optional(),
  tblTitEvents: z.lazy(() => tblTitEventsOrderByRelationAggregateInputObjectSchema).optional(),
  dictLanguages: z.lazy(() => dictLanguagesOrderByWithRelationInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByWithRelationInputObjectSchema).optional(),
  dictTitMainClass: z.lazy(() => dictTitMainClassOrderByWithRelationInputObjectSchema).optional(),
  dictCoverFormat: z.lazy(() => dictCoverFormatOrderByWithRelationInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const tblTitlesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblTitlesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesOrderByWithRelationInput>;
export const tblTitlesOrderByWithRelationInputObjectZodSchema = makeSchema();
