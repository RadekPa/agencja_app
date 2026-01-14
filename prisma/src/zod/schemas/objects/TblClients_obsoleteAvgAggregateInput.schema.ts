import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  RepModeID: z.literal(true).optional(),
  GraalID: z.literal(true).optional(),
  Commission: z.literal(true).optional()
}).strict();
export const TblClients_obsoleteAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblClients_obsoleteAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblClients_obsoleteAvgAggregateInputType>;
export const TblClients_obsoleteAvgAggregateInputObjectZodSchema = makeSchema();
