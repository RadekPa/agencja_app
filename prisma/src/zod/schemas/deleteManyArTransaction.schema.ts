import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './objects/ArTransactionWhereInput.schema';

export const ArTransactionDeleteManySchema: z.ZodType<Prisma.ArTransactionDeleteManyArgs> = z.object({ where: ArTransactionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionDeleteManyArgs>;

export const ArTransactionDeleteManyZodSchema = z.object({ where: ArTransactionWhereInputObjectSchema.optional() }).strict();