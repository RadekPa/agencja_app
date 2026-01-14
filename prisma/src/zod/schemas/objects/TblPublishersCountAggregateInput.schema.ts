import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubID: z.literal(true).optional(),
  PubName: z.literal(true).optional(),
  PubAbb: z.literal(true).optional(),
  ParentPubID: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblPublishersCountAggregateInputObjectSchema: z.ZodType<Prisma.TblPublishersCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPublishersCountAggregateInputType>;
export const TblPublishersCountAggregateInputObjectZodSchema = makeSchema();
