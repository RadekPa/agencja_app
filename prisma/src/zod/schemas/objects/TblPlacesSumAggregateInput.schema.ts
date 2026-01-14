import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.literal(true).optional()
}).strict();
export const TblPlacesSumAggregateInputObjectSchema: z.ZodType<Prisma.TblPlacesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPlacesSumAggregateInputType>;
export const TblPlacesSumAggregateInputObjectZodSchema = makeSchema();
