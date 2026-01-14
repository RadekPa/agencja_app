import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRightsFormWhereInputObjectSchema as dictRightsFormWhereInputObjectSchema } from './dictRightsFormWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictRightsFormWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => dictRightsFormWhereInputObjectSchema).optional().nullable()
}).strict();
export const DictRightsFormNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictRightsFormNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictRightsFormNullableScalarRelationFilter>;
export const DictRightsFormNullableScalarRelationFilterObjectZodSchema = makeSchema();
