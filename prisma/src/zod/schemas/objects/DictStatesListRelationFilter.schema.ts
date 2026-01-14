import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './dictStatesWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => dictStatesWhereInputObjectSchema).optional(),
  some: z.lazy(() => dictStatesWhereInputObjectSchema).optional(),
  none: z.lazy(() => dictStatesWhereInputObjectSchema).optional()
}).strict();
export const DictStatesListRelationFilterObjectSchema: z.ZodType<Prisma.DictStatesListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DictStatesListRelationFilter>;
export const DictStatesListRelationFilterObjectZodSchema = makeSchema();
