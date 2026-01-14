import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dictdistributiontypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictDistributionTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictDistributionTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictDistributionTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictDistributionTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictDistributionTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  DistID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  DistDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional()
}).strict();
export const dictDistributionTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeScalarWhereWithAggregatesInput> = dictdistributiontypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictDistributionTypeScalarWhereWithAggregatesInput>;
export const dictDistributionTypeScalarWhereWithAggregatesInputObjectZodSchema = dictdistributiontypescalarwherewithaggregatesinputSchema;
