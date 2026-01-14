import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const dictmissroyexcludereasonwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictMissRoyExcludeReasonWhereInputObjectSchema), z.lazy(() => dictMissRoyExcludeReasonWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictMissRoyExcludeReasonWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictMissRoyExcludeReasonWhereInputObjectSchema), z.lazy(() => dictMissRoyExcludeReasonWhereInputObjectSchema).array()]).optional(),
  ExcludeReasonID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ExcludeReasonCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  ExcludeReasonDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictMissRoyExcludeReasonWhereInputObjectSchema: z.ZodType<Prisma.dictMissRoyExcludeReasonWhereInput> = dictmissroyexcludereasonwhereinputSchema as unknown as z.ZodType<Prisma.dictMissRoyExcludeReasonWhereInput>;
export const dictMissRoyExcludeReasonWhereInputObjectZodSchema = dictmissroyexcludereasonwhereinputSchema;
