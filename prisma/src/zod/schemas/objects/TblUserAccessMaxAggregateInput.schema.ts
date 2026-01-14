import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  Login: z.literal(true).optional(),
  PlaceID: z.literal(true).optional()
}).strict();
export const TblUserAccessMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblUserAccessMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblUserAccessMaxAggregateInputType>;
export const TblUserAccessMaxAggregateInputObjectZodSchema = makeSchema();
