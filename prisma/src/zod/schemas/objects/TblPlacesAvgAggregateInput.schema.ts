import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.literal(true).optional()
}).strict();
export const TblPlacesAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblPlacesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPlacesAvgAggregateInputType>;
export const TblPlacesAvgAggregateInputObjectZodSchema = makeSchema();
