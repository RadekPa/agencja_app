import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictArticlesOrderByRelationAggregateInputObjectSchema as dictArticlesOrderByRelationAggregateInputObjectSchema } from './dictArticlesOrderByRelationAggregateInput.schema';
import { tblAgreementsOrderByRelationAggregateInputObjectSchema as tblAgreementsOrderByRelationAggregateInputObjectSchema } from './tblAgreementsOrderByRelationAggregateInput.schema';
import { tblCustomersOrderByRelationAggregateInputObjectSchema as tblCustomersOrderByRelationAggregateInputObjectSchema } from './tblCustomersOrderByRelationAggregateInput.schema';
import { tblTitlesOrderByRelationAggregateInputObjectSchema as tblTitlesOrderByRelationAggregateInputObjectSchema } from './tblTitlesOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  LangAbb: SortOrderSchema.optional(),
  LangDesc: SortOrderSchema.optional(),
  LangPL: SortOrderSchema.optional(),
  dictArticles: z.lazy(() => dictArticlesOrderByRelationAggregateInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByRelationAggregateInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersOrderByRelationAggregateInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictLanguagesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictLanguagesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesOrderByWithRelationInput>;
export const dictLanguagesOrderByWithRelationInputObjectZodSchema = makeSchema();
