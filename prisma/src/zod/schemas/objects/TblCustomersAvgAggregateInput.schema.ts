import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  Account: z.literal(true).optional(),
  CountryID: z.literal(true).optional(),
  ParentCustID: z.literal(true).optional(),
  RepModeID: z.literal(true).optional(),
  GraalID: z.literal(true).optional(),
  Commission: z.literal(true).optional(),
  CommissionForeign: z.literal(true).optional(),
  CommissionMaterials: z.literal(true).optional()
}).strict();
export const TblCustomersAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblCustomersAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustomersAvgAggregateInputType>;
export const TblCustomersAvgAggregateInputObjectZodSchema = makeSchema();
