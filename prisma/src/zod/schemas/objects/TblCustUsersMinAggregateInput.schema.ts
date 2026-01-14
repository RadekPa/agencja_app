import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  Login: z.literal(true).optional()
}).strict();
export const TblCustUsersMinAggregateInputObjectSchema: z.ZodType<Prisma.TblCustUsersMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustUsersMinAggregateInputType>;
export const TblCustUsersMinAggregateInputObjectZodSchema = makeSchema();
