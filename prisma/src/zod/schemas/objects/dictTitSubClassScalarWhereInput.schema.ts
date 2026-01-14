import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const dicttitsubclassscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictTitSubClassScalarWhereInputObjectSchema), z.lazy(() => dictTitSubClassScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictTitSubClassScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictTitSubClassScalarWhereInputObjectSchema), z.lazy(() => dictTitSubClassScalarWhereInputObjectSchema).array()]).optional(),
  SubClassCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ClassCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  SubClassDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const dictTitSubClassScalarWhereInputObjectSchema: z.ZodType<Prisma.dictTitSubClassScalarWhereInput> = dicttitsubclassscalarwhereinputSchema as unknown as z.ZodType<Prisma.dictTitSubClassScalarWhereInput>;
export const dictTitSubClassScalarWhereInputObjectZodSchema = dicttitsubclassscalarwhereinputSchema;
