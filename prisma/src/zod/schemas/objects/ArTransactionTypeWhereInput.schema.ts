import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const artransactiontypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTransactionTypeWhereInputObjectSchema), z.lazy(() => ArTransactionTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTransactionTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTransactionTypeWhereInputObjectSchema), z.lazy(() => ArTransactionTypeWhereInputObjectSchema).array()]).optional(),
  ArType: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ArTypeDescription: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(40)]).optional().nullable(),
  ArTypeDescriptionPL: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const ArTransactionTypeWhereInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeWhereInput> = artransactiontypewhereinputSchema as unknown as z.ZodType<Prisma.ArTransactionTypeWhereInput>;
export const ArTransactionTypeWhereInputObjectZodSchema = artransactiontypewhereinputSchema;
