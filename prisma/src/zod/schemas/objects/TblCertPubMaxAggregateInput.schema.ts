import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClientID: z.literal(true).optional(),
  Year: z.literal(true).optional(),
  PubID: z.literal(true).optional(),
  DateSent: z.literal(true).optional(),
  Original: z.literal(true).optional()
}).strict();
export const TblCertPubMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblCertPubMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCertPubMaxAggregateInputType>;
export const TblCertPubMaxAggregateInputObjectZodSchema = makeSchema();
