import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const tblmaterialscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblMaterialScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblMaterialScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblMaterialScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblMaterialScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblMaterialScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  MatID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  MatTypeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Amount: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  Currency: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  RequestDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  ReceiveDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tblMaterialScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblMaterialScalarWhereWithAggregatesInput> = tblmaterialscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblMaterialScalarWhereWithAggregatesInput>;
export const tblMaterialScalarWhereWithAggregatesInputObjectZodSchema = tblmaterialscalarwherewithaggregatesinputSchema;
