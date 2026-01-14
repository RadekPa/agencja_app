import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyWhereInputObjectSchema as ArApplyWhereInputObjectSchema } from './ArApplyWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ArApplyWhereInputObjectSchema).optional(),
  some: z.lazy(() => ArApplyWhereInputObjectSchema).optional(),
  none: z.lazy(() => ArApplyWhereInputObjectSchema).optional()
}).strict();
export const ArApplyListRelationFilterObjectSchema: z.ZodType<Prisma.ArApplyListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyListRelationFilter>;
export const ArApplyListRelationFilterObjectZodSchema = makeSchema();
