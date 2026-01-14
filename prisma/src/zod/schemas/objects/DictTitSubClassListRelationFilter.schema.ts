import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './dictTitSubClassWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => dictTitSubClassWhereInputObjectSchema).optional(),
  some: z.lazy(() => dictTitSubClassWhereInputObjectSchema).optional(),
  none: z.lazy(() => dictTitSubClassWhereInputObjectSchema).optional()
}).strict();
export const DictTitSubClassListRelationFilterObjectSchema: z.ZodType<Prisma.DictTitSubClassListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictTitSubClassListRelationFilter>;
export const DictTitSubClassListRelationFilterObjectZodSchema = makeSchema();
