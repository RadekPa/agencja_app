import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional()
}).strict();
export const TblCustUsersAvgAggregateInputObjectSchema: z.ZodType<Prisma.TblCustUsersAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustUsersAvgAggregateInputType>;
export const TblCustUsersAvgAggregateInputObjectZodSchema = makeSchema();
