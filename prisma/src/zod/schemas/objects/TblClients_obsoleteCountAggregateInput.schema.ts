import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  RepModeID: z.literal(true).optional(),
  GraalID: z.literal(true).optional(),
  Commission: z.literal(true).optional(),
  DefAgrDoc: z.literal(true).optional(),
  Jurisdiction: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblClients_obsoleteCountAggregateInputObjectSchema: z.ZodType<Prisma.TblClients_obsoleteCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblClients_obsoleteCountAggregateInputType>;
export const TblClients_obsoleteCountAggregateInputObjectZodSchema = makeSchema();
