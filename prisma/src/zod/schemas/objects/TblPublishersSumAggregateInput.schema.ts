import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubID: z.literal(true).optional(),
  ParentPubID: z.literal(true).optional()
}).strict();
export const TblPublishersSumAggregateInputObjectSchema: z.ZodType<Prisma.TblPublishersSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPublishersSumAggregateInputType>;
export const TblPublishersSumAggregateInputObjectZodSchema = makeSchema();
