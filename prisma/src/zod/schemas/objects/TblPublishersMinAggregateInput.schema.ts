import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubID: z.literal(true).optional(),
  PubName: z.literal(true).optional(),
  PubAbb: z.literal(true).optional(),
  ParentPubID: z.literal(true).optional()
}).strict();
export const TblPublishersMinAggregateInputObjectSchema: z.ZodType<Prisma.TblPublishersMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPublishersMinAggregateInputType>;
export const TblPublishersMinAggregateInputObjectZodSchema = makeSchema();
