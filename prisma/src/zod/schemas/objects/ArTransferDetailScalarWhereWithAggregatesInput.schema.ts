import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const artransferdetailscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTransferDetailScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArTransferDetailScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTransferDetailScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTransferDetailScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArTransferDetailScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  TransferID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  DebitID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AmtWired: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  Notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ArTransferDetailScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ArTransferDetailScalarWhereWithAggregatesInput> = artransferdetailscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ArTransferDetailScalarWhereWithAggregatesInput>;
export const ArTransferDetailScalarWhereWithAggregatesInputObjectZodSchema = artransferdetailscalarwherewithaggregatesinputSchema;
