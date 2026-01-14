import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.literal(true).optional(),
  PlaceID: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblUserAccessCountAggregateInputObjectSchema: z.ZodType<Prisma.TblUserAccessCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblUserAccessCountAggregateInputType>;
export const TblUserAccessCountAggregateInputObjectZodSchema = makeSchema();
