import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const tblcusttypesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblCustTypesScalarWhereInputObjectSchema), z.lazy(() => tblCustTypesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblCustTypesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblCustTypesScalarWhereInputObjectSchema), z.lazy(() => tblCustTypesScalarWhereInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CustTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const tblCustTypesScalarWhereInputObjectSchema: z.ZodType<Prisma.tblCustTypesScalarWhereInput> = tblcusttypesscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblCustTypesScalarWhereInput>;
export const tblCustTypesScalarWhereInputObjectZodSchema = tblcusttypesscalarwhereinputSchema;
