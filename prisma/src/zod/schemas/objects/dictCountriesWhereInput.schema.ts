import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'

const dictcountrieswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictCountriesWhereInputObjectSchema), z.lazy(() => dictCountriesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictCountriesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictCountriesWhereInputObjectSchema), z.lazy(() => dictCountriesWhereInputObjectSchema).array()]).optional(),
  CountryID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CountryDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  CountryPL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Tax: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Code: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  EU: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable()
}).strict();
export const dictCountriesWhereInputObjectSchema: z.ZodType<Prisma.dictCountriesWhereInput> = dictcountrieswhereinputSchema as unknown as z.ZodType<Prisma.dictCountriesWhereInput>;
export const dictCountriesWhereInputObjectZodSchema = dictcountrieswhereinputSchema;
