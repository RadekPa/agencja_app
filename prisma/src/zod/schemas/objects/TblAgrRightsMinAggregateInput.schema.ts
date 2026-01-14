import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AgrRightID: z.literal(true).optional(),
  AgrID: z.literal(true).optional(),
  RightID: z.literal(true).optional(),
  PriceTypeID: z.literal(true).optional(),
  RoyPriceTypeID: z.literal(true).optional(),
  RoyAccountIntervalID: z.literal(true).optional(),
  DistID: z.literal(true).optional()
}).strict();
export const TblAgrRightsMinAggregateInputObjectSchema: z.ZodType<Prisma.TblAgrRightsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblAgrRightsMinAggregateInputType>;
export const TblAgrRightsMinAggregateInputObjectZodSchema = makeSchema();
