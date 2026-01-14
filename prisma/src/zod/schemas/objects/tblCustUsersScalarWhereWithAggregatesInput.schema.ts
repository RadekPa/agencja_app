import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const tblcustusersscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustUsersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblCustUsersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustUsersScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustUsersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblCustUsersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Login: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional()
}).strict();
export const tblCustUsersScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblCustUsersScalarWhereWithAggregatesInput> = tblcustusersscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblCustUsersScalarWhereWithAggregatesInput>;
export const tblCustUsersScalarWhereWithAggregatesInputObjectZodSchema = tblcustusersscalarwherewithaggregatesinputSchema;
