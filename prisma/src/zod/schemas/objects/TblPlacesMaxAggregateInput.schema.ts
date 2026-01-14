import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.literal(true).optional(),
  PlaceDesc: z.literal(true).optional()
}).strict();
export const TblPlacesMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblPlacesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPlacesMaxAggregateInputType>;
export const TblPlacesMaxAggregateInputObjectZodSchema = makeSchema();
