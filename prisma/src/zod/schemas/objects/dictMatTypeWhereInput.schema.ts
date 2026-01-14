import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const dictmattypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictMatTypeWhereInputObjectSchema), z.lazy(() => dictMatTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictMatTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictMatTypeWhereInputObjectSchema), z.lazy(() => dictMatTypeWhereInputObjectSchema).array()]).optional(),
  MatTypeID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  MatTypeDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  MatTypeDescPL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictMatTypeWhereInputObjectSchema: z.ZodType<Prisma.dictMatTypeWhereInput> = dictmattypewhereinputSchema as unknown as z.ZodType<Prisma.dictMatTypeWhereInput>;
export const dictMatTypeWhereInputObjectZodSchema = dictmattypewhereinputSchema;
