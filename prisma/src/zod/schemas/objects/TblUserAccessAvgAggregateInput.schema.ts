import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.literal(true).optional()
}).strict();
export const TblUserAccessAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblUserAccessAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblUserAccessAvgAggregateInputType>;
export const TblUserAccessAvgAggregateInputObjectZodSchema = makeSchema();
