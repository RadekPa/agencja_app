import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClientID: z.literal(true).optional(),
  Year: z.literal(true).optional(),
  PubID: z.literal(true).optional()
}).strict();
export const TblCertPubSumAggregateInputObjectSchema: z.ZodType<Prisma.TblCertPubSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCertPubSumAggregateInputType>;
export const TblCertPubSumAggregateInputObjectZodSchema = makeSchema();
