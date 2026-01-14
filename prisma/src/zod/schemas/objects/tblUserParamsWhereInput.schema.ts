import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblUsersScalarRelationFilterObjectSchema as TblUsersScalarRelationFilterObjectSchema } from './TblUsersScalarRelationFilter.schema';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './tblUsersWhereInput.schema'

const tbluserparamswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblUserParamsWhereInputObjectSchema), z.lazy(() => tblUserParamsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblUserParamsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblUserParamsWhereInputObjectSchema), z.lazy(() => tblUserParamsWhereInputObjectSchema).array()]).optional(),
  Login: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  Name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  Value: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(300)]).optional(),
  tblUsers: z.union([z.lazy(() => TblUsersScalarRelationFilterObjectSchema), z.lazy(() => tblUsersWhereInputObjectSchema)]).optional()
}).strict();
export const tblUserParamsWhereInputObjectSchema: z.ZodType<Prisma.tblUserParamsWhereInput> = tbluserparamswhereinputSchema as unknown as z.ZodType<Prisma.tblUserParamsWhereInput>;
export const tblUserParamsWhereInputObjectZodSchema = tbluserparamswhereinputSchema;
