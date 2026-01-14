import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ClientID: z.literal(true).optional(),
  Year: z.literal(true).optional(),
  PubID: z.literal(true).optional(),
  DateSent: z.literal(true).optional(),
  Original: z.literal(true).optional()
}).strict();
export const TblCertPubMinAggregateInputObjectSchema: z.ZodType<Prisma.TblCertPubMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCertPubMinAggregateInputType>;
export const TblCertPubMinAggregateInputObjectZodSchema = makeSchema();
