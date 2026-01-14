import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ArTransactionScalarRelationFilterObjectSchema as ArTransactionScalarRelationFilterObjectSchema } from './ArTransactionScalarRelationFilter.schema';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema'

const artransferdetailwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTransferDetailWhereInputObjectSchema), z.lazy(() => ArTransferDetailWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTransferDetailWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTransferDetailWhereInputObjectSchema), z.lazy(() => ArTransferDetailWhereInputObjectSchema).array()]).optional(),
  TransferID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  DebitID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AmtWired: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ArTransaction: z.union([z.lazy(() => ArTransactionScalarRelationFilterObjectSchema), z.lazy(() => ArTransactionWhereInputObjectSchema)]).optional()
}).strict();
export const ArTransferDetailWhereInputObjectSchema: z.ZodType<Prisma.ArTransferDetailWhereInput> = artransferdetailwhereinputSchema as unknown as z.ZodType<Prisma.ArTransferDetailWhereInput>;
export const ArTransferDetailWhereInputObjectZodSchema = artransferdetailwhereinputSchema;
