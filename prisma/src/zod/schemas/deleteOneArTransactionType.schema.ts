import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeSelectObjectSchema as ArTransactionTypeSelectObjectSchema } from './objects/ArTransactionTypeSelect.schema';
import { ArTransactionTypeWhereUniqueInputObjectSchema as ArTransactionTypeWhereUniqueInputObjectSchema } from './objects/ArTransactionTypeWhereUniqueInput.schema';

export const ArTransactionTypeDeleteOneSchema: z.ZodType<Prisma.ArTransactionTypeDeleteArgs> = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  where: ArTransactionTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeDeleteArgs>;

export const ArTransactionTypeDeleteOneZodSchema = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  where: ArTransactionTypeWhereUniqueInputObjectSchema }).strict();