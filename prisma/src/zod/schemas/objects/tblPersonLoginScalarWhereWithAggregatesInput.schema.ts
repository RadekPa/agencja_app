import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const tblpersonloginscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPersonLoginScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPersonLoginScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPersonLoginScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPersonLoginScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPersonLoginScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  PersonID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Login: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional(),
  DateBegin: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  DateEnd: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const tblPersonLoginScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblPersonLoginScalarWhereWithAggregatesInput> = tblpersonloginscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblPersonLoginScalarWhereWithAggregatesInput>;
export const tblPersonLoginScalarWhereWithAggregatesInputObjectZodSchema = tblpersonloginscalarwherewithaggregatesinputSchema;
