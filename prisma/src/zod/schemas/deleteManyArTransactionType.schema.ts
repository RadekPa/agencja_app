import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeWhereInputObjectSchema as ArTransactionTypeWhereInputObjectSchema } from './objects/ArTransactionTypeWhereInput.schema';

export const ArTransactionTypeDeleteManySchema: z.ZodType<Prisma.ArTransactionTypeDeleteManyArgs> = z.object({ where: ArTransactionTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeDeleteManyArgs>;

export const ArTransactionTypeDeleteManyZodSchema = z.object({ where: ArTransactionTypeWhereInputObjectSchema.optional() }).strict();