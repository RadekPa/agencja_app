import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictTitMainClassWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => dictTitMainClassWhereInputObjectSchema).optional()
}).strict();
export const DictTitMainClassScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictTitMainClassScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictTitMainClassScalarRelationFilter>;
export const DictTitMainClassScalarRelationFilterObjectZodSchema = makeSchema();
