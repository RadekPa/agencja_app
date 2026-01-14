import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const dictstatesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictStatesScalarWhereInputObjectSchema), z.lazy(() => dictStatesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictStatesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictStatesScalarWhereInputObjectSchema), z.lazy(() => dictStatesScalarWhereInputObjectSchema).array()]).optional(),
  StateID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CountryID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  StateAbb: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  StateName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const dictStatesScalarWhereInputObjectSchema: z.ZodType<Prisma.dictStatesScalarWhereInput> = dictstatesscalarwhereinputSchema as unknown as z.ZodType<Prisma.dictStatesScalarWhereInput>;
export const dictStatesScalarWhereInputObjectZodSchema = dictstatesscalarwhereinputSchema;
