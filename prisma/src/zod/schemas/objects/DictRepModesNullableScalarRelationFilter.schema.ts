import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRepModesWhereInputObjectSchema as dictRepModesWhereInputObjectSchema } from './dictRepModesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictRepModesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictRepModesWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictRepModesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictRepModesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictRepModesNullableScalarRelationFilter>;
export const DictRepModesNullableScalarRelationFilterObjectZodSchema = makeSchema();
