import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'

const tblroyaltyscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblRoyaltyScalarWhereInputObjectSchema), z.lazy(() => tblRoyaltyScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblRoyaltyScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblRoyaltyScalarWhereInputObjectSchema), z.lazy(() => tblRoyaltyScalarWhereInputObjectSchema).array()]).optional(),
  RoyID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrRightID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  RoyNr: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  EnterDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  RoyDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  Copies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Price: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RoyRate: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  XRate: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  ThisRoy: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  AdvLeft: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RoyDue: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Pay: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  AdvID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblRoyaltyScalarWhereInputObjectSchema: z.ZodType<Prisma.tblRoyaltyScalarWhereInput> = tblroyaltyscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblRoyaltyScalarWhereInput>;
export const tblRoyaltyScalarWhereInputObjectZodSchema = tblroyaltyscalarwhereinputSchema;
