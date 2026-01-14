import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  PubID: z.literal(true).optional(),
  PubName: z.literal(true).optional(),
  PubAbb: z.literal(true).optional(),
  ParentPubID: z.literal(true).optional()
}).strict();
export const TblPublishersMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblPublishersMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblPublishersMaxAggregateInputType>;
export const TblPublishersMaxAggregateInputObjectZodSchema = makeSchema();
