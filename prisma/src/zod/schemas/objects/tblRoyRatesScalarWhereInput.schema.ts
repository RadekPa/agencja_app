import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'

const tblroyratesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema), z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema), z.lazy(() => tblRoyRatesScalarWhereInputObjectSchema).array()]).optional(),
  Step: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrRightID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CpsMax: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Rate: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const tblRoyRatesScalarWhereInputObjectSchema: z.ZodType<Prisma.tblRoyRatesScalarWhereInput> = tblroyratesscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblRoyRatesScalarWhereInput>;
export const tblRoyRatesScalarWhereInputObjectZodSchema = tblroyratesscalarwhereinputSchema;
