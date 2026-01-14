import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TitleID: z.literal(true).optional(),
  CustID: z.literal(true).optional(),
  PropID: z.literal(true).optional(),
  CoverFormatID: z.literal(true).optional(),
  SeriesIID: z.literal(true).optional(),
  Edition: z.literal(true).optional(),
  NoOfPages: z.literal(true).optional(),
  TitleVolume: z.literal(true).optional(),
  NoOfTitleVolumes: z.literal(true).optional(),
  PubID: z.literal(true).optional()
}).strict();
export const TblTitlesSumAggregateInputObjectSchema: z.ZodType<Prisma.TblTitlesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblTitlesSumAggregateInputType>;
export const TblTitlesSumAggregateInputObjectZodSchema = makeSchema();
