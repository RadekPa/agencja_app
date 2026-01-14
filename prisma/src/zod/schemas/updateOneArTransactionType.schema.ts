import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeSelectObjectSchema as ArTransactionTypeSelectObjectSchema } from './objects/ArTransactionTypeSelect.schema';
import { ArTransactionTypeUpdateInputObjectSchema as ArTransactionTypeUpdateInputObjectSchema } from './objects/ArTransactionTypeUpdateInput.schema';
import { ArTransactionTypeUncheckedUpdateInputObjectSchema as ArTransactionTypeUncheckedUpdateInputObjectSchema } from './objects/ArTransactionTypeUncheckedUpdateInput.schema';
import { ArTransactionTypeWhereUniqueInputObjectSchema as ArTransactionTypeWhereUniqueInputObjectSchema } from './objects/ArTransactionTypeWhereUniqueInput.schema';

export const ArTransactionTypeUpdateOneSchema: z.ZodType<Prisma.ArTransactionTypeUpdateArgs> = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  data: z.union([ArTransactionTypeUpdateInputObjectSchema, ArTransactionTypeUncheckedUpdateInputObjectSchema]), where: ArTransactionTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeUpdateArgs>;

export const ArTransactionTypeUpdateOneZodSchema = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  data: z.union([ArTransactionTypeUpdateInputObjectSchema, ArTransactionTypeUncheckedUpdateInputObjectSchema]), where: ArTransactionTypeWhereUniqueInputObjectSchema }).strict();