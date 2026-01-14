import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  RepModeID: z.literal(true).optional(),
  GraalID: z.literal(true).optional(),
  Commission: z.literal(true).optional(),
  DefAgrDoc: z.literal(true).optional(),
  Jurisdiction: z.literal(true).optional()
}).strict();
export const TblClients_obsoleteMinAggregateInputObjectSchema: z.ZodType<Prisma.TblClients_obsoleteMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblClients_obsoleteMinAggregateInputType>;
export const TblClients_obsoleteMinAggregateInputObjectZodSchema = makeSchema();
