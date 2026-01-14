import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.literal(true).optional(),
  PlaceDesc: z.literal(true).optional()
}).strict();
export const TblPlacesMinAggregateInputObjectSchema: z.ZodType<Prisma.TblPlacesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPlacesMinAggregateInputType>;
export const TblPlacesMinAggregateInputObjectZodSchema = makeSchema();
