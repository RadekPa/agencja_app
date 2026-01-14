import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema'

const tblagrrightsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema), z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema), z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema).array()]).optional(),
  AgrRightID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  RightID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  PriceTypeID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  RoyPriceTypeID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  RoyAccountIntervalID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  DistID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblAgrRightsScalarWhereInputObjectSchema: z.ZodType<Prisma.tblAgrRightsScalarWhereInput> = tblagrrightsscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblAgrRightsScalarWhereInput>;
export const tblAgrRightsScalarWhereInputObjectZodSchema = tblagrrightsscalarwhereinputSchema;
