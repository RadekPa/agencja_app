import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './dictTitSubClassWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => dictTitSubClassWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => dictTitSubClassWhereInputObjectSchema).optional()
}).strict();
export const DictTitSubClassScalarRelationFilterObjectSchema: z.ZodType<Prisma.DictTitSubClassScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictTitSubClassScalarRelationFilter>;
export const DictTitSubClassScalarRelationFilterObjectZodSchema = makeSchema();
