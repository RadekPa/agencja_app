import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubID: z.literal(true).optional(),
  ParentPubID: z.literal(true).optional()
}).strict();
export const TblPublishersAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblPublishersAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPublishersAvgAggregateInputType>;
export const TblPublishersAvgAggregateInputObjectZodSchema = makeSchema();
