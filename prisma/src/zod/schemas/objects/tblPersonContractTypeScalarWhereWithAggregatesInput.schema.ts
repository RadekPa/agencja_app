import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const tblpersoncontracttypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPersonContractTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPersonContractTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPersonContractTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPersonContractTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPersonContractTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CTypeID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  CTypeDescr: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(10)]).optional().nullable()
}).strict();
export const tblPersonContractTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblPersonContractTypeScalarWhereWithAggregatesInput> = tblpersoncontracttypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblPersonContractTypeScalarWhereWithAggregatesInput>;
export const tblPersonContractTypeScalarWhereWithAggregatesInputObjectZodSchema = tblpersoncontracttypescalarwherewithaggregatesinputSchema;
