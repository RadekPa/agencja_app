import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesWhereInputObjectSchema as dictArticlesWhereInputObjectSchema } from './dictArticlesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => dictArticlesWhereInputObjectSchema).optional(),
  some: z.lazy(() => dictArticlesWhereInputObjectSchema).optional(),
  none: z.lazy(() => dictArticlesWhereInputObjectSchema).optional()
}).strict();
export const DictArticlesListRelationFilterObjectSchema: z.ZodType<Prisma.DictArticlesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictArticlesListRelationFilter>;
export const DictArticlesListRelationFilterObjectZodSchema = makeSchema();
