import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblCustomersScalarRelationFilterObjectSchema as TblCustomersScalarRelationFilterObjectSchema } from './TblCustomersScalarRelationFilter.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { TblUsersScalarRelationFilterObjectSchema as TblUsersScalarRelationFilterObjectSchema } from './TblUsersScalarRelationFilter.schema';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './tblUsersWhereInput.schema'

const tblcustuserswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustUsersWhereInputObjectSchema), z.lazy(() => tblCustUsersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustUsersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustUsersWhereInputObjectSchema), z.lazy(() => tblCustUsersWhereInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Login: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  tblCustomers: z.union([z.lazy(() => TblCustomersScalarRelationFilterObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  tblUsers: z.union([z.lazy(() => TblUsersScalarRelationFilterObjectSchema), z.lazy(() => tblUsersWhereInputObjectSchema)]).optional()
}).strict();
export const tblCustUsersWhereInputObjectSchema: z.ZodType<Prisma.tblCustUsersWhereInput> = tblcustuserswhereinputSchema as unknown as z.ZodType<Prisma.tblCustUsersWhereInput>;
export const tblCustUsersWhereInputObjectZodSchema = tblcustuserswhereinputSchema;
