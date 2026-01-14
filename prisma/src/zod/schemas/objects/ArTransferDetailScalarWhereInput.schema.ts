import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const artransferdetailscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTransferDetailScalarWhereInputObjectSchema), z.lazy(() => ArTransferDetailScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTransferDetailScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTransferDetailScalarWhereInputObjectSchema), z.lazy(() => ArTransferDetailScalarWhereInputObjectSchema).array()]).optional(),
  TransferID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  DebitID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AmtWired: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const ArTransferDetailScalarWhereInputObjectSchema: z.ZodType<Prisma.ArTransferDetailScalarWhereInput> = artransferdetailscalarwhereinputSchema as unknown as z.ZodType<Prisma.ArTransferDetailScalarWhereInput>;
export const ArTransferDetailScalarWhereInputObjectZodSchema = artransferdetailscalarwhereinputSchema;
