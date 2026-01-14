import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const helionlocalwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => HelionLocalWhereInputObjectSchema), z.lazy(() => HelionLocalWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HelionLocalWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HelionLocalWhereInputObjectSchema), z.lazy(() => HelionLocalWhereInputObjectSchema).array()]).optional(),
  ISBNORG: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(13)]).optional(),
  ISBNHELION: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(13)]).optional(),
  TYTULORG: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(120)]).optional().nullable(),
  TYTULHELION: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(120)]).optional().nullable()
}).strict();
export const HelionLocalWhereInputObjectSchema: z.ZodType<Prisma.HelionLocalWhereInput> = helionlocalwhereinputSchema as unknown as z.ZodType<Prisma.HelionLocalWhereInput>;
export const HelionLocalWhereInputObjectZodSchema = helionlocalwhereinputSchema;
