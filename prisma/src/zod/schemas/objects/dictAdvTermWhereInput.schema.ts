import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const dictadvtermwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictAdvTermWhereInputObjectSchema), z.lazy(() => dictAdvTermWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictAdvTermWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictAdvTermWhereInputObjectSchema), z.lazy(() => dictAdvTermWhereInputObjectSchema).array()]).optional(),
  AdvTermId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AdvTermDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  AdvTermPL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictAdvTermWhereInputObjectSchema: z.ZodType<Prisma.dictAdvTermWhereInput> = dictadvtermwhereinputSchema as unknown as z.ZodType<Prisma.dictAdvTermWhereInput>;
export const dictAdvTermWhereInputObjectZodSchema = dictadvtermwhereinputSchema;
