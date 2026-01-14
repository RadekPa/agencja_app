import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PlaceID: z.literal(true).optional()
}).strict();
export const TblUserAccessSumAggregateInputObjectSchema: z.ZodType<Prisma.TblUserAccessSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblUserAccessSumAggregateInputType>;
export const TblUserAccessSumAggregateInputObjectZodSchema = makeSchema();
