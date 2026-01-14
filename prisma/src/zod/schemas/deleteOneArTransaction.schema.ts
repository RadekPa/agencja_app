import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionSelectObjectSchema as ArTransactionSelectObjectSchema } from './objects/ArTransactionSelect.schema';
import { ArTransactionIncludeObjectSchema as ArTransactionIncludeObjectSchema } from './objects/ArTransactionInclude.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './objects/ArTransactionWhereUniqueInput.schema';

export const ArTransactionDeleteOneSchema: z.ZodType<Prisma.ArTransactionDeleteArgs> = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), where: ArTransactionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionDeleteArgs>;

export const ArTransactionDeleteOneZodSchema = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), where: ArTransactionWhereUniqueInputObjectSchema }).strict();