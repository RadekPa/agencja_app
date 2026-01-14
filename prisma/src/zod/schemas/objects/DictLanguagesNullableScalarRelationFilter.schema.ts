import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictLanguagesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictLanguagesWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictLanguagesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictLanguagesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictLanguagesNullableScalarRelationFilter>;
export const DictLanguagesNullableScalarRelationFilterObjectZodSchema = makeSchema();
