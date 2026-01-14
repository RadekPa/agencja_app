import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClientID: z.literal(true).optional(),
  Year: z.literal(true).optional(),
  PubID: z.literal(true).optional(),
  DateSent: z.literal(true).optional(),
  Original: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblCertPubCountAggregateInputObjectSchema: z.ZodType<Prisma.TblCertPubCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCertPubCountAggregateInputType>;
export const TblCertPubCountAggregateInputObjectZodSchema = makeSchema();
