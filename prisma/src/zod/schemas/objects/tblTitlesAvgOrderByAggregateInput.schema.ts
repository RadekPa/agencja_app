import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional(),
  PropID: SortOrderSchema.optional(),
  CoverFormatID: SortOrderSchema.optional(),
  SeriesIID: SortOrderSchema.optional(),
  Edition: SortOrderSchema.optional(),
  NoOfPages: SortOrderSchema.optional(),
  TitleVolume: SortOrderSchema.optional(),
  NoOfTitleVolumes: SortOrderSchema.optional(),
  PubID: SortOrderSchema.optional()
}).strict();
export const tblTitlesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitlesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesAvgOrderByAggregateInput>;
export const tblTitlesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
