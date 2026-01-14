import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  CustTypeID: z.literal(true).optional()
}).strict();
export const TblCustTypesMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblCustTypesMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustTypesMaxAggregateInputType>;
export const TblCustTypesMaxAggregateInputObjectZodSchema = makeSchema();
