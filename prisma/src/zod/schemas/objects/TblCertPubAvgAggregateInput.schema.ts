import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClientID: z.literal(true).optional(),
  Year: z.literal(true).optional(),
  PubID: z.literal(true).optional()
}).strict();
export const TblCertPubAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblCertPubAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCertPubAvgAggregateInputType>;
export const TblCertPubAvgAggregateInputObjectZodSchema = makeSchema();
