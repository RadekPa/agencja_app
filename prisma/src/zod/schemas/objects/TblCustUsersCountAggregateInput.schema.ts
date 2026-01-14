import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  Login: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TblCustUsersCountAggregateInputObjectSchema: z.ZodType<Prisma.TblCustUsersCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustUsersCountAggregateInputType>;
export const TblCustUsersCountAggregateInputObjectZodSchema = makeSchema();
