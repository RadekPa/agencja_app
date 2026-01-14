import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCountries_oldWhereInputObjectSchema as dictCountries_oldWhereInputObjectSchema } from './dictCountries_oldWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictCountries_oldWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictCountries_oldWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictCountries_oldNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictCountries_oldNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictCountries_oldNullableScalarRelationFilter>;
export const DictCountries_oldNullableScalarRelationFilterObjectZodSchema = makeSchema();
