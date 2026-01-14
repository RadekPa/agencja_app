import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeUpdateManyMutationInputObjectSchema as ArTransactionTypeUpdateManyMutationInputObjectSchema } from './objects/ArTransactionTypeUpdateManyMutationInput.schema';
import { ArTransactionTypeWhereInputObjectSchema as ArTransactionTypeWhereInputObjectSchema } from './objects/ArTransactionTypeWhereInput.schema';

export const ArTransactionTypeUpdateManySchema: z.ZodType<Prisma.ArTransactionTypeUpdateManyArgs> = z.object({ data: ArTransactionTypeUpdateManyMutationInputObjectSchema, where: ArTransactionTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeUpdateManyArgs>;

export const ArTransactionTypeUpdateManyZodSchema = z.object({ data: ArTransactionTypeUpdateManyMutationInputObjectSchema, where: ArTransactionTypeWhereInputObjectSchema.optional() }).strict();