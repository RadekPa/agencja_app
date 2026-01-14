import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.literal(true).optional(),
  PlaceDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblPlacesCountAggregateInputObjectSchema: z.ZodType<Prisma.TblPlacesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPlacesCountAggregateInputType>;
export const TblPlacesCountAggregateInputObjectZodSchema = makeSchema();
