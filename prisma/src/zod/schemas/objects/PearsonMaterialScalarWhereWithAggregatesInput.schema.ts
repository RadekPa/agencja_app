import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema'

const pearsonmaterialscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PearsonMaterialScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PearsonMaterialScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PearsonMaterialScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PearsonMaterialScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PearsonMaterialScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  MyNumber: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  ContractID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  InvoiceNumber: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  InvoiceDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  Publisher: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  Title: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  ISBN: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  Amount: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const PearsonMaterialScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PearsonMaterialScalarWhereWithAggregatesInput> = pearsonmaterialscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PearsonMaterialScalarWhereWithAggregatesInput>;
export const PearsonMaterialScalarWhereWithAggregatesInputObjectZodSchema = pearsonmaterialscalarwherewithaggregatesinputSchema;
