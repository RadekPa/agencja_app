import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const artypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTypeWhereInputObjectSchema), z.lazy(() => ArTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTypeWhereInputObjectSchema), z.lazy(() => ArTypeWhereInputObjectSchema).array()]).optional(),
  ArType: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(3)]).optional(),
  ArTypeDescription: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(40)]).optional().nullable(),
  ArTypeDescriptionPL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const ArTypeWhereInputObjectSchema: z.ZodType<Prisma.ArTypeWhereInput> = artypewhereinputSchema as unknown as z.ZodType<Prisma.ArTypeWhereInput>;
export const ArTypeWhereInputObjectZodSchema = artypewhereinputSchema;
