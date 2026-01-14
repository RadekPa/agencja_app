import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const tblpersoncontracttypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPersonContractTypeWhereInputObjectSchema), z.lazy(() => tblPersonContractTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPersonContractTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPersonContractTypeWhereInputObjectSchema), z.lazy(() => tblPersonContractTypeWhereInputObjectSchema).array()]).optional(),
  CTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CTypeDescr: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable()
}).strict();
export const tblPersonContractTypeWhereInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeWhereInput> = tblpersoncontracttypewhereinputSchema as unknown as z.ZodType<Prisma.tblPersonContractTypeWhereInput>;
export const tblPersonContractTypeWhereInputObjectZodSchema = tblpersoncontracttypewhereinputSchema;
