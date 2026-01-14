import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionDetailWhereInputObjectSchema as ArTransactionDetailWhereInputObjectSchema } from './objects/ArTransactionDetailWhereInput.schema';

export const ArTransactionDetailDeleteManySchema: z.ZodType<Prisma.ArTransactionDetailDeleteManyArgs> = z.object({ where: ArTransactionDetailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionDetailDeleteManyArgs>;

export const ArTransactionDetailDeleteManyZodSchema = z.object({ where: ArTransactionDetailWhereInputObjectSchema.optional() }).strict();