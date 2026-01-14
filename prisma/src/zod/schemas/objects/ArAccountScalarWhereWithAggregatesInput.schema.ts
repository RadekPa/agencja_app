import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const araccountscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ArAccountScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArAccountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArAccountScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArAccountScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArAccountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  AccountID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  AccountDescription: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(40)]).optional()
}).strict();
export const ArAccountScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ArAccountScalarWhereWithAggregatesInput> = araccountscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ArAccountScalarWhereWithAggregatesInput>;
export const ArAccountScalarWhereWithAggregatesInputObjectZodSchema = araccountscalarwherewithaggregatesinputSchema;
