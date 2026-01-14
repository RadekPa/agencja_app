import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const dictadvtypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictAdvTypeWhereInputObjectSchema), z.lazy(() => dictAdvTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictAdvTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictAdvTypeWhereInputObjectSchema), z.lazy(() => dictAdvTypeWhereInputObjectSchema).array()]).optional(),
  AdvTypeId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AdvTypeDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  AdvTypeDescPL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictAdvTypeWhereInputObjectSchema: z.ZodType<Prisma.dictAdvTypeWhereInput> = dictadvtypewhereinputSchema as unknown as z.ZodType<Prisma.dictAdvTypeWhereInput>;
export const dictAdvTypeWhereInputObjectZodSchema = dictadvtypewhereinputSchema;
