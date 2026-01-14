import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { BytesNullableWithAggregatesFilterObjectSchema as BytesNullableWithAggregatesFilterObjectSchema } from './BytesNullableWithAggregatesFilter.schema'

const sysdiagramsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => sysdiagramsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => sysdiagramsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => sysdiagramsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => sysdiagramsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => sysdiagramsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(128)]).optional(),
  principal_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  diagram_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  version: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  definition: z.union([z.lazy(() => BytesNullableWithAggregatesFilterObjectSchema), z.instanceof(Uint8Array)]).optional().nullable()
}).strict();
export const sysdiagramsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.sysdiagramsScalarWhereWithAggregatesInput> = sysdiagramsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.sysdiagramsScalarWhereWithAggregatesInput>;
export const sysdiagramsScalarWhereWithAggregatesInputObjectZodSchema = sysdiagramsscalarwherewithaggregatesinputSchema;
