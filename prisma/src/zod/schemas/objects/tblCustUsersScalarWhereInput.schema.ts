import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const tblcustusersscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustUsersScalarWhereInputObjectSchema), z.lazy(() => tblCustUsersScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustUsersScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustUsersScalarWhereInputObjectSchema), z.lazy(() => tblCustUsersScalarWhereInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Login: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const tblCustUsersScalarWhereInputObjectSchema: z.ZodType<Prisma.tblCustUsersScalarWhereInput> = tblcustusersscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblCustUsersScalarWhereInput>;
export const tblCustUsersScalarWhereInputObjectZodSchema = tblcustusersscalarwhereinputSchema;
