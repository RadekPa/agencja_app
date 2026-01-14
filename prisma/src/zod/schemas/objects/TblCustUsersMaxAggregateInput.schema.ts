import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CustID: z.literal(true).optional(),
  Login: z.literal(true).optional()
}).strict();
export const TblCustUsersMaxAggregateInputObjectSchema: z.ZodType<Prisma.TblCustUsersMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TblCustUsersMaxAggregateInputType>;
export const TblCustUsersMaxAggregateInputObjectZodSchema = makeSchema();
