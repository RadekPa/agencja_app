import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const tbladvancescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAdvanceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblAdvanceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAdvanceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAdvanceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblAdvanceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  AdvID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Inst: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AdvTermId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  AdvTypeId: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Amount: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  AdvTermDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  RoyID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblAdvanceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblAdvanceScalarWhereWithAggregatesInput> = tbladvancescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblAdvanceScalarWhereWithAggregatesInput>;
export const tblAdvanceScalarWhereWithAggregatesInputObjectZodSchema = tbladvancescalarwherewithaggregatesinputSchema;
