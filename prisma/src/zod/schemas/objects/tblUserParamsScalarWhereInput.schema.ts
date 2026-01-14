import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const tbluserparamsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblUserParamsScalarWhereInputObjectSchema), z.lazy(() => tblUserParamsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblUserParamsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblUserParamsScalarWhereInputObjectSchema), z.lazy(() => tblUserParamsScalarWhereInputObjectSchema).array()]).optional(),
  Login: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  Name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  Value: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const tblUserParamsScalarWhereInputObjectSchema: z.ZodType<Prisma.tblUserParamsScalarWhereInput> = tbluserparamsscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblUserParamsScalarWhereInput>;
export const tblUserParamsScalarWhereInputObjectZodSchema = tbluserparamsscalarwhereinputSchema;
