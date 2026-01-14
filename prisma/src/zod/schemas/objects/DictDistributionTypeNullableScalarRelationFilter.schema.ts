import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictDistributionTypeWhereInputObjectSchema as dictDistributionTypeWhereInputObjectSchema } from './dictDistributionTypeWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictDistributionTypeWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictDistributionTypeWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictDistributionTypeNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictDistributionTypeNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictDistributionTypeNullableScalarRelationFilter>;
export const DictDistributionTypeNullableScalarRelationFilterObjectZodSchema = makeSchema();
