import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeWhereInputObjectSchema as dictRoyTypeWhereInputObjectSchema } from './dictRoyTypeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => dictRoyTypeWhereInputObjectSchema).optional(),
  some: z.lazy(() => dictRoyTypeWhereInputObjectSchema).optional(),
  none: z.lazy(() => dictRoyTypeWhereInputObjectSchema).optional()
}).strict();
export const DictRoyTypeListRelationFilterObjectSchema: z.ZodType<Prisma.DictRoyTypeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyTypeListRelationFilter>;
export const DictRoyTypeListRelationFilterObjectZodSchema = makeSchema();
